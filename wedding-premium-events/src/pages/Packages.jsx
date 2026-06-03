import { motion } from 'framer-motion'
import CTASection from '../components/CTASection'
import React from 'react'

const packages = [
  {
    name: 'Silver',
    price: '₹95,000',
    badge: 'Starter',
    description: 'Beautiful ceremonies for intimate gatherings with personalised styling.',
    features: ['Live Shehnai performance', 'Floral mandap decor', 'Event coordination', 'Guest hospitality support'],
    highlight: false
  },
  {
    name: 'Gold',
    price: '₹1,65,000',
    badge: 'Popular',
    description: 'Polished wedding experience with premium music and seamless management.',
    features: ['Wedding Band service', 'Dhol & Tasha ensemble', 'Stage production', 'Vendor liaison', 'Ceremony coverage'],
    highlight: true
  },
  {
    name: 'Platinum',
    price: '₹2,35,000',
    badge: 'Premium',
    description: 'Luxury celebration with signature entertainment and full decor design.',
    features: ['Ghori & Baggi service', 'Photography support', 'Lighting & decor', 'Full event management', 'Palki procession'],
    highlight: false
  },
  {
    name: 'Royal',
    price: '₹3,95,000',
    badge: 'Elite',
    description: 'Complete royal wedding experience with bespoke design and elite musicians.',
    features: ['All Platinum features', 'Full wedding production', 'Premium decor design', 'Dedicated planning team', '24/7 coordinator', 'Post-event album'],
    highlight: false
  }
]

function Packages() {
  return (
    <div className="w-full">
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#9b1c1c,#4a0e0e)' }}>
        <div className="section-frame relative text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="section-label" style={{ color: 'rgba(245,232,200,0.7)' }}>Pricing</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
              Wedding Packages
            </h1>
            <div className="h-0.5 w-24 mx-auto mt-5 mb-6" style={{ background: 'rgba(184,147,63,0.6)' }} />
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>
              Choose the perfect package for your celebration. All packages include a dedicated coordinator.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  border: pkg.highlight ? '2px solid var(--gold)' : '1px solid rgba(184,147,63,0.15)',
                  background: pkg.highlight ? 'linear-gradient(160deg,#1a0a0a,#2a0e0e)' : 'white',
                  boxShadow: pkg.highlight ? '0 16px 60px rgba(155,28,28,0.25)' : '0 6px 30px rgba(155,28,28,0.07)'
                }}>
                {pkg.highlight && (
                  <div className="absolute top-0 inset-x-0 h-1"
                    style={{ background: 'linear-gradient(90deg,#b8933f,#d4aa5a,#b8933f)' }} />
                )}
                <div className="p-7">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      background: pkg.highlight ? 'rgba(184,147,63,0.2)' : 'var(--crimson-light)',
                      color: pkg.highlight ? 'var(--gold)' : 'var(--crimson)'
                    }}>
                    {pkg.badge}
                  </span>
                  <h3 className="text-2xl font-bold mb-2"
                    style={{ fontFamily: 'Playfair Display,serif', color: pkg.highlight ? '#f5e8c8' : 'var(--maroon)' }}>
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-bold my-4"
                    style={{ fontFamily: 'Playfair Display,serif', color: pkg.highlight ? 'var(--gold)' : 'var(--crimson)' }}>
                    {pkg.price}
                  </p>
                  <p className="text-sm leading-6 mb-6"
                    style={{ color: pkg.highlight ? 'rgba(255,255,255,0.55)' : 'var(--text-mid)', fontWeight: 300 }}>
                    {pkg.description}
                  </p>
                  <ul className="space-y-2.5 mb-7">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm"
                        style={{ color: pkg.highlight ? 'rgba(255,255,255,0.7)' : 'var(--text-mid)' }}>
                        <span style={{ color: 'var(--gold)' }}>✦</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact"
                    className="w-full flex items-center justify-center py-3 rounded-full text-sm font-semibold transition-all"
                    style={pkg.highlight
                      ? { background: 'linear-gradient(135deg,#b8933f,#d4aa5a)', color: '#1a0a0a', boxShadow: '0 4px 20px rgba(184,147,63,0.4)' }
                      : { border: '2px solid var(--crimson)', color: 'var(--crimson)' }}>
                    Book This Package
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-10 text-sm" style={{ color: 'var(--text-mid)' }}>
            All prices are approximate. Final quote depends on location, guest count, and customizations.{' '}
            <a href="/contact" style={{ color: 'var(--crimson)', fontWeight: 600 }}>Contact us</a> for a tailored package.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Packages
