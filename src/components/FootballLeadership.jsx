
import { motion } from 'framer-motion'
import {
  ArrowRight,
  UsersRound,
  ShieldCheck,
  Eye,
  MessageCircle,
  Trophy,
} from 'lucide-react'

import footballImage from '../assets/images/football.jpg'

const leadershipSkills = [
  { title: 'Teamwork', Icon: UsersRound },
  { title: 'Discipline', Icon: ShieldCheck },
  { title: 'Vision', Icon: Eye },
  { title: 'Communication', Icon: MessageCircle },
  { title: 'Results', Icon: Trophy },
]

export default function FootballLeadership() {
  return (
    <section id="football" className="football-section">
      <div className="football-inner">
        <motion.div
          className="football-photo-wrap"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={footballImage}
            alt="Football captain representing Cosmos FC"
            className="football-photo"
          />

          <div className="football-photo-overlay" />

          <span className="football-photo-caption">
            COSMOS FC
            <span>LEADERSHIP THROUGH SPORT</span>
          </span>
        </motion.div>

        <motion.div
          className="football-copy"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="portfolio-eyebrow">FOOTBALL LEADERSHIP</p>

          <h2>Leadership On The Pitch</h2>

          <p>
            As a team captain at Cosmos FC, I have developed valuable
            leadership skills such as teamwork, discipline, communication,
            decision-making and resilience—skills that translate into
            real-world impact.
          </p>

          <a href="#community" className="portfolio-gold-button">
            More About My Football Journey
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div
          className="football-pitch"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          aria-label="Leadership skills developed through football"
        >
          <div className="pitch-outline">
            <div className="pitch-center-circle" />
            <div className="pitch-center-line" />
          </div>

          <div className="pitch-ball" aria-hidden="true">
            ⚽
          </div>

          {leadershipSkills.map(({ title, Icon }, index) => (
            <div
              className={`pitch-skill pitch-skill-${index + 1}`}
              key={title}
            >
              <span className="pitch-skill-icon">
                <Icon size={15} />
              </span>
              <span>{title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
