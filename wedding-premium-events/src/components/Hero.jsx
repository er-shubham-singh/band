import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import React from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function Hero() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.06),transparent_50%)]" />
      
      <div className="section-frame relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-500/10"
          >
            Curated wedding & event design
          </motion.span>
          
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl leading-tight"
          >
            Premium wedding celebrations crafted for lasting memories.
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
          >
            Emerald Events blends modern luxury, thoughtful planning, and live entertainment to deliver unforgettable ceremonies, receptions, and festive gatherings.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#packages" className="button-primary">
              Explore packages
              <FiArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="button-secondary">
              Book a consultation
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,253,245,0.5),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(74,222,128,0.08),_transparent_30%)]" />
          <div className="relative grid gap-5 p-8 sm:p-10">
            <div className="rounded-[32px] bg-emerald-50 p-6">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-700">Signature service</p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">Elegant ceremony coordination</h2>
              <p className="mt-3 text-slate-700">We design seamless wedding journeys with custom music, decor, and logistics.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-white border border-slate-100 p-5">
                <p className="text-sm uppercase tracking-[0.32em] text-emerald-700">Live entertainment</p>
                <p className="mt-3 text-base font-semibold text-slate-900">Wedding band, dhol & shehnai</p>
              </div>
              <div className="rounded-[28px] bg-white border border-slate-100 p-5">
                <p className="text-sm uppercase tracking-[0.32em] text-emerald-700">Planning support</p>
                <p className="mt-3 text-base font-semibold text-slate-900">Bespoke coordination</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


