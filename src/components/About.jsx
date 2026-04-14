import { useEffect, useRef, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 relative bg-deep-indigo">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="card-surface card-hover rounded-2xl p-10 relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Cloud Engineer & Developer
                </h3>
                <p className="text-lg text-off-white/80 leading-relaxed">
                  Cloud-focused developer with practical exposure to AWS services and real-world project implementation. 
                  Strong problem-solving mindset with interest in DevOps and scalable architecture.
                </p>
                <p className="text-lg text-off-white/80 leading-relaxed">
                  Eager to contribute to cloud-based projects and grow expertise in modern cloud technologies and 
                  infrastructure automation. Passionate about building scalable solutions and exploring cutting-edge 
                  technologies like Generative AI.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="card-surface rounded-xl p-4 text-center border border-neon-green/30">
                    <div className="text-3xl font-bold text-gradient">4+</div>
                    <div className="text-sm text-off-white/60 mt-1">Projects</div>
                  </div>
                  <div className="card-surface rounded-xl p-4 text-center border border-electric-purple/30">
                    <div className="text-3xl font-bold text-gradient">4+</div>
                    <div className="text-sm text-off-white/60 mt-1">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative group">
              {/* Neon Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-green to-electric-purple rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img 
                  src="images/about.jpeg"
                  alt="About Profile" 
                  className="relative rounded-3xl w-full h-auto object-cover border-2 border-neon-green/50 transform transition-all duration-500 group-hover:scale-105 shadow-2xl"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 card-surface rounded-2xl p-6 border-2 border-electric-purple/50 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">AWS</div>
                  <div className="text-sm text-off-white/60">Cloud Expert</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
