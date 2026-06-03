import { Link } from 'react-router-dom'
import React from 'react'

function NotFound() {
  return (
    <section className="section-frame flex min-h-[70vh] items-center justify-center">
      <div className="max-w-2xl rounded-[40px] border border-white/70 bg-white/80 p-12 text-center shadow-[0_40px_90px_rgba(15,23,42,0.08)]">
        <p className="text-sm uppercase tracking-[0.35em] text-[#1f5d44]">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold text-slate-900">404</h1>
        <p className="mt-4 text-lg text-slate-600">The page you are looking for is not available. Return to the homepage to continue planning your celebration.</p>
        <Link to="/" className="button-primary mt-8 inline-flex">
          Back to home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
