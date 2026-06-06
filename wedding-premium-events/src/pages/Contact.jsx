import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'
import { useState } from 'react'
import React from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', mobile: '', eventFrom: '', eventTo: '', venue: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('https://formspree.io/f/mbdedwye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          eventFrom: form.eventFrom,
          eventTo: form.eventTo,
          venue: form.venue,
          message: form.message,
        }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', mobile: '', eventFrom: '', eventTo: '', venue: '', message: '' })
      } else {
        setError('Unable to send inquiry. Please try again later.')
      }
    } catch (err) {
      setError('Unable to send inquiry. Please check your connection and try again.')
    }
  }

  return (
    <div className="w-full">
      <section className="relative py-20 sm:py-28" style={{ background: 'linear-gradient(135deg,#9b1c1c,#4a0e0e)' }}>
        <div className="section-frame text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'rgba(245,232,200,0.7)' }}>Get In Touch</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
              Contact Us
            </h1>
            <div className="h-0.5 w-24 mx-auto mt-5 mb-6" style={{ background: 'rgba(184,147,63,0.6)' }} />
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Let's discuss your wedding vision. Our team responds within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-label">Reach Us</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
              We're Here for Your Celebration
            </h2>
            <div className="space-y-5">
              {[
                { icon: FiPhone, label: 'Phone', val: '+91 81234 56789', href: 'tel:+918123456789' },
                { icon: RiWhatsappLine, label: 'WhatsApp', val: '+91 81234 56789', href: 'https://wa.me/918123456789' },
                { icon: FiMail, label: 'Email', val: 'hello@whiteorchidevents.in', href: 'mailto:hello@whiteorchidevents.in' },
                { icon: FiMapPin, label: 'Location', val: 'Mumbai, India — Pan-India Service', href: null }
              ].map(({ icon: Icon, label, val, href }) => (
                <div key={label} className="flex items-start gap-4 card-royal p-5">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--crimson-light)', color: 'var(--crimson)' }}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--gold)' }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium" style={{ color: 'var(--maroon)' }}>{val}</a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: 'var(--maroon)' }}>{val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            {sent ? (
              <div className="card-royal p-10 text-center">
                <div className="text-5xl mb-4">🎊</div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
                  Thank You!
                </h3>
                <p style={{ color: 'var(--text-mid)' }}>We've received your inquiry and will reach out within 24 hours to discuss your celebration.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-royal p-8 space-y-5">
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
                  Send an Inquiry
                </h3>
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Rahul & Priya' },
                  { name: 'mobile', label: 'Mobile Number', type: 'tel', placeholder: '+91 98765 43210' },
                  { name: 'eventFrom', label: 'Event Date From', type: 'date', placeholder: '' },
                  { name: 'eventTo', label: 'Event Date To', type: 'date', placeholder: '' },
                  { name: 'venue', label: 'Event Venue', type: 'text', placeholder: 'Venue name or city' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--gold)' }}>
                      {field.label}
                    </label>
                    <input type={field.type} name={field.name} placeholder={field.placeholder}
                      value={form[field.name]} onChange={handleChange} required
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{ border: '1px solid rgba(184,147,63,0.2)', background: 'var(--ivory)', color: 'var(--text-dark)' }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(184,147,63,0.2)'} />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: 'var(--gold)' }}>
                    Message
                  </label>
                  <textarea name="message" rows={4} placeholder="Tell us about your wedding date, venue, and vision..."
                    value={form.message} onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                    style={{ border: '1px solid rgba(184,147,63,0.2)', background: 'var(--ivory)', color: 'var(--text-dark)' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(184,147,63,0.2)'} />
                </div>
                <button type="submit" className="btn-gold w-full gap-2 text-base">
                  <FiSend className="h-4 w-4" /> Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
