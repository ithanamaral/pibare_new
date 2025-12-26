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

