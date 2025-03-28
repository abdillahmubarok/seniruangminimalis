// app/page.tsx
import React from 'react'
import HeroSection from '@/components/home/HeroSection';
import ServiceBoxes from '@/components/home/ServiceBoxes';
import AboutSection from '@/components/home/AboutSection';
import QuoteSection from '@/components/about/QuoteSection'
import SkillsSection from '@/components/home/SkillsSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import QuotationSection from '@/components/home/QuotationSection';
import CallToAction from '@/components/home/CallToAction';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceBoxes />
      <AboutSection />
      <QuoteSection />
      <SkillsSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <QuotationSection />
      <CallToAction />
      <TestimonialsSection />
    </>
  )
}