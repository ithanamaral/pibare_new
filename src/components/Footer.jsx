import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Cultos", href: "#cultos" },
    { name: "Ministérios", href: "#ministerios" },
    { name: "Contato", href: "#contato" }
  ]

  const ministries = [
    { name: "Ministério de Jovens", href: "#" },
    { name: "Ministério Infantil", href: "#" },
    { name: "Ministério de Louvor", href: "#" },
    { name: "Ministério Social", href: "#" },
    { name: "Escola Bíblica", href: "#" }
  ]

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#" },
    { icon: Instagram, name: "Instagram", url: "#" },
    { icon: Youtube, name: "YouTube", url: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Igreja Esperança</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Uma comunidade de fé, amor e esperança onde todos são bem-vindos. 
              Transformando vidas através do amor de Cristo há mais de 20 anos.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-sm">Rua da Esperança, 123 - Centro, SP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm">(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm">contato@igrejaesperanca.com.br</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Ministérios</h3>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a 
                    href={ministry.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Horários dos Cultos</h3>
            <div className="space-y-3 mb-6">
              <div className="text-gray-300 text-sm">
                <div className="font-medium text-white">Domingos</div>
                <div>9h00 e 18h00</div>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="font-medium text-white">Quartas-feiras</div>
                <div>19h30 (Culto de Oração)</div>
              </div>
              <div className="text-gray-300 text-sm">
                <div className="font-medium text-white">Sábados</div>
                <div>16h00 (Ensaio do Coral)</div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Igreja Esperança. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Transparência
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

