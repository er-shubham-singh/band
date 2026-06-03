import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'
import React from 'react'

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-md"
    >
      <div className="flex items-center gap-3 text-[#1f5d44]">
        <div className="rounded-full bg-[#eef4ea] p-3 text-[#1f5d44]">
          <FaQuoteLeft className="h-4 w-4" />
        </div>
        <p className="text-sm uppercase tracking-[0.32em] text-[#1f5d44] font-semibold">Client note</p>
      </div>
      <p className="mt-6 text-slate-700 leading-relaxed">{testimonial.message}</p>
      <div className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">{testimonial.name}</p>
        <p className="text-slate-500">{testimonial.location}</p>
      </div>
    </motion.article>
  )
}

export default TestimonialCard
