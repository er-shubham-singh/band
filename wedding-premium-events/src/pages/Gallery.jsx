import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import galleryItems from '../data/gallery'

const ITEMS_PER_PAGE = 12
const MotionDiv = motion.div

function Gallery() {
  const [currentPage, setCurrentPage] = useState(1)
  const gallerySectionRef = useRef(null)
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE)
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return galleryItems.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="w-full">
      <section className="relative py-20 sm:py-28" style={{ background: 'linear-gradient(135deg,#9b1c1c,#4a0e0e)' }}>
        <div className="section-frame text-center">
          <MotionDiv initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'rgba(245,232,200,0.7)' }}>Memories</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
              Our Celebration Gallery
            </h1>
            <div className="h-0.5 w-24 mx-auto mt-5 mb-6" style={{ background: 'rgba(184,147,63,0.6)' }} />
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Moments we've had the privilege of being part of - from grand Baraats to intimate ceremonies.
            </p>
          </MotionDiv>
        </div>
      </section>

      <section ref={gallerySectionRef} className="py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {paginatedItems.map((item, i) => (
              <MotionDiv
                key={`${item.image}-${i}`}
                className="break-inside-avoid mb-5 group overflow-hidden rounded-2xl relative cursor-pointer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.04 }}
              >
                <img
                  src={item.image}
                  alt={item.caption || item.title || `Gallery ${(currentPage - 1) * ITEMS_PER_PAGE + i + 1}`}
                  className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {(item.caption || item.title) && (
                  <div
                    className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(0deg,rgba(74,14,14,0.7) 0%,transparent 55%)',
                    }}
                  >
                    <p
                      className="p-4 text-white text-sm font-medium"
                      style={{ fontFamily: 'Playfair Display,serif' }}
                    >
                      {item.caption || item.title}
                    </p>
                  </div>
                )}
              </MotionDiv>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-full text-sm font-semibold transition disabled:opacity-45 disabled:cursor-not-allowed"
                style={{
                  color: '#4a0e0e',
                  border: '1px solid rgba(74,14,14,0.25)',
                  background: '#fffaf0',
                }}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, index) => {
                const page = index + 1
                const isActive = currentPage === page

                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => handlePageChange(page)}
                    className="h-10 w-10 rounded-full text-sm font-semibold transition"
                    style={{
                      color: isActive ? '#fff' : '#4a0e0e',
                      border: '1px solid rgba(74,14,14,0.25)',
                      background: isActive ? '#9b1c1c' : '#fffaf0',
                    }}
                    aria-label={`Go to gallery page ${page}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {page}
                  </button>
                )
              })}

              <button
                type="button"
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-full text-sm font-semibold transition disabled:opacity-45 disabled:cursor-not-allowed"
                style={{
                  color: '#4a0e0e',
                  border: '1px solid rgba(74,14,14,0.25)',
                  background: '#fffaf0',
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Gallery
