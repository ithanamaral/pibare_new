import { Users, Baby, Music, Heart, BookOpen, Utensils } from 'lucide-react'
import './Ministries.css'

const Ministries = () => {
  const ministries = [
    {
      icon: Users,
      title: "Ministério de Jovens",
      description: "Atividades, estudos bíblicos e eventos especiais para jovens de 15 a 30 anos.",
      color: "ministry-blue",
    },
    {
      icon: Baby,
      title: "Ministério Infantil",
      description: "Cuidado e ensino bíblico para crianças de 0 a 12 anos durante os cultos.",
      color: "ministry-green",
    },
    {
      icon: Music,
      title: "Ministério de Louvor",
      description: "Coral, banda e grupos musicais que conduzem a adoração em nossos cultos.",
      color: "ministry-purple",
    },
    {
      icon: BookOpen,
      title: "Escola Bíblica",
      description: "Classes de estudo bíblico para todas as idades aos domingos pela manhã.",
      color: "ministry-yellow",
    },
    {
      icon: Utensils,
      title: "Ministério Social",
      description: "Ações sociais, distribuição de alimentos e apoio às famílias carentes.",
      color: "ministry-orange",
    }
  ]

  return (
    <section id="ministerios" className="ministries-section">
      <div className="ministries-container">
        {/* Header */}
        <div className="ministries-header">
          <h2 className="ministries-title">
            Nossos Ministérios
          </h2>
          <p className="ministries-subtitle">
            Descubra como você pode usar seus dons e talentos para servir a Deus 
            e abençoar nossa comunidade através dos diversos ministérios.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="ministries-grid">
          {ministries.map((ministry, index) => (
            <div key={index} className="ministry-card">
              {/* Icon */}
              <div className={`ministry-icon-wrapper ${ministry.color}`}>
                <ministry.icon className="ministry-icon" />
              </div>

              {/* Content */}
              <h3 className="ministry-title">
                {ministry.title}
              </h3>
              <p className="ministry-description">
                {ministry.description}
              </p>

              {/* Stats */}
              <div className="ministry-footer">
                <span className="ministry-participants">
                  {ministry.participants}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="ministries-cta">
          <h3 className="cta-title">
            Encontre Seu Lugar de Serviço
          </h3>
          <p className="cta-description">
            Cada pessoa tem dons únicos dados por Deus. Venha descobrir como você 
            pode fazer a diferença em nossa comunidade e no Reino de Deus.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-secondary">
              Quero Participar
            </button>
            <a href="#form-contato" className="btn btn-outline-white">
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ministries

