'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Define service card interface
interface ServiceCardProps {
    icon: string;
    title: string;
    description: string;
    variant: 'light' | 'dark';
    delay?: number;
}

// Service card component
const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, variant, delay = 0 }) => {
    const isDark = variant === 'dark';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay * 0.2 }}
            className={`border-2 ${isDark ? 'bg-primary text-white' : 'bg-white text-gray-800'} border-gray-200 p-12 flex flex-col items-start`}
        >
            <div className="flex items-start mb-6">
                <i className={`fas ${icon} text-4xl ${isDark ? 'text-secondary' : 'text-primary'}`}></i>
            </div>
            <h4 className="text-xl font-bold mb-3">{title}</h4>
            <p className="mb-6">{description}</p>
            <Link
                href="/kontak"
                className={`inline-flex items-center px-5 py-2 text-sm font-medium transition-transform hover:-translate-y-1 
          ${isDark
                        ? 'bg-secondary text-primary hover:bg-white'
                        : 'bg-secondary text-white hover:bg-primary border border-secondary'}`}
            >
                Pelajari Lebih Lanjut
            </Link>
        </motion.div>
    );
};

// Service data array
const services: ServiceCardProps[] = [
    {
        icon: 'fa-paint-roller',
        title: 'Plafon Gypsum & PVC',
        description: 'Solusi langit-langit modern dengan berbagai pilihan motif dan finishing untuk menciptakan ruangan yang elegan dan nyaman.',
        variant: 'light'
    },
    {
        icon: 'fa-store-alt',
        title: 'Wall Moulding & Moulding',
        description: 'Tingkatkan estetika dinding dengan panel dekoratif yang menambahkan dimensi dan karakter pada ruangan Anda.',
        variant: 'dark'
    },
    {
        icon: 'fa-warehouse',
        title: 'Backdrop TV & Kitchen Set',
        description: 'Rancangan custom untuk area TV dan dapur dengan desain minimalis yang menyesuaikan kebutuhan ruangan Anda.',
        variant: 'light'
    },
    {
        icon: 'fa-home',
        title: 'Partisi & Background',
        description: 'Pembagian ruang yang cerdas dengan partisi dan background yang tidak hanya fungsional tetapi juga estetis.',
        variant: 'dark'
    },
    {
        icon: 'fa-drafting-compass',
        title: 'Kanopi & Eksterior',
        description: 'Solusi eksterior yang memberikan perlindungan sekaligus meningkatkan tampilan luar bangunan dengan desain minimalis.',
        variant: 'light'
    },
    {
        icon: 'fa-ruler-combined',
        title: 'Custom Project',
        description: 'Layanan khusus untuk kebutuhan interior dan eksterior spesifik yang disesuaikan dengan keinginan dan konsep Anda.',
        variant: 'dark'
    }
];

export default function ServiceFeatures() {
    return (
        <>
            {/* First row of services */}
            <section className="py-24 px-4 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(0, 3).map((service, index) => (
                            <ServiceCard
                                key={`service-${index}`}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                variant={service.variant}
                                delay={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Second row of services */}
            <section className="pb-24 px-4 lg:px-12">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.slice(3, 6).map((service, index) => (
                            <ServiceCard
                                key={`service-${index + 3}`}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                variant={service.variant}
                                delay={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}