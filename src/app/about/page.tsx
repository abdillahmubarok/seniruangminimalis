// app/about/page.tsx
import React from 'react'
import PageHeader from '@/components/ui/PageHeader'
import AboutSection from '@/components/home/AboutSection';
import SkillsSection from '@/components/home/SkillsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import CTASection from '@/components/ui/CTASection';

// Asumsikan Anda memiliki komponen AboutSection

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="Tentang Kami"
                description="Mengenal lebih dekat SENI RUANG MINIMALIS PEKALONGAN, spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik."
                backgroundImage="/images/pages/about-page.jpg"
            />
            <AboutSection />
            <SkillsSection />
            <WhyChooseUsSection />
            <CTASection
                title="Siap Mengubah Ruangan Anda?"
                subtitle="KONSULTASI DESAIN"
                description="Konsultasikan kebutuhan interior Anda dengan tim profesional kami. Kami siap memberikan solusi terbaik untuk ruangan impian Anda."
                primaryButtonText="Konsultasi Sekarang"
                backgroundImage="/images/pages/about-page.jpg"
            />
        </main>
    )
}