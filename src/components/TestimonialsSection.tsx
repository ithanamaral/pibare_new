'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Membro há 8 anos",
      photo: "👩‍💼",
      text: "Encontrei nesta igreja não apenas um lugar de adoração, mas uma verdadeira família. Aqui pude crescer espiritualmente e descobrir meus dons. A comunhão e o amor que experimentamos são únicos.",
      highlight: "Uma verdadeira família"
    },
    {
      name: "João Santos",
      role: "Líder de Jovens",
      photo: "👨‍🎓",
      text: "Como jovem, sempre me senti acolhido e desafiado a crescer. O ministério jovem me ajudou a encontrar meu propósito e hoje posso servir outros jovens. É incrível ver como Deus transforma vidas aqui.",
      highlight: "Encontrei meu propósito"
    },
    {
      name: "Ana Costa",
      role: "Professora da EBD",
      photo: "👩‍🏫",
      text: "Depois de anos longe da igreja, encontrei aqui um lugar de restauração. O ensino sólido da Palavra e o cuidado pastoral me ajudaram a reconstruir minha fé e hoje sirvo no ministério de ensino.",
      highlight: "Lugar de restauração"
    },
    {
      name: "Carlos Oliveira",
      role: "Diácono",
      photo: "👨‍💼",
      text: "Nossa família cresceu espiritualmente nesta igreja. Nossos filhos aprenderam valores cristãos sólidos e hoje são jovens comprometidos com Deus. Somos gratos por fazer parte desta comunidade.",
      highlight: "Família abençoada"
    },
    {
      name: "Lucia Ferreira",
      role: "Ministério de Mulheres",
      photo: "👩‍🦳",
      text: "Aos 60 anos, pensei que era tarde para servir, mas aqui descobri que Deus ainda tinha planos para mim. O ministério de mulheres me deu nova perspectiva e propósito de vida.",
      highlight: "Nunca é tarde para servir"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testemunhos" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Histórias que Inspiram</h2>
          <p className="section-subtitle">
            Conheça algumas das vidas que foram transformadas através da nossa comunidade de fé.
          </p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">"</div>
                  <blockquote className="testimonial-text">
                    {testimonial.text}
                  </blockquote>
                  <div className="testimonial-highlight">
                    {testimonial.highlight}
                  </div>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-photo">{testimonial.photo}</div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-navigation">
            <button 
              className="nav-button prev"
              onClick={() => goToTestimonial(currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1)}
              aria-label="Testemunho anterior"
            >
              ←
            </button>
            
            <div className="testimonials-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                  aria-label={`Ir para testemunho ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-button next"
              onClick={() => goToTestimonial((currentTestimonial + 1) % testimonials.length)}
              aria-label="Próximo testemunho"
            >
              →
            </button>
          </div>
        </div>

        <div className="testimonials-cta">
          <h3>Sua História Também Pode Ser Transformada</h3>
          <p>
            Venha fazer parte da nossa família e descobrir como Deus pode usar sua vida 
            para impactar outras pessoas.
          </p>
          <div className="cta-actions">
            <button className="cta-button cta-button--primary cta-button--large">
              Compartilhe Seu Testemunho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

