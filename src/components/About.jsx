
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  HandHeart,
  UserRound,
  BookOpen,
  UsersRound,
  Sprout,
} from 'lucide-react'

import portrait from '../assets/images/portrait1.jpg'

const values = [
  { label: 'Integrity', Icon: ShieldCheck, color: 'green' },
  { label: 'Service', Icon: HandHeart, color: 'gold' },
  { label: 'Leadership', Icon: UserRound, color: 'green' },
  { label: 'Learning', Icon: BookOpen, color: 'gold' },
  { label: 'Teamwork', Icon: UsersRound, color: 'green' },
  { label: 'Empowerment', Icon: Sprout, color: 'gold' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <motion.div
          className="about-photo-wrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={portrait}
            alt="Educator and community leader"
            className="about-photo"
          />

          <div className="about-quote">
            <span className="quote-mark">“</span>
            <p>
              Education is a powerful tool to transform lives and communities.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-eyebrow">ABOUT ME</p>
          <h2>More Than a Profession</h2>
          <p className="about-description">
            I am an educator, community leader and lifelong learner with a
            passion for people and progress. My journey is shaped by a
            commitment to education, leadership, community development and
            teamwork. Whether in the classroom, on the football pitch, or
            within the community, I believe in the power of people,
            collaboration and continuous growth.
          </p>

          <h3 className="values-heading">Core Values</h3>

          <div className="values-grid">
            {values.map(({ label, Icon, color }, index) => (
              <motion.div
                className="value-item"
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.35 }}
              >
                <div className={`value-icon value-icon-${color}`}>
                  <Icon size={19} strokeWidth={2.2} />
                </div>
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
