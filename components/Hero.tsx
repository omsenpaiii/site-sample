'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, CreditCard, Wifi } from 'lucide-react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleGetStarted = () => {
    const element = document.querySelector('#services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return <div className="h-screen bg-dark-900" />
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-2">
              <span className="text-accent-lime text-sm font-semibold tracking-wide uppercase">
                Welcome! Future Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                The World's
                <br />
                Most Modern
                <br />
                Card <span className="gradient-text">Platform</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            </p>
            
            <button 
              onClick={handleGetStarted}
              className="btn-primary text-lg px-8 py-4 animate-bounce-in"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Right Content - Card Graphics */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-lime/20 to-accent-green/20 rounded-full blur-3xl animate-pulse-custom" />
              
              {/* Card Stack */}
              <div className="relative z-10 space-y-4">
                {/* Front Card */}
                <div className="relative transform rotate-6 animate-float">
                  <div className="w-80 h-48 bg-gradient-to-br from-accent-lime to-accent-green rounded-2xl p-6 shadow-2xl">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-8 h-8 text-black" />
                        <span className="text-black font-bold text-lg">VISA</span>
                      </div>
                      <Wifi className="w-6 h-6 text-black" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-black font-mono text-xl tracking-wider">
                        1234 5678 9000 0000
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-black/70 text-xs uppercase">Card Holder</div>
                          <div className="text-black font-semibold">Kartik Bansal</div>
                        </div>
                        <div>
                          <div className="text-black/70 text-xs uppercase">Expires</div>
                          <div className="text-black font-semibold">05 / 24</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-8 h-5 bg-black/20 rounded-full" />
                          <div className="w-8 h-5 bg-black/40 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Card */}
                <div className="absolute top-0 -right-4 transform -rotate-6 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-80 h-48 bg-gradient-to-br from-dark-700 to-dark-600 rounded-2xl p-6 shadow-2xl border border-dark-500">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-8 h-8 text-accent-lime" />
                        <span className="text-accent-lime font-bold text-lg">VISA</span>
                      </div>
                      <Wifi className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-white font-mono text-xl tracking-wider">
                        1234 5678 9000 0000
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-gray-400 text-xs uppercase">Card Holder</div>
                          <div className="text-white font-semibold">Kartik Bansal</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs uppercase">Expires</div>
                          <div className="text-white font-semibold">05 / 24</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-8 h-5 bg-white/20 rounded-full" />
                          <div className="w-8 h-5 bg-white/40 rounded-full" />
                        </div>
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