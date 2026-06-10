import { motion } from 'framer-motion'
import GallerySlider from '../components/GallerySlider'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import AnimatedCounter from '../components/AnimatedCounter'
import services from '../data/services'
import galleryItems from '../data/gallery'
import testimonials from '../data/testimonials'
import React from 'react'

const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }

const stats = [
  { value: 35, suffix: '+', label: 'Years of Excellence' },
  { value: 5000, suffix: '+', label: 'Successful Weddings' },
  { value: 50000, suffix: '+', label: 'Happy Guests Entertained' },
  { value: 100, suffix: '%', label: 'Customer Commitment' },
]

function Home() {
  return (
    <div className="w-full">
      <Hero />

      {/* Stats Counter Section */}
      {/* <section className="w-full py-16 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #9b1c1c 0%, #7f1d1d 50%, #4a0e0e 100%)' }}>
        <div className="section-frame">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center">
                <p className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display,serif' }}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1800} />
                </p>
                <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
                  style={{ color: 'rgba(245,232,200,0.75)' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section className="w-full py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="section-label">Everything You Need For A Grand Baraat</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
              Baraat Services That Make Every Entrance Spectacular
            </h2>
            <div className="gold-divider w-24 mx-auto mt-5" />
            <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-mid)', fontWeight: 300 }}>
              From band teams and Punjabi Dhol to vintage cars, royal baggis, and spectacular effects, we deliver premium procession services that keep your celebration moving and memorable.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service, i) => (
              <motion.div key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="/services" className="btn-outline">View All Services →</a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="w-full py-16 sm:py-24" style={{ background: 'var(--ivory-dark)' }}>
        <div className="section-frame">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="section-label">Why Great Popular Band?</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
                Trusted Baraat Experts Since 1990
              </h2>
              <div className="gold-divider w-20 mt-4" />
              <p className="mt-6 text-lg leading-8" style={{ color: 'var(--text-mid)', fontWeight: 300 }}>
                For more than three decades, Great Popular Band has been part of countless wedding celebrations, carrying forward the traditions of music, joy, and royal wedding processions.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Serving since 1990 with over 35 years of experience',
                  'Premium band teams, Dhol, DJ on Wheels and royal processions',
                  'Experienced event coordinators and custom packages',
                  'Modern sound, lighting, and unforgettable special effects',
                  'On-time, professional service with 100% customer focus'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium" style={{ color: 'var(--text-mid)' }}>
                    <span className="h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ background: 'linear-gradient(135deg,#b8933f,#d4aa5a)', color: '#1a0a0a' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/about" className="btn-gold mt-8 w-fit">Discover Our Story →</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative">
              <div className="overflow-hidden rounded-3xl"
                style={{ boxShadow: '0 20px 60px rgba(155,28,28,0.2)', border: '2px solid rgba(184,147,63,0.2)' }}>
                <img
                  src="https://cdn.corenexis.com/files/c/4531786720.jpg"
                  alt="Dhol performance"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Decorative offset box */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl p-5 hidden sm:block"
                style={{ background: 'linear-gradient(135deg,#b8933f,#d4aa5a)', boxShadow: '0 8px 30px rgba(184,147,63,0.4)' }}>
                <p className="text-xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: '#1a0a0a' }}>15+</p>
                <p className="text-xs font-semibold" style={{ color: 'rgba(26,10,10,0.7)' }}>Years of<br/>Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="w-full py-16 sm:py-24" style={{ background: 'var(--ivory)' }}>
        <div className="section-frame">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="section-label">Our Gallery</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
              Memories From Our Celebrations
            </h2>
            <div className="gold-divider w-24 mx-auto mt-5" />
          </motion.div>
          <GallerySlider items={galleryItems.slice(0, 6)} />
          <div className="mt-10 text-center">
            <a href="/gallery" className="btn-outline">View Full Gallery →</a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-24" style={{ background: 'var(--ivory-dark)' }}>
        <div className="section-frame">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="section-label">Client Praise</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display,serif', color: 'var(--maroon)' }}>
              Families Who Trusted Us
            </h2>
            <div className="gold-divider w-24 mx-auto mt-5" />
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item, i) => (
              <motion.div key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}>
                <TestimonialCard testimonial={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}

export default Home
