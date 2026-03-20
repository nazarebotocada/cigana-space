import { useState } from 'react'

const readers = [
  { id: 'luna', name: 'Luna', model: 'Claude Sonnet', emoji: '🌙' },
  { id: 'estela', name: 'Estela', model: 'Kimi', emoji: '⭐' },
  { id: 'rosa', name: 'Rosa', model: 'GLM', emoji: '🌹' }
]

const readings = [
  { id: 'yes-no', name: 'Sim ou Não', description: 'Resposta direta' },
  { id: 'three-cards', name: '3 Cartas', description: 'Passado, Presente, Futuro' },
  { id: 'daily', name: 'Tiragem do Dia', description: 'Orientação diária' }
]

export default function Home() {
  const [selectedReader, setSelectedReader] = useState(null)
  const [selectedReading, setSelectedReading] = useState(null)
  const [chat, setChat] = useState([])
  const [input, setInput] = useState('')

  if (!selectedReader || !selectedReading) {
    return (
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>🔮 Cigana Readers</h1>

        <h2>Escolha uma Leitura:</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {readings.map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedReading(r)}
              style={{
                padding: '20px',
                border: selectedReading?.id === r.id ? '2px solid purple' : '1px solid #ccc',
                cursor: 'pointer',
                borderRadius: '8px'
              }}
            >
              <strong>{r.name}</strong>
              <br />
              <small>{r.description}</small>
            </button>
          ))}
        </div>

        <h2 style={{ marginTop: '30px' }}>Escolha um Leitor:</h2>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {readers.map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedReader(r)}
              style={{
                padding: '20px',
                border: selectedReader?.id === r.id ? '2px solid purple' : '1px solid #ccc',
                cursor: 'pointer',
                borderRadius: '8px'
              }}
            >
              {r.emoji} <strong>{r.name}</strong>
              <br />
              <small>{r.model}</small>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Chat interface
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => { setSelectedReader(null); setSelectedReading(null); setChat([]) }}>
        ← Voltar
      </button>

      <h1>{selectedReader.emoji} {selectedReader.name} - {selectedReading.name}</h1>

      <div style={{ border: '1px solid #ccc', padding: '20px', height: '400px', overflowY: 'scroll', marginBottom: '10px', borderRadius: '8px' }}>
        {chat.map((msg, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <strong>{msg.from}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          style={{ flex: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          placeholder="Digite sua pergunta..."
        />
        <button onClick={sendMessage} style={{ padding: '10px 20px' }}>
          Enviar
        </button>
      </div>
    </div>
  )

  async function sendMessage() {
    if (!input.trim()) return

    const userMessage = input
    setInput('')
    setChat(prev => [...prev, { from: 'Você', text: userMessage }])

    // Call API
    const res = await fetch('/api/read', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reader: selectedReader.id,
        reading: selectedReading.id,
        question: userMessage,
        history: chat
      })
    })

    const data = await res.json()
    setChat(prev => [...prev, { from: selectedReader.name, text: data.response }])
  }
}
