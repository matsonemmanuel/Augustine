
import { motion } from 'framer-motion'
import {
  ArrowRight,
  UsersRound,
  BookOpen,
  Target,
  Sprout,
} from 'lucide-react'

import classroomImage from '../assets/images/teaching.jpg'

const teachingApproach = [
  { title: 'Student Mentorship', Icon: UsersRound },
  { title: 'Practical Learning', Icon: BookOpen },
  { title: 'Confidence Building', Icon: Target },
  { title: 'Personal Development', Icon: Sprout },
]

export default function Teaching() {
  return (
    <section id="teaching" className="teaching-section">
      <div className="teaching-inner">
        <motion.div
          className="teaching-copy"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="portfolio-eyebrow">
            TEACHING &amp; EDUCATION
          </p>

          <h2>Teaching With Purpose</h2>

          <div className="teaching-journey">
            <span>Knowledge</span>
            <ArrowRight size={14} />
            <span>Confidence</span>
            <ArrowRight size={14} />
            <span>Opportunity</span>
          </div>

          <p className="teaching-description">
            Through my teaching experience at Maratatu Primary School
            and my commitment to education, I aim to help learners
            develop their knowledge, confidence and potential. I believe
            that meaningful education goes beyond the classroom,
            equipping young people with the skills and values they need
            to contribute positively to their communities.
          </p>

          <a
            href="#teaching-experience"
            className="portfolio-gold-button"
          >
            Explore My Teaching Experience
            <ArrowRight size={15} />
          </a>
        </motion.div>

        <motion.div
          className="teaching-image-wrap"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={classroomImage}
            alt="Teaching and engaging learners in a classroom"
            className="teaching-image"
          />
        </motion.div>

        <motion.aside
          className="teaching-approach-card"
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3>My Teaching Approach</h3>

          <div className="teaching-approach-list">
            {teachingApproach.map(({ title, Icon }, index) => (
              <motion.div
                className="teaching-approach-item"
                key={title}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
              >
                <span className="approach-icon">
                  <Icon size={13} />
                </span>

                <span>{title}</span>
              </motion.div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  )
}
