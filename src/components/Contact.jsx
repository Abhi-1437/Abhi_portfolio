import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedInput, setFocusedInput] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  })
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ submitting: true, submitted: false, error: false, message: '' })

    try {
      const formPayload = new FormData()
      formPayload.append('access_key', '9deff256-57eb-4120-9489-c467464c9969')
      formPayload.append('name', formData.name)
      formPayload.append('email', formData.email)
      formPayload.append('message', formData.message)
      formPayload.append('subject', `New Portfolio Contact from ${formData.name}`)
      formPayload.append('from_name', 'Portfolio Contact Form')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.'
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or email me directly at kunigiriabhishek@gmail.com.'
      })
    } finally {
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: false, message: '' })
      }, 5000)
    }
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 pb-40 relative bg-gunmetal">
      <div className="container mx-auto max-w-4xl relative z-10">
        <h2 className="text-5xl lg:text-6xl font-bold mb-20 text-center text-gradient">
          Let's Connect
        </h2>
        
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="card-surface card-hover rounded-2xl p-10 lg:p-14 mb-12">
            {/* Success/Error Message */}
            {formStatus.message && (
              <div className={`mb-6 p-4 rounded-xl border-2 ${
                formStatus.submitted 
                  ? 'bg-neon-green/10 border-neon-green text-neon-green' 
                  : 'bg-red-500/10 border-red-500 text-red-400'
              } animate-slide-up`}>
                <div className="flex items-center gap-3">
                  {formStatus.submitted ? (
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <p className="text-sm font-medium">{formStatus.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  required
                  className={`w-full px-6 py-4 bg-gunmetal rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-off-white/40 border-2 ${
                    focusedInput === 'name' ? 'border-neon-green glow-neon' : 'border-neon-green/30'
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  required
                  className={`w-full px-6 py-4 bg-gunmetal rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-off-white/40 border-2 ${
                    focusedInput === 'email' ? 'border-neon-green glow-neon' : 'border-neon-green/30'
                  }`}
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  required
                  className={`w-full px-6 py-4 bg-gunmetal rounded-xl focus:outline-none transition-all duration-300 text-white placeholder-off-white/40 resize-none border-2 ${
                    focusedInput === 'message' ? 'border-neon-green glow-neon' : 'border-neon-green/30'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={`w-full px-8 py-4 btn-neon rounded-xl font-semibold text-lg transform transition-all duration-300 ${
                  formStatus.submitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:scale-[1.02]'
                }`}
              >
                {formStatus.submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-6">
            {[
              { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', url: 'https://www.linkedin.com/in/kunigiri-abhishek/' },
              { name: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', url: 'https://github.com/Abhi-1437' },
              { name: 'Email', icon: 'M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z', url: 'mailto:kunigiriabhishek@gmail.com' },
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 card-surface card-hover rounded-xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
                aria-label={social.name}
              >
                <svg className="w-7 h-7 fill-current text-off-white/70 group-hover:text-neon-green transition-colors duration-300" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
