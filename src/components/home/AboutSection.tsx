// components/home/AboutSection.tsx
import React from 'react'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'
import IconList from '../ui/IconList'
import Link from 'next/link'

const AboutSection = () => {
  const featuresLeft = [
    'Gratis survei pengukuran',
    'Gratis konsultasi desain',
    'Tenaga ahli berpengalaman'
  ]

  const featuresRight = [
    'Proses pengerjaan cepat & rapi',
    'Koleksi warna & varian lengkap',
    'Bisa request model & ukuran'
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Experience Badge */}
            <div className="absolute top-0 left-0 bg-primary text-white p-6 z-10 animate-fade-in-up flex items-center">
              <i className="fas fa-medal text-4xl mr-4"></i>
              <h4 className="text-xl font-bold">Ahli Desain Interior</h4>
            </div>

            {/* Main Image */}
            <div className="relative h-[500px] md:h-[600px] mt-16 ml-8">
              <Image
                src="/images/section/getting-keys-to-new-house.jpg"
                alt="Seni Ruang Minimalis Pekalongan"
                fill={true}
                style={{ objectFit: 'cover' }}
                className="object-right-top"
              />
            </div>

            {/* Phone Button */}
            <Link
              href="https://wa.me/6285643132938"
              target="_blank"
              className="absolute bottom-8 right-8 bg-secondary text-primary px-6 py-3 flex items-center hover:bg-white transition-colors duration-300"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              085643132938
            </Link>
          </div>

          {/* Right Column - Content */}
          <div className="md:pl-8 flex flex-col justify-center">
            <span className="text-secondary text-sm tracking-wider uppercase animate-fade-in-up">
              Tentang Kami
            </span>

            <AnimatedHeadline
              beforeText="Tim Profesional"
              highlightedText="Desain Interior"
              rotatingText={["Minimalis", "Modern", "Estetik"]}
              afterText="Di Pekalongan"
              className="text-3xl md:text-4xl animate-fade-in-up"
              tag="h2"
            />

            <div className="w-24 h-1 my-6">
              <svg width="96" height="12" viewBox="0 0 96 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12L8 0L16 12L24 0L32 12L40 0L48 12L56 0L64 12L72 0L80 12L88 0L96 12" stroke="#FABB51" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </div>

            <p className="mb-8 animate-fade-in-up">
              SENI RUANG MINIMALIS PEKALONGAN hadir sebagai solusi terpercaya bagi Anda yang
              menginginkan sentuhan estetika minimalis pada ruangan. Didirikan dengan semangat
              inovasi dan kreativitas, kami telah melayani berbagai klien dengan penuh dedikasi
              dan profesionalisme.
            </p>

            <div className="bg-light border-l-4 border-secondary p-4 mb-8 animate-fade-in-up">
              <p className="italic">
                "Menciptakan ruang minimalis yang berbicara lebih banyak."
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
              <div>
                <IconList items={featuresLeft} />
              </div>
              <div>
                <IconList items={featuresRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection