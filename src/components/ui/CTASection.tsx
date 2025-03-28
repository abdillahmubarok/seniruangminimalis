// components/ui/CTASection.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Wujudkan Ruang Impian Anda",
  subtitle = "KONSULTASI GRATIS",
  description = "Dapatkan konsultasi dan survei gratis dari tim ahli kami untuk mewujudkan interior minimalis yang sesuai dengan kebutuhan dan keinginan Anda.",
  primaryButtonText = "Hubungi Kami",
  primaryButtonLink = "https://wa.me/6285643132938",
  secondaryButtonText = "Lihat Portofolio",
  secondaryButtonLink = "/portfolio",
  backgroundImage = "/images/cta-background.jpg"
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  // Intersection Observer untuk mendeteksi saat CTA muncul di viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 } // Trigger saat 10% dari elemen terlihat
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])
  
  // Efek parallax pada scroll (dengan intensitas yang dikurangi)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background dengan efek parallax yang lebih halus */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateY(${scrollY * 0.05}px)`, // Mengurangi intensitas parallax
          transition: 'transform 0.2s ease-out',
        }}
      >
        <Image
          src={backgroundImage}
          alt="Interior minimalis"
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          quality={90}
          className="transition-transform duration-500"
        />
        
        {/* Overlay yang lebih gelap untuk keterbacaan teks */}
        <div className="absolute inset-0 bg-primary/75 md:bg-gradient-to-r md:from-primary/90 md:via-primary/80 md:to-primary/70"></div>
      </div>
      
      {/* Elemen Dekoratif */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 border-8 border-amber-400 rounded-full opacity-20 
                      transform rotate-12 translate-x-12 -translate-y-6"></div>
      <div className="absolute bottom-1/4 left-0 w-20 h-20 bg-amber-400 rounded-full opacity-10 
                      transform -translate-x-10 translate-y-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-amber-400 opacity-30"></div>
      <div className="absolute bottom-0 left-10 md:left-1/4 w-2 h-1/3 bg-amber-400 opacity-50"></div>
      
      {/* Container konten yang diposisikan dengan lebih baik */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
        <div 
          className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-10 border-t-4 border-amber-400 
                     shadow-2xl transform hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-500"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          {/* Subtitle */}
          <div className="inline-block bg-amber-400 text-primary px-4 py-1 rounded text-sm font-bold tracking-wider mb-4
                        transform -skew-x-6 hover:skew-x-0 transition-transform duration-300">
            {subtitle}
          </div>
          
          {/* Title dengan lebih menonjol */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          {/* Description dengan kontras yang ditingkatkan */}
          <p className="text-gray-100 text-lg mb-8 max-w-2xl">
            {description}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              href={primaryButtonLink}
              target={primaryButtonLink.startsWith('http') ? '_blank' : '_self'}
              className="group relative overflow-hidden bg-amber-400 text-primary px-8 py-4 rounded-full font-bold 
                       hover:text-white transition-colors duration-300 inline-flex items-center"
            >
              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 
                            origin-left transition-transform duration-300"></span>
              <span className="relative z-10 flex items-center">
                <i className="fab fa-whatsapp mr-2 text-xl transform group-hover:scale-110 transition-transform"></i>
                {primaryButtonText}
              </span>
            </Link>
            
            <Link 
              href={secondaryButtonLink}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white 
                       hover:text-primary transition-all duration-300 flex items-center group"
            >
              <span>{secondaryButtonText}</span>
              <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Diagonal Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-2 z-0"></div>
    </section>
  )
}

export default CTASection