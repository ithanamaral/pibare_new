import { Users, Baby, Music, Heart, BookOpen, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Ministries = () => {
  const ministries = [
    {
      icon: Users,
      title: "Ministério de Jovens",
      description: "Atividades, estudos bíblicos e eventos especiais para jovens de 15 a 30 anos.",
      color: "bg-blue-500",
      participants: "80+ jovens"
    },
    {
      icon: Baby,
      title: "Ministério Infantil",
      description: "Cuidado e ensino bíblico para crianças de 0 a 12 anos durante os cultos.",
      color: "bg-green-500",
      participants: "50+ crianças"
    },
    {
      icon: Music,
      title: "Ministério de Louvor",
      description: "Coral, banda e grupos musicais que conduzem a adoração em nossos cultos.",
      color: "bg-purple-500",
      participants: "30+ músicos"
    },
    {
      icon: Heart,
      title: "Ministério de Visitação",
      description: "Cuidado pastoral através de visitas a hospitais, lares e membros necessitados.",
      color: "bg-red-500",
      participants: "25+ visitadores"
    },
    {
      icon: BookOpen,
      title: "Escola Bíblica",
      description: "Classes de estudo bíblico para todas as idades aos domingos pela manhã.",
      color: "bg-yellow-500",
      participants: "100+ alunos"
    },
    {
      icon: Utensils,
      title: "Ministério Social",
      description: "Ações sociais, distribuição de alimentos e apoio às famílias carentes.",
      color: "bg-orange-500",
      participants: "40+ voluntários"
    }
  ]

  return (
    <section id="ministerios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Ministérios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como você pode usar seus dons e talentos para servir a Deus 
            e abençoar nossa comunidade através dos diversos ministérios.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ministries.map((ministry, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${ministry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ministry.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {ministry.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {ministry.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {ministry.participants}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
                >
                  Saiba mais →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Encontre Seu Lugar de Serviço
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cada pessoa tem dons únicos dados por Deus. Venha descobrir como você 
            pode fazer a diferença em nossa comunidade e no Reino de Deus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Quero Participar
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ministries

