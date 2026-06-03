import { motion } from 'framer-motion'
import galleryItems from '../data/gallery'
import CTASection from '../components/CTASection'
import React from 'react'

function Gallery() {
  return (
    <div className="w-full">
      <section className="relative py-20 sm:py-28" style={{ background: 'linear-gradient(135deg,#9b1c1c,#4a0e0e)' }}>
        <div className="section-frame text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'rgba(245,232,200,0.7)' }}>Memories</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
              Our Celebration Gallery
            </h1>
            <div className="h-0.5 w-24 mx-auto mt-5 mb-6" style={{ background: 'rgba(184,147,63,0.6)' }} />
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Moments we've had the privilege of being part of — from grand Baraats to intimate ceremonies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {galleryItems.map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="break-inside-avoid mb-5 group overflow-hidden rounded-2xl relative cursor-pointer"
                style={{ border: '1px solid rgba(184,147,63,0.15)', boxShadow: '0 4px 20px rgba(155,28,28,0.07)' }}>
                <img
                  src={item.image}
                  alt={item.caption || `Gallery ${i+1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ maxHeight: i % 3 === 1 ? 320 : 220 }}
                />
                {item.caption && (
                  <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(0deg,rgba(74,14,14,0.7) 0%,transparent 55%)' }}>
                    <p className="p-4 text-white text-sm font-medium" style={{ fontFamily: 'Playfair Display,serif' }}>
                      {item.caption}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Gallery
