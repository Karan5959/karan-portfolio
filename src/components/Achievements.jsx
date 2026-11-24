import { motion } from 'framer-motion'
import { Trophy, Award, BookOpen, BarChart3, Code2, Medal } from 'lucide-react'
import { achievements } from '../data/portfolioData'

const iconMap = {
  Trophy,
  Award,
  BookOpen,
  BarChart3,
  Code2,
  Medal,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Achievements = () => {
  return (
    <section id="achievements" className="bg-bg-primary py-20 md:py-24">
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
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
          <div className="accent-divider" aria-hidden="true">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
        </motion.div>

        {/* Staggered Grid of Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {achievements.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Award

            return (
              <motion.div
                key={item.title || index}
                variants={itemVariants}
                className="glass-card p-5 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple-light shrink-0 group-hover:scale-110 group-hover:bg-accent-purple/20 group-hover:border-accent-purple/40 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary text-base leading-snug group-hover:text-accent-purple-light transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
