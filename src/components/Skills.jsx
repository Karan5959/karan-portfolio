import { motion } from 'framer-motion';
import {
  Code2,
  Sparkles,
  Brain,
  Globe,
  Database,
  Puzzle,
  Wrench,
} from 'lucide-react';
import { skills } from '../data/portfolioData';

// Map icon string names from portfolioData to Lucide icon components
const iconMap = {
  Code2,
  Sparkles,
  Brain,
  Globe,
  Database,
  Puzzle,
};

// Subtle accent themes for category icon badges
const categoryStyles = {
  Code2: {
    bg: 'bg-accent-purple/10',
    text: 'text-accent-purple-light',
    border: 'border-accent-purple/20',
  },
  Sparkles: {
    bg: 'bg-accent-cyan/10',
    text: 'text-accent-cyan-light',
    border: 'border-accent-cyan/20',
  },
  Brain: {
    bg: 'bg-accent-blue/10',
    text: 'text-accent-blue-light',
    border: 'border-accent-blue/20',
  },
  Globe: {
    bg: 'bg-accent-cyan/10',
    text: 'text-accent-cyan-light',
    border: 'border-accent-cyan/20',
  },
  Database: {
    bg: 'bg-accent-purple/10',
    text: 'text-accent-purple-light',
    border: 'border-accent-purple/20',
  },
  Puzzle: {
    bg: 'bg-accent-blue/10',
    text: 'text-accent-blue-light',
    border: 'border-accent-blue/20',
  },
};

const defaultStyle = {
  bg: 'bg-accent-purple/10',
  text: 'text-accent-purple-light',
  border: 'border-accent-purple/20',
};

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-primary relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/3 -left-40 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Heading, Subheading & Accent Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="accent-divider" aria-hidden="true">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
          <p className="section-subheading">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Grid of skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => {
            const IconComponent = iconMap[skillGroup.icon] || Wrench;
            const style = categoryStyles[skillGroup.icon] || defaultStyle;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${style.bg} ${style.text} ${style.border} group-hover:scale-105 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary tracking-tight">
                      {skillGroup.category}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-bg-secondary text-text-secondary border border-border-subtle hover:border-accent-purple/30 hover:text-text-primary hover:bg-accent-purple/10 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
