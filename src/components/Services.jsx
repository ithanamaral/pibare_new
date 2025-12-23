import { Clock, MapPin, Users, Video, Music } from 'lucide-react'
import churchInterior from '../assets/Foto28.jpeg'
import './Services.css'

const Services = () => {
  const services = [
    {
      title: "Culto Dominical",
      time: "Domingos às 9h e 18h",
      description: "Nosso culto principal com louvor, pregação e comunhão.",
      icon: Users,
      highlight: true
    },
    {
      title: "Culto de Oração",
      time: "Quartas às 19h30",
      description: "Momento especial de oração e intercessão pela comunidade.",
      icon: Clock,
      highlight: false
    },
  ]

  const upcomingEvents = [
    {
      date: "18 OUT",
      title: "Boliche dos Jovens",
      time: "19h30",
      description: "Shopping do Avião"
    },
    {
      date: "18 OUT",
      title: "Retiro da MCM Regional",
      time: "19h30",
      description: "Vargem das Flores/Contagem"
    },
    {
      date: "25 DEZ",
      title: "Culto de Natal",
      time: "18h",
      description: "Celebração especial do nascimento de Jesus Cristo"
    },
    {
      date: "31 DEZ",
      title: "Vigília de Ano Novo",
      time: "22h",
      description: "Culto de gratidão e expectativa para o novo ano"
    }
  ]

  return (
    <section id="cultos" className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">
            Cultos e Eventos
          </h2>
          <p className="services-subtitle">
            Junte-se a nós em nossos momentos de adoração, oração e comunhão. 
            Todos são bem-vindos em nossa casa!
          </p>
        </div>

        <div className="services-grid">
          {/* Services List */}
          <div className="services-list">
            <h3 className="services-list-title">Programação Semanal</h3>
            <div className="services-items">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`service-card ${service.highlight ? 'service-card-highlight' : ''}`}
                >
                  <div className="service-card-content">
                    <div className={`service-icon-wrapper ${service.highlight ? 'service-icon-highlight' : ''}`}>
                      <service.icon className={`service-icon ${service.highlight ? 'service-icon-white' : ''}`} />
                    </div>
                    <div className="service-info">
                      <h4 className="service-title">
                        {service.title}
                      </h4>
                      <p className="service-time">
                        <Clock className="time-icon" />
                        {service.time}
                      </p>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Church Interior Image */}
          <div className="church-image-wrapper">
            <div className="church-image-container">
              <img 
                src={churchInterior} 
                alt="Interior da igreja durante culto" 
                className="church-image"
              />
              <div className="church-image-overlay"></div>
              
              {/* Overlay Content */}
              <div className="church-image-content">
                <h4 className="church-image-title">Nosso Templo</h4>
                <p className="church-image-description">
                  Um espaço moderno e acolhedor para adoração e comunhão
                </p>
                <div className="church-image-location">
                  <MapPin className="location-icon" />
                  <span>Rua Retiro Campestre, 419 - Retiro Contagem - MG 32050-400</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h3 className="upcoming-events-title">
            Próximos Eventos
          </h3>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date-wrapper">
                  <div className="event-date">
                    {event.date}
                  </div>
                </div>
                <h4 className="event-title">
                  {event.title}
                </h4>
                <p className="event-time">
                  <Clock className="time-icon" />
                  {event.time}
                </p>
                <p className="event-description">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

