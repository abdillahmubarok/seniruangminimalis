// components/about/WhyChooseUsSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedHeadline from '../ui/AnimatedHeadline'

interface FeatureItemProps {
    icon: string;
    title: string;
    description: string;
    delay?: number;
}

const FeatureItem = ({ icon, title, description, delay = 0 }: FeatureItemProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay }}
            className="flex items-start mb-8"
        >
            <div className="mr-4 text-primary">
                <i className={`fas ${icon} text-3xl`}></i>
            </div>
            <div>
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};

const WhyChooseUsSection = () => {
    const [refText, inViewText] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [refImage, inViewImage] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image */}
                    <div className="relative md:order-1 lg:order-1">
                        <motion.div
                            ref={refImage}
                            className="relative bg-primary mt-6 md:mt-0"
                            initial={{ opacity: 0, x: -50 }}
                            animate={inViewImage ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative">
                                <Image
                                    src="/images/pages/modern-house-bright-interior.jpg"
                                    alt="Modern Interior Design"
                                    width={800}
                                    height={600}
                                    className="object-cover w-full h-auto relative -right-6 -top-6 md:-right-8 md:-top-8"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="md:order-2 lg:order-2">
                        <motion.div
                            ref={refText}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inViewText ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-secondary text-sm font-semibold tracking-wider uppercase block mb-2">
                                Kenapa Memilih Kami
                            </span>

                            <AnimatedHeadline
                                beforeText="Desain Interior"
                                highlightedText="Rumah yang Lebih Baik"
                                rotatingText={["Untuk Kehidupan Lebih Baik", "Untuk Kenyamanan Lebih", "Untuk Estetika Ruangan"]}
                                className="text-3xl md:text-4xl font-bold mb-4" afterText={''} />

                            <div className="w-24 h-1 mb-6">
                                <svg width="96" height="12" viewBox="0 0 96 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 12L8 0L16 12L24 0L32 12L40 0L48 12L56 0L64 12L72 0L80 12L88 0L96 12" stroke="#FABB51" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FeatureItem
                                icon="fa-stopwatch"
                                title="Layanan Klien Prioritas"
                                description="Kami memberikan pelayanan prioritas dengan respons cepat untuk semua kebutuhan klien."
                                delay={0.2}
                            />

                            <FeatureItem
                                icon="fa-home"
                                title="Tim Datang ke Rumah"
                                description="Tim kami siap melakukan survei langsung ke lokasi untuk memahami kebutuhan spesifik Anda."
                                delay={0.4}
                            />

                            <FeatureItem
                                icon="fa-tags"
                                title="Diskon Harga"
                                description="Kami menawarkan penawaran khusus dan diskon menarik untuk berbagai layanan kami."
                                delay={0.6}
                            />

                            <FeatureItem
                                icon="fa-ticket-alt"
                                title="Revisi Gratis"
                                description="Kami memberikan jaminan revisi gratis untuk memastikan kepuasan Anda terhadap hasil pekerjaan."
                                delay={0.8}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUsSection