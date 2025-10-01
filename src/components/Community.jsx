import { Star, Quote } from 'lucide-react'
import communitySmiling from '../assets/community-smiling.jpg'

const Community = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Membro há 5 anos",
      text: "Encontrei na Igreja Esperança não apenas um lugar de adoração, mas uma verdadeira família. O amor e cuidado que recebo aqui transformaram minha vida completamente.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Líder do Ministério de Jovens",
      text: "Cresci espiritualmente de forma incrível aqui. A igreja me deu oportunidades de servir e descobrir meus dons. Hoje posso impactar a vida de outros jovens.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Membro há 3 anos",
      text: "Depois de um período difícil na minha vida, encontrei esperança e restauração nesta comunidade. As pessoas aqui realmente vivem o amor de Cristo.",
      rating: 5
    }
  ]

  const stats = [
    { number: "500+", label: "Membros Ativos" },
    { number: "20+", label: "Anos de Ministério" },
    { number: "15", label: "Ministérios Ativos" },
    { number: "100+", label: "Vidas Transformadas" }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossa Comunidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as histórias de pessoas que encontraram esperança, propósito 
            e uma nova família em nossa igreja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Community Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={communitySmiling} 
                alt="Membros da comunidade sorrindo" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center text-white">
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Testemunhos de Fé
            </h3>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl relative hover:shadow-lg transition-shadow duration-300"
              >
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Values */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Por que Escolher Nossa Igreja?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Somos mais que uma igreja, somos uma família unida pelo amor de Cristo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">❤️</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Amor Genuíno</h4>
              <p className="text-gray-600">
                Experimentamos e compartilhamos o amor incondicional de Cristo em todas as nossas relações.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Crescimento</h4>
              <p className="text-gray-600">
                Oferecemos oportunidades para crescimento espiritual, pessoal e ministerial.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Comunhão</h4>
              <p className="text-gray-600">
                Construímos relacionamentos duradouros baseados na fé e no cuidado mútuo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community

