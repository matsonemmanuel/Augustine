import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import teachingImage from '../assets/images/work.jpg'
import communityImage from '../assets/images/community.jpg'
import footballImage from '../assets/images/football.jpg'
import youthImage from '../assets/images/teaching.jpg'
import fellowshipImage from '../assets/images/engagement.jpg'

const galleryItems = [
  {
    title: 'Teaching and Education',
    category: 'Teaching',
    image: teachingImage,
  },
  {
    title: 'Community Engagement',
    category: 'Community',
    image: communityImage,
  },
  {
    title: 'Cosmos FC Leadership',
    category: 'Football',
    image: footballImage,
  },
  {
    title: 'Youth Development',
    category: 'Community',
    image: youthImage,
  },
  {
    title: 'Fellowships and Learning',
    category: 'Fellowships',
    image: fellowshipImage,
  },
]

const categories = [
  'All',
  'Teaching',
  'Community',
  'Football',
  'Fellowships',
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        )

  return (
    <section
      id="gallery"
      className="gallery-section w-full max-w-full overflow-hidden"
    >
      <div className="gallery-inner mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-5 py-12 md:px-8 lg:grid-cols-[0.85fr_1.6fr] lg:gap-10">

        {/* Gallery introduction and filters */}
        <motion.div
          className="gallery-copy min-w-0"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="portfolio-eyebrow">GALLERY</p>

          <h2 className="mt-2 text-3xl leading-tight sm:text-4xl">
            Moments That Matter
          </h2>

          <div
            className="gallery-filters mt-5 flex flex-wrap gap-2"
            aria-label="Filter gallery images"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={`gallery-filter ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Responsive image grid */}
        <div
          className="gallery-track grid min-w-0 w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          aria-live="polite"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.figure
                className="gallery-item group relative m-0 min-w-0 w-full overflow-hidden rounded-xl"
                key={item.title}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061D2D]/90 via-transparent to-transparent opacity-90" />

                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-white">
                    <span className="min-w-0 text-sm font-medium leading-snug sm:text-base">
                      {item.title}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-[#D9AE43] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <p className="col-span-full py-8 text-sm text-white/70">
              No images found in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}