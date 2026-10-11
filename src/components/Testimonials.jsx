
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'His dedication to teaching and community development is truly inspiring. He brings people together and creates opportunities for growth.',
    name: 'Sarah Ahmed',
    role: 'Colleague',
    initials: 'SA',
  },
  {
    quote:
      'An exceptional leader both in and out of the classroom. His commitment to youth empowerment is remarkable.',
    name: 'James Okello',
    role: 'Community Partner',
    initials: 'JO',
  },
  {
    quote:
      'A great team captain who leads with humility, discipline and vision. He inspires those around him to become better.',
    name: 'Daniel K.',
    role: 'Teammate, Cosmos FC',
    initials: 'DK',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleTestimonials = Array.from(
    { length: testimonials.length },
    (_, index) => testimonials[(activeIndex + index) % testimonials.length]
  )

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    )
  }

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-inner">
        <motion.div
          className="testimonials-copy"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="portfolio-eyebrow">TESTIMONIALS</p>

          <h2>What People Say</h2>

          <p>
            I am grateful to work with amazing people—students, colleagues,
            community members and teammates—who have been part of this journey.
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <button
            type="button"
            className="testimonial-arrow"
            onClick={previous}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={17} />
          </button>

          <div className="testimonial-cards">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.article
                  className="testimonial-card"
                  key={`${testimonial.initials}-${activeIndex}`}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                >
                  <Quote
                    size={15}
                    className="testimonial-quote-icon"
                    aria-hidden="true"
                  />

                  <p className="testimonial-quote">
                    {testimonial.quote}
                  </p>

                  <div className="testimonial-author">
                    <span className="testimonial-avatar">
                      {testimonial.initials}
                    </span>

                    <div>
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="testimonial-arrow"
            onClick={next}
            aria-label="Next testimonials"
          >
            <ChevronRight size={17} />
          </button>

          <div className="testimonial-dots" aria-label="Testimonial position">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.initials}
                type="button"
                className={`testimonial-dot ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={activeIndex === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
