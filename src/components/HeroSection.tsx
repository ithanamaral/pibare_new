'use client';

import { useState, useEffect } from 'react';
import CTAButton from './CTAButton';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Encontre seu Lar Espiritual",
      subtitle: "Um lugar de fé, comunhão e propósito para toda a família",
      verse: "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.",
      reference: "Mateus 18:20",
      background: "hero-bg-1"
    },
    {
      title: "Cresça em Comunidade",
      subtitle: "Conecte-se com pessoas que compartilham os mesmos valores e propósitos",
      verse: "E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.",
      reference: "Atos 2:42",
      background: "hero-bg-2"
    },
    {
      title: "Sirva com Propósito",
      subtitle: "Descubra como seus dons podem fazer a diferença na vida de outras pessoas",
      verse: "Cada um administre aos outros o dom como o recebeu, como bons despenseiros da multiforme graça de Deus.",
      reference: "1 Pedro 4:10",
      background: "hero-bg-3"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''} ${slide.background}`}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                
                <div className="hero-verse">
                  <blockquote className="verse-text">
                    "{slide.verse}"
                  </blockquote>
                  <cite className="verse-reference">{slide.reference}</cite>
                </div>

                <div className="hero-actions">
                  <CTAButton href="#contato" variant="primary" size="large">
                    Participe de um Culto
                  </CTAButton>
                  <CTAButton href="#sobre" variant="outline" size="large">
                    Conheça Nossa História
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">
          <span>↓</span>
        </div>
        <p>Role para descobrir mais</p>
      </div>
    </section>
  );
}

