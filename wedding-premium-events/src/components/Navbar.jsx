import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'
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

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-900">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/15">E</span>
          Emerald Events
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10' : 'text-slate-700 hover:text-emerald-700'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+918123456789"
            className="hidden items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-200/50 transition hover:bg-emerald-50 md:inline-flex"
          >
            <FiPhoneCall className="h-4 w-4" />
            +91 81234 56789
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm shadow-slate-200/80 transition hover:border-emerald-200 hover:text-emerald-700 md:hidden"
            onClick={() => setOpen((state) => !state)}
            aria-label="Toggle navigation"
          >
            {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/70 bg-white/95 px-4 pb-6 shadow-xl shadow-slate-900/5 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-3xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-emerald-600 text-white' : 'text-slate-700 hover:bg-emerald-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
