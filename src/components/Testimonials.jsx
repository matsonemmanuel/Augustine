
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Augustine demonstrates a strong commitment to education and personal development. His dedication to helping young people learn and grow reflects the value he places on creating opportunities for others.',
    name: 'Education Colleague',
    role: 'Teaching & Education',
    initials: 'EC',
  },
  {
    quote:
      'His involvement in community initiatives reflects a commitment to service, collaboration and youth empowerment. He values working with others to contribute to positive change.',
    name: 'Community Collaborator',
    role: 'Community Development',
    initials: 'CC',
  },
  {
    quote:
      'Through football, Augustine demonstrates the importance of teamwork, discipline and shared responsibility. These qualities contribute to his approach to leadership both on and off the pitch.',
    name: 'Football Colleague',
    role: 'Sports & Teamwork',
    initials: 'FC',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const visibleTestimonials = Array.from(
    { length: testimonials.length },
    (_, index) =>
      testimonials[(activeIndex + index) % testimonials.length]
  )

  const previous = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    )
  }

  const next = () => {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    )
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

          <h2>Words That Reflect the Journey</h2>

          <p>
            Meaningful work is built through relationships, collaboration
            and shared purpose. The perspectives of students, colleagues,
            community members and teammates help tell the story of this
            journey.
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
                  transition={{
                    duration: 0.25,
                    delay: index * 0.04,
                  }}
                >
                  <Quote
                    size={18}
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

          <div
            className="testimonial-dots"
            aria-label="Testimonial position"
          >
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.initials}
                type="button"
                className={`testimonial-dot ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={
                  activeIndex === index ? 'true' : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
