import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { RiInstagramLine, RiFacebookLine, RiYoutubeLine, RiWhatsappLine } from 'react-icons/ri'
import React from 'react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Packages', href: '/packages' },
  { label: 'Contact', href: '/contact' }
]

function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(160deg,#1a0a0a 0%,#2a0e0e 100%)', color: 'rgba(255,255,255,0.85)' }}>
      <div className="section-frame pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg,#9b1c1c,#7f1d1d)' }}>
                <span className="text-xl font-bold" style={{ color: '#f5e8c8', fontFamily: 'Playfair Display,serif' }}>W</span>
              </div>
              <div>
                <p className="font-bold text-lg text-white" style={{ fontFamily: 'Playfair Display,serif' }}>Great Popular Band</p>
                <p className="text-xs tracking-widest" style={{ color: 'var(--gold)', opacity: 0.8 }}>PREMIUM BARAAT ENTERTAINMENT</p>
              </div>
            </div>
            <p className="text-sm leading-7" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 280 }}>
              From Dhol parties to royal Baraat processions, we bring your wedding celebrations to life with tradition, energy, and elegance.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: RiFacebookLine, label: 'Facebook' },
                { icon: RiInstagramLine, label: 'Instagram' },
                { icon: RiYoutubeLine, label: 'YouTube' },
                { icon: RiWhatsappLine, label: 'WhatsApp' }
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="h-9 w-9 flex items-center justify-center rounded-full transition-all"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}
                  onMouseOver={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#1a0a0a' }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}>
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--gold)' }}>Quick Links</p>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm flex items-center gap-2 transition-colors"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseOver={e => e.currentTarget.style.color = '#f5e8c8'}
                    onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                    <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>✦</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-5" style={{ color: 'var(--gold)' }}>Contact Us</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <FiPhone className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                <span>+91 81234 56789</span>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <FiMail className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                <span>hello@greatpopularband.in</span>
              </li>
              <li className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <FiMapPin className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--gold)' }} />
                <span>Serving Pan India — Mumbai, Delhi, Pune & beyond</span>
              </li>
            </ul>
            <a href="https://wa.me/918123456789"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all"
              style={{ background: '#25d366', color: 'white', boxShadow: '0 4px 16px rgba(37,211,102,0.3)' }}>
              <RiWhatsappLine className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.08)', margin: '3rem 0 1.5rem' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          <p>© 2026 Great Popular Band. All rights reserved.</p>
          <p>✦ Designed for Grand Indian Baraat Celebrations ✦</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
