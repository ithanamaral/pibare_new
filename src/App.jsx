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

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Ministries />
        <Community />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App