import { Star, Quote } from "lucide-react";
import communitySmiling from "../assets/Foto2.jpeg";
import "./Community.css";

const Community = () => {
  const testimonials = [
    {
      name: "Everaldo Mansur",
      role: "Membro fundador",
      text: "Vejo a minha igreja como uma família. Como toda família, tem virtudes e falhas, mas é onde pertenço, onde construí minha história e onde continuo sendo edificado na fé",
      rating: 5,
    },
    {
      name: "Guiomar",
      role: "Membro fundadora",
      text: "Como descrever a Pib Retiro ? Eu Guiomar,  declaro que no meu coração só existe amor e gratidão por cada irmão que faz parte  desta família abençoada em Cristo Jesus. A igreja é a minha segunda casa, amo estar com com meus irmãos, em Cristo e em comunhão.",
      rating: 5,
    },
    {
      name: "Genália",
      role: "Membro fundadora",
      text: "PIB Retiro! Lugar agradável onde a palavra de Deus é realmente pregada e com irmãos amáveis!!!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "20+", label: "Anos de Ministério" },
    { number: "15", label: "Ministérios Ativos" },
    { number: "100+", label: "Vidas Transformadas" },
  ];

  return (
    <section className="community-section">
      <div className="community-container">
        {/* Header */}
        <div className="community-header">
          <h2 className="community-title">Nossa Comunidade</h2>
          <p className="community-subtitle">
            Conheça as histórias de pessoas que encontraram esperança, propósito
            e uma nova família em nossa igreja.
          </p>
        </div>

        <div className="community-grid">
          {/* Community Image */}
          <div className="community-image-wrapper">
            <div className="community-image-container">
              <img
                src={communitySmiling}
                alt="Membros da comunidade sorrindo"
                className="community-image"
              />
              <div className="community-image-overlay"></div>

              {/* Overlay Stats */}
              <div className="community-stats">
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                      <div className="stat-item-number">{stat.number}</div>
                      <div className="stat-item-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="testimonials-wrapper">
            <h3 className="testimonials-title">Testemunhos de Fé</h3>

            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                {/* Quote Icon */}
                <Quote className="testimonial-quote-icon" />

                {/* Rating */}
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="testimonial-text">"{testimonial.text}"</p>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Values */}
        <div className="community-values">
          <div className="values-header">
            <h3 className="values-title">Por que Escolher Nossa Igreja?</h3>
            <p className="values-subtitle">
              Por que é uma igreja bíblica buscando cumprir o IDE de Jesus.
            </p>
          </div>

          <div className="values-grid-section">
            <div className="value-item">
              <div className="value-icon-circle value-icon-blue">
                <span className="value-emoji">❤️</span>
              </div>
              <h4 className="value-item-title">Amor Genuíno</h4>
              <p className="value-item-description">
                Experimentamos e compartilhamos o amor incondicional de Cristo.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-circle value-icon-green">
                <span className="value-emoji">🌱</span>
              </div>
              <h4 className="value-item-title">Crescimento</h4>
              <p className="value-item-description">
                Oferecemos oportunidades para crescimento espiritual, pessoal e
                ministerial.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-circle value-icon-purple">
                <span className="value-emoji">🤝</span>
              </div>
              <h4 className="value-item-title">Comunhão</h4>
              <p className="value-item-description">
                Construímos relacionamentos duradouros baseados na fé e no
                cuidado mútuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
