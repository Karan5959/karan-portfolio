import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Download,
  Mail,
  ChevronDown,
  FileText,
  Code2,
  Sparkles,
  Brain,
  Layers,
} from 'lucide-react'
import { personalInfo, socialLinks, heroHighlights } from '../data/portfolioData'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons'

const iconMap = { Code2, Sparkles, Brain, Layers }

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const accentColors = {
  purple: 'text-accent-purple',
  blue: 'text-accent-blue',
  cyan: 'text-accent-cyan',
}

export default function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResumeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
          }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 section-container flex flex-col items-center text-center pt-24 pb-12"
      >
        {/* Profile Image */}
        <motion.div
          variants={fadeUp}
          className="mb-8"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-br from-accent-purple via-accent-blue to-accent-cyan">
            <div className="w-full h-full rounded-full bg-bg-primary flex items-center justify-center overflow-hidden">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <User size={48} className="text-text-muted" />
              )}
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-text-secondary mb-4"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-text-muted max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-purple to-accent-blue hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20"
          >
            View My Projects
          </a>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setResumeOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-text-primary border border-border-subtle hover:border-border-hover hover:bg-bg-card transition-all cursor-pointer"
            >
              <Download size={16} />
              Download Resume
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${resumeOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {resumeOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-bg-card/95 backdrop-blur-xl border border-border-subtle shadow-2xl shadow-black/40 overflow-hidden z-50"
                >
                  <div className="p-1.5 space-y-0.5">
                    {(personalInfo.resumes || []).map((resume) => (
                      <a
                        key={resume.label}
                        href={resume.url}
                        download
                        onClick={() => setResumeOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-bg-secondary transition-colors group"
                      >
                        <FileText
                          size={16}
                          className={`${accentColors[resume.accent] || 'text-accent-purple'} shrink-0`}
                        />
                        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                          {resume.label}
                        </span>
                        <Download
                          size={13}
                          className="ml-auto text-text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-text-primary border border-border-subtle hover:border-border-hover hover:bg-bg-card transition-all"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 mb-10"
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-hover hover:bg-bg-card transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-hover hover:bg-bg-card transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        {/* Technology Highlights */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3"
        >
          {heroHighlights.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-bg-card border border-border-subtle text-text-secondary"
              >
                {Icon && <Icon size={14} className="text-accent-purple" />}
                {item.label}
              </span>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
