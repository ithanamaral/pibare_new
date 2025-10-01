import { Calendar, Clock, MapPin, Users, Video, Music } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import churchInterior from '../assets/church-interior.jpg'

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
    {
      title: "Culto Online",
      time: "Domingos às 18h",
      description: "Transmissão ao vivo para quem não pode estar presente.",
      icon: Video,
      highlight: false
    },
    {
      title: "Ensaio do Coral",
      time: "Sábados às 16h",
      description: "Preparação musical para os cultos e eventos especiais.",
      icon: Music,
      highlight: false
    }
  ]

  const upcomingEvents = [
    {
      date: "15 DEZ",
      title: "Cantata de Natal",
      time: "19h30",
      description: "Apresentação especial do coral com músicas natalinas"
    },
    {
      date: "22 DEZ",
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
    <section id="cultos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Cultos e Eventos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Junte-se a nós em nossos momentos de adoração, oração e comunhão. 
            Todos são bem-vindos em nossa casa!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Programação Semanal</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                    service.highlight 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${
                      service.highlight ? 'bg-blue-600' : 'bg-gray-100'
                    }`}>
                      <service.icon className={`h-6 w-6 ${
                        service.highlight ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-blue-600 font-medium mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.time}
                      </p>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Church Interior Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={churchInterior} 
                alt="Interior da igreja durante culto" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-xl font-bold mb-2">Nosso Santuário</h4>
                <p className="text-sm opacity-90 mb-4">
                  Um espaço moderno e acolhedor para adoração e comunhão
                </p>
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Rua da Esperança, 123 - Centro</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Próximos Eventos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.date}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                  {event.title}
                </h4>
                <p className="text-blue-600 font-medium mb-3 text-center flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {event.time}
                </p>
                <p className="text-gray-600 text-sm text-center">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Ver Todos os Eventos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

