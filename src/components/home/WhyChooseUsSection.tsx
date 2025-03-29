// components/home/WhyChooseUsSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedHeadline from '../ui/AnimatedHeadline'
import Link from 'next/link'

// Icon Box Component
const IconBox = ({
    icon,
    title,
    description,
    animationDelay = 0
}: {
    icon: string;
    title: string;
    description: string;
    animationDelay?: number;
}) => {
    return (
        <div
            className="animate-fade-in-up"
            style={{ animationDelay: `${animationDelay}ms` }}
        >
            <div className="flex items-start mb-6">
                <div className="text-4xl text-primary mr-4">
                    <i className={`fas fa-${icon}`}></i>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">{title}</h4>
                    <p className="text-gray-700">{description}</p>
                </div>
            </div>
        </div>
    )
}

const WhyChooseUsSection = () => {
    // Data untuk keunggulan SENI RUANG MINIMALIS PEKALONGAN
    const benefits = [
        {
            icon: 'ruler-combined',
            title: 'Survei & Konsultasi Gratis',
            description: 'Dapatkan survei pengukuran ke lokasi dan konsultasi desain dari tim ahli kami tanpa biaya tambahan.'
        },
        {
            icon: 'store-alt',
            title: 'Tim Profesional ke Rumah',
            description: 'Tim kami yang berpengalaman siap datang ke lokasi Anda untuk memberikan pelayanan terbaik.'
        },
        {
            icon: 'tags',
            title: 'Harga Bersaing',
            description: 'Kami menawarkan harga yang kompetitif dengan kualitas terbaik untuk setiap proyek yang kami kerjakan.'
        },
        {
            icon: 'sync',
            title: 'Revisi Desain',
            description: 'Kami menyediakan kesempatan revisi desain untuk memastikan hasil akhir sesuai dengan keinginan Anda.'
        }
    ]

    return (
        <section className="py-24 px-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Image with Background */}
                    <div className="relative">
                        <div className="bg-primary p-6 md:p-10 relative z-10 mr-6 md:mr-10 h-[500px] md:h-[600px] mt-6 md:mt-10">
                            <div className="absolute top-0 right-0 transform translate-x-6 md:translate-x-10 -translate-y-6 md:-translate-y-10 w-full h-full">
                                <Image
                                    src="/images/section/pexels-fotoaibe-1571470.jpg"
                                    alt="Interior modern SENI RUANG MINIMALIS PEKALONGAN"
                                    fill={true}
                                    style={{ objectFit: 'cover' }}
                                    className="animate-fade-in-up"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:pl-8 flex flex-col justify-center">
                        <span className="text-secondary text-sm tracking-wider uppercase animate-fade-in-up">
                            Mengapa Memilih Kami
                        </span>

                        <AnimatedHeadline
                            beforeText="Solusi"
                            highlightedText="Interior Terbaik"
                            rotatingText={["Minimalis", "Modern", "Estetik"]}
                            afterText="Untuk Rumah Anda"
                            className="text-3xl md:text-4xl animate-fade-in-up"
                            tag="h2"
                        />

                        <div className="w-24 h-1 my-6">
                            <svg width="96" height="12" viewBox="0 0 96 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12L8 0L16 12L24 0L32 12L40 0L48 12L56 0L64 12L72 0L80 12L88 0L96 12" stroke="#FABB51" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                        </div>

                        <p className="mb-8 animate-fade-in-up">
                            Kami berkomitmen menyediakan layanan desain interior dan konstruksi berkualitas tinggi.
                            Dengan pengalaman dan keahlian tim kami, Anda bisa mendapatkan ruangan yang tidak hanya indah tapi juga nyaman dan fungsional.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {benefits.map((benefit, index) => (
                                <IconBox
                                    key={index}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    animationDelay={index * 200}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection