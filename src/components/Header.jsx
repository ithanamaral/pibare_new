import { Button } from '@/components/ui/button.jsx'
import { useState } from 'react'
import { Menu, X, Heart, MapPin, Clock } from 'lucide-react'
import logo2 from "../assets/logo2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg w-full top-0 z-50 h-45">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <img src={logo2} alt="Logo" className="h-40 w-45" />
          <div className="flex items-center space-x-2 h-10">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-3xl font-bold text-gray-800">Primeira Igreja Batista do Retiro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300">
              Sobre Nós
            </a>
            <a href="#cultos" className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300">
              Cultos
            </a>
            <a href="#ministerios" className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300">
              Ministérios
            </a>
            <a href="#contato" className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-300">
              Contato
            </a>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Sobre Nós
              </a>
              <a
                href="#cultos"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Cultos
              </a>
              <a
                href="#ministerios"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Ministérios
              </a>
              <a
                href="#contato"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full transition-all duration-300">
                  Doe Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

