import { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import React from 'react'

function GallerySlider({ items }) {
  const [index, setIndex] = useState(0)
  const visible = 3
  const max = Math.max(0, items.length - visible)
  const prev = () => setIndex(i => Math.max(0, i - 1))
  const next = () => setIndex(i => Math.min(max, i + 1))

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${index * (100 / visible)}% - ${index * (16 / visible)}px))` }}>
          {items.map((item, i) => (
            <div key={i} className="flex-shrink-0 group overflow-hidden rounded-2xl relative cursor-pointer"
              style={{ width: `calc(${100 / visible}% - ${(visible - 1) * 16 / visible}px)`, minWidth: 220,
                border: '1px solid rgba(184,147,63,0.15)', boxShadow: '0 4px 20px rgba(155,28,28,0.08)' }}>
              <img src={item.image} alt={item.caption || ''} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-108" />
              {item.caption && (
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(0deg,rgba(74,14,14,0.65),transparent 55%)' }}>
                  <p className="p-3 text-white text-sm font-medium" style={{ fontFamily: 'Playfair Display,serif' }}>{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {max > 0 && (
        <div className="flex justify-center gap-3 mt-6">
          <button onClick={prev} disabled={index === 0}
            className="h-10 w-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{ border: '2px solid var(--crimson)', color: 'var(--crimson)' }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--crimson-light)'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} disabled={index >= max}
            className="h-10 w-10 rounded-full flex items-center justify-center transition-all disabled:opacity-30"
            style={{ border: '2px solid var(--crimson)', color: 'var(--crimson)' }}
            onMouseOver={e => e.currentTarget.style.background = 'var(--crimson-light)'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}

export default GallerySlider
