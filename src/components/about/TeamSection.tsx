// components/about/TeamSection.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedHeadline from '../ui/AnimatedHeadline'

// Team member component
interface TeamMemberProps {
    image: string;
    position: string;
    name: string;
    delay?: number;
}

const TeamMember = ({ image, position, name, delay = 0 }: TeamMemberProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay }}
            className="bg-primary h-full text-center relative group"
        >
            <div className="overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    width={600}
                    height={750}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            <div className="p-6 pb-10">
                
                
                <span className="text-secondary text-sm uppercase font-semibold tracking-wide block mt-6">
                    {position}
                </span>
                
                <h4 className="text-white text-xl font-bold mt-2 mb-4">
                    {name}
                </h4>
                
                <div className="flex justify-center space-x-4">
                    <Link href="#" className="text-secondary hover:text-white transition-colors">
                        <i className="fab fa-facebook"></i>
                    </Link>
                    <Link href="#" className="text-secondary hover:text-white transition-colors">
                        <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#" className="text-secondary hover:text-white transition-colors">
                        <i className="fab fa-youtube"></i>
                    </Link>
                    <Link href="#" className="text-secondary hover:text-white transition-colors">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const TeamSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
                    <motion.span 
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-secondary text-sm font-semibold tracking-wider uppercase block mb-3"
                    >
                        Tim Kami
                    </motion.span>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <AnimatedHeadline 
                            beforeText="Kami Memiliki"
                            highlightedText="Tim Terbaik"
                            rotatingText={["Untuk Bekerja", "Untuk Melayani", "Untuk Berinovasi"]}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" afterText={''}                        />
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-600"
                    >
                        Tim profesional kami terdiri dari desainer berpengalaman dan pekerja terampil yang siap memberikan solusi interior terbaik untuk kebutuhan Anda.
                    </motion.p>
                </div>
                
                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <TeamMember 
                        image="/images/team/team-1.jpg"
                        position="Direktur"
                        name="Ahmad Rizky"
                        delay={0}
                    />
                    
                    <TeamMember 
                        image="/images/team/team-2.jpg"
                        position="Desainer Senior"
                        name="Dina Pratiwi"
                        delay={0.2}
                    />
                    
                    <TeamMember 
                        image="/images/team/team-3.jpg"
                        position="Manajer Proyek"
                        name="Budi Santoso"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    )
}

export default TeamSection