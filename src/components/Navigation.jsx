const Navigation = ({ scrolled }) => {
  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact']

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gunmetal/90 backdrop-blur-sm py-4 border-b border-neon-green/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            KA
          </div>

          {/* Nav Items */}
          <ul className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <li key={item} style={{ animationDelay: `${index * 0.1}s` }} className="animate-slide-up">
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="text-off-white/70 hover:text-neon-green font-medium transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-green to-electric-purple group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
