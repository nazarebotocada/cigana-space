// Script para popular KV com cartas
const fs = require('fs')
const path = require('path')

const cardsDir = path.join(__dirname, '../data/cards')
const files = fs.readdirSync(cardsDir)

const commands = []

files.forEach(file => {
  const cardData = JSON.parse(fs.readFileSync(path.join(cardsDir, file)))
  const key = `card_${cardData.number}`
  commands.push(`wrangler kv key put --binding=CARDS_KV "${key}" '${JSON.stringify(cardData)}'`)
})

console.log('Comandos para popular KV:')
console.log(commands.join('\n'))
