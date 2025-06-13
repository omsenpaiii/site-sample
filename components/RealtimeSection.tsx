'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, CreditCard, Wifi } from 'lucide-react'

export default function RealtimeSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetStarted = () => {
    const element = document.querySelector('#testimonials')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return <div className="h-screen bg-dark-900" />
  }

  return (
    <section className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent-lime text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Real Time
                <br />
                <span className="gradient-text">Transaction Report</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
              </p>
            </div>
            
            <button 
              onClick={handleGetStarted}
              className="btn-primary text-lg px-8 py-4"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Right Content - Credit Card with Glow */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-lime/30 to-accent-green/30 rounded-full blur-3xl scale-150 animate-pulse-custom" />
              
              {/* Credit Card */}
              <div className="relative z-10 transform rotate-12 animate-float">
                <div className="w-96 h-60 bg-gradient-to-br from-dark-700 to-dark-600 rounded-3xl p-8 shadow-2xl border border-dark-500">
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-12">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-10 h-10 text-accent-lime" />
                      <span className="text-accent-lime font-bold text-2xl">VISA</span>
                    </div>
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Card Number */}
                  <div className="space-y-6">
                    <div className="text-white font-mono text-2xl tracking-widest">
                      1234 5678 9000 0000
                    </div>
                    
                    {/* Card Details */}
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-gray-400 text-xs uppercase tracking-wide">Card Holder</div>
                        <div className="text-white font-semibold text-lg">KARTIK BANSAL</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs uppercase tracking-wide">Expires</div>
                        <div className="text-white font-semibold text-lg">05 / 24</div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-10 h-6 bg-white/20 rounded-lg" />
                        <div className="w-10 h-6 bg-white/40 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}