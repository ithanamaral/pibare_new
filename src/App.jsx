import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Ministries from './components/Ministries'
import Community from './components/Community'
import Donation from './components/Donation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fotos from './components/Fotos'
import Carousel from './components/carousel'

// Importa Rota
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header /> 
        
        {/* Esta div é a chave para o conteúdo aparecer! */}
        <div className="main-content"> 
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Ministries />
                <Community />
                <Donation />
                <Contact />
              </>
            } />

            <Route path="/about" element={<About />} />
            <Route path="/fotos" element={<Fotos />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ministries" element={<Ministries />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App