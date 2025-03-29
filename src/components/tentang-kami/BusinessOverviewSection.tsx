// components/about/BusinessOverviewSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedHeadline from '../ui/AnimatedHeadline'

const BusinessOverviewSection = () => {
    const [refLeft, inViewLeft] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [refRight, inViewRight] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Variasi animasi yang aman untuk mobile - menggunakan opacity dan y daripada x
    const fadeUpVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-16 lg:py-24 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column */}
                    <motion.div 
                        ref={refLeft}
                        initial="hidden"
                        animate={inViewLeft ? "visible" : "hidden"}
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7 }}
                        className="pr-0 md:pr-8"
                    >
                        <span className="text-secondary text-sm font-semibold tracking-wider uppercase block mb-2">
                            Kenali Lebih Dekat
                        </span>
                        
                        <AnimatedHeadline 
                            beforeText="Profil"
                            highlightedText="Perusahaan"
                            rotatingText={[]}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        />
                        
                        <div className="w-24 h-1 mb-6">
                        <svg width="96" height="12" viewBox="0 0 96 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 12L8 0L16 12L24 0L32 12L40 0L48 12L56 0L64 12L72 0L80 12L88 0L96 12" stroke="#FABB51" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </div>
                        
                        <div className="mb-10">
                            <p className="text-gray-700 mb-6">
                                SENI RUANG MINIMALIS PEKALONGAN hadir sebagai solusi terpercaya bagi Anda yang menginginkan sentuhan estetika minimalis pada ruangan. Didirikan dengan semangat inovasi dan kreativitas, kami telah melayani berbagai klien di Pekalongan dan sekitarnya dengan penuh dedikasi dan profesionalisme.
                            </p>
                        </div>
                        
                        <blockquote className="border-l-4 border-secondary pl-5 italic text-gray-700 my-8">
                            <p className="mb-4">
                                "Kami percaya bahwa setiap ruangan memiliki potensi untuk menjadi karya seni. Dengan kombinasi keahlian teknis, bahan berkualitas, dan pemahaman mendalam tentang desain minimalis, kami membantu mewujudkan visi Anda menjadi kenyataan."
                            </p>
                            <cite className="text-primary font-semibold block">- Direktur SENI RUANG MINIMALIS</cite>
                        </blockquote>
                    </motion.div>
                    
                    {/* Right Column */}
                    <motion.div 
                        ref={refRight}
                        initial="hidden"
                        animate={inViewRight ? "visible" : "hidden"}
                        variants={fadeUpVariant}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="pl-0 md:pl-8"
                    >
                        <div className="prose prose-lg">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-0 first-letter:text-primary mb-6">
                                Sebagai spesialis desain interior dan konstruksi, kami menawarkan berbagai layanan pemasangan dan konstruksi untuk melengkapi kebutuhan interior Anda. Mulai dari plafon gypsum dan PVC, wall moulding dinding, Wall Moulding, backdrop TV, kitchen set, hingga partisi.
                            </p>
                            
                            <p className="mb-6">
                                Keunggulan kami tidak hanya terletak pada produk yang berkualitas, tetapi juga pada layanan yang kami berikan. Kami menawarkan survei dan konsultasi gratis, koleksi warna dan varian terlengkap, serta fleksibilitas dalam menyesuaikan model dan ukuran sesuai keinginan Anda.
                            </p>
                            
                            <p className="mb-6">
                                Pengerjaan yang cepat dan rapi oleh tim yang berpengalaman menjadi komitmen kami untuk memberikan kepuasan maksimal bagi setiap klien. Kami menerima pemesanan dan pemasangan untuk berbagai jenis bangunan, mulai dari rumah, kantor, hotel, gedung, sekolah, hingga tempat ibadah.
                            </p>
                            
                            <p className="mb-6">
                                Berawal dari passion dalam dunia desain dan konstruksi, SENI RUANG MINIMALIS PEKALONGAN tumbuh menjadi mitra terpercaya bagi banyak klien. Setiap proyek yang kami kerjakan adalah bagian dari perjalanan kami untuk terus berinovasi dan memberikan yang terbaik.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default BusinessOverviewSection