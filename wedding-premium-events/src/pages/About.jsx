import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'
import CTASection from '../components/CTASection'
import React from 'react'

const fadeInUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const team = [
  { name: 'Ramesh Verma', role: 'Head Dhol Master', exp: '20 yrs' },
  { name: 'Sunita Sharma', role: 'Event Coordinator', exp: '12 yrs' },
  { name: 'Anil Gupta', role: 'Shehnai Maestro', exp: '18 yrs' },
  { name: 'Priya Kapoor', role: 'Decor Director', exp: '10 yrs' }
]

function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #9b1c1c 0%, #7f1d1d 50%, #4a0e0e 100%)' }}>
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="pg" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#f5e8c8"/></pattern></defs><rect width="100%" height="100%" fill="url(#pg)"/></svg>
        </div>
        <div className="section-frame relative text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="section-label" style={{ color: 'rgba(245,232,200,0.7)' }}>About Us</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
              A Legacy of Celebration Since 1990
            </h1>
            <div className="h-0.5 w-24 mx-auto mt-5 mb-6" style={{ background: 'rgba(184,147,63,0.6)' }} />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Established in 1990, Great Popular Band has been a trusted name in wedding entertainment for over three decades. From traditional royal baraats to modern wedding processions, we have proudly served thousands of families with exceptional music, premium services, and unforgettable experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="section-label">Who We Are</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
              Great Popular Band: Royal Wedding Music Since 1990
            </h2>
            <div className="gold-divider w-20 mt-4" />
            <p className="mt-6 text-base leading-8" style={{ color: 'var(--text-mid)', fontWeight: 300 }}>
              Great Popular Band began in 1990 with a passion for creating grand wedding celebrations. Over the years, we have grown into a premier entertainment partner, bringing energetic Punjabi Dhol, powerful band teams, DJ On Wheels, vintage cars, royal baggis, horses, and premium special effects to weddings across India.
            </p>
            <p className="mt-4 text-base leading-8" style={{ color: 'var(--text-mid)', fontWeight: 300 }}>
              Our commitment to quality, professionalism, and innovation has made us one of the most trusted wedding entertainment providers. Whether it is a traditional baraat or a modern procession, we ensure every wedding becomes a memorable celebration.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="overflow-hidden rounded-3xl" style={{ boxShadow: '0 20px 60px rgba(155,28,28,0.18)', border: '2px solid rgba(184,147,63,0.2)' }}>
              <img src="https://cdn.corenexis.com/files/c/4531786720.jpg" alt="Wedding team" className="w-full h-96 object-cover"/>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg,#9b1c1c,#4a0e0e)' }}>
        <div className="section-frame grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[{ v: 35, s: '+', l: 'Years of Excellence' }, { v: 5000, s: '+', l: 'Successful Weddings' }, { v: 50000, s: '+', l: 'Happy Guests' }, { v: 100, s: '%', l: 'Customer Commitment' }].map(stat => (
            <div key={stat.l}>
              <p className="text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
                <AnimatedCounter end={stat.v} suffix={stat.s} />
              </p>
              <div className="h-0.5 w-8 mx-auto my-2" style={{ background: 'rgba(184,147,63,0.5)' }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(245,232,200,0.7)' }}>{stat.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24" style={{ background: 'var(--ivory-dark)' }}>
        <div className="section-frame">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="section-label">Our Team</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
              The Artists Behind the Magic
            </h2>
            <div className="gold-divider w-24 mx-auto mt-4" />
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-royal p-6 text-center">
                <div className="h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                  style={{ background: 'linear-gradient(135deg,#9b1c1c,#7f1d1d)', fontFamily: 'Playfair Display,serif' }}>
                  {t.name.charAt(0)}
                </div>
                <p className="font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>{t.name}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--gold)' }}>{t.role}</p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-mid)' }}>{t.exp} experience</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default About
