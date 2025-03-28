// components/about/QuoteSection.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const QuoteSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-16 lg:py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                    <motion.div
                        ref={ref}
                        className="text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-secondary text-5xl mb-8 inline-block"
                        >
                            <i className="fas fa-quote-right"></i>
                        </motion.div>
                        
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 leading-tight max-w-2xl"
                        >
                            " Perbarui Interior Rumah Anda & Dapatkan Kehidupan yang Lebih Baik "
                        </motion.h2>
                        
                        <div className="flex justify-start">
                            <div className="w-24 h-1 bg-secondary zigzag-divider"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default QuoteSection