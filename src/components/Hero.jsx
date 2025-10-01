import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Play } from 'lucide-react'
import Foto1 from '../assets/Foto1.jpeg'

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Foto1})`,
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        </div>
      </div>
    </section>
  )
}

export default Hero

