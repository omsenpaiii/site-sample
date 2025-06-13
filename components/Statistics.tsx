'use client'

import { useState, useEffect, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-bold text-accent-lime">
      {count}{suffix}
    </div>
  )
}

export default function Statistics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { value: 10, suffix: 'M+', label: 'User active' },
    { value: 30, suffix: '+', label: 'Country' },
    { value: 50, suffix: 'M+', label: 'Transaction' }
  ]

  if (!mounted) {
    return <div className="h-screen bg-dark-900" />
  }

  return (
    <section id="stats" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent-lime text-sm font-semibold tracking-wide uppercase">
                Benefits
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                We have many users
                <br />
                all over the <span className="gradient-text">world</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                  <div className="text-accent-lime text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - World Map */}
          <div className="relative">
            <div className="w-full h-96 bg-dark-800 rounded-2xl border border-dark-600 overflow-hidden">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified World Map using dots */}
                <defs>
                  <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                    <circle cx="10" cy="10" r="1" fill="#84cc16" opacity="0.3" />
                  </pattern>
                </defs>
                
                {/* Continents as simplified shapes filled with dots */}
                <g fill="url(#dots)">
                  {/* North America */}
                  <path d="M100 120 L180 100 L200 140 L160 180 L120 200 L80 160 Z" />
                  
                  {/* South America */}
                  <path d="M140 220 L180 200 L200 260 L180 320 L160 340 L140 300 Z" />
                  
                  {/* Europe */}
                  <path d="M280 100 L320 80 L340 120 L320 140 L300 160 L280 140 Z" />
                  
                  {/* Africa */}
                  <path d="M300 160 L340 140 L360 200 L340 280 L320 300 L300 260 Z" />
                  
                  {/* Asia */}
                  <path d="M360 80 L480 60 L520 100 L500 160 L460 180 L380 160 L360 120 Z" />
                  
                  {/* Australia */}
                  <path d="M480 260 L520 240 L540 260 L520 280 L500 290 L480 280 Z" />
                </g>
                
                {/* Animated dots representing active users */}
                <g>
                  <circle cx="150" cy="140" r="3" fill="#84cc16" className="animate-pulse">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="120" r="3" fill="#84cc16" className="animate-pulse">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="420" cy="100" r="3" fill="#84cc16" className="animate-pulse">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="270" r="3" fill="#84cc16" className="animate-pulse">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="220" r="3" fill="#84cc16" className="animate-pulse">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" repeatCount="indefinite" />
                  </circle>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}