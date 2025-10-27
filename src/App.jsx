
import About from './components/About'
import Contact from './components/Contact'
import Eduducation from './components/Eduducation'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ParticleBackground from './components/Particle'
import Testimonials from './components/Testimonials'


const App = () => {
  return (
    <>
    
      <ParticleBackground/>
      <Navbar/>
      <Hero/>
     <About/>
      <Eduducation/>
      {/* <Projects/> */}
      <Testimonials/>
      <Contact/>
      <Footer/>  
    </>
  )
}

export default App
