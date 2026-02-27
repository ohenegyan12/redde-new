import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Solutions from './components/Solutions'
import Merchants from './components/Merchants'
import Developers from './components/Developers'
import Security from './components/Security'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Solutions />
      <Merchants />
      <Developers />
      <Security />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
