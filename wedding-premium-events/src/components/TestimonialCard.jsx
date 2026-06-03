import React from 'react'

function TestimonialCard({ testimonial }) {
  return (
    <div className="card-royal p-6 flex flex-col gap-4">
      <div className="flex items-center gap-1">
        {[1,2,3,4,5].map(i => (
          <span key={i} style={{ color: '#b8933f', fontSize: '0.85rem' }}>★</span>
        ))}
      </div>
      <p className="text-sm leading-7 italic flex-1" style={{ color: 'var(--text-mid)', fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
        "{testimonial.message}"
      </p>
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(184,147,63,0.15)' }}>
        <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#9b1c1c,#7f1d1d)', fontFamily: 'Playfair Display,serif' }}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--maroon)', fontFamily: 'Playfair Display,serif' }}>
            {testimonial.name}
          </p>
          <p className="text-xs" style={{ color: 'var(--gold)' }}>{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
