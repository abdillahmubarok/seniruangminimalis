// components/ui/AnimatedHeadline.tsx
'use client'

import React, { useState, useEffect } from 'react'

interface AnimatedHeadlineProps {
  beforeText: string
  highlightedText: string
  rotatingText: string[]
  afterText: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  beforeText,
  highlightedText,
  rotatingText,
  afterText,
  className = '',
  tag = 'h1'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [rotatingText.length])
  
  const HeadingTag = tag as any // TypeScript hack untuk dynamic HTML tag
  
  return (
    <HeadingTag className={`text-3xl md:text-4xl lg:text-5xl font-bold my-4 ${className}`}>
      {beforeText}{' '}
      <span className="text-secondary">{highlightedText}</span>{' '}
      <span className={`inline-block transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        {rotatingText[currentIndex]}
      </span>{' '}
      {afterText}
    </HeadingTag>
  )
}

export default AnimatedHeadline