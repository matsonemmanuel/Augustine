
import { motion } from 'framer-motion'
import {
  BookOpen,
  Users,
  Heart,
  CircleDot,
  ChartNoAxesColumnIncreasing,
  ArrowRight,
} from 'lucide-react'

import portrait from '../assets/images/portrait.jpg'
import teaching from '../assets/images/teaching.jpg'
import football from '../assets/images/football.jpg'
import community from '../assets/images/community.jpg'

const themes = [
  { label: 'Teaching', Icon: BookOpen },
  { label: 'Leadership', Icon: Users },
  { label: 'Mentorship', Icon: Heart },
  { label: 'Football', Icon: CircleDot },
  { label: 'Entrepreneurship', Icon: ChartNoAxesColumnIncreasing },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" />
      <div className="hero-gold-line hero-gold-line-one" />
      <div className="hero-gold-line hero-gold-line-two" />

      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-eyebrow">
            EDUCATOR · COMMUNITY LEADER · YOUTH MENTOR
          </p>

          <h1 className="hero-title">
            Empowering People.
            <span>Leading With Purpose.</span>
            <span>Creating Meaningful Impact.</span>
          </h1>

          <p className="hero-description">
            I am Muganza Augustine Nchimiye, an educator, community
            leader and youth mentor serving young people through
            education, entrepreneurship and community development.
            As Director of Finance and Operations at CODA and captain
            of Cosmos FC, I believe in building opportunities through
            service, teamwork and leadership.
          </p>

          <div className="hero-actions">
            <a href="#about" className="hero-button hero-button-gold">
              Explore My Journey <ArrowRight size={16} />
            </a>

            <a href="#contact" className="hero-button hero-button-outline">
              Get In Touch
            </a>
          </div>

          <div className="hero-themes">
            {themes.map(({ label, Icon }) => (
              <a
                href={
                  label === 'Teaching'
                    ? '#teaching'
                    : label === 'Leadership'
                      ? '#leadership'
                      : label === 'Mentorship'
                        ? '#community'
                        : label === 'Football'
                          ? '#football'
                          : '#learning'
                }
                key={label}
              >
                <Icon size={20} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="hero-visual">
          {/* Classroom photograph behind the main portrait */}
          <motion.div
            className="hero-photo hero-photo-teaching"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <img
              src={teaching}
              alt="Augustine supporting learners and classroom engagement"
            />
          </motion.div>

          {/* Cosmos FC photograph, tilted like the reference */}
          <motion.div
            className="hero-photo hero-photo-football"
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={football}
              alt="Football and team leadership at Cosmos FC"
            />
          </motion.div>

          {/* Community image at the far right */}
          <motion.div
            className="hero-photo hero-photo-community"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={community}
              alt="Community engagement and development activities"
            />
          </motion.div>

          {/* Main portrait stays in the foreground */}
          <motion.div
            className="hero-photo hero-photo-portrait"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={portrait}
              alt="Muganza Augustine Nchimiye"
            />
          </motion.div>

          {/* Handwritten words positioned above the community imagery */}
          <div className="hero-handwriting">
            <span>People</span>
            <span>Purpose</span>
            <span>Progress</span>

            <svg
              viewBox="0 0 120 30"
              aria-hidden="true"
              className="hero-handwriting-stroke"
            >
              <path d="M3 23 Q55 2 117 7" />
              <path d="M32 29 Q74 12 105 15" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
