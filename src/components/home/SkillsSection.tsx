// components/home/SkillsSection.tsx
import React from 'react'
import Image from 'next/image'
import ProgressBar from '../ui/ProgressBar'

const SkillsSection = () => {
  const skills = [
    { label: 'Plafon & Ceiling Design', percentage: 95 },
    { label: 'Wall Panel & Backdrop', percentage: 98 },
    { label: 'Kitchen Set & Furniture', percentage: 92 },
  ]

  return (
    <section className="py-24 px-4 bg-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Progress Bars */}
          <div className="space-y-8">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-8 animate-fade-in-up">Keahlian Kami</h3>
            
            {skills.map((skill, index) => (
              <ProgressBar 
                key={index}
                label={skill.label}
                percentage={skill.percentage}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
            
            <p className="text-white/80 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              SENI RUANG MINIMALIS PEKALONGAN memiliki tim ahli yang berpengalaman dalam bidang desain interior dan konstruksi. Kami berkomitmen menghadirkan kualitas terbaik untuk setiap proyek yang kami kerjakan.
            </p>
          </div>
          
          {/* Right Column - Image */}
          <div className="mt-[-200px] hidden md:block">
            <div className="relative">
              <div className="border-[15px] border-white relative animate-fade-in-up aspect-[4/5] md:-mt-32">
                <Image 
                  src="/images/hero/mock-up-poster-in-modern-living-room-interior-design-with-green-empty-wall.jpg"
                  alt="Desain interior minimalis SENI RUANG MINIMALIS PEKALONGAN"
                  fill={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection