import fs from 'fs'
import path from 'path'

const memoryDir = path.join(process.cwd(), 'data/memory')

// Ensure memory directory exists
if (!fs.existsSync(memoryDir)) {
  fs.mkdirSync(memoryDir, { recursive: true })
}

export function saveMemory(readerId, userId, message) {
  const file = path.join(memoryDir, `${readerId}_${userId}.json`)

  let memory = []
  if (fs.existsSync(file)) {
    memory = JSON.parse(fs.readFileSync(file))
  }

  memory.push({
    timestamp: new Date().toISOString(),
    ...message
  })

  // Keep last 50 messages
  if (memory.length > 50) {
    memory = memory.slice(-50)
  }

  fs.writeFileSync(file, JSON.stringify(memory, null, 2))
}

export function loadMemory(readerId, userId) {
  const file = path.join(memoryDir, `${readerId}_${userId}.json`)

  if (!fs.existsSync(file)) {
    return []
  }

  return JSON.parse(fs.readFileSync(file))
}
