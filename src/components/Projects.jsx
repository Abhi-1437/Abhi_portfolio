import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'Employee Salary Prediction',
    description: 'Built ML model with 87.10% accuracy using Python and Pandas. Performed data cleaning, model training with Gradient Boosting Classifier, and deployed using Streamlit for live predictions.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    image: 'https://via.placeholder.com/600x400/2A2A35/00FFA3?text=Salary+Prediction',
    demo: '#',
    github: '#',
  },
  {
    title: 'Cloud-Based Attendance System',
    description: 'Serverless attendance tracker using AWS Lambda, DynamoDB, and API Gateway. Successfully deployed and tested an API that marks attendance with browser requests.',
    tech: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'Python'],
    image: 'images/attendance.jpeg',
    demo: '#',
    github: '#',
  },
  {
    title: 'Student Internal Marks System',
    description: 'Comprehensive student marks management system with real-time tracking and analytics dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'images/sims.png',
    demo: 'https://student-internal-marks-system-upcp.vercel.app/',
    github: '#',
  },
  {
    title: 'Bus Ticketing Payment System',
    description: 'Online bus ticket booking platform with integrated payment gateway and seat selection.',
    tech: ['React', 'Payment Gateway', 'REST API'],
    image: 'images/bus.png',
    demo: 'https://bus-ticketing-payment-system.vercel.app/',
    github: '#',
  },
]

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="card-surface card-hover rounded-2xl overflow-hidden group">
        {/* Project Image */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gunmetal/60"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            {project.title}
          </h3>
          <p className="text-off-white/70 mb-6 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gunmetal border border-neon-green/30 rounded-lg text-sm font-medium text-off-white hover:border-neon-green hover:text-neon-green transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-3 btn-neon rounded-xl font-semibold text-center transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-neon px-6 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 relative bg-gunmetal">
      <div className="container mx-auto max-w-7xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
