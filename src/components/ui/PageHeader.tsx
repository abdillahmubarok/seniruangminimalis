// components/ui/PageHeader.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeaderProps {
    title: string;
    description?: string;
    backgroundImage: string;
    showBreadcrumbs?: boolean;
    pageHeight?: 'short' | 'medium' | 'tall';
    alignment?: 'left' | 'center' | 'right';
    overlay?: 'light' | 'medium' | 'dark';
}

const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    description,
    backgroundImage,
    showBreadcrumbs = true,
    pageHeight = 'medium',
    alignment = 'left',
    overlay = 'medium'
}) => {
    const [scrollY, setScrollY] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Define height based on pageHeight prop
    const heightClasses = {
        short: 'min-h-[40vh]',
        medium: 'min-h-[50vh] md:min-h-[60vh]',
        tall: 'min-h-[60vh] md:min-h-[70vh]'
    };
    
    // Define text alignment based on alignment prop
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto'
    };
    
    // Define overlay opacity based on overlay prop
    const overlayOpacity = {
        light: 'opacity-40',
        medium: 'opacity-60',
        dark: 'opacity-80'
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Calculate parallax effect - limited to prevent issues
    const parallaxOffset = Math.min(scrollY * 0.2, 100);

    return (
        <section 
            className={`relative overflow-hidden ${heightClasses[pageHeight]} flex items-center`}
            style={{ zIndex: 0 }}
        >
            {/* Background Container with Fixed Position */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Background Overlay */}
                <div 
                    className={`absolute inset-0 bg-black ${overlayOpacity[overlay]} z-10`}
                ></div>
                
                {/* Background Image with Parallax */}
                <div 
                    className="absolute inset-0 w-full h-full transform transition-transform duration-200"
                    style={{ transform: `translateY(${parallaxOffset}px)` }}
                >
                    <Image 
                        src={backgroundImage} 
                        alt={title}
                        fill
                        sizes="100vw"
                        priority
                        onLoad={() => setImageLoaded(true)}
                        className={`object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-4 py-16 relative z-20">
                <div className={`max-w-3xl ${alignmentClasses[alignment]}`}>
                    {/* Breadcrumb navigation */}
                    {showBreadcrumbs && (
                        <nav className="flex items-center space-x-4 mb-6">
                            <Link href="/" className="text-white hover:text-secondary transition-colors">
                                Beranda
                            </Link>
                            <i className="fas fa-caret-right text-secondary"></i>
                            <span className="text-secondary">{title}</span>
                        </nav>
                    )}
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            {title}
                        </h1>
                    </motion.div>
                    
                    <svg width="96" height="12" viewBox="0 0 96 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12L8 0L16 12L24 0L32 12L40 0L48 12L56 0L64 12L72 0L80 12L88 0L96 12" stroke="#FABB51" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                    
                    {description && (
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-white/90 text-lg"
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default PageHeader