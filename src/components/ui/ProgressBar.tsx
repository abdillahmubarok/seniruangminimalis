// components/ui/ProgressBar.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'


interface ProgressBarProps {
    label: string;
    percentage: number;
    className?: string;
    style?: React.CSSProperties;
  }

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (progressRef.current) {
      observer.observe(progressRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={progressRef} className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-white font-semibold">{label}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 h-10">
        <div 
          className="bg-secondary h-10 transition-all duration-1000"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar