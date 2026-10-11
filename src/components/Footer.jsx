import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import matLabsLogo from '../assets/images/mat2.png'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Community', href: '#community' },
]

const portfolioLinks = [
  { label: 'Football Journey', href: '#football' },
  { label: 'Continuous Learning', href: '#learning' },
  { label: 'Fellowships', href: '#fellowships' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', text: 'in' },
  { label: 'Instagram', href: 'https://www.instagram.com/', text: 'ig' },
  { label: 'Facebook', href: 'https://www.facebook.com/', text: 'f' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="portfolio-footer">
      <div className="footer-main">
        <div className="footer-grid">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="footer-logo">
              <span className="footer-logo-mark">MAN</span>
              <span className="footer-logo-divider" />
              <span className="footer-logo-description">
                Educator · Leader · Community Builder
              </span>
            </a>

            <p className="footer-brand-text">
              Empowering people through education, purposeful leadership,
              community service and continuous learning.
            </p>

            <a href="#contact" className="footer-contact-link">
              Let&apos;s connect
              <ArrowUpRight size={15} />
            </a>
          </motion.div>

          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>My Journey</h3>
            <ul>
              {portfolioLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column footer-connect">
            <h3>Stay Connected</h3>

            <p>
              Interested in collaboration, education, mentorship or
              community development? Let&apos;s start a conversation.
            </p>

            <a href="#contact" className="footer-email-link">
              <Mail size={16} />
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </a>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <span
                    className={`footer-social-text footer-social-${social.label.toLowerCase()}`}
                  >
                    {social.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-statement">
          <span className="footer-statement-line" />
          <p>People. Purpose. Progress.</p>
          <span className="footer-statement-line" />
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {currentYear} John Doe. All rights reserved.
        </p>

        <div className="footer-powered-by">
          <span className="footer-powered-text">Powered by</span>

          <div className="footer-matlabs-link">
            <img
              src={matLabsLogo}
              alt="Mat Labs"
              className="footer-matlabs-logo"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}