import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import './Header.css'
import logo2 from '../assets/logo2.png' 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <a href="index.html">
            <img src={logo2} alt="Logo da Primeira Igreja Batista no Retiro" className="logo-img" />
          </a>
            <span className="logo-mobile-pibare">PIBARE</span>
          <div className="header-logo">
            <Heart className="logo-icon" />
            <span className="logo-text">Primeira Igreja Batista do Retiro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav-desktop">
            <a href="#inicio" className="nav-link">
              Início
            </a>
            <a href="#sobre" className="nav-link">
              Sobre Nós
            </a>
            <a href="#cultos" className="nav-link">
              Cultos
            </a>
            <a href="#ministerios" className="nav-link">
              Ministérios
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="header-mobile-toggle">
            <button onClick={toggleMenu} className="mobile-toggle-btn">
              {isMenuOpen ? <X className="toggle-icon" /> : <Menu className="toggle-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-nav-mobile">
            <div className="mobile-nav-content">
              <a href="#inicio" className="mobile-nav-link" onClick={toggleMenu}>
                Início
              </a>
              <a href="#sobre" className="mobile-nav-link" onClick={toggleMenu}>
                Sobre Nós
              </a>
              <a href="#cultos" className="mobile-nav-link" onClick={toggleMenu}>
                Cultos
              </a>
              <a href="#ministerios" className="mobile-nav-link" onClick={toggleMenu}>
                Ministérios
              </a>
              <a href="#contato" className="mobile-nav-link" onClick={toggleMenu}>
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

