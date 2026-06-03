import { motion } from 'framer-motion'
import React from 'react'

const packages = [
  {
    name: 'Silver Package',
    price: '₹95,000',
    description: 'Beautiful ceremonies for smaller gatherings with personalized styling and smooth coordination.',
    features: ['Live shehnai performance', 'Floral mandap decor', 'Event coordination', 'Guest hospitality']
  },
  {
    name: 'Gold Package',
    price: '₹1,65,000',
    description: 'A polished wedding experience with premium music, ceremony design, and seamless on-site management.',
    features: ['Wedding band service', 'Dhol and tasha ensemble', 'Stage production', 'Vendor liaison']
  },
  {
    name: 'Platinum Package',
    price: '₹2,35,000',
    description: 'Luxury celebration curation with signature entertainment, full decor, and day-of coordination.',
    features: ['Ghori and baggi service', 'Photography support', 'Lighting & decor', 'Full event management']
  },
  {
    name: 'Wedding Premium Package',
    price: '₹3,95,000',
    description: 'A complete premium wedding experience with bespoke design, elite musicians, and luxury execution.',
    features: ['Palki & procession service', 'Full wedding production', 'Premium decor design', 'Dedicated planning team']
  }
]

function Packages() {
  return (
    <div className="space-y-16">
      <section className="section-frame">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44]">Packages</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Select a premium package for your wedding celebration.</h1>
          <p className="mt-6 section-description">Each tier blends refined entertainment, ceremony essentials, and expert coordination for a seamless day.</p>
        </div>
      </section>

      <section className="section-frame bg-slate-50">
        <div className="grid gap-8 xl:grid-cols-4">
          {packages.map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              className="glass-card p-8"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44]">{item.name}</p>
              <p className="mt-4 text-5xl font-semibold text-slate-900">{item.price}</p>
              <p className="mt-4 text-slate-600">{item.description}</p>
              <ul className="mt-6 space-y-3 text-slate-700">
                {item.features.map((feature) => (
                  <li key={feature} className="rounded-3xl bg-[#eef4ea] px-4 py-3">{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="button-primary mt-8 inline-flex w-full justify-center">
                Inquire now
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="rounded-[40px] border border-white/70 bg-white/80 p-8 shadow-[0_40px_90px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44]">Comparison</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Choose the right experience for your celebration.</h2>
              <p className="mt-4 text-slate-600">Compare our packages side-by-side to find the balance between elegance, entertainment, and planning support.</p>
            </div>
            <div className="overflow-x-auto rounded-4xl border border-slate-200 bg-white p-5 shadow-sm">
              <table className="min-w-130 w-full text-left text-sm text-slate-700">
                <thead>
                  <tr>
                    <th className="pb-4 font-semibold text-slate-900">Feature</th>
                    {packages.map((item) => (
                      <th key={item.name} className="pb-4 font-semibold text-slate-900">{item.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { label: 'Live ceremony music', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
                    { label: 'Procession service', values: ['No', 'Yes', 'Yes', 'Yes'] },
                    { label: 'Photography support', values: ['No', 'No', 'Yes', 'Yes'] },
                    { label: 'Full event management', values: ['No', 'No', 'Yes', 'Yes'] },
                    { label: 'Decor and lighting', values: ['Basic', 'Standard', 'Premium', 'Bespoke'] }
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="py-4 font-medium text-slate-800">{row.label}</td>
                      {row.values.map((value, index) => (
                        <td key={`${row.label}-${index}`} className="py-4">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packages
