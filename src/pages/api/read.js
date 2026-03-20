import fs from 'fs'
import path from 'path'
import { saveMemory, loadMemory } from '../../lib/memory'

const cardsData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'data/cards/cavaleiro.json'))
)

// Mock function - will integrate real AI models later
async function getReading(reader, reading, question, history, userId = 'hugo') {
  // Load memory
  const memory = loadMemory(reader, userId)
  // Load random cards based on reading type
  const cardCount = reading === 'yes-no' ? 1 : reading === 'daily' ? 1 : 3
  const allCards = fs.readdirSync(path.join(process.cwd(), 'data/cards'))
  const selectedCards = []

  for (let i = 0; i < cardCount; i++) {
    const randomCard = allCards[Math.floor(Math.random() * allCards.length)]
    const cardData = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'data/cards', randomCard))
    )
    selectedCards.push(cardData)
  }

  // Generate response based on cards
  let response = `🔮 **Sua Leitura**\n\n`

  if (reading === 'yes-no') {
    const card = selectedCards[0]
    const isPositive = card.keywords.includes('sorte') || card.keywords.includes('sucesso') || card.keywords.includes('felicidade')
    response += `Carta: **${card.name}**\n\n`
    response += `${isPositive ? '✅ SIM' : '❌ NÃO'} - ${card.core_meaning}\n\n`
    response += `**Conselho:** ${card.advice}`
  } else if (reading === 'daily') {
    const card = selectedCards[0]
    response += `Carta do dia: **${card.name}**\n\n`
    response += `${card.core_meaning}\n\n`
    response += `**Orientação:** ${card.advice}`
  } else {
    // 3 cards
    const positions = ['Passado', 'Presente', 'Futuro']
    selectedCards.forEach((card, i) => {
      response += `**${positions[i]} - ${card.name}:**\n${card.core_meaning}\n\n`
    })
    response += `\n**Conselho Geral:** ${selectedCards[1].advice}`
  }

  // Add context from memory if available
  if (memory.length > 0) {
    const lastSession = memory[memory.length - 1]
    if (lastSession.cards) {
      response += `\n\n*Nota: Na última sessão, saíram ${lastSession.cards.join(', ')}. Lembro disso.*`
    }
  }

  return { response, cards: selectedCards.map(c => c.name) }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { reader, reading, question, history } = req.body
  const userId = 'hugo' // For now, single user

  try {
    const result = await getReading(reader, reading, question, history, userId)

    // Save to memory
    saveMemory(reader, userId, {
      type: 'reading',
      reading,
      question,
      cards: result.cards,
      response: result.response
    })

    res.status(200).json({ response: result.response })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro na leitura' })
  }
}
