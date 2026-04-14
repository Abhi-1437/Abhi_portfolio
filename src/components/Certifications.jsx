import { useEffect, useRef, useState } from 'react'

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'July 2025',
    image: 'images/aws.png',
    link: 'https://drive.google.com/file/d/19uel0cqalGk6B1qu4CC625Xq6JTLGgOA/view',
  },
  {
    title: 'IBM Internship Certificate',
    issuer: 'IBM SkillsBuild (Edunet Foundation)',
    date: 'July 2025',
    image: 'images/ibm.png',
    link: 'https://drive.google.com/file/d/1BCBY-ruC9v9Nbc8Wjg7-jcgoy5vo41bc/view',
  },
  {
    title: 'Cisco Internship Certificate',
    issuer: 'Cisco Networking Academy',
    date: 'August 2025',
    image: 'images/cisco.png',
    link: 'https://drive.google.com/file/d/1ISAph1h9QzzCngKU6gf8EervadXloawO/view',
  },
  {
    title: 'Networking Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'July 2025',
    image: 'images/network.png',
    link: 'https://drive.google.com/file/d/1ZygENrCLIJwUA69hFLls6yxYwk14JWtv/view',
  },
]

const CertificateCard = ({ cert, index, isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block card-surface card-hover rounded-2xl overflow-hidden group"
      >
        {/* Certificate Image Preview */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={cert.image} 
            alt={cert.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gunmetal/40"></div>
          
          {/* View Badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-br from-neon-green to-electric-purple rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-neon-green to-electric-purple rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
              <svg className="w-7 h-7 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-off-white/70 text-sm mb-1">{cert.issuer}</p>
              <p className="text-neon-green text-sm font-medium">{cert.date}</p>
            </div>
          </div>

          {/* View Certificate Button */}
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-green to-electric-purple text-gunmetal rounded-lg font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>View Certificate</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  )
}

const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="py-32 px-6 relative bg-deep-indigo">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Certifications & Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
