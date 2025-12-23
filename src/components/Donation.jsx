import { Heart, CreditCard, Smartphone, Building, ArrowRight } from 'lucide-react'
import './Donation.css'

const Donation = () => {
  const donationMethods = [
    {
      icon: Smartphone,
      title: "PIX",
      description: "Transferência instantânea via PIX",
      color: "donation-green"
    },
    {
      icon: Building,
      title: "Transferência Bancária",
      description: "Depósito direto em nossa conta bancária",
      color: "donation-purple"
    }
  ]

  const impactAreas = [
    {
      title: "Ministérios",
      description: "Apoio aos diversos ministérios da igreja",
      percentage: "40%"
    },
    {
      title: "Ação Social",
      description: "Ajuda a famílias carentes e projetos sociais",
      percentage: "30%"
    },
    {
      title: "Manutenção",
      description: "Conservação e melhorias do templo",
      percentage: "20%"
    },
    {
      title: "Missões",
      description: "Apoio a missionários e evangelização",
      percentage: "10%"
    }
  ]

  return (
    <section className="donation-section">
      <div className="donation-container">
        {/* Header */}
        <div className="donation-header">
          <div className="donation-heart-icon">
            <Heart className="heart-icon" />
          </div>
          <h2 className="donation-title">
            Faça Parte da Obra
          </h2>
          <p className="donation-subtitle">
            Sua contribuição nos ajuda a continuar transformando vidas e 
            expandindo o Reino de Deus em nossa comunidade e além.
          </p>
        </div>

        <div className="donation-grid">
          {/* Donation Methods */}
          <div className="donation-methods">
            <h3 className="methods-title">
              Como Contribuir
            </h3>
            
            <div className="methods-list">
              {donationMethods.map((method, index) => (
                <div key={index} className="method-card">
                  <div className="method-content">
                    <div className={`method-icon-wrapper ${method.color}`}>
                      <method.icon className="method-icon" />
                    </div>
                    <div className="method-info">
                      <h4 className="method-title">
                        {method.title}
                      </h4>
                      <p className="method-description">{method.description}</p>
                    </div>
                    <ArrowRight className="method-arrow" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="donation-buttons">
              <button className="btn btn-primary btn-full btn-large">
                Doar Agora
              </button>
              <button className="btn btn-outline-gray btn-full btn-large">
                Saiba Mais sobre Dízimos
              </button>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="impact-areas">
            <h3 className="impact-title">
              Como Usamos os Recursos
            </h3>
            
            <div className="impact-card">
              <div className="impact-list">
                {impactAreas.map((area, index) => (
                  <div key={index} className="impact-item">
                    <div className="impact-item-header">
                      <h4 className="impact-item-title">{area.title}</h4>
                      <span className="impact-percentage">{area.percentage}</span>
                    </div>
                    <p className="impact-item-description">{area.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: area.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Impact */}
              <div className="impact-total">
                <div className="impact-total-content">
                  <div className="impact-total-number">100%</div>
                  <p className="impact-total-text">
                    Transparência total no uso dos recursos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="bible-verse">
          <div className="bible-verse-content">
            <div className="bible-quote-mark">"</div>
            <blockquote className="bible-quote">
              "Cada um contribua segundo propôs no seu coração, não com tristeza 
              ou por necessidade; porque Deus ama ao que dá com alegria."
            </blockquote>
            <cite className="bible-reference">2 Coríntios 9:7</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donation

