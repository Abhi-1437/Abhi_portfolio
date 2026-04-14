import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gunmetal text-off-white min-h-screen relative">
      {/* Galaxy Stars Background */}
      <div className="stars-bg">
        <div className="stars"></div>
        <div className="stars-2"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation scrolled={scrolled} />
        <Hero scrolled={scrolled} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </div>
  )
}

export default App
