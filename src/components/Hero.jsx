import { useState } from 'react'

const Hero = ({ scrolled }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center relative overflow-hidden transition-opacity duration-500 bg-gunmetal ${scrolled ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Panel - Profile Image */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative group">
              {/* Neon Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-green to-electric-purple rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-glow"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img 
                  src="images/image.jpeg"
                  alt="Profile" 
                  className={`relative rounded-2xl w-80 h-96 object-cover border-2 border-neon-green/50 transform transition-all duration-700 ${imageLoaded ? 'scale-100' : 'scale-95'} group-hover:scale-105 shadow-2xl`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
          </div>

          {/* Right Panel - Content */}
          <div className="lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-white animate-slide-up">
                Kunigiri Abhishek
              </h1>
              <p className="text-3xl lg:text-4xl font-semibold text-gradient animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Aspiring Cloud Engineer
              </p>
              <p className="text-lg lg:text-xl text-off-white/80 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Motivated fresher with hands-on experience in AWS (EC2, S3, IAM, VPC) and strong foundation in Java, Python, and networking. Passionate about building scalable cloud solutions and exploring modern technologies like Generative AI.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 text-off-white/70 hover:text-neon-green transition-colors duration-300 group">
                <div className="w-10 h-10 card-surface rounded-lg flex items-center justify-center group-hover:border-neon-green transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:kunigiriabhishek@gmail.com" className="text-lg">
                  kunigiriabhishek@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-off-white/70 hover:text-electric-purple transition-colors duration-300 group">
                <div className="w-10 h-10 card-surface rounded-lg flex items-center justify-center group-hover:border-electric-purple transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919705092094" className="text-lg">
                  +91 9705092094
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-6 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a 
                href="/Abhi's CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon px-8 py-4 rounded-xl font-semibold text-lg"
              >
                View Resume
              </a>
              <a
                href="/Abhi's CV.pdf"
                download
                className="btn-outline-neon px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
