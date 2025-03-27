// components/ui/Counter.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const [isInView, setIsInView] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (counterRef.current) {
      observer.observe(counterRef.current)
    }
    
    return () => {
      observer.disconnect()
    }
  }, [])
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number | null = null
    let animationFrame: number
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * end)
      
      if (countRef.current !== currentCount) {
        countRef.current = currentCount
        setCount(currentCount)
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
    
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [end, duration, isInView])
  
  return (
    <div ref={counterRef} className={className}>
      {count}{suffix}
    </div>
  )
}

export default Counter