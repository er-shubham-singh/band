import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import React from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Packages', href: '/packages' },
  { label: 'Contact', href: '/contact' }
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <header
        className="sticky top-0 z-30 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(253,248,241,0.97)' : 'rgba(253,248,241,0.88)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(184,147,63,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(155,28,28,0.06)' : 'none'
        }}
      >
        <div className="section-frame flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 flex items-center justify-center rounded-full overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #9b1c1c, #7f1d1d)', boxShadow: '0 4px 14px rgba(155,28,28,0.3)' }}>
              <span className="text-amber-300 font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>W</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs tracking-[0.22em] uppercase font-semibold" style={{ color: 'var(--gold)' }}>White Orchid</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-dark)', fontFamily: 'Playfair Display, serif' }}>Events</p>
            </div>
            <div className="sm:hidden">
              <p className="text-base font-bold" style={{ color: 'var(--maroon)', fontFamily: 'Playfair Display, serif' }}>White Orchid Events</p>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-md'
                      : 'text-slate-700 hover:text-[#9b1c1c]'
                  }`
                }
                style={({ isActive }) => isActive ? {
                  background: 'linear-gradient(135deg, #9b1c1c, #7f1d1d)',
                  boxShadow: '0 3px 12px rgba(155,28,28,0.25)'
                } : {}}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+918123456789"
              className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all"
              style={{ background: 'var(--gold-light)', color: 'var(--gold)', border: '1px solid rgba(184,147,63,0.25)' }}
            >
              <FiPhone className="h-4 w-4" />
              +91 81234 56789
            </a>
            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="md:hidden h-10 w-10 flex items-center justify-center rounded-full transition-all"
              style={{ background: 'var(--crimson)', color: 'white', boxShadow: '0 3px 12px rgba(155,28,28,0.3)' }}
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(26,10,10,0.55)', backdropFilter: 'blur(4px)' }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer — slides in from RIGHT */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-72 md:hidden flex flex-col transition-transform duration-350 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(160deg, #fdf8f1 0%, #fef9f0 100%)',
          borderLeft: '1px solid rgba(184,147,63,0.2)',
          boxShadow: '-8px 0 40px rgba(155,28,28,0.15)'
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(184,147,63,0.15)' }}>
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#9b1c1c,#7f1d1d)' }}>
              <span style={{ color: '#f5e8c8', fontFamily: 'Playfair Display,serif', fontWeight: 700, fontSize: '0.85rem' }}>W</span>
            </div>
            <span style={{ fontFamily: 'Playfair Display,serif', fontWeight: 600, color: 'var(--maroon)', fontSize: '0.95rem' }}>White Orchid</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="h-9 w-9 flex items-center justify-center rounded-full transition-all"
            style={{ background: 'var(--crimson-light)', color: 'var(--crimson)' }}
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navItems.map((item, i) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive ? 'text-white' : 'text-slate-700 hover:text-[#9b1c1c]'
                }`
              }
              style={({ isActive }) => isActive ? {
                background: 'linear-gradient(135deg, #9b1c1c, #7f1d1d)',
                boxShadow: '0 3px 14px rgba(155,28,28,0.22)'
              } : { background: 'transparent' }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--gold)', opacity: 0.7 }} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="px-6 py-5" style={{ borderTop: '1px solid rgba(184,147,63,0.15)' }}>
          <a
            href="tel:+918123456789"
            className="w-full flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all"
            style={{ background: 'var(--crimson)', color: 'white', boxShadow: '0 4px 16px rgba(155,28,28,0.3)' }}
          >
            <FiPhone className="h-4 w-4" />
            +91 81234 56789
          </a>
          <p className="mt-3 text-center text-xs" style={{ color: 'var(--gold)', letterSpacing: '0.15em' }}>
            ✦ Available 24/7 for your celebration ✦
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
