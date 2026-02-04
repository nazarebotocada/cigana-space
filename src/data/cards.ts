// Dados das 36 cartas do Baralho Cigano
export interface CiganaCard {
  id: number;
  name: string;
  slug: string;
  keywords: string[];
  meaning: string;
  love: string;
  work: string;
  advice: string;
  element: 'fogo' | 'água' | 'terra' | 'ar';
  emoji: string;
}

export const ciganaCards: CiganaCard[] = [
  {
    id: 1,
    name: "O Cavaleiro",
    slug: "cavaleiro",
    keywords: ["novidades", "mensagens", "movimento", "ação"],
    meaning: "Chegada de notícias importantes e movimentação na vida. Representa dinamismo e novas oportunidades surgindo.",
    love: "Novo pretendente chegando ou renovação no relacionamento atual. Momento de ação no amor.",
    work: "Propostas de emprego, viagens a trabalho ou mudanças positivas na carreira.",
    advice: "Esteja preparado para agir. As oportunidades vêm para quem está atento.",
    element: "fogo",
    emoji: "🏇"
  },
  {
    id: 2,
    name: "O Trevo",
    slug: "trevo",
    keywords: ["sorte", "oportunidades", "felicidade", "bênçãos"],
    meaning: "Símbolo de boa sorte e pequenas alegrias. Momento favorável para apostas e novos empreendimentos.",
    love: "Sorte no amor está a seu favor. Encontros afortunados e momentos de alegria.",
    work: "Período de sorte nos negócios. Bom momento para arriscar.",
    advice: "Aproveite a maré de sorte, mas não deixe tudo nas mãos do destino.",
    element: "terra",
    emoji: "🍀"
  },
  {
    id: 3,
    name: "O Navio",
    slug: "navio",
    keywords: ["viagem", "mudança", "aventura", "comércio"],
    meaning: "Representa viagens, mudanças e novos horizontes. Comércio internacional e expansão.",
    love: "Relacionamento à distância ou viagem romântica. Novos rumos no amor.",
    work: "Oportunidades no exterior ou em outras cidades. Expansão de negócios.",
    advice: "Navegue com coragem rumo ao desconhecido. O destino favorece os ousados.",
    element: "água",
    emoji: "🚢"
  },
  {
    id: 4,
    name: "A Casa",
    slug: "casa",
    keywords: ["lar", "família", "segurança", "estabilidade"],
    meaning: "Representa o lar, a família e a segurança emocional. Fundações sólidas na vida.",
    love: "Relacionamento que leva ao compromisso. Construir um lar juntos.",
    work: "Trabalho em casa ou negócio familiar. Estabilidade profissional.",
    advice: "Valorize suas raízes e cuide de quem você ama.",
    element: "terra",
    emoji: "🏠"
  },
  {
    id: 5,
    name: "A Árvore",
    slug: "arvore",
    keywords: ["saúde", "crescimento", "vida", "espiritualidade"],
    meaning: "Símbolo de saúde, crescimento e conexão espiritual. Raízes profundas e desenvolvimento.",
    love: "Amor que cresce e amadurece. Relacionamento saudável e duradouro.",
    work: "Crescimento na carreira ao longo do tempo. Investimentos de longo prazo.",
    advice: "Cultive paciência. O que vale a pena leva tempo para florescer.",
    element: "terra",
    emoji: "🌳"
  },
  {
    id: 6,
    name: "As Nuvens",
    slug: "nuvens",
    keywords: ["confusão", "dúvidas", "incertezas", "segredos"],
    meaning: "Representa confusão mental e situações nebulosas. Algo está oculto ou incerto.",
    love: "Dúvidas no relacionamento. Necessidade de clareza e comunicação.",
    work: "Período de incertezas profissionais. Evite decisões importantes.",
    advice: "Aguarde as nuvens passarem antes de agir. A clareza virá.",
    element: "ar",
    emoji: "☁️"
  },
  {
    id: 7,
    name: "A Cobra",
    slug: "cobra",
    keywords: ["traição", "sabedoria", "transformação", "cuidado"],
    meaning: "Alerta para traições e falsidade, mas também sabedoria e renovação.",
    love: "Cuidado com rivalidade amorosa ou pessoa falsa perto do relacionamento.",
    work: "Atenção a colegas invejosos ou propostas suspeitas.",
    advice: "Confie na sua intuição. Se algo parece errado, provavelmente está.",
    element: "água",
    emoji: "🐍"
  },
  {
    id: 8,
    name: "O Caixão",
    slug: "caixao",
    keywords: ["fim", "transformação", "renascimento", "encerramento"],
    meaning: "Fim de um ciclo e início de outro. Transformação profunda necessária.",
    love: "Fim de um relacionamento ou renovação total. Deixar o passado ir.",
    work: "Término de projeto ou emprego. Abre espaço para o novo.",
    advice: "Aceite os finais com graça. Toda morte traz um renascimento.",
    element: "terra",
    emoji: "⚰️"
  },
  {
    id: 9,
    name: "O Buquê",
    slug: "buque",
    keywords: ["felicidade", "presentes", "beleza", "gratidão"],
    meaning: "Alegria, presentes e reconhecimento. Período de celebração e gratidão.",
    love: "Romance florescendo. Gestos de carinho e surpresas agradáveis.",
    work: "Reconhecimento profissional. Convites e oportunidades sociais.",
    advice: "Espalhe alegria ao seu redor. O que você dá, recebe de volta.",
    element: "ar",
    emoji: "💐"
  },
  {
    id: 10,
    name: "A Foice",
    slug: "foice",
    keywords: ["corte", "decisão", "colheita", "perigo"],
    meaning: "Decisões repentinas e cortes necessários. Momento de colher o que plantou.",
    love: "Decisão drástica no amor. Cortar o que não funciona mais.",
    work: "Demissão ou término abrupto. Também pode ser promoção repentina.",
    advice: "Corte o que precisa ser cortado. Hesitar só prolonga a dor.",
    element: "fogo",
    emoji: "🌙"
  },
  {
    id: 11,
    name: "O Chicote",
    slug: "chicote",
    keywords: ["conflito", "discussão", "repetição", "disciplina"],
    meaning: "Conflitos, discussões e padrões repetitivos. Também disciplina necessária.",
    love: "Brigas e desentendimentos. Ciclo de conflito que precisa ser quebrado.",
    work: "Conflitos com colegas ou superiores. Trabalho repetitivo.",
    advice: "Quebre padrões destrutivos. A repetição sem consciência é prisão.",
    element: "fogo",
    emoji: "⚡"
  },
  {
    id: 12,
    name: "Os Pássaros",
    slug: "passaros",
    keywords: ["comunicação", "casais", "nervosismo", "conversa"],
    meaning: "Comunicação intensa, fofocas ou nervosismo. Também representa casais.",
    love: "Casal em diálogo constante. Às vezes, fofoca sobre o relacionamento.",
    work: "Reuniões, ligações, comunicação intensa. Pode indicar estresse.",
    advice: "Comunique-se, mas saiba quando calar. Nem tudo precisa ser dito.",
    element: "ar",
    emoji: "🐦"
  },
  {
    id: 13,
    name: "A Criança",
    slug: "crianca",
    keywords: ["início", "inocência", "novidade", "pureza"],
    meaning: "Novos começos, inocência e pureza. Algo pequeno que vai crescer.",
    love: "Amor novo e puro. Pode indicar gravidez ou infantilidade.",
    work: "Novo projeto ou emprego. Início de carreira.",
    advice: "Aborde a vida com olhos de criança. A inocência é força, não fraqueza.",
    element: "água",
    emoji: "👶"
  },
  {
    id: 14,
    name: "A Raposa",
    slug: "raposa",
    keywords: ["astúcia", "trabalho", "esperteza", "desconfiança"],
    meaning: "Esperteza e astúcia. Cuidado com enganos, mas também use sua inteligência.",
    love: "Possível pessoa manipuladora. Use sua intuição para não ser enganado.",
    work: "Política de escritório. Seja estratégico e observe bem.",
    advice: "Seja esperto como a raposa, mas não perca sua integridade.",
    element: "fogo",
    emoji: "🦊"
  },
  {
    id: 15,
    name: "O Urso",
    slug: "urso",
    keywords: ["força", "proteção", "chefe", "poder"],
    meaning: "Força, poder e proteção. Figura de autoridade ou pessoa influente.",
    love: "Parceiro protetor, às vezes possessivo. Presença forte no relacionamento.",
    work: "Chefe, mentor ou pessoa poderosa. Use sua força com sabedoria.",
    advice: "Você tem força maior do que imagina. Use-a para proteger, não dominar.",
    element: "terra",
    emoji: "🐻"
  },
  {
    id: 16,
    name: "A Estrela",
    slug: "estrela",
    keywords: ["esperança", "inspiração", "tecnologia", "fama"],
    meaning: "Esperança, inspiração divina e reconhecimento. Luz guiando o caminho.",
    love: "Amor inspirador e esperançoso. Conexão quase espiritual.",
    work: "Reconhecimento e fama. Trabalho com internet ou tecnologia.",
    advice: "Siga sua estrela guia. O universo conspira a seu favor.",
    element: "ar",
    emoji: "⭐"
  },
  {
    id: 17,
    name: "A Cegonha",
    slug: "cegonha",
    keywords: ["mudança", "nascimento", "novidade", "melhoria"],
    meaning: "Mudanças positivas chegando. Nascimento, renovação e melhorias.",
    love: "Gravidez ou renovação do amor. Mudanças positivas no relacionamento.",
    work: "Promoção, transferência ou mudança de emprego favorável.",
    advice: "Abrace as mudanças. O novo que chega traz bênçãos.",
    element: "ar",
    emoji: "🦢"
  },
  {
    id: 18,
    name: "O Cachorro",
    slug: "cachorro",
    keywords: ["amizade", "lealdade", "confiança", "fidelidade"],
    meaning: "Amizade verdadeira, lealdade e confiança. Pessoa fiel ao seu lado.",
    love: "Amor fiel e leal. Parceiro que você pode confiar plenamente.",
    work: "Colega leal ou sócio confiável. Parcerias sólidas.",
    advice: "Valorize as amizades verdadeiras. São raras e preciosas.",
    element: "terra",
    emoji: "🐕"
  },
  {
    id: 19,
    name: "A Torre",
    slug: "torre",
    keywords: ["isolamento", "autoridade", "solidão", "governo"],
    meaning: "Isolamento, autoridade e estruturas oficiais. Solidão necessária.",
    love: "Distanciamento emocional. Necessidade de espaço pessoal.",
    work: "Corporações, governo ou grandes empresas. Posição de autoridade.",
    advice: "A solidão pode ser mestra. Mas não faça dela sua morada permanente.",
    element: "ar",
    emoji: "🗼"
  },
  {
    id: 20,
    name: "O Jardim",
    slug: "jardim",
    keywords: ["sociedade", "eventos", "público", "networking"],
    meaning: "Vida social, eventos e encontros. Exposição pública e networking.",
    love: "Conhecer alguém em evento social. Relacionamento público.",
    work: "Networking, eventos corporativos, vida pública.",
    advice: "Cultive suas conexões sociais. Ninguém prospera sozinho.",
    element: "terra",
    emoji: "🌷"
  },
  {
    id: 21,
    name: "A Montanha",
    slug: "montanha",
    keywords: ["obstáculo", "desafio", "bloqueio", "persistência"],
    meaning: "Obstáculos e desafios no caminho. Necessidade de persistência.",
    love: "Dificuldades no relacionamento. Barreiras a serem superadas.",
    work: "Bloqueios na carreira. Desafios que exigem paciência.",
    advice: "Todo obstáculo é uma oportunidade de crescer. Escale com determinação.",
    element: "terra",
    emoji: "⛰️"
  },
  {
    id: 22,
    name: "O Caminho",
    slug: "caminho",
    keywords: ["escolha", "decisão", "opções", "bifurcação"],
    meaning: "Encruzilhada na vida. Decisões importantes e múltiplas opções.",
    love: "Escolha entre pretendentes ou decidir sobre o relacionamento.",
    work: "Decisão de carreira. Múltiplas oportunidades profissionais.",
    advice: "Toda escolha abre e fecha portas. Escolha com o coração e a razão.",
    element: "ar",
    emoji: "🛤️"
  },
  {
    id: 23,
    name: "Os Ratos",
    slug: "ratos",
    keywords: ["perda", "estresse", "corrosão", "preocupação"],
    meaning: "Perdas graduais, estresse e preocupações que corroem. Atenção a vazamentos.",
    love: "Desgaste no relacionamento. Algo está minando o amor.",
    work: "Perdas financeiras ou de energia. Estresse acumulado.",
    advice: "Identifique o que está drenando você e corte na raiz.",
    element: "terra",
    emoji: "🐀"
  },
  {
    id: 24,
    name: "O Coração",
    slug: "coracao",
    keywords: ["amor", "paixão", "romance", "sentimentos"],
    meaning: "Amor verdadeiro, paixão e questões do coração. Centro emocional.",
    love: "Amor intenso e verdadeiro. O coração da questão amorosa.",
    work: "Trabalho com paixão. Fazer o que ama.",
    advice: "Siga seu coração, mas leve a sabedoria junto.",
    element: "água",
    emoji: "❤️"
  },
  {
    id: 25,
    name: "O Anel",
    slug: "anel",
    keywords: ["compromisso", "contrato", "casamento", "ciclo"],
    meaning: "Compromissos, contratos e ciclos. Casamento e parcerias formais.",
    love: "Noivado, casamento ou compromisso sério. Ciclos de relacionamento.",
    work: "Contratos, acordos, parcerias comerciais.",
    advice: "Honre seus compromissos. Sua palavra é seu selo.",
    element: "água",
    emoji: "💍"
  },
  {
    id: 26,
    name: "O Livro",
    slug: "livro",
    keywords: ["segredos", "conhecimento", "estudos", "mistério"],
    meaning: "Segredos, conhecimento oculto e estudos. Algo ainda não revelado.",
    love: "Segredo no relacionamento. Algo ainda não foi dito.",
    work: "Estudos, formação, informações ocultas sobre trabalho.",
    advice: "Busque conhecimento, mas respeite os mistérios que não são seus.",
    element: "ar",
    emoji: "📚"
  },
  {
    id: 27,
    name: "A Carta",
    slug: "carta",
    keywords: ["mensagem", "documento", "comunicação", "notícia"],
    meaning: "Mensagens chegando, documentos e comunicação escrita.",
    love: "Declaração de amor, mensagens românticas, comunicação importante.",
    work: "E-mails importantes, contratos, certificados.",
    advice: "Preste atenção às mensagens do universo. Elas vêm de muitas formas.",
    element: "ar",
    emoji: "✉️"
  },
  {
    id: 28,
    name: "O Homem",
    slug: "homem",
    keywords: ["masculino", "homem", "consulente", "energia yang"],
    meaning: "Representa um homem significativo na consulta ou energia masculina.",
    love: "O homem na vida amorosa. Pode ser parceiro ou pretendente.",
    work: "Colega, chefe ou cliente homem importante.",
    advice: "Equilibre sua energia masculina: ação, proteção, iniciativa.",
    element: "fogo",
    emoji: "👨"
  },
  {
    id: 29,
    name: "A Mulher",
    slug: "mulher",
    keywords: ["feminino", "mulher", "consulente", "energia yin"],
    meaning: "Representa uma mulher significativa na consulta ou energia feminina.",
    love: "A mulher na vida amorosa. Pode ser parceira ou pretendente.",
    work: "Colega, chefe ou cliente mulher importante.",
    advice: "Equilibre sua energia feminina: intuição, receptividade, nutrição.",
    element: "água",
    emoji: "👩"
  },
  {
    id: 30,
    name: "Os Lírios",
    slug: "lirios",
    keywords: ["paz", "pureza", "maturidade", "sexualidade"],
    meaning: "Paz, harmonia e maturidade. Também sexualidade e prazer.",
    love: "Relacionamento maduro e harmonioso. Vida sexual satisfatória.",
    work: "Mentor maduro, aposentadoria, paz no ambiente de trabalho.",
    advice: "A maturidade traz paz. Aceite a sabedoria dos anos.",
    element: "água",
    emoji: "🌸"
  },
  {
    id: 31,
    name: "O Sol",
    slug: "sol",
    keywords: ["sucesso", "vitória", "energia", "felicidade"],
    meaning: "Sucesso garantido, vitória e energia vital. Tudo fica claro.",
    love: "Amor brilhante e feliz. Momento de clareza nos sentimentos.",
    work: "Sucesso profissional, reconhecimento, energia para conquistar.",
    advice: "Brilhe sua luz. O sol não pede permissão para iluminar.",
    element: "fogo",
    emoji: "☀️"
  },
  {
    id: 32,
    name: "A Lua",
    slug: "lua",
    keywords: ["intuição", "emoções", "fama", "feminino"],
    meaning: "Intuição aguçada, emoções profundas e reconhecimento público.",
    love: "Amor romântico e emocional. Deixe a intuição guiar.",
    work: "Fama, reconhecimento, trabalho criativo ou noturno.",
    advice: "Confie na sua intuição. Ela sabe o que a razão ainda não vê.",
    element: "água",
    emoji: "🌙"
  },
  {
    id: 33,
    name: "A Chave",
    slug: "chave",
    keywords: ["solução", "destino", "abertura", "resposta"],
    meaning: "Solução garantida, destino favorável. A resposta que procura.",
    love: "Resolução de problemas amorosos. Destino selado positivamente.",
    work: "Solução para impasse profissional. Caminho aberto.",
    advice: "Você já tem a chave. Procure dentro de si.",
    element: "terra",
    emoji: "🔑"
  },
  {
    id: 34,
    name: "Os Peixes",
    slug: "peixes",
    keywords: ["dinheiro", "abundância", "fluxo", "negócios"],
    meaning: "Finanças, abundância e fluxo. Negócios prósperos.",
    love: "Relacionamento próspero. Parceiro com boa situação financeira.",
    work: "Lucros, investimentos, empreendedorismo bem-sucedido.",
    advice: "Deixe a abundância fluir. O dinheiro é energia em movimento.",
    element: "água",
    emoji: "🐟"
  },
  {
    id: 35,
    name: "A Âncora",
    slug: "ancora",
    keywords: ["estabilidade", "trabalho", "persistência", "porto seguro"],
    meaning: "Estabilidade, trabalho e persistência. Porto seguro alcançado.",
    love: "Relacionamento estável e seguro. Amor que é seu porto.",
    work: "Estabilidade no emprego. Trabalho que ancora você.",
    advice: "Construa sua estabilidade, mas não deixe a âncora virar prisão.",
    element: "água",
    emoji: "⚓"
  },
  {
    id: 36,
    name: "A Cruz",
    slug: "cruz",
    keywords: ["destino", "karma", "fardo", "espiritualidade"],
    meaning: "Destino, karma e provas espirituais. O peso que carregamos.",
    love: "Amor kármico. Lições que o relacionamento traz.",
    work: "Trabalho pesado ou desafiador. Provas profissionais.",
    advice: "Aceite sua cruz com dignidade. É através dela que você cresce.",
    element: "terra",
    emoji: "✝️"
  }
];

export const getCardBySlug = (slug: string): CiganaCard | undefined => {
  return ciganaCards.find(card => card.slug === slug);
};

export const getCardById = (id: number): CiganaCard | undefined => {
  return ciganaCards.find(card => card.id === id);
};

export const getElementsByElement = (element: CiganaCard['element']): CiganaCard[] => {
  return ciganaCards.filter(card => card.element === element);
};
