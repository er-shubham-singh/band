import React from 'react'

function ServiceCard({ service }) {
  return (
    <div className="card-royal group overflow-hidden flex flex-col">
<div className="relative overflow-hidden">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
  />
        <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
          style={{ background: 'linear-gradient(0deg, rgba(74,14,14,0.6) 0%, transparent 55%)' }} />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{ background: 'linear-gradient(135deg,#b8933f,#d4aa5a)', color: '#1a0a0a' }}>
            {service.category}
          </span>
        </div>
        <div className="absolute bottom-3 left-4">
          <p className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display,serif', opacity: 0.95 }}>
            {service.title}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-mid)' }}>
          {service.description}
        </p>
        <ul className="mt-4 space-y-1.5">
          {service.features.slice(0,3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#5c3a2a' }}>
              <span style={{ color: 'var(--gold)' }}>✦</span> {f}
            </li>
          ))}
        </ul>
        <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(184,147,63,0.15)' }}>
          <a href="/contact" className="text-sm font-semibold flex items-center gap-1 transition-all"
            style={{ color: 'var(--crimson)' }}>
            Book this service <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard
