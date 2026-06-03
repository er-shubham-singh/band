import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import React from 'react'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } } }
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } } }

function Hero() {
  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-32"
      style={{ background: 'linear-gradient(135deg, #fdf8f1 0%, #fef9f0 50%, #fdf3e7 100%)' }}>
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(184,147,63,0.12) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(155,28,28,0.1) 0%, transparent 70%)', transform: 'translate(20%, 20%)' }} />
        {/* Subtle pattern lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9b1c1c" strokeWidth="1"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="section-frame relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="gold-divider w-12" />
            <span className="section-label">Premier Wedding Entertainment</span>
            <div className="gold-divider w-12" />
          </motion.div>

          <motion.h1 variants={fadeUp}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
            Your Royal<br/>
            <span style={{ color: 'var(--crimson)', fontStyle: 'italic' }}>Celebration</span>{' '}
            <span style={{ color: 'var(--gold)' }}>Begins</span><br/>
            Here.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8"
            style={{ color: 'var(--text-mid)', fontFamily: 'Outfit,sans-serif', fontWeight: 300 }}>
            From thunderous Dhol parties to soulful Shehnai, grand Baraat processions to Ghori & Baggi arrivals — we craft every moment of your wedding with unmatched artistry.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/packages" className="btn-gold gap-2">
              Explore Packages <FiArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+918123456789" className="btn-outline gap-2">
              <FiPhone className="h-4 w-4" /> Call Now
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--crimson)' }}>500+</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--gold)' }}>Events Done</p>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(184,147,63,0.3)' }} />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--crimson)' }}>15+</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--gold)' }}>Years Legacy</p>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(184,147,63,0.3)' }} />
            <div className="text-center">
              <p className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--crimson)' }}>98%</p>
              <p className="text-xs uppercase tracking-widest mt-1" style={{ color: 'var(--gold)' }}>Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right panel */}
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
          className="relative">
          <div className="relative overflow-hidden rounded-3xl"
            style={{ boxShadow: '0 30px 80px rgba(155,28,28,0.18)', border: '2px solid rgba(184,147,63,0.2)' }}>
            <img
              src="https://images.unsplash.com/photo-1524439941394-4b99d1578c53?auto=format&w=1200&q=85"
              alt="Grand wedding celebration"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(0deg, rgba(74,14,14,0.5) 0%, transparent 55%)' }} />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-sm font-medium opacity-80 tracking-wider">✦ Grand Baraat Arrival ✦</p>
              <p className="text-white text-xl font-bold mt-1" style={{ fontFamily: 'Playfair Display,serif' }}>
                Making Every Entrance Legendary
              </p>
            </div>
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="absolute -top-5 -right-4 rounded-2xl p-4 text-center"
            style={{ background: 'linear-gradient(135deg,#b8933f,#d4aa5a)', boxShadow: '0 8px 30px rgba(184,147,63,0.4)', minWidth: 100 }}>
            <p className="text-[#1a0a0a] text-2xl font-bold" style={{ fontFamily: 'Playfair Display,serif' }}>★ 4.9</p>
            <p className="text-[#1a0a0a] text-xs font-semibold mt-0.5 opacity-80">Google Rating</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
