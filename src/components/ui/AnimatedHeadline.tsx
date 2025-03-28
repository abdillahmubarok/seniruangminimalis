// components/ui/AnimatedHeadline.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'

interface AnimatedHeadlineProps {
  beforeText?: string
  highlightedText?: string
  rotatingText: string[]
  afterText?: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
  duration?: number
  interval?: number
  highlightColor?: string
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  beforeText = '',
  highlightedText = '',
  rotatingText,
  afterText = '',
  className = '',
  tag = 'h1',
  duration = 500,
  interval = 3000,
  highlightColor = 'text-secondary'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [textWidth, setTextWidth] = useState<number | null>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Measure the width of the longest text to prevent layout shifts
  useEffect(() => {
    if (textRef.current) {
      // Create an offscreen element to measure text width
      const span = document.createElement('span');
      span.style.visibility = 'hidden';
      span.style.position = 'absolute';
      span.style.fontSize = window.getComputedStyle(textRef.current).fontSize;
      span.style.fontFamily = window.getComputedStyle(textRef.current).fontFamily;
      span.style.fontWeight = window.getComputedStyle(textRef.current).fontWeight;
      
      // Find longest text
      let maxWidth = 0;
      rotatingText.forEach(text => {
        span.textContent = text;
        document.body.appendChild(span);
        const width = span.offsetWidth;
        if (width > maxWidth) maxWidth = width;
        document.body.removeChild(span);
      });
      
      // Add a small buffer
      setTextWidth(maxWidth + 10);
    }
  }, [rotatingText]);
  
  // Animation interval
  useEffect(() => {
    // Start the rotation
    intervalRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length)
        setIsAnimating(false)
      }, duration)
    }, interval)
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [rotatingText.length, duration, interval])
  
  // Pause animation when tab is not visible to prevent timing issues
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Clear interval when page is hidden
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        // Restart interval when page becomes visible again
        if (!intervalRef.current) {
          intervalRef.current = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingText.length)
              setIsAnimating(false)
            }, duration)
          }, interval)
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [rotatingText.length, duration, interval]);
  
  const HeadingTag = tag as any // TypeScript hack untuk dynamic HTML tag
  
  return (
    <HeadingTag className={`${className}`}>
      {beforeText && <span>{beforeText}{' '}</span>}
      {highlightedText && <span className={highlightColor}>{highlightedText}{' '}</span>}
      <span 
        ref={textRef}
        className="inline-block relative"
        style={textWidth ? { minWidth: `${textWidth}px` } : undefined}
      >
        <span 
          className={`transition-all duration-${duration / 100} ${isAnimating ? 'opacity-0 transform -translate-y-3' : 'opacity-100 transform translate-y-0'}`}
        >
          {rotatingText[currentIndex]}
        </span>
      </span>
      {afterText && <span>{' '}{afterText}</span>}
    </HeadingTag>
  )
}

export default AnimatedHeadline