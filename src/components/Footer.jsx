
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import matLabsLogo from '../assets/images/mat2.png'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Teaching', href: '#teaching' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Community Impact', href: '#community' },
]

const portfolioLinks = [
  { label: 'Football Journey', href: '#football' },
  { label: 'Youth Mentorship', href: '#community' },
  { label: 'Education & Teaching', href: '#teaching' },
  { label: 'Training & Development', href: '#learning' },
  { label: 'Testimonials', href: '#testimonials' },
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
                Educator · Leader ·
                <br />
                Community Builder
              </span>
            </a>

            <p className="footer-brand-text">
              Empowering young people through education, mentorship,
              community leadership and sport. Committed to creating
              opportunities and building stronger communities.
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
              Interested in education, youth empowerment, football,
              partnerships or community development? Let&apos;s
              connect and explore opportunities to make a difference.
            </p>

            <a
              href="mailto:nchimiyea@gmail.com"
              className="footer-email-link"
            >
              <Mail size={16} />
              <span>Send me an email</span>
              <ArrowUpRight size={14} />
            </a>

            <a
              href="tel:+256779730339"
              className="footer-contact-link"
            >
              <Phone size={15} />
              <span>+256 779 730 339</span>
            </a>

            <div className="footer-socials">
              <a
                href="https://www.linkedin.com/in/nchimiye-augustine-56b169327?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <span className="footer-social-text footer-social-linkedin">
                  in
                </span>
              </a>

              <a
                href="https://www.instagram.com/nchimiyeaugustine?psln=NXQ2b3MwYjVueWY3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <span className="footer-social-text footer-social-instagram">
                  ig
                </span>
              </a>

              <a
                href="https://www.facebook.com/share/19dJ48DrBe/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <span className="footer-social-text footer-social-facebook">
                  f
                </span>
              </a>
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
          &copy; {currentYear} Muganza Augustine Nchimiye.
          All rights reserved.
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
