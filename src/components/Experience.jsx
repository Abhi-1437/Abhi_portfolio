import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    title: 'Cloud Computing Intern',
    company: 'Slash Mark IT Solutions (OPC) Pvt Ltd',
    period: 'May 2025 - July 2025',
    description: 'Gained hands-on experience in Cloud Computing through a two-month internship. Developed practical skills and contributed to projects in a professional IT environment. Demonstrated commitment to professional standards.',
  },
  {
    title: 'AI & ML Intern',
    company: 'IBM SkillsBuild (Edunet Foundation)',
    period: 'June 2025 - July 2025',
    description: 'Applied core concepts of AI and Machine Learning in a project-based learning environment. Developed technical skills through practical, hands-on sessions and mentor-led discussions. Successfully delivered a final project.',
  },
]

const Experience = () => {
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

    const items = sectionRef.current?.querySelectorAll('.experience-item')
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 relative bg-deep-indigo">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Professional Journey
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green to-electric-purple opacity-50"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`experience-item relative pl-24 transform transition-all duration-700 ${
                  visibleItems.includes(index) ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-electric-purple rounded-xl flex items-center justify-center animate-glow">
                    <div className="w-8 h-8 bg-deep-indigo rounded-lg"></div>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="card-surface card-hover rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-neon-green font-medium mt-1">{exp.company}</p>
                    </div>
                    <span className="text-off-white/60 mt-2 md:mt-0 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-off-white/70 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
