'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Andi Prasetyo',
    title: 'Pemilik Rumah',
    content: 'Sangat puas dengan layanan SENI RUANG MINIMALIS PEKALONGAN. Plafon gypsum dan backdrop TV yang dipasang sangat rapi dan sesuai dengan desain yang saya inginkan. Tim survey dan pemasangan sangat profesional dan cepat.',
    image: '/images/section/testimonials/testi-1.jpg'
  },
  {
    id: 2,
    name: 'Dewi Sukmawati',
    title: 'Pemilik Cafe',
    content: 'Berkat SENI RUANG MINIMALIS PEKALONGAN, cafe saya jadi lebih estetik dan nyaman. Wall Moulding dan partisi yang dipasang memberikan sentuhan elegan pada ruangan. Konsultasi gratis yang mereka berikan sangat membantu dalam menentukan pilihan desain.',
    image: '/images/section/testimonials/testi-2.jpg'
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    title: 'Pemilik Toko',
    content: 'Kitchen set dan plafon PVC yang dipasang oleh tim SENI RUANG MINIMALIS sangat berkualitas. Proses pemasangan cepat dan hasilnya memuaskan. Harga yang ditawarkan juga sangat bersaing dibandingkan tempat lain di Pekalongan.',
    image: '/images/section/testimonials/testi-3.jpg'
  },
  {
    id: 4,
    name: 'Siti Nurjanah',
    title: 'Ibu Rumah Tangga',
    content: 'Saya sangat senang dengan backdrop TV dan wall moulding yang dipasang di rumah kami. Tim SENI RUANG MINIMALIS PEKALONGAN sangat memperhatikan detail dan memberikan masukan yang tepat untuk ruangan kami yang terbatas. Terima kasih!',
    image: '/images/section/testimonials/testi-4.jpg'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-secondary text-sm tracking-wider uppercase animate-fade-in-up">
            Apa Kata Klien Kami
          </span>
          
          <AnimatedHeadline 
            beforeText="Testimoni"
            highlightedText="Kepuasan"
            rotatingText={["Klien", "Pelanggan", "Pengguna"]}
            afterText="Seni Ruang Minimalis"
            className="text-3xl md:text-4xl mx-auto animate-fade-in-up"
            tag="h2"
          />
          
          <p className="max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Kepuasan klien adalah prioritas utama kami. Berikut beberapa testimoni dari klien yang telah mempercayakan kebutuhan interior mereka pada Kami.
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mt-8 pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-white p-8 h-full flex flex-col rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4 text-secondary">
                  <i className="fas fa-quote-left text-3xl opacity-50"></i>
                </div>
                
                <p className="text-gray-700 mb-8 flex-grow">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden mr-4 border-2 border-primary">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill={true}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
                    <p className="text-primary text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialsSection