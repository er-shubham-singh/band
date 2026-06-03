import { FiMail, FiPhoneCall } from 'react-icons/fi'
import { RiInstagramLine, RiFacebookLine, RiTwitterLine } from 'react-icons/ri'
import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80 pt-12 pb-8 backdrop-blur-xl">
      <div className="section-frame grid gap-10 lg:grid-cols-[1.2fr_0.8fr] xl:gap-16">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-[#1f5d44]">White Orchid Events</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Crafting timeless celebrations with premium wedding experiences.</h2>
          <p className="mt-4 max-w-2xl text-slate-600">From curated ceremonies to full-scale event design, our team delivers refined hospitality, live entertainment, and unforgettable moments across every milestone.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
          <div className="rounded-[28px] bg-slate-950/5 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.06)]">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <FiPhoneCall className="h-5 w-5 text-[#1f5d44]" />
                <span>+91 81234 56789</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="h-5 w-5 text-[#1f5d44]" />
                <span>hello@whiteorchidevents.in</span>
              </div>
              <p className="text-slate-500">Mumbai, India • Nationwide Services</p>
            </div>
          </div>

          <div className="rounded-[28px] bg-slate-950/5 p-6 shadow-[0_28px_70px_rgba(15,23,42,0.06)]">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Follow us</p>
            <div className="mt-6 flex items-center gap-3 text-[#1f5d44]">
              <a href="#" className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50 transition hover:bg-[#eef4ea]"><RiFacebookLine className="h-5 w-5" /></a>
              <a href="#" className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50 transition hover:bg-[#eef4ea]"><RiInstagramLine className="h-5 w-5" /></a>
              <a href="#" className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50 transition hover:bg-[#eef4ea]"><RiTwitterLine className="h-5 w-5" /></a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Your next celebration deserves a refined partner with a polished approach.</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-200/80 pt-6 text-sm text-slate-500">
        <div className="section-frame flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 White Orchid Events. All rights reserved.</p>
          <p>Designed for premium weddings, luxury ceremonies, and unforgettable experiences.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
