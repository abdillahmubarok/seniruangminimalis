// components/home/CallToAction.tsx
import React from 'react'
import Link from 'next/link'
import AnimatedHeadline from '../ui/AnimatedHeadline'

const CallToAction = () => {
  return (
    <section className="py-24 px-4 bg-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 flex flex-col justify-center animate-fade-in-up">
            <span className="text-secondary text-sm tracking-wider uppercase">
              Wujudkan Ruangan Impian Anda
            </span>
            
            <AnimatedHeadline 
              beforeText="Desain"
              highlightedText="Interior Minimalis"
              rotatingText={["Elegan", "Estetik", "Fungsional"]}
              afterText="Untuk Anda"
              className="text-3xl md:text-4xl animate-fade-in-up"
              tag="h2"
            />
            
            <div className="w-24 h-1 bg-secondary my-6"></div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <i className="fas fa-ruler-combined text-4xl text-primary"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Layanan Komprehensif</h4>
              <p className="mb-6">
                Kami menawarkan berbagai solusi interior mulai dari Plafon Gypsum, Wall Moulding, 
                Backdrop TV, Kitchen Set, hingga Partisi dengan pilihan model dan warna terlengkap.
              </p>
              <Link 
                href="/services"
                className="inline-block bg-primary text-white px-6 py-3 font-medium hover:bg-secondary transition-colors duration-300 hover:translate-y-1"
              >
                Lihat Layanan Kami
              </Link>
            </div>
            
            {/* Package 2 */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6">
                <i className="fas fa-home text-4xl text-secondary"></i>
              </div>
              <h4 className="text-2xl font-bold mb-4">Konsultasi & Survei Gratis</h4>
              <p className="mb-6">
                Dapatkan konsultasi desain dan survei pengukuran ke lokasi secara gratis. 
                Tim berpengalaman kami siap membantu mewujudkan ruangan impian Anda dengan proses 
                pengerjaan yang cepat dan rapi.
              </p>
              <Link 
                href="https://wa.me/6285643132938"
                className="inline-block bg-primary text-white px-6 py-3 font-medium hover:bg-secondary transition-colors duration-300 hover:translate-y-1"
                target="_blank"
              >
                Hubungi Kami Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction