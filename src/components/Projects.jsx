import { motion, useReducedMotion } from 'framer-motion';
import { Shield, Search, FileText, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { projects } from '../data/portfolioData';

// Mapping project icon names to Lucide icon components
const projectIcons = {
  Shield,
  Search,
  FileText,
};

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="bg-bg-secondary relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[36rem] h-[18rem] bg-accent-purple/5 blur-[120px] rounded-full"
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="accent-divider" aria-hidden="true">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
          <p className="section-subheading">
            Showcasing practical AI and development work
          </p>
        </motion.div>

        {/* Project Cards Stack */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.icon] || Code2;
            const hasValidGithub = project.github && project.github !== '#';
            const hasValidLiveDemo = Boolean(project.liveDemo);

            return (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : index * 0.15,
                  ease: 'easeOut',
                }}
                className="glass-card p-6 sm:p-8 md:p-9 relative group transition-all duration-300 hover:border-border-hover hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]"
              >
                {/* Subtle top glow highlight on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                  {/* Project Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-accent-purple/10 border border-border-subtle flex items-center justify-center text-accent-purple-light group-hover:text-accent-cyan-light group-hover:border-accent-purple/40 group-hover:scale-105 transition-all duration-300 shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Card Content */}
                  <div className="flex-1 min-w-0 w-full">
                    {/* Title, Subtitle and Status */}
                    <div className="flex flex-wrap items-start justify-between gap-2.5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-accent-purple font-medium text-sm sm:text-base mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Status Badge */}
                      {project.status && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                          {project.status}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology tags row */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-bg-primary/70 border border-border-subtle text-accent-blue-light/90 hover:text-accent-cyan-light hover:border-accent-cyan/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons row */}
                    <div className="mt-6 pt-5 border-t border-border-subtle/50 flex flex-wrap items-center gap-3">
                      {/* GitHub Button */}
                      {hasValidGithub ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-bg-card border border-border-subtle hover:border-accent-purple text-text-primary hover:text-accent-cyan-light hover:bg-bg-card-hover transition-all duration-200"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4 text-accent-purple-light" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <div
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-bg-primary/50 border border-border-subtle text-text-muted cursor-default"
                          title="Source code repository will be available soon or upon request"
                        >
                          <Github className="w-4 h-4 opacity-60" />
                          <span>GitHub</span>
                          <span className="text-[11px] px-1.5 py-0.5 rounded bg-bg-secondary text-text-muted border border-border-subtle/80 font-normal">
                            Placeholder
                          </span>
                        </div>
                      )}

                      {/* Live Demo Button */}
                      {hasValidLiveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-accent-purple to-accent-blue hover:from-accent-purple-light hover:to-accent-blue-light text-white shadow-sm transition-all duration-200"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
