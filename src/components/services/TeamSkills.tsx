"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Progress bar component
interface ProgressBarProps {
    title: string;
    percentage: number;
    delay?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    title,
    percentage,
    delay = 0,
}) => {
    return (
        <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.2 }}
        >
            <div className="mb-1">
                <h4 className="text-xs uppercase tracking-wider font-medium text-gray-600">
                    {title}
                </h4>
            </div>
            <div className="w-full bg-gray-200 h-10 relative">
                <motion.div
                    className="h-full bg-primary absolute left-0 top-0 flex items-center justify-end pr-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: delay * 0.2 + 0.3 }}
                >
                    <span className="text-white text-sm font-medium">{percentage}%</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Define skill data
const skills = [
    { title: "Plafon & Ceiling Design", percentage: 95 },
    { title: "Wall Moulding & Backdrop", percentage: 98 },
    { title: "Kitchen Set & Furniture", percentage: 92 },
];

export default function TeamSkills() {
    return (
        <section className="pb-24 px-4 lg:px-12 section-bg-teamskill">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left column - Skills */}
                    <div className="bg-white p-12">
                        <motion.span
                            className="text-secondary text-sm font-semibold uppercase tracking-wider"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            OUR TEAM SKILLS
                        </motion.span>

                        <motion.h2
                            className="text-3xl md:text-4xl font-bold mt-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            Lihat <br />
                            <span className="text-secondary">Kemampuan Terbaik</span> Tim <br />
                            Kami
                        </motion.h2>

                        <div className="w-24 h-1 my-6">
                            <svg width="96" height="12" viewBox="0 0 96 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 12L8 0L16 12L24 0L32 12L40 0L48 12L56 0L64 12L72 0L80 12L88 0L96 12" stroke="#FABB51" strokeWidth="2" strokeLinecap="square" />
                            </svg>
                        </div>

                        <p className="text-gray-600 mb-10">
                            Didukung oleh tenaga yang berpengalaman di bidangnya, kami
                            memberikan hasil pekerjaan yang berkualitas tinggi untuk setiap
                            proyek, baik skala kecil maupun besar.
                        </p>

                        {/* Progress bars */}
                        {skills.map((skill, index) => (
                            <ProgressBar
                                key={`skill-${index}`}
                                title={skill.title}
                                percentage={skill.percentage}
                                delay={index}
                            />
                        ))}
                    </div>

                    {/* Right column - Image */}
                    <div className="relative min-h-[400px] md:min-h-[600px] border-white border-0 md:border-[15px]">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/section/working-on-laptop.jpg"
                                alt="Interior designer working"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Video play button
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button
                                    className="bg-white text-primary p-8 rounded-full hover:scale-110 transition-transform"
                                    aria-label="Play video"
                                >
                                    <i className="fas fa-play text-xl"></i>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
