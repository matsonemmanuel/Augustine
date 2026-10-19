
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Users,
  Trophy,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
} from 'lucide-react'

const statistics = [
  {
    value: '4+',
    label: (
      <>
        Years in Education
        <br />
        & Community Work
      </>
    ),
    Icon: GraduationCap,
  },
  {
    value: '400+',
    label: (
      <>
        Young People
        <br />
        Mentored & Supported
      </>
    ),
    Icon: Users,
  },
  {
    value: '5',
    label: (
      <>
        Community Projects
        <br />
        Initiated & Led
      </>
    ),
    Icon: Trophy,
  },
  {
    value: '75+',
    label: (
      <>
        Orphans Supported
        <br />
        Through Education
      </>
    ),
    Icon: ChartNoAxesColumnIncreasing,
  },
]

export default function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-inner">
        <motion.div
          className="story-copy"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">MY STORY</p>

          <h2>
            A Journey Defined
            <br />
            by Purpose
          </h2>

          <p className="story-description">
            My journey combines education, community leadership, and
            youth mentorship. Through my work with CODA and community
            initiatives in Kyangwali, I have supported young people
            through learning, financial literacy, entrepreneurship,
            and career development. I believe leadership means creating
            opportunities for others to grow and build stronger communities.
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
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
            >
              <Icon
                className="stat-icon"
                size={23}
                strokeWidth={2.2}
              />

              <strong>{value}</strong>

              <span>{label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
