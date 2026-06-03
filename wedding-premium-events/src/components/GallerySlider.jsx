import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import React from 'react'

function GallerySlider({ items }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      autoplay={{ delay: 3800, disableOnInteraction: false }}
      className="rounded-[32px] overflow-hidden"
    >
      {items.map((item) => (
        <SwiperSlide key={item.title} className="overflow-hidden">
          <div className="relative h-[420px] overflow-hidden rounded-none bg-slate-100">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent px-8 py-8 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">{item.category}</p>
              <h3 className="mt-3 text-3xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-200 text-base">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default GallerySlider
