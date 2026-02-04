import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getCardBySlug, ciganaCards } from '../data/cards'
import './CardPage.css'

export default function CardPage() {
  const { slug } = useParams<{ slug: string }>()
  const card = slug ? getCardBySlug(slug) : undefined

  if (!card) {
    return <Navigate to="/" replace />
  }

  const nextCard = ciganaCards.find(c => c.id === card.id + 1)
  const prevCard = ciganaCards.find(c => c.id === card.id - 1)

  const elementColors = {
    fogo: '#ff6b35',
    água: '#4ecdc4',
    terra: '#95d5b2',
    ar: '#dda0dd'
  }

  return (
    <>
      <Helmet>
        <title>{card.name} | Significado no Baralho Cigano - Cigana.space</title>
        <meta 
          name="description" 
          content={`Descubra o significado de ${card.name} no Baralho Cigano. ${card.meaning} Amor, trabalho e conselhos.`} 
        />
        <meta 
          name="keywords" 
          content={`${card.name.toLowerCase()} baralho cigano, carta ${card.name.toLowerCase()}, significado ${card.name.toLowerCase()}, ${card.keywords.join(', ')}`} 
        />
        
        <meta property="og:title" content={`${card.name} | Significado no Baralho Cigano`} />
        <meta property="og:description" content={card.meaning} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://cigana.space/carta/${card.slug}`} />
        
        <link rel="canonical" href={`https://cigana.space/carta/${card.slug}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": `${card.name} - Significado no Baralho Cigano`,
            "description": card.meaning,
            "author": {
              "@type": "Organization",
              "name": "Cigana.space"
            }
          })}
        </script>
      </Helmet>

      <div className="card-page">
        <div className="container">
          <Link to="/blog/significado-36-cartas-baralho-cigano" className="back-link">
            ← Voltar às 36 Cartas
          </Link>

          <div className="card-layout">
            <div className="card-visual">
              <div className="card-display">
                <span className="card-number">{card.id}</span>
                <span className="card-emoji">{card.emoji}</span>
                <h1 className="card-name">{card.name}</h1>
                <div 
                  className="card-element"
                  style={{ color: elementColors[card.element] }}
                >
                  {card.element === 'fogo' && '🔥'}
                  {card.element === 'água' && '💧'}
                  {card.element === 'terra' && '🌍'}
                  {card.element === 'ar' && '💨'}
                  <span>{card.element}</span>
                </div>
              </div>

              <div className="card-keywords">
                {card.keywords.map(keyword => (
                  <span key={keyword} className="keyword">{keyword}</span>
                ))}
              </div>
            </div>

            <div className="card-details">
              <section className="detail-section">
                <h2>Significado Geral</h2>
                <p>{card.meaning}</p>
              </section>

              <section className="detail-section">
                <h2>❤️ No Amor</h2>
                <p>{card.love}</p>
              </section>

              <section className="detail-section">
                <h2>💼 No Trabalho</h2>
                <p>{card.work}</p>
              </section>

              <section className="detail-section advice">
                <h2>💡 Conselho</h2>
                <p>"{card.advice}"</p>
              </section>
            </div>
          </div>

          <nav className="card-nav">
            {prevCard && (
              <Link to={`/carta/${prevCard.slug}`} className="nav-prev">
                <span>← Anterior</span>
                <strong>{prevCard.emoji} {prevCard.name}</strong>
              </Link>
            )}
            {nextCard && (
              <Link to={`/carta/${nextCard.slug}`} className="nav-next">
                <span>Próxima →</span>
                <strong>{nextCard.name} {nextCard.emoji}</strong>
              </Link>
            )}
          </nav>

          <div className="card-cta">
            <h3>Quer saber o que as cartas revelam sobre você?</h3>
            <p>Em breve você poderá fazer tiragens com nossa IA.</p>
            <button className="btn btn-primary" disabled>
              🔮 Fazer Tiragem — Em Breve
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
