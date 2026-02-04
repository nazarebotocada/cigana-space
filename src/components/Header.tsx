import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🔮</span>
          <span className="logo-text">
            <span className="logo-main">Cigana</span>
            <span className="logo-sub">.space</span>
          </span>
        </Link>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <a href="#servicos" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Serviços
          </a>
          <a href="#sobre" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Sobre
          </a>
          <button className="btn btn-primary nav-cta" disabled>
            <span>✨</span> Em Breve
          </button>
        </nav>
      </div>
    </header>
  )
}
