// components/about/BusinessFeaturesSection.tsx
'use client'

import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface FeatureBoxProps {
    icon: string;
    title: string;
    description: string;
    accentColor?: string;
    delay?: number;
}

const FeatureBox = ({ 
    icon, 
    title, 
    description, 
    accentColor = 'primary',
    delay = 0 
}: FeatureBoxProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: delay }}
            className="flex flex-col"
        >
            <div className="flex items-start">
                <div className={`mr-4 text-${accentColor}`}>
                    <div className={`w-12 h-12 flex items-center justify-center text-3xl bg-${accentColor}/10 text-${accentColor}`}>
                        <i className={`fas ${icon}`}></i>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-bold mb-2">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </motion.div>
    )
}

const BusinessFeaturesSection = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    <FeatureBox 
                        icon="fa-calendar-check"
                        title="5 Tahun Pengalaman Layanan Bisnis"
                        description="Dengan pengalaman 15 tahun di bidang desain interior dan konstruksi, kami telah melayani berbagai proyek dengan penuh dedikasi dan profesionalisme."
                        accentColor="primary"
                        delay={0}
                    />
                    
                    <FeatureBox 
                        icon="fa-users-cog"
                        title="Tim Profesional & Desainer In-house"
                        description="Didukung tim profesional berpengalaman dan desainer in-house yang kreatif, kami siap mewujudkan visi desain interior Anda menjadi kenyataan."
                        accentColor="secondary"
                        delay={0.2}
                    />
                    
                    <FeatureBox 
                        icon="fa-star"
                        title="Umpan Balik Terbaik Dari Klien & Partner"
                        description="Kepuasan klien adalah prioritas kami. Komitmen kami terhadap kualitas dan layanan prima telah menghasilkan banyak testimoni positif dan kemitraan jangka panjang."
                        accentColor="primary"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    )
}

export default BusinessFeaturesSection