import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,

  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from 'lucide-react'
import { personalInfo, socialLinks } from '../data/portfolioData'
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error for field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setIsSubmitted(false)
    setErrors({})
  }

  const emailAddress = personalInfo.email || 'kdongare1@gmail.com'
  const phoneNumber = personalInfo.phone || '+91-8767392534'
  const cleanPhone = phoneNumber.replace(/[\s-]/g, '')
  const locationText = personalInfo.location || 'Pune, India'
  const linkedinUrl = socialLinks.linkedin || '#'
  const githubUrl = socialLinks.github || '#'

  return (
    <section id="contact" className="bg-bg-secondary py-20 md:py-24">
      <div className="section-container">
        {/* Section Heading with gradient text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-heading">
            <span className="gradient-text">
              Let&apos;s Build Something Amazing Together.
            </span>
          </h2>
          <div className="accent-divider" aria-hidden="true">
            <span className="bg-accent-purple" />
            <span className="bg-accent-blue" />
            <span className="bg-accent-cyan" />
          </div>
          <p className="section-subheading">
            Whether you have an upcoming project, a full-time opportunity, or
            just want to talk AI and backend development, my inbox is always
            open.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-text-primary mb-2">
                Get in Touch
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Feel free to reach out directly via email, phone, or connect on
                professional networks.
              </p>
            </div>

            {/* Email Link */}
            <a
              href={`mailto:${emailAddress}`}
              className="glass-card p-4 flex items-center gap-4 group transition-all block"
            >
              <div className="p-3 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple group-hover:scale-110 group-hover:bg-accent-purple/20 group-hover:border-accent-purple/40 transition-all duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-text-muted uppercase tracking-wider">
                  Email
                </span>
                <span className="block text-sm sm:text-base font-medium text-text-primary group-hover:text-accent-purple-light transition-colors break-all">
                  {emailAddress}
                </span>
              </div>
            </a>

            {/* Phone Link */}
            <a
              href={`tel:${cleanPhone}`}
              className="glass-card p-4 flex items-center gap-4 group transition-all block"
            >
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue group-hover:scale-110 group-hover:bg-accent-blue/20 group-hover:border-accent-blue/40 transition-all duration-300 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-text-muted uppercase tracking-wider">
                  Phone
                </span>
                <span className="block text-sm sm:text-base font-medium text-text-primary group-hover:text-accent-blue-light transition-colors">
                  {phoneNumber}
                </span>
              </div>
            </a>

            {/* Location (Non-clickable info) */}
            <div className="glass-card p-4 flex items-center gap-4 border-border-subtle">
              <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-text-muted uppercase tracking-wider">
                  Location
                </span>
                <span className="block text-sm sm:text-base font-medium text-text-primary">
                  {locationText}
                </span>
              </div>
            </div>

            {/* LinkedIn Link */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-4 group transition-all block"
            >
              <div className="p-3 rounded-xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple group-hover:scale-110 group-hover:bg-accent-purple/20 group-hover:border-accent-purple/40 transition-all duration-300 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-text-muted uppercase tracking-wider">
                  LinkedIn
                </span>
                <span className="block text-sm sm:text-base font-medium text-text-primary group-hover:text-accent-purple-light transition-colors">
                  Connect on LinkedIn
                </span>
              </div>
            </a>

            {/* GitHub Link */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 flex items-center gap-4 group transition-all block"
            >
              <div className="p-3 rounded-xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue group-hover:scale-110 group-hover:bg-accent-blue/20 group-hover:border-accent-blue/40 transition-all duration-300 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-xs font-medium text-text-muted uppercase tracking-wider">
                  GitHub
                </span>
                <span className="block text-sm sm:text-base font-medium text-text-primary group-hover:text-accent-blue-light transition-colors">
                  Explore GitHub Projects
                </span>
              </div>
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 sm:p-8 relative">
              {isSubmitted ? (
                /* Success State with Placeholder Warning */
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan mb-2">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    Message Received!
                  </h3>
                  <div className="bg-bg-primary border border-border-subtle rounded-xl p-4 text-left space-y-2">
                    <div className="flex items-start gap-2.5 text-accent-purple-light text-sm font-semibold">
                      <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>Demo Mode Notification</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      Thank you for reaching out,{' '}
                      <span className="font-semibold text-text-primary">
                        {formData.name}
                      </span>
                      ! Please note that this contact form is currently a demo
                      placeholder and is not connected to a live backend.
                    </p>
                    <p className="text-xs sm:text-sm text-text-muted">
                      To ensure I receive your inquiry, please send an email
                      directly to{' '}
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-accent-purple-light underline hover:text-accent-cyan-light"
                      >
                        {emailAddress}
                      </a>
                      .
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-bg-card hover:bg-bg-card-hover border border-border-subtle hover:border-accent-purple/40 text-text-primary text-sm font-medium transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Active Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
                    >
                      Name <span className="text-accent-purple">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full bg-bg-primary border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-border-subtle'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
                    >
                      Email <span className="text-accent-purple">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full bg-bg-primary border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-border-subtle'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Subject field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
                    >
                      Subject <span className="text-accent-purple">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Opportunity / Project Inquiry"
                      className={`w-full bg-bg-primary border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-border-subtle'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-text-secondary uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-accent-purple">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`w-full bg-bg-primary border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent-purple focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? 'border-red-500/70 focus:border-red-500'
                          : 'border-border-subtle'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent-purple hover:bg-accent-purple-light text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-purple"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
