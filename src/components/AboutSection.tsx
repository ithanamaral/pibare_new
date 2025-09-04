import CTAButton from './CTAButton';

export default function AboutSection() {
  const values = [
    {
      icon: "🙏",
      title: "Fé",
      description: "Fundamentados na Palavra de Deus, buscamos viver uma fé autêntica e transformadora que impacta nossa comunidade."
    },
    {
      icon: "🤝",
      title: "Comunhão",
      description: "Cultivamos relacionamentos genuínos, onde cada pessoa é valorizada e encontra seu lugar na família da fé."
    },
    {
      icon: "❤️",
      title: "Serviço",
      description: "Servimos uns aos outros e nossa comunidade com amor, demonstrando o caráter de Cristo em nossas ações."
    },
    {
      icon: "🌱",
      title: "Crescimento",
      description: "Promovemos o crescimento espiritual através do ensino bíblico, discipulado e desenvolvimento de dons espirituais."
    }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossa Missão e Valores</h2>
          <p className="section-subtitle">
            Somos uma igreja comprometida em ser um farol de esperança e amor em nossa comunidade, 
            guiando pessoas de todas as idades em sua jornada espiritual.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="mission-statement">
              <h3>Nossa Missão</h3>
              <p>
                Glorificar a Deus através da adoração, edificar os santos pelo ensino da Palavra, 
                e evangelizar o mundo levando o amor de Cristo a todas as pessoas, 
                formando discípulos que transformam vidas e comunidades.
              </p>
            </div>

            <div className="vision-statement">
              <h3>Nossa Visão</h3>
              <p>
                Ser uma igreja relevante e impactante, onde cada pessoa encontra seu propósito em Deus, 
                cresce em maturidade espiritual e se torna um agente de transformação na sociedade.
              </p>
            </div>

            <div className="history-highlight">
              <h3>Nossa História</h3>
              <p>
                Fundada em 2004 com 71 membros visionários, nossa igreja tem sido um pilar de fé 
                e esperança na comunidade do Retiro há mais de 20 anos. Crescemos não apenas em número, 
                mas em impacto, tocando vidas e transformando famílias através do poder do Evangelho.
              </p>
              <CTAButton href="/historia" variant="secondary">
                Conheça Nossa História Completa
              </CTAButton>
            </div>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Anos de História</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Membros Ativos</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15</div>
            <div className="stat-label">Ministérios</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Vidas Impactadas</div>
          </div>
        </div>
      </div>
    </section>
  );
}

