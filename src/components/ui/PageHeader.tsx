// components/ui/PageHeader.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

interface PageHeaderProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  backgroundImage = '/images/logo.jpg'
}) => {
  const headerRef = useRef<HTMLDivElement>(null)
  
  // Efek parallax sederhana ketika scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      const scrollPosition = window.scrollY
      const parallaxValue = scrollPosition * 0.4
      
      // Efek parallax pada background
      const backgroundElement = headerRef.current.querySelector('.bg-image') as HTMLElement
      if (backgroundElement) {
        backgroundElement.style.transform = `translateY(${parallaxValue}px)`
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <section 
      ref={headerRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background Image dengan Parallax Effect */}
      <div className="absolute inset-0 z-0 bg-image transition-transform duration-300">
        <Image
          src={backgroundImage}
          alt={title}
          fill={true}
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/60"></div>
      </div>
      
      {/* Elemen Dekoratif */}
      <div className="absolute -bottom-6 left-0 right-0 h-12 bg-white transform -skew-y-2 z-10"></div>
      <div className="absolute -top-4 -left-4 w-24 h-24 border-8 border-amber-400 opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 right-0 w-40 h-40 border-8 border-amber-400 opacity-10 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Garis Penanda (Line Accents) */}
      <div className="absolute left-0 top-0 h-full w-2 bg-amber-400 opacity-80"></div>
      <div className="hidden md:block absolute right-0 bottom-0 h-2 w-1/4 bg-amber-400 opacity-40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto md:ml-12 lg:ml-24">
          <div className="bg-white/5 backdrop-blur-sm border-l-4 border-amber-400 pl-6 py-2 pr-3 inline-block mb-4 transform skew-x-2 animate-fade-in-right">
            <h4 className="text-amber-400 font-medium tracking-wider uppercase text-sm md:text-base">
              SENI RUANG MINIMALIS
            </h4>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            {title}
          </h1>
          
          {description && (
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-r-lg border-l-4 border-amber-400 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-base md:text-lg text-gray-100">
                {description}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Shape Overlay */}
      <div className="md:hidden absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,192L60,176C120,160,240,128,360,117.3C480,107,600,117,720,144C840,171,960,213,1080,208C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default PageHeader