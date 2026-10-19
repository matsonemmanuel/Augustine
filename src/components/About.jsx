
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
  { label: 'Teamwork', Icon: BookOpen, color: 'gold' },
  { label: 'Discipline', Icon: UsersRound, color: 'green' },
  { label: 'Community', Icon: Sprout, color: 'gold' },
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
            alt="Muganza Augustine Nchimiye, educator and community leader"
            className="about-photo"
            loading="lazy"
          />

          <div className="about-quote">
            <span className="quote-mark">“</span>
            <p>
              Leadership is about creating opportunities for others
              to grow, participate, and realise their potential.
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
            I am Muganza Augustine Nchimiye, an educator, community
            leader, youth mentor, and football leader based in
            Kyangwali, Uganda. As Director of Finance and Operations
            at the Community Development Association (CODA), I
            contribute to community development while supporting
            young people through education, mentorship, financial
            literacy, and entrepreneurship. From the classroom to
            the football pitch, I believe in responsible leadership,
            teamwork, and creating opportunities for people to
            realise their potential.
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
                transition={{
                  delay: index * 0.07,
                  duration: 0.35,
                }}
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
