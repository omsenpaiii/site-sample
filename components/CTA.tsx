'use client'

import { useState, useEffect } from 'react'

export default function CTA() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetStarted = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return <div className="h-96 bg-accent-lime" />
  }

  return (
    <section className="py-32 bg-dark-900">
      <div className="container-custom">
        <div className="bg-accent-lime rounded-3xl p-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Let's grow your business,
            <br />
            together.
          </h2>
          
          <button 
            onClick={handleGetStarted}
            className="bg-black text-accent-lime font-semibold px-12 py-4 rounded-lg text-lg hover:bg-gray-900 transition-colors cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
} 