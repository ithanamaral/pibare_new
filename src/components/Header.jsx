import { useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import './Header.css'
import logo2 from '/logo2.png' 
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <Link to="/">
            <img src={logo2} alt="Logo da Primeira Igreja Batista no Retiro" className="logo-img" />
          </Link>
            <span className="logo-mobile-pibare">PIBARE</span>
          <div className="header-logo">
            <Heart className="logo-icon" />
            <span className="logo-text">Primeira Igreja Batista do Retiro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav-desktop">
            <Link to="/" className='nav-link'>Início</Link>
            <Link to="/devotionals" className='nav-link'>Devocionais</Link>
            <Link to="/fotos" className='nav-link'>Nossas Fotos</Link>
            <Link to="/videos" className='nav-link'>Vídeos</Link>
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
          <nav className="header-nav-mobile">
            <Link to="/" className='mobile-nav-link' onClick={toggleMenu}>Início</Link>
            <Link to="/devotionals" className='mobile-nav-link' onClick={toggleMenu}>Devocionais</Link>
            <Link to="/fotos" className='mobile-nav-link' onClick={toggleMenu}>Nossas Fotos</Link>
            <Link to="/videos" className='mobile-nav-link' onClick={toggleMenu}>Vídeos</Link>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header

