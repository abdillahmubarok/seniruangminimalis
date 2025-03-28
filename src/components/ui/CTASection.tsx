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
  const [isMobile, setIsMobile] = useState(false)
  
  // Deteksi perangkat mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])
  
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
      className="relative pt-32 pb-24 md:py-32 overflow-hidden"
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
          style={{ 
            objectFit: 'cover', 
            objectPosition: isMobile ? 'center 30%' : 'center' // Sesuaikan posisi gambar untuk mobile
          }}
          quality={90}
          className="transition-transform duration-500"
          priority
        />
        
        {/* Overlay yang lebih gelap untuk keterbacaan teks, khususnya pada mobile */}
        <div className="absolute inset-0 bg-primary/85 md:bg-gradient-to-r md:from-primary/90 md:via-primary/80 md:to-primary/70"></div>
      </div>
      
      {/* Elemen Dekoratif */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 border-8 border-amber-400 rounded-full opacity-20 
                      transform rotate-12 translate-x-12 -translate-y-6"></div>
      <div className="absolute bottom-1/4 left-0 w-20 h-20 bg-amber-400 rounded-full opacity-10 
                      transform -translate-x-10 translate-y-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2 bg-amber-400 opacity-30"></div>
      <div className="absolute bottom-0 left-10 md:left-1/4 w-2 h-1/3 bg-amber-400 opacity-50"></div>
      
      {/* Container konten yang diposisikan dengan lebih baik, terutama untuk mobile */}
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-10 border-t-4 border-amber-400 
                     shadow-2xl transform hover:shadow-amber-400/20 hover:-translate-y-1 transition-all duration-500
                     mt-10 md:mt-0" // Menambahkan margin-top untuk mobile
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
          
          {/* Title dengan lebih menonjol dan text shadow untuk keterbacaan lebih baik */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
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
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2 transform group-hover:scale-110 transition-transform" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                {primaryButtonText}
              </span>
            </Link>
            
            <Link 
              href={secondaryButtonLink}
              className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white 
                         hover:text-primary transition-all duration-300 flex items-center group"
            >
              <span>{secondaryButtonText}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
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