// components/layout/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="z-10 flex items-center">
            {isScrolled ? (
              <Image
                src="/images/logo.jpg"
                alt="SENI RUANG MINIMALIS PEKALONGAN"
                width={40}
                height={40}
                className="mr-2"
              />
            ) : (
              <Image
                src="/images/logo.jpg"
                alt="SENI RUANG MINIMALIS PEKALONGAN"
                width={40}
                height={40}
                className="mr-2"
              />
            )}
            <span className={`text-lg md:text-xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <span className="hidden sm:inline">SENI RUANG MINIMALIS</span>
              <span className="sm:hidden">SRM</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {[
                { name: 'Beranda', path: '/' },
                { name: 'Tentang Kami', path: '/about' },
                { name: 'Layanan', path: '/services' },
                { name: 'Portofolio', path: '/portfolio' },
                { name: 'Hubungi Kami', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* CTA Button on desktop */}
          <div className="hidden md:block">
            <Link 
              href="https://wa.me/6285643132938"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors duration-300"
              target="_blank"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Hubungi Kami
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
          
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-primary p-4 md:hidden">
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex justify-center mb-10">
                <Image
                  src="/images/logo.jpg"
                  alt="SENI RUANG MINIMALIS PEKALONGAN"
                  width={80}
                  height={80}
                />
              </div>
              
              <ul className="space-y-6">
                {[
                  { name: 'Beranda', path: '/' },
                  { name: 'Tentang Kami', path: '/about' },
                  { name: 'Layanan', path: '/services' },
                  { name: 'Portofolio', path: '/portfolio' },
                  { name: 'Hubungi Kami', path: '/contact' }
                ].map((item) => (
                  <li key={item.name} className="text-center">
                    <Link
                      href={item.path}
                      className="text-white text-xl font-medium block hover:text-secondary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 text-center">
                <Link 
                  href="https://wa.me/6285643132938"
                  className="bg-secondary text-white px-6 py-3 inline-block rounded-full hover:bg-secondary-dark transition-colors duration-300"
                  target="_blank"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Hubungi Kami
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header