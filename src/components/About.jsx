import { Heart, Users, BookOpen, HandHeart } from 'lucide-react'
import welcomingInterior from '../assets/welcoming-interior.jpg'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor",
      description: "Demonstramos o amor de Cristo através de nossas ações e relacionamentos."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Construímos uma família unida onde todos se sentem acolhidos e valorizados."
    },
    {
      icon: BookOpen,
      title: "Palavra",
      description: "Fundamentamos nossa fé na Palavra de Deus e em seus ensinamentos."
    },
    {
      icon: HandHeart,
      title: "Serviço",
      description: "Servimos nossa comunidade e aqueles que mais precisam de ajuda."
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Nossa Missão
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A Primeira Igreja Batista do Retiro, está há mais de 
              20 anos servindo nossa comunidade, somos um lugar onde pessoas de todas as idades 
              e origens podem encontrar propósito, crescimento espiritual e relacionamentos 
              significativos. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Acreditamos que cada pessoa é única e valiosa aos olhos de Deus. Nossa missão é 
              criar um ambiente onde todos possam experimentar o amor incondicional de Cristo, 
              crescer em sua jornada de fé e descobrir seus dons para servir ao próximo.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={welcomingInterior} 
                alt="Interior acolhedor da igreja" 
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-sm text-gray-600">Anos de Ministério</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Membros Ativos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

