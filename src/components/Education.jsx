import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award } from 'lucide-react'
import { education } from '../data/portfolioData'

const Education = () => {
  return (
    <section id="education" className="bg-bg-secondary py-20 md:py-24">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="accent-divider" aria-hidden="true">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
        </motion.div>

        {/* Centered Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div
              className="absolute -top-24 -right-24 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
              <div className="p-4 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple shrink-0 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-10 h-10" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary leading-tight">
                  {education.degree}
                </h3>
                <p className="text-text-secondary font-medium text-base sm:text-lg mt-1.5">
                  {education.institution}
                </p>
                <p className="text-text-muted text-sm mt-0.5">
                  {education.university}
                </p>
              </div>
            </div>

            {/* Meta Details Row */}
            <div className="mt-6 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-bg-primary/70 border border-border-subtle text-text-secondary">
                <Calendar className="w-4 h-4 text-accent-blue" />
                <span>{education.period}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light">
                <Award className="w-4 h-4 text-accent-purple" />
                <span>CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
