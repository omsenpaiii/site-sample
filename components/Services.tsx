'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, CreditCard, Shield, Zap, Users, Globe } from 'lucide-react'

export default function Services() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      icon: CreditCard,
      title: 'Checking accounts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
    {
      icon: Shield,
      title: 'Checking accounts', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
    {
      icon: Zap,
      title: 'Checking accounts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
    {
      icon: Users,
      title: 'Checking accounts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    },
    {
      icon: Globe,
      title: 'Checking accounts',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor'
    }
  ]

  const handleGetStarted = () => {
    const element = document.querySelector('#stats')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) {
    return <div className="h-screen bg-dark-900" />
  }

  return (
    <section id="services" className="section-padding bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent-lime text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Browse our
                <br />
                services & <span className="gradient-text">offerings</span>
              </h2>
            </div>
            
            <button 
              onClick={handleGetStarted}
              className="btn-primary text-lg px-8 py-4"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Right Content - Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="card group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-accent-lime/10 rounded-lg flex items-center justify-center group-hover:bg-accent-lime/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-accent-lime" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-accent-lime transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white group-hover:text-accent-lime transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}