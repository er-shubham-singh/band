import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import React from 'react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f0e4] py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(31,93,68,0.08),transparent_24%)]" />
      <div className="section-frame relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div className="max-w-2xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.span variants={itemVariants} className="inline-flex rounded-full bg-[#d9e8d8] px-4 py-2 text-sm font-semibold text-[#1f5d44] shadow-sm shadow-[#1f5d4420]">
            Luxury ceremonies with expressive wedding rhythm
          </motion.span>

          <motion.h1 variants={itemVariants} className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl xl:text-6xl leading-tight">
            A premium wedding experience built around your story.
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            White Orchid Events creates elegant processions, live music celebrations, and full-scale event management for modern couples who want every moment to feel refined.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#packages" className="button-primary">
              Explore packages
              <FiArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="button-secondary">
              Contact our team
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.92),transparent_16%),radial-gradient(circle_at_bottom_right,rgba(243,219,181,0.18),transparent_28%)]" />
          <div className="relative grid gap-5 p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[32px] bg-[#f3eadc] p-6">
                <p className="text-sm uppercase tracking-[0.34em] text-[#1f5d44]">Procession styling</p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Grand entrance design</h2>
                <p className="mt-3 text-slate-700">From ghori ceremony arrivals to elegant baggi processions, we make every entrance unforgettable.</p>
              </div>
              <div className="rounded-[32px] bg-white p-6 shadow-sm border border-slate-200">
                <p className="text-sm uppercase tracking-[0.34em] text-[#1f5d44]">Curated entertainment</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">Dhol, band & shehnai</h3>
                <p className="mt-2 text-slate-600">Live musical experiences and ceremony ambiance tailored to your celebration.</p>
              </div>
            </div>
            <div className="rounded-[32px] overflow-hidden bg-slate-950/5">
              <img
                src="https://images.unsplash.com/photo-1524439941394-4b99d1578c53?auto=format&w=1200&q=80"
                alt="Wedding celebration"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero


