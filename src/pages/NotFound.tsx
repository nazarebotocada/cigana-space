import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página não encontrada | Cigana.space</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="not-found">
        <div className="container">
          <span className="not-found-emoji">🔮</span>
          <h1>Página não encontrada</h1>
          <p>As cartas não revelaram este caminho... Mas podemos te guiar de volta.</p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              ← Voltar ao Início
            </Link>
            <Link to="/blog" className="btn btn-secondary">
              Explorar o Blog
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
