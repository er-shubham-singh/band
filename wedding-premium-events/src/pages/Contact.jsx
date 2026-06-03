import { useMemo, useState } from 'react'
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'
import LoadingSpinner from '../components/LoadingSpinner'
import React from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const canSubmit = useMemo(
    () => form.name.trim() && form.email.trim() && form.phone.trim() && form.message.trim(),
    [form]
  )

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!canSubmit) return

    setIsSending(true)
    setSent(false)

    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSending(false)
    setSent(true)
  }

  return (
    <div className="space-y-16" id="contact">
      <section className="section-frame">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Contact</p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Talk to our event team and plan your dream wedding.</h1>
            <p className="mt-6 section-description">Send us a message to explore packages, vendor coordination, and bespoke wedding entertainment options.</p>
          </div>
          <div className="rounded-[40px] bg-emerald-600 p-8 text-white shadow-[0_40px_90px_rgba(22,163,74,0.24)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-100">Office hours</p>
            <p className="mt-4 text-3xl font-semibold">Mon - Sat • 9 am - 7 pm</p>
            <div className="mt-6 space-y-4 text-sm text-emerald-100/90">
              <div className="flex items-center gap-3">
                <FiPhoneCall className="h-5 w-5" />
                <span>+91 81234 56789</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="h-5 w-5" />
                <span>hello@emeraldevents.in</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="h-5 w-5" />
                <span>Marine Drive, Mumbai</span>
              </div>
            </div>
            <a
              href="https://wa.me/918123456789"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <RiWhatsappLine className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-frame bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-[40px] border border-white/70 bg-white p-8 shadow-[0_40px_90px_rgba(15,23,42,0.08)] sm:p-10">
            <div>
              <label className="block text-sm font-semibold text-slate-900">Name</label>
              <input value={form.name} onChange={handleChange('name')} className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100" placeholder="Your full name" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-slate-900">Email</label>
                <input value={form.email} onChange={handleChange('email')} type="email" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100" placeholder="Email address" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Phone</label>
                <input value={form.phone} onChange={handleChange('phone')} type="tel" className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100" placeholder="Mobile number" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900">Tell us about your event</label>
              <textarea value={form.message} onChange={handleChange('message')} rows="5" className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100" placeholder="Ceremony date, venue, and any special requests" />
            </div>
            <button type="submit" disabled={!canSubmit || isSending} className="button-primary inline-flex items-center justify-center gap-2 w-full disabled:cursor-not-allowed disabled:opacity-60">
              {isSending ? <LoadingSpinner /> : 'Send inquiry'}
            </button>
            {sent && <p className="text-sm text-emerald-700">Your request has been received. Our team will follow up within one business day.</p>}
          </form>

          <div className="space-y-6 rounded-[40px] border border-white/70 bg-white p-8 shadow-[0_40px_90px_rgba(15,23,42,0.08)]">
            <div className="rounded-[32px] bg-slate-950/5 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Google map</p>
              <div className="mt-6 h-72 rounded-[28px] bg-slate-900/10 p-6 text-slate-500">
                <p className="text-sm">Map placeholder for event venue planning.</p>
                <p className="mt-4 text-sm">Add your live location once backend integration is ready.</p>
              </div>
            </div>

            <div className="grid gap-4 rounded-[32px] bg-emerald-50 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Office address</p>
                <p className="mt-3 text-slate-700">Marine Drive, Mumbai, India</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Email</p>
                <p className="mt-3 text-slate-700">hello@emeraldevents.in</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">Phone</p>
                <p className="mt-3 text-slate-700">+91 81234 56789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
