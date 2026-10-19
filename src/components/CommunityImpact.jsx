
import { motion } from 'framer-motion'
import { ArrowRight, Plus } from 'lucide-react'

import youthImage from '../assets/images/teaching.jpg'
import cleanupImage from '../assets/images/community.jpg'
import mentorshipImage from '../assets/images/work.jpg'
import skillsImage from '../assets/images/engagement.jpg'

const impactActivities = [
  {
    title: 'Education & Learning',
    description:
      'Supporting learning and encouraging young people to pursue their potential.',
    image: youthImage,
    category: 'Education',
  },
  {
    title: 'Community Engagement',
    description:
      'Working alongside others to encourage participation and community development.',
    image: cleanupImage,
    category: 'Community Service',
  },
  {
    title: 'Youth Mentorship',
    description:
      'Encouraging young people through guidance, shared learning and positive example.',
    image: mentorshipImage,
    category: 'Mentorship',
  },
  {
    title: 'Skills & Empowerment',
    description:
      'Promoting practical skills and opportunities that support personal growth.',
    image: skillsImage,
    category: 'Skills Development',
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
            My commitment to community development is rooted in education,
            youth engagement and service. Through collaboration, mentorship
            and practical learning, I believe in helping people build
            confidence, develop their abilities and contribute positively
            to their communities.
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
