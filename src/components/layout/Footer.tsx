// components/layout/Footer.tsx
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo.jpg"
                alt="SENI RUANG MINIMALIS PEKALONGAN"
                width={50}
                height={50}
                className="mr-3"
              />
              <h3 className="text-xl font-bold">SENI RUANG MINIMALIS</h3>
            </div>
            <p className="mb-6">
              Spesialis desain interior yang berkomitmen untuk mengubah ruangan biasa menjadi karya seni minimalis yang fungsional dan estetik.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" target="_blank" className="w-10 h-10 rounded-full bg-primary border-2 border-amber-400 bg-opacity-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com/" target="_blank" className="w-10 h-10 rounded-full bg-primary border-2 border-amber-400 bg-opacity-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/6285643132938" target="_blank" className="w-10 h-10 rounded-full bg-primary border-2 border-amber-400 bg-opacity-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {[
                { name: 'Plafon Gypsum', path: '/services/plafon-gypsum' },
                { name: 'Plafon PVC', path: '/services/plafon-pvc' },
                { name: 'Wall Moulding Dinding', path: '/services/wall-moulding' },
                { name: 'Backdrop TV', path: '/services/backdrop-tv' },
                { name: 'Kitchen Set', path: '/services/kitchen-set' },
                { name: 'Wallpanel WPC', path: '/services/wallpanel-wpc' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="hover:text-secondary transition-colors flex items-center"
                  >
                    <i className="fas fa-angle-right mr-2"></i>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Informasi Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>
                  <a href="https://maps.app.goo.gl/tUJiU7x9rkmbF2L3A">Desa Jetak Lengkong, Dukuh Blumbang , RT04/ RW02 Kec. Wonopringgo 51181 Pekalongan Jawa Tengah - Indonesia
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp mr-3"></i>
                <a href="https://wa.me/6285643132938" target="_blank" className="hover:text-secondary transition-colors">
                  085643132938 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock mr-3"></i>
                <span>Senin - Sabtu: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Project Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6">Lokasi Kami</h3>
            <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-amber-400 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.51815267277235!2d109.63216578152483!3d-6.975018988928168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7021004e1553b1%3A0x1375609a2801fdc7!2sRumah!5e0!3m2!1sid!2sid!4v1743155082136!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi SENI RUANG MINIMALIS PEKALONGAN"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 py-2 px-3 text-xs text-center transition-all duration-300 hover:bg-opacity-90">
                <Link
                  href="https://maps.app.goo.gl/tUJiU7x9rkmbF2L3A"
                  target="_blank"
                  className="flex items-center justify-center text-amber-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-directions mr-2"></i>
                  Petunjuk Arah
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-transparent mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-300">
              © {new Date().getFullYear()} SENI RUANG MINIMALIS PEKALONGAN. Seluruh Hak Dilindungi.
            </div>
            <div className="flex justify-start md:justify-end space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                Kebijakan Privasi
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>

        {/* Watermark dengan desain kreatif */}
        <div className="mt-10 text-center relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-gray-700"></div>
          <span className="relative inline-flex items-center bg-primary px-4 text-xs text-gray-400 group overflow-hidden transition-all duration-300 hover:text-white">
            <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
              <i className="fas fa-code"></i>
            </span>
            <span className="relative z-10">
              Dibuat dengan <i className="fas fa-heart text-secondary mx-1 animate-pulse"></i> oleh
            </span>
            <a
              href="https://mubarokah.com"
              target="_blank"
              className="ml-1 font-semibold hover:text-secondary transition-colors relative z-10"
            >
              PT MUBAROKAH DIGITAL NUSANTARA
            </a>
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
              <i className="fas fa-laptop-code"></i>
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer