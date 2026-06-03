import React from 'react'


function CTASection() {
  return (
    <section id="packages" className="w-full bg-white py-16 sm:py-24">
      <div className="section-frame">
        <div className="relative rounded-[40px] border border-slate-200 bg-linear-to-br from-[#eef4ea] to-white p-8 shadow-lg sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.38em] text-[#1f5d44] font-semibold">Let's begin</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Your wedding deserves elevated planning and flawless delivery.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">Choose a package that reflects your celebration, and our team will connect to craft a premium event experience from design to day-of coordination.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a href="#contact" className="button-primary">
                Request an inquiry
              </a>
              <a href="/services" className="button-secondary">
                View all services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
