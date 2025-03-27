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
    name: 'John Doe',
    title: 'CEO',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/images/section/getting-keys-to-new-house.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Interior Designer',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/images/section/getting-keys-to-new-house.jpg'
  },
  {
    id: 3,
    name: 'Mark Johnson',
    title: 'Architect',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/images/section/getting-keys-to-new-house.jpg'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    title: 'Home Owner',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    image: '/images/section/getting-keys-to-new-house.jpg'
  }
]

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-secondary text-sm tracking-wider uppercase animate-fade-in-up">
            Our Client Says
          </span>
          
          <AnimatedHeadline 
            beforeText="The Best"
            highlightedText="Feedback"
            rotatingText={["Better", "Bigger", "Faster"]}
            afterText="From Clients"
            className="text-3xl md:text-4xl mx-auto animate-fade-in-up"
            tag="h2"
          />
          
          <p className="max-w-2xl mx-auto mt-4 animate-fade-in-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 3000,
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
          className="mt-8"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="h-auto">
              <div className="bg-primary p-8 h-full flex flex-col">
                <p className="text-white mb-8 flex-grow">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      fill={true}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  
                  <div>
                    <h5 className="text-white font-bold">{testimonial.name}</h5>
                    <p className="text-secondary text-sm">{testimonial.title}</p>
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