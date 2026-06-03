import React from 'react'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

function CTASection() {
  return (
    <section className="w-full py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #7f1d1d 0%, #9b1c1c 40%, #4a0e0e 100%)' }}>
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10 rounded-full"
          style={{ background: 'radial-gradient(circle, #b8933f 0%, transparent 70%)', transform: 'translate(-20%,-20%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 opacity-10 rounded-full"
          style={{ background: 'radial-gradient(circle, #b8933f 0%, transparent 70%)', transform: 'translate(20%,20%)' }} />
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#f5e8c8"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="section-frame relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ background: 'rgba(184,147,63,0.5)' }} />
            <span className="section-label" style={{ color: '#f5e8c8', opacity: 0.7 }}>Book Your Celebration</span>
            <div className="h-px w-16" style={{ background: 'rgba(184,147,63,0.5)' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Playfair Display,serif' }}>
            Let's Make Your Wedding<br/>
            <span style={{ color: '#f5e8c8', fontStyle: 'italic' }}>Unforgettable</span>
          </h2>
          <p className="text-lg mb-10" style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>
            Contact our team today to discuss your dream celebration. We offer custom packages tailored to your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-gold gap-2 text-base">
              Request a Quote <FiArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+918123456789"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-3.5 text-sm font-semibold transition-all duration-300"
              style={{ borderColor: 'rgba(255,255,255,0.35)', color: 'white' }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent' }}>
              <FiPhone className="h-4 w-4" /> Call +91 81234 56789
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
