import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '../data/portfolioData'

const fadeIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Experience</h2>
          <div className="accent-divider">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
          <p className="section-subheading">
            Professional journey and internships
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{
              background:
                'linear-gradient(to bottom, #8b5cf6, #3b82f6, #06b6d4)',
            }}
          />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-accent-purple bg-bg-primary z-10" />

                {/* Experience card */}
                <div className="glass-card p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Briefcase
                      size={16}
                      className="text-accent-purple shrink-0"
                    />
                    <h3 className="text-text-primary font-semibold text-lg">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-accent-purple font-medium text-sm mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
                    <Calendar size={12} />
                    <span>
                      {exp.period}
                      {exp.type ? ` | ${exp.type}` : ''}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-purple shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
