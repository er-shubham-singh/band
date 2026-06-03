import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import galleryItems from '../data/gallery'
import React from 'react'

const categories = ['All', 'Ceremony', 'Reception', 'Portraits', 'Decor']

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => (activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)),
    [activeCategory]
  )

  return (
    <div className="space-y-14">
      <section className="section-frame">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44]">Gallery</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Visual stories from premium weddings and events.</h1>
          <p className="mt-6 section-description">Explore our curated celebration imagery in a tactile masonry layout with refined filters and a lightbox preview.</p>
        </div>
      </section>

      <section className="section-frame">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategory === category ? 'bg-[#1f5d44] text-white' : 'bg-white text-slate-700 shadow-sm shadow-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 masonry-grid">
          {filtered.map((item) => (
            <motion.button
              key={item.title}
              type="button"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(item)}
              className="masonry-item group w-full overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-0 text-left shadow-[0_35px_90px_rgba(15,23,42,0.06)]"
            >
              <div className="relative h-96 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <p className="text-sm uppercase tracking-[0.35em] text-[#d9e8d8]">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4"
        >
          <div className="relative max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-[0_40px_120px_rgba(15,23,42,0.3)]">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg shadow-slate-900/10"
            >
              ✕
            </button>
            <img src={selected.image} alt={selected.title} className="h-[520px] w-full object-cover sm:h-[620px]" />
            <div className="space-y-3 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44]">{selected.category}</p>
              <h2 className="text-3xl font-semibold text-slate-900">{selected.title}</h2>
              <p className="text-slate-600">{selected.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Gallery
