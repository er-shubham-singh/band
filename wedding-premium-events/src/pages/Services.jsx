import ServiceCard from '../components/ServiceCard'
import services from '../data/services'
import React from 'react'

function Services() {
  return (
    <div className="space-y-16">
      <section className="section-frame">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Our services</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Wedding and event services designed for polish and presence.</h1>
          <p className="mt-6 section-description">Choose from premium entertainment, traditional ceremony essentials, contingency planning, and full-scale event management.</p>
        </div>
      </section>

      <section className="section-frame bg-slate-50">
        <div className="grid gap-8 xl:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services
