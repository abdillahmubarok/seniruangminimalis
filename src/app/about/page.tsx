// app/about/page.tsx
import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import AboutSection from '@/components/home/AboutSection';
import BusinessFeaturesSection from '@/components/about/BusinessFeaturesSection';
import BusinessOverviewSection from '@/components/about/BusinessOverviewSection';
import QuoteSection from '@/components/about/QuoteSection';
import SkillsSection from '@/components/home/SkillsSection';
import TeamSection from '@/components/about/TeamSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import CTASection from '@/components/ui/CTASection';

export default function AboutPage() {
    return (
        <main>
            <PageHeader
                title="Tentang Kami"
                description="Mengenal lebih dekat SENI RUANG MINIMALIS PEKALONGAN, spesialis desain interior dan konstruksi yang berkomitmen menghadirkan karya seni minimalis yang fungsional dan estetik."
                backgroundImage="/images/pages/about-page.jpg"
            />
            <AboutSection />
            <BusinessFeaturesSection />
            <BusinessOverviewSection />
            <QuoteSection />
            <SkillsSection />
            <TeamSection />
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