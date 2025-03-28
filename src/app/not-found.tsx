// app/not-found.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFoundPage = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        // Menambahkan animasi fade-in saat halaman dimuat
        setIsVisible(true)
    }, [])

    // Daftar link cepat untuk navigasi
    const quickLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Layanan', path: '/services' },
        { name: 'Portofolio', path: '/portfolio' },
        { name: 'Hubungi Kami', path: '/contact' }
    ]

    return (
        <div className="min-h-screen bg-primary flex flex-col">
            {/* Elemen dekoratif */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-secondary"></div>

            <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-12 mt-12">
                <div
                    className={`container mx-auto max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="grid md:grid-cols-2">
                        {/* Ilustrasi */}
                        <div className="bg-primary p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="relative z-10 text-center">
                                <h1 className="text-9xl font-bold text-white opacity-90">404</h1>
                                <p className="text-xl font-light text-white/80 mt-2 mb-6">Halaman tidak ditemukan</p>
                                <div className="w-16 h-1 bg-secondary mx-auto"></div>
                            </div>

                            {/* Elemen desain dekoratif */}
                            <div className="absolute -top-12 -right-12 w-40 h-40 border-8 border-amber-400/20 rounded-full"></div>
                            <div className="absolute -bottom-16 -left-16 w-60 h-60 border-8 border-amber-400/10 rounded-full"></div>
                            <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-amber-400/20 rounded-full"></div>

                            {/* Ilustrasi dekoratif */}
                            <div className="absolute inset-0 opacity-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" className="w-full h-full">
                                    <path fill="white" d="M850,194.2L553.9,490.3L553.9,623.2L754.8,824.1V490L320.2,824.6V248.1L128.7,90.2L150,70L850,194.2ZM371.5,490.3V187.3L669.9,207.9L371.5,490.3Z"></path>
                                </svg>
                            </div>
                        </div>

                        {/* Konten */}
                        <div className="p-8 md:p-12">
                            <div className="mb-6 flex items-center">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="SENI RUANG MINIMALIS PEKALONGAN"
                                    width={60}
                                    height={60}
                                    className="mr-4 rounded-lg"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-primary">SENI RUANG MINIMALIS</h3>
                                    <span className="text-xs text-gray-500">PEKALONGAN</span>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Sepertinya Anda Tersesat</h2>

                            <p className="text-gray-600 mb-8">
                                Maaf, halaman yang Anda cari tidak ditemukan atau mungkin telah dipindahkan.
                                Silakan kembali ke halaman utama atau coba salah satu halaman populer di bawah ini.
                            </p>

                            {/* Navigasi Utama */}
                            <Link
                                href="/"
                                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors mb-8 group"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span>Kembali ke Beranda</span>
                                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            {/* Navigasi Cepat */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">Atau kunjungi halaman populer:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {quickLinks.map((link) => (
                                        <Link
                                            key={link.path}
                                            href={link.path}
                                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-secondary hover:text-primary transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Informasi Kontak */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-3">Perlu bantuan? Hubungi kami:</p>
                                <a
                                    href="https://wa.me/6285643132938"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    WhatsApp: 085643132938
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default NotFoundPage