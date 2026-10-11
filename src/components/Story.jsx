
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Users,
  Trophy,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
} from 'lucide-react'

const statistics = [
  { value: '8+', label: <>Years of Teaching<br />Experience</>, Icon: GraduationCap },
  { value: '15+', label: <>Community<br />Initiatives</>, Icon: Users },
  { value: '5', label: <>Leadership<br />Roles</>, Icon: Trophy },
  { value: '10+', label: <>Trainings &<br />Fellowships</>, Icon: ChartNoAxesColumnIncreasing },
]

export default function Story() {
  return (
    <section className="story-section">
      <div className="story-inner">
        <motion.div
          className="story-copy"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">MY STORY</p>
          <h2>A Journey Defined<br />by Purpose</h2>
          <p className="story-description">
            Teaching has been more than a profession; it has been a pathway
            to empower others, build confidence, and contribute to the growth
            of the community. Through education, football leadership and
            continuous learning, I strive to create opportunities and inspire
            positive change.
          </p>
          <a href="#about" className="story-button">
            Read My Story <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="statistics-grid">
          {statistics.map(({ value, label, Icon }, index) => (
            <motion.article
              className="stat-card"
              key={value}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Icon className="stat-icon" size={23} strokeWidth={2.2} />
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
