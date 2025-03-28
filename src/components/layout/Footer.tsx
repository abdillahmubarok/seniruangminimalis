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
                className="mr-3 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">SENI RUANG MINIMALIS</h3>
                <span className="text-xs text-gray-300">PEKALONGAN</span>
              </div>
            </div>
            <p className="mb-6">
              Spesialis desain interior yang berkomitmen untuk mengubah ruangan biasa menjadi karya seni minimalis yang fungsional dan estetik.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/19U6RZpifp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary border-2 border-amber-400 bg-opacity-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/seni_ruang_minimalis?igsh=eWk5b25xamZsdmpx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary border-2 border-amber-400 bg-opacity-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://wa.me/6285643132938" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary border-2 border-amber-400 bg-opacity-10 flex items-center justify-center hover:bg-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
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
                    <svg className="h-3 w-3 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
            <li className="flex">
  <div className="flex-shrink-0 h-12 flex items-center mr-3">
    <svg className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>
  <div className="flex-1">
    <a 
      href="https://maps.app.goo.gl/tUJiU7x9rkmbF2L3A" 
      className="hover:text-amber-400 transition-colors text-sm"
    >
      <span className="block font-medium text-amber-400 mb-1">Alamat:</span>
      Desa Jetak Lengkong, Dukuh Blumbang, RT04/RW02<br/>
      Kec. Wonopringgo 51181<br/>
      Pekalongan, Jawa Tengah - Indonesia
    </a>
  </div>
</li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <a href="https://wa.me/6285643132938" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  085643132938 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
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
                  <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Petunjuk Arah
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/30 mt-12 pt-8">
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

        {/* Watermark dengan desain kreatif yang responsive */}
        <div className="mt-10 text-center relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-gray-700/50"></div>
          <div className="relative inline-block bg-primary px-4 py-2 text-xs text-white group transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
              <div className="flex items-center">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <span className="relative z-10">
                  Dibuat dengan 
                  <svg className="inline-block h-3 w-3 mx-1 text-secondary animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/>
                  </svg> 
                  oleh&nbsp;
                </span>
              </div>
              <a
                href="https://mubarokah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-secondary transition-colors relative z-10"
              >
                PT MUBAROKAH DIGITAL NUSANTARA
              </a>
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer