import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Cloud',
    skills: ['AWS EC2', 'S3', 'IAM', 'VPC', 'RDS'],
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    color: 'neon-green',
  },
  {
    category: 'Programming',
    skills: ['Java', 'Python'],
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    color: 'electric-purple',
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    color: 'neon-green',
  },
  {
    category: 'Database',
    skills: ['MongoDB', 'MySQL'],
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    color: 'electric-purple',
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
    color: 'neon-green',
  },
  {
    category: 'Other',
    skills: ['Networking', 'Linux', 'Power BI', 'GenAI Basics'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'electric-purple',
  },
]

const SkillCard = ({ group, index, isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="card-surface card-hover rounded-2xl p-6 h-full group">
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-14 h-14 bg-gradient-to-br from-${group.color} to-electric-purple rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
            <svg className="w-7 h-7 text-gunmetal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={group.icon} />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">
            {group.category}
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className={`px-4 py-2 bg-gunmetal border border-${group.color}/30 rounded-full text-sm font-medium text-off-white hover:border-${group.color} hover:text-${group.color} hover:-translate-y-1 transition-all duration-300 cursor-default`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-32 px-6 relative bg-gunmetal">
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Technical Arsenal
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <SkillCard key={index} group={group} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
