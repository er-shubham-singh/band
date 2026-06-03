import { motion } from 'framer-motion'
import React from 'react'

const highlights = [
  'Curated design for meaningful ceremonies',
  'Live ensemble coordination for weddings and receptions',
  'Dhol, shehnai, ghori, baggi, and palki partnerships',
  'Full event management from concept to celebration day'
]

const timeline = [
  { year: '2017', title: 'First premium celebration', description: 'We launched with a mission to deliver elevated weddings and unforgettable events across Mumbai and beyond.' },
  { year: '2019', title: 'Expanded entertainment studio', description: 'Our team added signature musicians, decor designers, and celebration specialists for refined event execution.' },
  { year: '2022', title: 'Nationwide planning', description: 'Emerald Events became the trusted partner for destination weddings, curated receptions, and luxe cultural ceremonies.' },
  { year: '2025', title: 'Luxury event curation', description: 'We launched a dedicated premium package lineup for bespoke weddings and high-profile celebrations.' }
]

function About() {
  return (
    <div className="space-y-16">
      <section className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">About Emerald Events</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">A premium wedding and event partner with a meaningful touch.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">From intimate engagement celebrations to grand signature weddings, we build every experience around your story, your family, and the atmosphere you want to create.</p>
          </div>
          <div className="rounded-[40px] bg-white/85 p-8 shadow-[0_40px_90px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Our promise</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Thoughtful planning, luxurious delivery.</h2>
            <ul className="mt-6 space-y-4 text-slate-600">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-frame bg-slate-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Our journey</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A timeline of refined experiences.</h2>
          <p className="section-description">Each milestone has shaped our premium wedding services and event coordination philosophy.</p>
        </div>

        <div className="mt-12 space-y-8">
          {timeline.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.36em] text-emerald-700">{event.year}</p>
                <h3 className="text-2xl font-semibold text-slate-900">{event.title}</h3>
              </div>
              <p className="mt-4 text-slate-600">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Vision & Mission</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Designing celebrations that feel intentional, elevated, and effortless.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Our mission is to deliver premium wedding moments with expert coordination, polished aesthetics, and attention to every cultural detail.</p>
          </div>
          <div className="rounded-[40px] border border-white/70 bg-white/70 p-8 shadow-[0_40px_90px_rgba(15,23,42,0.08)]">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Vision</h3>
                <p className="mt-3 text-slate-600">To be the destination for couples seeking premium wedding design, unforgettable music, and ceremony excellence.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
                <p className="mt-3 text-slate-600">To craft personalized celebrations by combining luxury rentals, cultural artistry, and care-focused coordination for every occasion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame bg-slate-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Why choose us</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Premium care at every planning stage.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Signature coordination', description: 'A dedicated event specialist delivers every timeline, vendor detail, and guest touchpoint.' },
            { title: 'Luxurious entertainment', description: 'Curated wedding bands, dhol teams, and ceremony ensembles for an elevated atmosphere.' },
            { title: 'Detailed styling', description: 'Refined decor, draping, floral concepts, and ceremony staging to reflect your story.' },
            { title: 'On-site excellence', description: 'Premium hospitality and rehearsal management for calm, joyful event days.' }
          ].map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
