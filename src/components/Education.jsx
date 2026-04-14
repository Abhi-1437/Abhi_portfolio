import { useEffect, useRef, useState } from 'react'

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'Madanapalle Institute of Technology & Science',
    location: 'Andhra Pradesh',
    year: '2027',
    status: 'Pursuing',
  },
  {
    degree: 'Diploma (SBTET)',
    institution: 'Priyadarshini Institute of Technology and Science',
    location: 'Tenali',
    year: '2024',
    percentage: '72.25%',
  },
  {
    degree: 'SSC (Matriculation)',
    institution: 'Kallimalam Municipal High School',
    location: 'Rayadurgam, Andhra Pradesh',
    year: '2021',
    percentage: '95.0%',
  },
]

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = sectionRef.current?.querySelectorAll('.education-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-32 px-6 relative bg-gunmetal">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Academic Background
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              data-index={index}
              className={`education-item card-surface card-hover rounded-2xl p-8 transform transition-all duration-700 ${
                visibleItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-neon-green font-medium mb-1">{edu.institution}</p>
                  <p className="text-off-white/60 text-sm">{edu.location}</p>
                </div>
                <div className="text-right">
                  <span className="text-off-white/80 font-semibold block mb-1">
                    {edu.status || `Graduated: ${edu.year}`}
                  </span>
                  {edu.percentage && (
                    <span className="text-2xl font-bold text-gradient">
                      {edu.percentage}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
