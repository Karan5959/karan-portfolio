import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Calendar, Trophy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const infoItems = [
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    colorStyle: {
      bg: 'bg-accent-purple/10',
      text: 'text-accent-purple-light',
      border: 'border-accent-purple/20',
    },
  },
  {
    icon: GraduationCap,
    label: 'Degree',
    value: personalInfo.degree,
    colorStyle: {
      bg: 'bg-accent-blue/10',
      text: 'text-accent-blue-light',
      border: 'border-accent-blue/20',
    },
  },
  {
    icon: Calendar,
    label: 'Graduation',
    value: personalInfo.graduation,
    colorStyle: {
      bg: 'bg-accent-cyan/10',
      text: 'text-accent-cyan-light',
      border: 'border-accent-cyan/20',
    },
  },
  {
    icon: Trophy,
    label: 'Achievement',
    value: personalInfo.hackathon,
    colorStyle: {
      bg: 'bg-accent-purple/10',
      text: 'text-accent-purple-light',
      border: 'border-accent-purple/20',
    },
  },
];

export default function About() {
  return (
    <section id="about" className="bg-bg-secondary relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-40 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Heading & Accent Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="accent-divider" aria-hidden="true">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
        </motion.div>

        {/* Two-column layout on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center mt-6">
          {/* Left Column: About Paragraph */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="glass-card p-6 sm:p-8 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan rounded-l"
                aria-hidden="true"
              />
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed sm:leading-8">
                {personalInfo.about}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="glass-card p-4 sm:p-5 flex items-start gap-4 group"
                >
                  <div
                    className={`p-3 rounded-xl shrink-0 border ${item.colorStyle.bg} ${item.colorStyle.text} ${item.colorStyle.border} group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                      {item.label}
                    </span>
                    <span className="block text-sm sm:text-base font-semibold text-text-primary leading-snug">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
