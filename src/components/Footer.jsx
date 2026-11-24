import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons'
import { personalInfo, socialLinks } from '../data/portfolioData'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const homeSection = document.getElementById('home')
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()
  const name = personalInfo.name || 'Karan Dongare'
  const githubUrl = socialLinks.github || '#'
  const linkedinUrl = socialLinks.linkedin || '#'

  return (
    <footer className="bg-bg-primary border-t border-border-subtle py-8 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-4">
        {/* Name */}
        <p className="text-lg font-semibold text-text-primary tracking-wide">
          {name}
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary hover:text-accent-purple-light hover:border-accent-purple/40 hover:bg-bg-card-hover transition-all duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-bg-card border border-border-subtle text-text-secondary hover:text-accent-blue-light hover:border-accent-blue/40 hover:bg-bg-card-hover transition-all duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Dynamic Copyright Year */}
        <p className="text-sm text-text-muted">
          © {currentYear} {name}. All rights reserved.
        </p>
      </div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 12 }}
            transition={{ duration: 0.2 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-bg-card/90 hover:bg-bg-card-hover border border-border-hover text-accent-purple-light hover:text-text-primary backdrop-blur-md shadow-lg shadow-purple-950/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-purple"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer
