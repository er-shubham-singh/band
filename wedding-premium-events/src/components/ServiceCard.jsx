import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import React from 'react'

function ServiceCard({ service }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-md"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
      <div className="space-y-4 p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#1f5d44] font-semibold">{service.category}</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{service.title}</h3>
        </div>
        <p className="text-sm leading-7 text-slate-600">{service.description}</p>
        <div className="space-y-3">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 text-sm text-slate-700">
              <FiCheckCircle className="mt-1 h-4 w-4 text-[#1f5d44] shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className="button-primary w-full text-center">
          Book this service
        </a>
      </div>
    </motion.article>
  )
}

export default ServiceCard
