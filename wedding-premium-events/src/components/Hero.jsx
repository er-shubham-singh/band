import { motion } from 'framer-motion'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'

const sliderItems = [
  {
    image: 'https://cdn.corenexis.com/files/c/6192992720.jpg',
    label: "India's Premier Wedding Baraat Entertainment",
    heading: <>Three Decades of Music,<br/>Tradition &amp; Unforgettable<br/><em style={{ color: '#e8c96e', fontStyle: 'italic' }}>Baraats.</em></>,
    body: '"The Sound of Celebration. The Spirit of Royalty." For over 35 years, Great Popular Band has been making wedding celebrations grander with energetic Punjabi Dhol and powerful Band Teams to DJ on Wheels, Vintage Cars, Royal Baggis, Horses, Pyro Effects, and Premium Wedding Processions.',
    buttonText: 'Explore Packages',
    buttonLink: '/packages',
    showCallBtn: true,
  },
  {
    image: 'https://cdn.corenexis.com/files/c/9651884720.jpg',
    label: 'Royal Baggi Entrances',
    heading: <>Grand Processions with<br/>Horses &amp; <em style={{ color: '#e8c96e', fontStyle: 'italic' }}>Heritage</em></>,
    body: 'Create a majestic wedding entry with royal baggis, decorated horses, and procession lighting that makes every arrival cinematic and unforgettable.',
    buttonText: 'View Royal Arrivals',
    buttonLink: '/services',
  },
  {
    image: 'https://images.unsplash.com/photo-1522726602510-1e0f8d876046?auto=format&w=1400&q=80',
    label: 'Punjabi Dhol Beats',
    heading: <>Energetic Drums That Keep<br/>the Baraat <em style={{ color: '#e8c96e', fontStyle: 'italic' }}>Moving</em></>,
    body: 'Our Punjabi Dhol performers add unstoppable rhythm and excitement to every wedding procession, ensuring guests dance from start to finish.',
    buttonText: 'Book Dhol Artists',
    buttonLink: '/services',
  },
  {
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&w=1400&q=80',
    label: 'DJ On Wheels',
    heading: <>Mobile DJ Setups for<br/>Modern <em style={{ color: '#e8c96e', fontStyle: 'italic' }}>Processions</em></>,
    body: 'Bring premium sound, lighting, and special effects straight into your baraat with our DJ on Wheels experience — the future of wedding entertainment.',
    buttonText: 'Explore DJ Services',
    buttonLink: '/services',
  },
  {
    image: 'https://cdn.corenexis.com/files/c/4486925720.jpg',
    label: 'Vintage Car Style',
    heading: <>Vintage Cars &amp;<br/><em style={{ color: '#e8c96e', fontStyle: 'italic' }}>Luxury Entries</em></>,
    body: 'Arrive in timeless style with beautifully decorated vintage and luxury cars crafted to elevate your wedding procession to cinematic heights.',
    buttonText: 'See Car Arrivals',
    buttonLink: '/services',
  },
]

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [slideProgress, setSlideProgress] = useState(0)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setActiveSlide((c) => (c + 1) % sliderItems.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [paused])

  useEffect(() => {
    if (paused) return
    setSlideProgress(0)
    let rafId
    const start = performance.now()
    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(100, (elapsed / 4500) * 100)
      setSlideProgress(progress)
      if (progress < 100) rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [activeSlide, paused])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '88vh', maxHeight: 780, minHeight: 520 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {sliderItems.map((item, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-[900ms]"
          style={{ opacity: activeSlide === index ? 1 : 0, zIndex: activeSlide === index ? 2 : 1 }}
        >
          {/* Background image with Ken Burns */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-out"
            style={{
              backgroundImage: `url(${item.image})`,
              transform: activeSlide === index ? 'scale(1)' : 'scale(1.06)',
            }}
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(20,4,4,0.82) 0%, rgba(20,4,4,0.55) 55%, rgba(20,4,4,0.2) 100%)',
            }}
          />
          {/* Slide content */}
          <div
            className="absolute inset-0 flex flex-col justify-center pb-16"
            style={{
              padding: '0 6% 60px',
              maxWidth: 680,
              opacity: activeSlide === index ? 1 : 0,
              transform: activeSlide === index ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s',
            }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div style={{ height: 1, width: 40, background: '#b8933f' }} />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: '#d4aa5a',
                  fontWeight: 600,
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {item.label}
              </span>
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                lineHeight: 1.18,
                color: '#fff',
                fontWeight: 700,
                margin: '0 0 18px',
              }}
            >
              {item.heading}
            </h1>

            {/* Body */}
            <p
              style={{
                fontSize: 'clamp(13px, 1.5vw, 15px)',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.82)',
                fontWeight: 300,
                fontFamily: 'Outfit, sans-serif',
                maxWidth: 520,
                marginBottom: 28,
              }}
            >
              {item.body}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={item.buttonLink}
                className="inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #b8933f, #d4aa5a)',
                  color: '#1a0a0a',
                  fontSize: 13,
                  fontWeight: 600,
                  padding: '11px 24px',
                  borderRadius: 50,
                  textDecoration: 'none',
                  boxShadow: '0 6px 24px rgba(184,147,63,0.4)',
                  fontFamily: 'Outfit, sans-serif',
                }}
              >
                {item.buttonText} <FiArrowRight size={14} />
              </a>
              {item.showCallBtn && (
                <a
                  href="tel:+918123456789"
                  className="inline-flex items-center gap-2 transition-all hover:bg-white/20"
                  style={{
                    border: '1.5px solid rgba(255,255,255,0.5)',
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 500,
                    padding: '11px 24px',
                    borderRadius: 50,
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.06)',
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  <FiPhone size={14} /> Call Now
                </a>
              )}
            </div>

            {/* Dot indicators below buttons */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {sliderItems.map((_, index) => {
                const isActive = activeSlide === index
                return (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                    style={{
                      height: 16,
                      width: 16,
                      borderRadius: '50%',
                      background: isActive
                        ? `conic-gradient(#b8933f ${slideProgress}%, rgba(255,255,255,0.25) ${slideProgress}% 100%)`
                        : 'rgba(255,255,255,0.2)',
                      border: isActive ? '1px solid rgba(255,255,255,0.95)' : '1px solid rgba(255,255,255,0.3)',
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      outline: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: '50%',
                        background: isActive ? '#1a0a0a' : '#fff',
                        opacity: isActive ? 0.95 : 0.8,
                      }}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      ))}

      {/* Stats strip — bottom right */}
      <div className="absolute bottom-0 right-0 flex" style={{ zIndex: 10 }}>
        {[
          { num: '35+', lbl: 'Years of Excellence' },
          { num: '5000+', lbl: 'Successful Weddings' },
          { num: '100%', lbl: 'Client Commitment' },
        ].map((s) => (
          <div
            key={s.lbl}
            className="text-center"
            style={{
              padding: '14px 24px',
              background: 'rgba(15,4,4,0.72)',
              borderTop: '1.5px solid rgba(184,147,63,0.3)',
            }}
          >
            <p
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#fff',
                margin: 0,
              }}
            >
              {s.num}
            </p>
            <p
              style={{
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#b8933f',
                margin: '3px 0 0',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              {s.lbl}
            </p>
          </div>
        ))}
      </div>

      {/* Floating rating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute"
        style={{
          top: 28,
          right: '5%',
          zIndex: 10,
          background: 'linear-gradient(135deg, #b8933f, #d4aa5a)',
          borderRadius: 16,
          padding: '12px 18px',
          textAlign: 'center',
          boxShadow: '0 8px 28px rgba(184,147,63,0.45)',
          minWidth: 90,
        }}
      >
        <p
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#1a0a0a',
            margin: 0,
          }}
        >
          ★ 4.9
        </p>
        <p
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: 'rgba(26,10,10,0.7)',
            letterSpacing: '0.06em',
            margin: '2px 0 0',
            fontFamily: 'Outfit, sans-serif',
          }}
        >
          Google Rating
        </p>
      </motion.div>
    </section>
  )
}

export default Hero