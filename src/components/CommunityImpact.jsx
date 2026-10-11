
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'

import youthImage from '../assets/images/teaching.jpg'
import cleanupImage from '../assets/images/community.jpg'
import mentorshipImage from '../assets/images/work.jpg'
import skillsImage from '../assets/images/engagement.jpg'

const impactActivities = [
  {
    title: 'Youth Education Program',
    description: 'Empowering young minds through education.',
    image: youthImage,
    category: 'Education',
  },
  {
    title: 'Community Clean-up',
    description: 'Creating a cleaner community for a healthier tomorrow.',
    image: cleanupImage,
    category: 'Community Service',
  },
  {
    title: 'Youth Mentorship',
    description: 'Guiding the next generation.',
    image: mentorshipImage,
    category: 'Mentorship',
  },
  {
    title: 'Skills Development',
    description: 'Creating opportunities through practical skills.',
    image: skillsImage,
    category: 'Skills',
  },
]

export default function CommunityImpact() {
  return (
    <section id="community" className="community-section">
      <div className="community-inner">
        <motion.div
          className="community-copy"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="portfolio-eyebrow">COMMUNITY IMPACT</p>

          <h2>Leadership Through Service</h2>

          <p>
            I actively participate in community initiatives that promote
            education, youth empowerment and social development. My work
            is driven by a belief that strong communities create brighter
            futures.
          </p>

          <a href="#impact-stories" className="portfolio-gold-button">
            Explore Impact Stories
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="community-cards">
          {impactActivities.map((activity, index) => (
            <motion.article
              className="community-card"
              key={activity.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="community-card-image-wrap">
                <img src={activity.image} alt={activity.title} />

                <span className="community-card-category">
                  {activity.category}
                </span>
              </div>

              <div className="community-card-content">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>

              <a
                className="community-card-link"
                href="#impact-stories"
                aria-label={`Explore ${activity.title}`}
              >
                <Plus size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
