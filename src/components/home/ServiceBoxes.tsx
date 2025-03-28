// components/home/ServiceBoxes.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Komponen ServiceCard yang ditingkatkan
const ServiceCard = ({ 
  icon, 
  title, 
  description,
  image,
  linkUrl,
  isFeature = false
}: {
  icon: string;
  title: string;
  description: string;
  image: string;
  linkUrl: string;
  isFeature?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 ${
        isFeature ? 'transform md:-translate-y-4' : ''
      } hover:shadow-2xl animate-fade-in-up`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title}
          fill={true}
          style={{ objectFit: 'cover' }}
          className="transition-all duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${
          isFeature 
            ? 'from-primary/80 to-primary/95' 
            : 'from-black/60 to-black/90'
        } transition-all duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-80'
        }`}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-10 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
          isFeature ? 'bg-secondary text-primary' : 'bg-white/10 text-white'
        }`}>
          <i className={`fas fa-${icon} text-2xl transition-transform duration-300 ${
            isHovered ? 'transform rotate-12' : ''
          }`}></i>
        </div>
        
        {/* Title & Description */}
        <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
          isFeature ? 'text-white' : 'text-white'
        }`}>
          {title}
        </h3>
        
        <p className={`mb-6 ${
          isFeature ? 'text-white/90' : 'text-white/80'
        } flex-grow`}>
          {description}
        </p>
        
        {/* Link */}
        <div className="mt-auto">
          <Link 
            href={linkUrl}
            className={`inline-flex items-center text-sm font-semibold ${
              isFeature 
                ? 'text-secondary bg-white/10 hover:bg-white/20' 
                : 'text-white bg-primary/50 hover:bg-primary/80'
            } px-5 py-3 rounded-full transition-all duration-300 group-hover:translate-x-2`}
          >
            <span>Selengkapnya</span>
            <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
          </Link>
        </div>
        
        {/* Indicator for Featured */}
        {isFeature && (
          <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full">
            POPULER
          </div>
        )}
      </div>
    </div>
  )
}

const ServiceBoxes = () => {
  // Data layanan yang lebih terstruktur
  const services = [
    {
      id: 1,
      icon: 'hard-hat',
      title: 'Plafon Minimalis',
      description: 'Layanan pemasangan plafon gypsum dan PVC dengan desain minimalis untuk menciptakan langit-langit yang elegan dan tahan lama.',
      image: '/images/section/services/plafon.jpg',
      linkUrl: '/layanan/plafon',
      isFeature: false
    },
    {
      id: 2,
      icon: 'th-large',
      title: 'Wall Moulding & Backdrop',
      description: 'Solusi desain dinding modern dengan wall moulding, panel gypsum, wallpanel WPC, dan backdrop TV yang menambah nilai estetika ruangan Anda.',
      image: '/images/section/services/backdrop-tv.jpg',
      linkUrl: '/layanan/dinding',
      isFeature: true
    },
    {
      id: 3,
      icon: 'couch',
      title: 'Furniture & Interior',
      description: 'Pembuatan kitchen set, partisi, background live, dan kanopi dengan desain kustom yang fungsional dan menyesuaikan kebutuhan ruangan Anda.',
      image: '/images/section/services/kitchen.jpg',
      linkUrl: '/layanan/furniture',
      isFeature: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Layanan <span className="text-primary">Unggulan</span> Kami</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            SENI RUANG MINIMALIS PEKALONGAN menyediakan berbagai layanan desain dan konstruksi interior untuk kebutuhan rumah, kantor, dan bangunan komersial.
          </p>
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              linkUrl={service.linkUrl}
              isFeature={service.isFeature}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <Link 
            href="/layanan"
            className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Lihat Semua Layanan</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceBoxes