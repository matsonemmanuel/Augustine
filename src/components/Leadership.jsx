
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

import communityImage from '../assets/images/engagement.jpg'
import youthImage from '../assets/images/work.jpg'
import footballImage from '../assets/images/football.jpg'
import initiativeImage from '../assets/images/community.jpg'
import fellowshipImage from '../assets/images/leadership.jpg'

const milestones = [
  {
    year: '2019',
    title: 'Community Leadership',
    image: communityImage,
    description: 'Participating in community initiatives and service.',
  },
  {
    year: '2021',
    title: 'Youth Development',
    image: youthImage,
    description: 'Supporting young people through engagement and mentorship.',
  },
  {
    year: '2023',
    title: 'Team Captain',
    subtitle: 'Cosmos FC',
    image: footballImage,
    description: 'Building teamwork, discipline and leadership through football.',
  },
  {
    year: '2024',
    title: 'Community Initiative',
    image: initiativeImage,
    description: 'Contributing to activities that bring communities together.',
  },
  {
    year: '2025',
    title: 'Leadership Fellowship',
    image: fellowshipImage,
    description: 'Developing leadership skills through continuous learning.',
  },
]

export default function Leadership() {
  const [activeIndex, setActiveIndex] = useState(0)

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? milestones.length - 1 : current - 1
    )
  }

  const next = () => {
    setActiveIndex((current) =>
      current === milestones.length - 1 ? 0 : current + 1
    )
  }

  return (
    <section id="leadership" className="leadership-section">
      <div className="leadership-inner">
        <motion.div
          className="leadership-copy"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="portfolio-eyebrow">LEADERSHIP</p>

          <h2>Leadership Beyond<br />the Classroom</h2>

          <p>
            Leadership is about people, purpose and a shared vision.
            I have had the privilege of leading in different spaces—from
            education and community initiatives to sports and youth development.
          </p>

          <a href="#community" className="portfolio-gold-button">
            View My Leadership Journey
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <div className="leadership-timeline">
          <div className="timeline-track" />

          {milestones.map((item, index) => (
            <motion.article
              className={`timeline-item ${
                activeIndex === index ? 'timeline-item-active' : ''
              }`}
              key={item.year}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <span className="timeline-dot" />

              <h3 className="timeline-year">{item.year}</h3>

              <button
                type="button"
                className="timeline-card"
                onClick={() => setActiveIndex(index)}
                aria-pressed={activeIndex === index}
                aria-label={`View ${item.title} from ${item.year}`}
              >
                <span className="timeline-card-title">{item.title}</span>

                {item.subtitle && (
                  <span className="timeline-card-subtitle">
                    {item.subtitle}
                  </span>
                )}

                <img src={item.image} alt={item.title} />

                <span className="timeline-card-arrow">
                  <ArrowRight size={14} />
                </span>
              </button>
            </motion.article>
          ))}
        </div>

        <div className="timeline-controls">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous leadership milestone"
          >
            <ChevronLeft size={17} />
          </button>

          <p>
            <strong>{milestones[activeIndex].year}</strong>
            {' — '}
            {milestones[activeIndex].description}
          </p>

          <button
            type="button"
            onClick={next}
            aria-label="Next leadership milestone"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
