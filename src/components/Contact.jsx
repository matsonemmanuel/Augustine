
import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from 'lucide-react'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setFeedback('')
    setSubmitted(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setFeedback(
        'Email service is not configured yet. Please try again later.'
      )
      setSubmitted(false)
      return
    }

    setSending(true)
    setFeedback('')
    setSubmitted(false)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      )

      setSubmitted(true)
      setFeedback(
        'Thank you! Your message has been sent successfully.'
      )

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS submission failed:', error)

      setSubmitted(false)
      setFeedback(
        'Sorry, your message could not be sent. Please try again.'
      )
    } finally {
      setSending(false)
    }
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
              href="mailto:nchimiyea@gmail.com"
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
              href="tel:+256779730339"
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

          <button
            type="submit"
            className="contact-submit"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
            <Send size={13} />
          </button>

          {feedback && (
            <p
              className="contact-feedback"
              role="status"
              aria-live="polite"
            >
              {submitted && <CheckCircle2 size={15} />}
              {feedback}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
