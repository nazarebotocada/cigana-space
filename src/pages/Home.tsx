import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ciganaCards } from '../data/cards'
import { getRecentPosts } from '../data/blogPosts'
import {
  SparklesIcon,
  MoonIcon,
  StarIcon,
  HeartIcon,
  EnergyIcon,
  GlowStarIcon,
  TargetIcon,
  LockIcon,
  FiveStarsIcon,
  BookIcon,
  BriefcaseIcon,
  BrainIcon,
  ClockIcon,
  ReadIcon,
  KeyIcon,
  CardIcon,
} from '../components/MysticIcons'
import './Home.css'

export default function Home() {
  const recentPosts = getRecentPosts(4)
  const featuredCards = ciganaCards.slice(0, 8)

  return (
    <>
      <Helmet>
        <title>Cigana.space | Baralho Cigano com Inteligência Artificial</title>
        <meta name="description" content="Descubra o futuro com o Baralho Cigano potencializado por IA. Tiragens personalizadas, interpretações profundas e sabedoria ancestral cigana. Experimente grátis!" />
        <meta name="keywords" content="baralho cigano online, tarot online gratis, baralho cigano com ia, tiragem de cartas, oraculo cigano, lenormand, tarot ia" />
        
        <meta property="og:title" content="Cigana.space | Baralho Cigano com Inteligência Artificial" />
        <meta property="og:description" content="Descubra o futuro com o Baralho Cigano potencializado por IA. Tiragens personalizadas e sabedoria ancestral cigana." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cigana.space" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Cigana.space",
            "url": "https://cigana.space",
            "description": "Baralho Cigano com Inteligência Artificial",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://cigana.space/blog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
        </div>
        
        <div className="container hero-content">
          <div className="hero-badge">
            <SparklesIcon size={18} /> Novo: IA + Tradição Cigana
          </div>
          
          <h1 className="hero-title">
            O Futuro Revelado pelo<br />
            <span className="shimmer">Baralho Cigano</span>
          </h1>
          
          <p className="hero-subtitle">
            A sabedoria ancestral das cartas ciganas combinada com a mais 
            avançada Inteligência Artificial. Interpretações personalizadas, 
            precisas e profundas.
          </p>
          
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg" disabled>
              🔮 Fazer Tiragem Gratuita
              <span className="coming-soon">Em Breve</span>
            </button>
            <Link to="/blog" className="btn btn-secondary btn-lg">
              <BookIcon size={20} /> Aprender Baralho Cigano
            </Link>
          </div>
          
          <div className="hero-cards">
            <div className="floating-card card-1"><MoonIcon size={28} /></div>
            <div className="floating-card card-2"><StarIcon size={28} /></div>
            <div className="floating-card card-3">🔮</div>
            <div className="floating-card card-4"><HeartIcon size={28} /></div>
            <div className="floating-card card-5"><KeyIcon size={28} /></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="services">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">Nossos Serviços</span>
            <h2>Descubra seu Destino</h2>
            <p>Tiragens personalizadas para cada momento da sua vida</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><CardIcon size={32} /></div>
              <h3>Tiragem Completa</h3>
              <p>Análise profunda com as 36 cartas do Baralho Cigano. Visão ampla do passado, presente e futuro.</p>
              <button className="btn btn-secondary" disabled>Em Breve</button>
            </div>
            
            <div className="service-card featured">
              <div className="service-badge">Mais Popular</div>
              <div className="service-icon"><HeartIcon size={32} /></div>
              <h3>Consulta de Amor</h3>
              <p>Descubra o que as cartas revelam sobre seu coração. Relacionamentos, paixões e caminhos do amor.</p>
              <button className="btn btn-primary" disabled>Em Breve</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><BriefcaseIcon size={32} /></div>
              <h3>Carreira e Trabalho</h3>
              <p>Orientação profissional através das cartas. Decisões de carreira, negócios e prosperidade.</p>
              <button className="btn btn-secondary" disabled>Em Breve</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><EnergyIcon size={32} /></div>
              <h3>Sim ou Não</h3>
              <p>Respostas diretas para suas perguntas mais urgentes. Uma carta, uma resposta.</p>
              <button className="btn btn-secondary" disabled>Em Breve</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon"><GlowStarIcon size={32} /></div>
              <h3>Carta do Dia</h3>
              <p>Receba uma mensagem diária personalizada para guiar seu dia com sabedoria.</p>
              <button className="btn btn-secondary" disabled>Em Breve</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔮</div>
              <h3>Consulta Livre</h3>
              <p>Faça qualquer pergunta e deixe a IA interpretar as cartas para você.</p>
              <button className="btn btn-secondary" disabled>Em Breve</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-content">
            <div className="features-text">
              <span className="section-badge">Por que Cigana.space?</span>
              <h2>Tradição Cigana<br />+ Inteligência Artificial</h2>
              <p>
                Unimos séculos de sabedoria cigana com a mais moderna tecnologia 
                para oferecer interpretações que tocam a alma.
              </p>
              
              <ul className="features-list">
                <li>
                  <span className="feature-icon"><BrainIcon size={28} /></span>
                  <div>
                    <strong>IA Especializada</strong>
                    <p>Treinada em milhares de interpretações tradicionais</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon"><TargetIcon size={28} /></span>
                  <div>
                    <strong>Personalização Total</strong>
                    <p>Respostas adaptadas ao seu contexto específico</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon"><LockIcon size={28} /></span>
                  <div>
                    <strong>100% Privado</strong>
                    <p>Suas consultas são confidenciais e seguras</p>
                  </div>
                </li>
                <li>
                  <span className="feature-icon"><ClockIcon size={28} /></span>
                  <div>
                    <strong>Disponível 24/7</strong>
                    <p>Consulte a qualquer momento, de qualquer lugar</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="features-visual">
              <div className="cards-fan">
                {featuredCards.slice(0, 5).map((card, index) => (
                  <div 
                    key={card.id} 
                    className="fan-card"
                    style={{ 
                      transform: `rotate(${(index - 2) * 15}deg)`,
                      zIndex: 5 - Math.abs(index - 2)
                    }}
                  >
                    <span className="fan-card-emoji">{card.emoji}</span>
                    <span className="fan-card-name">{card.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Preview Section */}
      <section className="cards-preview">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">As 36 Cartas</span>
            <h2>Conheça o Baralho Cigano</h2>
            <p>Cada carta carrega uma mensagem única para você</p>
          </div>
          
          <div className="cards-grid">
            {featuredCards.map(card => (
              <Link to={`/carta/${card.slug}`} key={card.id} className="preview-card">
                <span className="preview-card-emoji">{card.emoji}</span>
                <span className="preview-card-number">{card.id}</span>
                <h4>{card.name}</h4>
                <p>{card.keywords.slice(0, 2).join(' • ')}</p>
              </Link>
            ))}
          </div>
          
          <div className="cards-cta">
            <Link to="/blog/significado-36-cartas-baralho-cigano" className="btn btn-secondary">
              Ver Todas as 36 Cartas →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">Depoimentos</span>
            <h2>O Que Dizem Nossos Visitantes</h2>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="testimonial-stars"><FiveStarsIcon size={90} /></div>
              <p>"Impressionante como a leitura capturou exatamente o que eu estava vivendo. Nunca vi uma IA tão precisa."</p>
              <div className="testimonial-author">
                <span className="author-avatar">M</span>
                <div>
                  <strong>Marina S.</strong>
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-stars"><FiveStarsIcon size={90} /></div>
              <p>"O baralho cigano sempre me fascinou, mas nunca achei um lugar tão acessível e bem explicado."</p>
              <div className="testimonial-author">
                <span className="author-avatar">R</span>
                <div>
                  <strong>Roberto M.</strong>
                  <span>Rio de Janeiro, RJ</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-stars"><FiveStarsIcon size={90} /></div>
              <p>"As interpretações são profundas e respeitam a tradição cigana. Recomendo muito!"</p>
              <div className="testimonial-author">
                <span className="author-avatar">A</span>
                <div>
                  <strong>Ana Paula C.</strong>
                  <span>Belo Horizonte, MG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="blog-preview">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">Blog</span>
            <h2>Aprenda Baralho Cigano</h2>
            <p>Artigos e guias para desenvolver seu conhecimento</p>
          </div>
          
          <div className="blog-grid">
            {recentPosts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
                <div className="blog-card-img">
                  <CardIcon size={48} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-card-category">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="blog-card-meta">
                    <ReadIcon size={16} /> {post.readTime} min de leitura
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="blog-cta">
            <Link to="/blog" className="btn btn-primary">
              Ver Todos os Artigos →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-badge">Nossa Missão</span>
              <h2>Honrando a Tradição, Abraçando o Futuro</h2>
              <p>
                O Cigana.space nasceu da paixão pela sabedoria ancestral cigana e 
                da visão de torná-la acessível a todos através da tecnologia.
              </p>
              <p>
                Nosso compromisso é respeitar as tradições divinatórias enquanto 
                utilizamos a Inteligência Artificial para criar interpretações 
                personalizadas, profundas e transformadoras.
              </p>
              <p>
                Cada leitura é uma jornada única de autoconhecimento, guiada pela 
                sabedoria das cartas e potencializada pela tecnologia moderna.
              </p>
            </div>
            
            <div className="about-visual">
              <div className="about-symbol">☽</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <div className="section-title">
            <span className="section-badge">Dúvidas?</span>
            <h2>Perguntas Frequentes</h2>
          </div>
          
          <div className="faq-grid">
            <details className="faq-item">
              <summary>O que é o Baralho Cigano?</summary>
              <p>
                O Baralho Cigano, também conhecido como Petit Lenormand, é um sistema 
                de adivinhação com 36 cartas. Diferente do Tarot, usa símbolos do 
                cotidiano e é conhecido por suas mensagens diretas e práticas.
              </p>
            </details>
            
            <details className="faq-item">
              <summary>Como a IA funciona nas leituras?</summary>
              <p>
                Nossa IA foi treinada em milhares de interpretações tradicionais do 
                Baralho Cigano. Ela analisa as cartas sorteadas, considera suas 
                combinações e gera uma interpretação personalizada para sua pergunta.
              </p>
            </details>
            
            <details className="faq-item">
              <summary>As leituras são confiáveis?</summary>
              <p>
                Nossas leituras combinam a sabedoria tradicional com análise 
                contextual. Elas são ferramentas de reflexão e autoconhecimento, 
                não devendo substituir aconselhamento profissional quando necessário.
              </p>
            </details>
            
            <details className="faq-item">
              <summary>Minhas consultas são privadas?</summary>
              <p>
                Absolutamente. Todas as suas consultas são criptografadas e 
                confidenciais. Não compartilhamos suas informações com terceiros.
              </p>
            </details>
            
            <details className="faq-item">
              <summary>Preciso saber algo para usar?</summary>
              <p>
                Não! Nossa plataforma foi desenhada para ser acessível a todos. 
                A IA explica cada carta e sua interpretação de forma clara e didática.
              </p>
            </details>
            
            <details className="faq-item">
              <summary>Quando vocês lançam?</summary>
              <p>
                Estamos em fase final de desenvolvimento. Cadastre-se na nossa 
                newsletter para ser o primeiro a saber quando lançarmos!
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para Descobrir seu Destino?</h2>
            <p>
              Seja o primeiro a experimentar o Baralho Cigano com Inteligência Artificial. 
              Cadastre-se para receber acesso antecipado.
            </p>
            <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Seu melhor e-mail" />
              <button type="submit" className="btn btn-primary">
                Quero Acesso VIP <SparklesIcon size={18} />
              </button>
            </form>
            <p className="cta-note">
              <LockIcon size={16} /> Prometemos não enviar spam. Só coisas boas!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
