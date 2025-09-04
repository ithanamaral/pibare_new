'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-link">
          <div className="logo">
            <span className="logo-text">Igreja Batista</span>
            <span className="logo-subtitle">Retiro</span>
          </div>
        </Link>

        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><Link href="/" className="nav-link">Início</Link></li>
            <li><Link href="#sobre" className="nav-link">Sobre</Link></li>
            <li><Link href="#eventos" className="nav-link">Eventos</Link></li>
            <li><Link href="#testemunhos" className="nav-link">Testemunhos</Link></li>
            <li><Link href="#contato" className="nav-link">Contato</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link href="#contato" className="btn-primary">
            Visite-nos
          </Link>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

