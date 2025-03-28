// components/home/CallToAction.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'

const CallToAction = ({ 
  backgroundImage = "/images/cta-background.jpg",
  title = "Wujudkan Ruang Impian Anda",
  subtitle = "KONSULTASI GRATIS",
  description = "Dapatkan konsultasi dan survei gratis dari tim ahli kami untuk mewujudkan interior minimalis yang sesuai dengan kebutuhan dan keinginan Anda.",
  primaryButtonText = "Hubungi Kami",
  primaryButtonLink = "https://wa.me/6285643132938",
  secondaryButtonText = "Lihat Portofolio",
  secondaryButtonLink = "/portfolio",
}) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image dengan overlay gelap */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={backgroundImage}
          alt="Interior design background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Overlay gelap untuk memastikan kontras teks */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Content box yang memposisikan konten secara terpisah dari background */}
        <div className="max-w-5xl mx-auto bg-primary/90 backdrop-blur-sm rounded-lg p-8 md:p-12 border-t-4 border-secondary shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Headline */}
            <div>
              {/* Subtitle */}
              <div className="inline-block bg-secondary text-primary px-4 py-1 rounded text-sm font-bold tracking-wider mb-4
                            transform -skew-x-6 hover:skew-x-0 transition-transform duration-300">
                {subtitle}
              </div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h2>
              
              {/* Description */}
              <p className="text-gray-100 text-lg mb-8 max-w-xl">
                {description}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link 
                  href={primaryButtonLink}
                  target={primaryButtonLink.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-secondary text-primary px-8 py-4 rounded-lg font-bold 
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
                
                {secondaryButtonText && (
                  <Link 
                    href={secondaryButtonLink}
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white 
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
                )}
              </div>
            </div>
            
            {/* Right Column - Feature cards - optional, hidden on mobile */}
            <div className="hidden md:block">
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-all duration-300 border border-white/10">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Survei Gratis</h4>
                      <p className="text-gray-200">
                        Kami menawarkan survei gratis ke lokasi untuk memastikan hasil yang sesuai dengan kebutuhan Anda.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg hover:bg-white/15 transition-all duration-300 border border-white/10">
                  <div className="flex items-start">
                    <div className="bg-secondary/20 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">Pengerjaan Cepat</h4>
                      <p className="text-gray-200">
                        Tim profesional kami menjamin pengerjaan yang cepat dan tepat waktu untuk setiap proyek.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diagonal Divider Bottom untuk transisi visual ke footer */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-2 z-0"></div>
    </section>
  )
}

export default CallToAction