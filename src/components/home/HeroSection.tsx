// components/home/HeroSection.tsx
'use client'
import React, { useState, useEffect, FormEvent } from 'react'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'
import Counter from '../ui/Counter'

const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    service: '',
    area: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const slides = [
    '/images/hero/modern-house-bright-interior.jpg',
    '/images/hero/mock-up-poster-in-modern-living-room-interior-design-with-green-empty-wall.jpg',
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Format tanggal hari ini
    const today = new Date()
    const formattedDate = today.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    
    // Format WhatsApp URL dengan data form yang dioptimalkan
    const whatsappNumber = '6285643132938' // Ganti dengan nomor WhatsApp yang diinginkan
    
    // Membuat pesan WhatsApp yang lebih terstruktur dan informatif
    const message = `*PERMINTAAN PENAWARAN PLAFON*
-----------------------------
Tanggal: ${formattedDate}
*INFO KLIEN*
Nama: ${formData.fullName}
${formData.companyName ? `Perusahaan: ${formData.companyName}` : ''}
${formData.email ? `Email: ${formData.email}` : ''}
Telepon: ${formData.phone}
*DETAIL PROYEK*
Layanan: ${formData.service}
Luas Area: ${formData.area}
*KETERANGAN TAMBAHAN*
${formData.message || 'Tidak ada keterangan tambahan'}
-----------------------------
Terkirim melalui: Website Ikmal Plafon`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Buka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank')
  }
  
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${slideIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="relative h-full w-full">
              <div className="h-full w-full absolute">
                <Image 
                  src={slide} 
                  alt="Interior design slide"
                  fill={true}
                  sizes="100vw" // Menambahkan prop sizes untuk mengatasi warning
                  style={{ objectFit: 'cover' }}
                  priority
                  className="object-center scale-105 animate-slow-zoom"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white max-w-xl">
            <span className="text-secondary text-sm font-semibold tracking-wider uppercase animate-fade-in-up">
              Plafon & Interior
            </span>
            
            <AnimatedHeadline 
              beforeText="Tingkatkan & Ubah"
              highlightedText="Ruangan Anda"
              rotatingText={["Lebih Baik", "Lebih Indah", "Lebih Cepat"]}
              afterText="Untuk Kehidupan Lebih Baik"
              className="text-4xl md:text-5xl lg:text-6xl font-bold my-4"
            />
            
            <div className="w-24 h-1 bg-secondary my-6"></div>
            
            <p className="text-white/90 text-lg mb-8 animate-fade-in-up leading-relaxed">
              Transformasi rumah dan bangunan Anda dengan layanan pemasangan plafon dan interior berkualitas. 
              Solusi yang tepat untuk ruangan lebih indah dan nyaman.
            </p>
            
            {/* Stats Counter Row */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col animate-fade-in-up bg-black/30 p-4 rounded-sm hover:bg-primary/80 transition-all duration-300">
                <div className="flex items-center">
                  <Counter end={100} className="text-secondary text-3xl font-bold" />
                  <span className="text-white text-3xl ml-1">+</span>
                </div>
                <h6 className="text-white/90 text-sm mt-2">Desain Plafon</h6>
              </div>
              
              <div className="flex flex-col animate-fade-in-up bg-black/30 p-4 rounded-sm hover:bg-primary/80 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center">
                  <Counter end={25} className="text-secondary text-3xl font-bold" />
                  <span className="text-white text-3xl ml-1">+</span>
                </div>
                <h6 className="text-white/90 text-sm mt-2">Desainer Ahli</h6>
              </div>
              
              <div className="flex flex-col animate-fade-in-up bg-black/30 p-4 rounded-sm hover:bg-primary/80 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center">
                  <Counter end={15} suffix="K" className="text-secondary text-3xl font-bold" />
                  <span className="text-white text-3xl ml-1">+</span>
                </div>
                <h6 className="text-white/90 text-sm mt-2">Klien Puas</h6>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-white/95 p-8 md:p-10 rounded-md shadow-xl animate-fade-in-up">
            <h3 className="text-primary text-2xl font-bold mb-6 text-center">Dapatkan Penawaran</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Nama Lengkap *"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Nama Perusahaan (opsional)"
                    className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <select
                      name="service"
                      className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Pilih Layanan *</option>
                      <option value="Plafon Gypsum">Plafon Gypsum</option>
                      <option value="Plafon PVC">Plafon PVC</option>
                      <option value="Drop Ceiling">Drop Ceiling</option>
                      <option value="Desain Interior">Desain Interior</option>
                    </select>
                  </div>
                  
                  <div>
                    <select
                      name="area"
                      className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                      required
                      value={formData.area}
                      onChange={handleInputChange}
                    >
                      <option value="">Luas Perkiraan *</option>
                      <option value="Kurang dari 50m²">Kurang dari 50m²</option>
                      <option value="50m² - 100m²">50m² - 100m²</option>
                      <option value="100m² - 200m²">100m² - 200m²</option>
                      <option value="Lebih dari 200m²">Lebih dari 200m²</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email (opsional)"
                      className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Telepon/WhatsApp *"
                      className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Jelaskan kebutuhan Anda... (opsional)"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-4 font-medium rounded-sm hover:bg-secondary hover:text-primary transition-colors duration-300 flex items-center justify-center group"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Minta Penawaran
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection