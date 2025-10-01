import { Heart, CreditCard, Smartphone, Building, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Donation = () => {
  const donationMethods = [
    {
      icon: CreditCard,
      title: "Cartão de Crédito/Débito",
      description: "Doação segura online através do nosso portal",
      color: "bg-blue-500"
    },
    {
      icon: Smartphone,
      title: "PIX",
      description: "Transferência instantânea via PIX",
      color: "bg-green-500"
    },
    {
      icon: Building,
      title: "Transferência Bancária",
      description: "Depósito direto em nossa conta bancária",
      color: "bg-purple-500"
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Faça Parte da Obra
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sua contribuição nos ajuda a continuar transformando vidas e 
            expandindo o Reino de Deus em nossa comunidade e além.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Como Contribuir
            </h3>
            
            <div className="space-y-6 mb-8">
              {donationMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {method.title}
                      </h4>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Doar Agora
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Saiba Mais sobre Dízimos
              </Button>
            </div>
          </div>

          {/* Impact Areas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Como Usamos os Recursos
            </h3>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                {impactAreas.map((area, index) => (
                  <div key={index} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">{area.title}</h4>
                      <span className="text-blue-600 font-bold">{area.percentage}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: area.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Impact */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-600">
                    Transparência total no uso dos recursos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6 opacity-20">"</div>
            <blockquote className="text-2xl font-light mb-6 italic">
              "Cada um contribua segundo propôs no seu coração, não com tristeza 
              ou por necessidade; porque Deus ama ao que dá com alegria."
            </blockquote>
            <cite className="text-lg opacity-90">2 Coríntios 9:7</cite>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Donation

