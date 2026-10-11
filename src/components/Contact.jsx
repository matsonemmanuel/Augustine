import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (submitted) {
      setSubmitted(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(formData.subject)

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    // Opens the visitor's default email application.
    // Replace this address with the portfolio owner's real email.
    window.location.href =
      `mailto:john.doe@example.com?subject=${subject}&body=${body}`

    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <motion.div
          className="contact-copy"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="portfolio-eyebrow">LET'S CONNECT</p>

          <h2>Let's Work Together</h2>

          <p className="contact-description">
            Whether you are interested in education, community development,
            leadership, collaboration or shared learning, I would be glad
            to connect.
          </p>

          <div className="contact-details">
            <a
              href="mailto:john.doe@example.com"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Mail size={14} />
              </span>

              <span>
                <strong>Email</strong>
                <small>nchimiyea@gmail.com</small>
              </span>
            </a>

            <a
              href="tel:+254712345678"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Phone size={14} />
              </span>

              <span>
                <strong>Phone</strong>
                <small>+256 779 730 339</small>
              </span>
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={14} />
              </span>

              <span>
                <strong>Location</strong>
                <small>Kikuube, Uganda</small>
              </span>
            </div>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <span className="linkedin-letter">in</span>
              </span>

              <span>
                <strong>LinkedIn</strong>
                <small>Connect professionally</small>
              </span>
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Message subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            aria-label="Your message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="contact-submit">
            Send Message
            <Send size={13} />
          </button>

          {submitted && (
            <p className="contact-feedback" role="status">
              <CheckCircle2 size={15} />
              Your email application should open with your message.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}