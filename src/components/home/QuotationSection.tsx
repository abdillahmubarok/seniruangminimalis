// components/home/QuotationSection.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'
import Link from 'next/link'

const QuotationSection = () => {
  // State untuk mengontrol modal video
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  
  // Fungsi untuk modal video
  const openVideoModal = () => setIsVideoModalOpen(true)
  const closeVideoModal = () => setIsVideoModalOpen(false)
  
  // URL video - bisa diganti dengan video YouTube atau path lokal
  const videoUrl = "/video/hero/proses-video.mp4" // Ganti dengan ID video YouTube
  // Alternatif untuk video lokal: const videoUrl = "/video/seni-ruang-minimalis.mp4"
  
  // Keunggulan SENI RUANG MINIMALIS PEKALONGAN
  const features = [
    'Gratis survei pengukuran',
    'Gratis konsultasi desain',
    'Koleksi warna & varian terlengkap',
    'Request model & ukuran',
    'Proses pengerjaan cepat & rapi',
    'Tenaga ahli berpengalaman'
  ]

  // Menambahkan event listener untuk key press (ESC)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isVideoModalOpen) {
        closeVideoModal()
      }
    }

    // Menambahkan event listener untuk click di luar modal
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && isVideoModalOpen) {
        closeVideoModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    // Disable scroll saat modal terbuka
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [isVideoModalOpen])

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image with Play Button */}
          <div className="relative">
            <div 
              className="absolute top-10 left-1/3 transform -translate-x-1/2 z-10 bg-primary p-8 text-center animate-fade-in-up cursor-pointer hover:bg-secondary transition-colors duration-300"
              onClick={openVideoModal}
            >
              <i className="fas fa-play text-4xl text-white mb-2"></i>
              <span className="text-white font-medium block">Lihat Video</span>
            </div>
            
            <div className="relative mt-16 h-[500px] md:h-[600px]">
              <Image 
                src="/images/section/getting-keys-to-new-house.jpg"
                alt="Seni Ruang Minimalis Pekalongan - Interior design services"
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="md:pl-8 flex flex-col justify-center">
            <span className="text-secondary text-sm tracking-wider uppercase animate-fade-in-up">
              Konsultasi Desain Interior
            </span>
            
            <AnimatedHeadline 
              beforeText="Ruang"
              highlightedText="Minimalis"
              rotatingText={["Modern", "Elegan", "Estetik"]}
              afterText="Untuk Kenyamanan"
              className="text-3xl md:text-4xl animate-fade-in-up"
              tag="h2"
            />
            
            <div className="w-24 h-1 bg-secondary my-6"></div>
            
            <p className="mb-8 animate-fade-in-up">
              SENI RUANG MINIMALIS PEKALONGAN hadir sebagai solusi terpercaya bagi Anda yang menginginkan sentuhan estetika minimalis pada ruangan. Kami membantu mewujudkan visi Anda menjadi kenyataan dengan kombinasi keahlian teknis, bahan berkualitas, dan pemahaman mendalam tentang desain minimalis.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-fade-in-up">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-2"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="bg-primary text-white px-6 py-3 font-medium hover:bg-secondary transition-colors duration-300 animate-fade-in-up"
              >
                Dapatkan Penawaran
              </Link>
              
              <Link 
                href="https://wa.me/6285643132938"
                className="text-primary flex items-center hover:opacity-80 transition-opacity duration-300 animate-fade-in-up"
                style={{ animationDelay: '0.2s' }}
                target="_blank"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                085643132938
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal - dengan improvisasi untuk mobile */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out">
          <div ref={modalRef} className="relative bg-white w-full max-w-4xl rounded shadow-xl transition-transform duration-300 ease-in-out transform scale-100">
            {/* Tombol close yang sudah dioptimasi - selalu di pojok kanan atas */}
            <button 
              onClick={closeVideoModal}
              className="absolute top-0 right-0 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full z-10 transform translate-x-1/2 -translate-y-1/2 hover:bg-secondary hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-label="Tutup video"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            
            <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded">
              {/* Video Player dengan loading indicator */}
              {videoUrl.includes('youtube.com') ? (
                <iframe 
                  src={videoUrl} 
                  title="Video Presentation" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full relative">
                  <video 
                    src={videoUrl} 
                    controls 
                    className="w-full h-full"
                    autoPlay
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default QuotationSection