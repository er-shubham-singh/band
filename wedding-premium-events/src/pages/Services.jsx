import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import services from '../data/services'
import React from 'react'

function Services() {
  return (
    <div className="w-full">
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #9b1c1c 0%, #7f1d1d 50%, #4a0e0e 100%)' }}>
        <div className="section-frame relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'rgba(245,232,200,0.7)' }}>What We Offer</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
              Our Wedding Services
            </h1>
            <div className="h-0.5 w-24 mx-auto mt-5 mb-6" style={{ background: 'rgba(184,147,63,0.6)' }} />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Every service crafted to make your celebration extraordinary — from the first dhol beat to the final farewell.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Services
