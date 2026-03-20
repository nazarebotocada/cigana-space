export async function onRequestPost(context) {
  const { request } = context

  try {
    const body = await request.json()
    const { reader, reading, question, history } = body

    // Load cards
    const cards = []
    for (let i = 1; i <= 36; i++) {
      const cardData = await context.env.CARDS_KV.get(`card_${i}`, 'json')
      if (cardData) cards.push(cardData)
    }

    // Select random cards based on reading type
    const cardCount = reading === 'yes-no' ? 1 : reading === 'daily' ? 1 : 3
    const selectedCards = []
    for (let i = 0; i < cardCount; i++) {
      selectedCards.push(cards[Math.floor(Math.random() * cards.length)])
    }

    // Generate response
    let response = `🔮 **Sua Leitura**\n\n`

    if (reading === 'yes-no') {
      const card = selectedCards[0]
      const isPositive = card.keywords.includes('sorte') || card.keywords.includes('sucesso')
      response += `Carta: **${card.name}**\n\n`
      response += `${isPositive ? '✅ SIM' : '❌ NÃO'} - ${card.core_meaning}\n\n`
      response += `**Conselho:** ${card.advice}`
    } else if (reading === 'daily') {
      const card = selectedCards[0]
      response += `Carta do dia: **${card.name}**\n\n`
      response += `${card.core_meaning}\n\n`
      response += `**Orientação:** ${card.advice}`
    } else {
      const positions = ['Passado', 'Presente', 'Futuro']
      selectedCards.forEach((card, i) => {
        response += `**${positions[i]} - ${card.name}:**\n${card.core_meaning}\n\n`
      })
      response += `\n**Conselho Geral:** ${selectedCards[1].advice}`
    }

    // Load memory from KV
    const userId = 'hugo'
    const memoryKey = `${reader}_${userId}`
    const memory = await context.env.MEMORY_KV.get(memoryKey, 'json') || []

    // Add context from memory
    if (memory.length > 0) {
      const lastSession = memory[memory.length - 1]
      if (lastSession.cards) {
        response += `\n\n*Lembrete: Na última sessão saíram ${lastSession.cards.join(', ')}.*`
      }
    }

    // Save to memory
    memory.push({
      timestamp: new Date().toISOString(),
      type: 'reading',
      reading,
      question,
      cards: selectedCards.map(c => c.name),
      response
    })

    // Keep last 50 messages
    const trimmedMemory = memory.slice(-50)
    await context.env.MEMORY_KV.put(memoryKey, JSON.stringify(trimmedMemory))

    return new Response(JSON.stringify({ response }), {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Erro na leitura' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
