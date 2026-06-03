import GallerySlider from '../components/GallerySlider'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import services from '../data/services'
import galleryItems from '../data/gallery'
import testimonials from '../data/testimonials'
import React from 'react'

function Home() {
  return (
    <div className="w-full">
      <Hero />

      <section className="w-full bg-white py-16 sm:py-24">
        <div className="section-frame">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.36em] text-[#1f5d44] font-semibold">Signature offerings</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Services built for meaningful celebrations.</h2>
            <p className="mt-4 text-slate-600 text-lg">From live dhol parties to premium event coordination, our services combine tradition, luxury, and unforgettable design.</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16 sm:py-24">
        <div className="section-frame">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44] font-semibold">Trusted by modern couples</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">A refined approach to wedding planning.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">We combine premium entertainment, flawless logistics, and elegant presentation so every detail feels effortless.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: '125+', label: 'Events curated' },
                { value: '98%', label: 'Client satisfaction' },
                { value: '24/7', label: 'Planning support' }
              ].map((item) => (
                <div key={item.label} className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <p className="text-4xl font-semibold text-[#1f5d44]">{item.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-600 font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 sm:py-24">
        <div className="section-frame">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44] font-semibold">Gallery preview</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Moments from recent celebrations.</h2>
          </div>
          <div className="mt-10">
            <GallerySlider items={galleryItems.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-16 sm:py-24">
        <div className="section-frame">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44] font-semibold">Client praise</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Celebrations that continue to inspire.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard key={item.name} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Home
