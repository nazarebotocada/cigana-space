# Cigana Readers 🔮

Sistema de leitura de Baralho Cigano com 3 agentes de IA diferentes.

## 📦 Estrutura

```
cigana-readers/
├── data/
│   ├── cards/          # 36 cartas do Baralho Cigano
│   ├── combinations/   # Combinações de cartas
│   └── memory/         # Memória persistente dos agentes
├── src/
│   ├── pages/
│   │   ├── index.js    # Landing page
│   │   └── api/
│   │       └── read.js # API de leitura
│   └── lib/
│       └── memory.js   # Sistema de memória
└── package.json
```

## 🚀 Deploy

```bash
npm install
npm run build
npx wrangler pages deploy out
```

## 🎯 Funcionalidades

### 3 Tipos de Leitura:
1. **Sim ou Não** - Resposta direta com 1 carta
2. **3 Cartas** - Passado, Presente, Futuro
3. **Tiragem do Dia** - Orientação diária

### 3 Leitores:
1. **Luna** (Claude Sonnet) 🌙
2. **Estela** (Kimi) ⭐
3. **Rosa** (GLM) 🌹

### Memória Persistente:
- Cada leitor lembra conversas anteriores
- Histórico de até 50 mensagens
- Referência a cartas anteriores

## ⚠️ Status Atual

- ✅ Base de conhecimento (36 cartas)
- ✅ Site com chat
- ✅ Sistema de memória
- ⏳ Integração com modelos de IA (Claude/Kimi/GLM)
- ⏳ Deploy Cloudflare Pages

## 🔧 Próximos Passos

1. Integrar APIs dos modelos:
   - Anthropic (Claude)
   - Moonshot (Kimi)
   - Z.AI (GLM)

2. Melhorar prompts baseados nas cartas

3. Adicionar mais combinações

4. Sistema de analytics
