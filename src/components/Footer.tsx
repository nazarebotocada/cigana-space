import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-icon">🔮</span>
              <span className="logo-text">Cigana.space</span>
            </Link>
            <p className="footer-tagline">
              Baralho Cigano com Inteligência Artificial. 
              Tradição ancestral, tecnologia moderna.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram" className="social-link">📸</a>
              <a href="#" aria-label="TikTok" className="social-link">🎵</a>
              <a href="#" aria-label="YouTube" className="social-link">▶️</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#sobre">Sobre</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Conteúdos</h4>
            <ul>
              <li><Link to="/blog/o-que-e-baralho-cigano-guia-completo">O que é Baralho Cigano</Link></li>
              <li><Link to="/blog/significado-36-cartas-baralho-cigano">36 Cartas Ciganas</Link></li>
              <li><Link to="/blog/como-fazer-tiragem-baralho-cigano">Como Fazer Tiragem</Link></li>
              <li><Link to="/blog/tarot-com-inteligencia-artificial">Tarot com IA</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Receba insights semanais e seja o primeiro a saber quando lançarmos.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary newsletter-btn">
                ✨
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Cigana.space. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
