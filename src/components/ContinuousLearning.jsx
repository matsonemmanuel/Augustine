
import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  UsersRound,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
} from 'lucide-react'

const learningAreas = [
  {
    title: 'Professional Trainings',
    description: 'Short courses, workshops and certifications.',
    icon: BookOpenCheck,
    details: 'Explore training experiences',
  },
  {
    title: 'Fellowships',
    description: 'Leadership and community development programmes.',
    icon: UsersRound,
    details: 'Explore fellowship experiences',
  },
  {
    title: 'Leadership Development',
    description: 'Building skills for greater impact.',
    icon: ChartNoAxesColumnIncreasing,
    details: 'Explore leadership growth',
  },
]

export default function ContinuousLearning() {
  return (
    <section id="learning" className="continuous-section">
      <div className="continuous-inner">
        <motion.div
          className="continuous-copy"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="portfolio-eyebrow">
            CONTINUOUS LEARNING & FELLOWSHIPS
          </p>

          <h2>Always Learning. Always Growing.</h2>

          <p>
            I am committed to continuous learning through trainings,
            workshops and fellowships that strengthen my leadership,
            teaching and community impact.
          </p>

          <a href="#testimonials" className="portfolio-gold-button">
            View My Learning Journey
            <ArrowRight size={13} />
          </a>
        </motion.div>

        <div className="continuous-cards">
          {learningAreas.map((area, index) => {
            const Icon = area.icon

            return (
              <motion.article
                className="continuous-card"
                key={area.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <span className="continuous-icon">
                  <Icon size={19} />
                </span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

                <a href="#testimonials">
                  View Details <ArrowRight size={11} />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
