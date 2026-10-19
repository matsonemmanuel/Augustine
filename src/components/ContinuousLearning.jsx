
import { motion } from 'framer-motion'
import {
  BookOpenCheck,
  UsersRound,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
} from 'lucide-react'

const learningAreas = [
  {
    title: 'Professional Development',
    description:
      'Building practical knowledge and skills to strengthen my work in education and community development.',
    icon: BookOpenCheck,
    details: 'Explore professional development',
  },
  {
    title: 'Leadership & Service',
    description:
      'Developing leadership capacity through community engagement, teamwork and service.',
    icon: UsersRound,
    details: 'Explore leadership experiences',
  },
  {
    title: 'Continuous Learning',
    description:
      'Applying lessons from learning experiences to improve my leadership and contribution to society.',
    icon: ChartNoAxesColumnIncreasing,
    details: 'Explore my learning journey',
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
            CONTINUOUS LEARNING &amp; DEVELOPMENT
          </p>

          <h2>Always Learning. Always Growing.</h2>

          <p>
            I believe continuous learning is essential to effective
            leadership, meaningful community service and personal growth.
            Through professional development, collaboration and practical
            experience, I continue to strengthen my ability to educate,
            lead and contribute to positive change.
          </p>

          <a href="#leadership" className="portfolio-gold-button">
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
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
              >
                <span className="continuous-icon">
                  <Icon size={19} />
                </span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>

                <a href="#leadership">
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
