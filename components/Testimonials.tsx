'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      name: 'Ranveer',
      role: 'Webflow Developer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      avatar: 'R'
    },
    {
      name: 'Tony Stark',
      role: 'CEO',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      avatar: 'T'
    },
    {
      name: 'Mahesh',
      role: 'CEO',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      avatar: 'M'
    },
    {
      name: 'Mahesh',
      role: 'CEO',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      avatar: 'M'
    },
    {
      name: 'Ranveer',
      role: 'Webflow Developer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
      avatar: 'R'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <div className="h-screen bg-accent-lime" />
  }

  return (
    <section id="testimonials" className="section-padding bg-accent-lime">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-black text-sm font-semibold tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4">
            Global businesses
            <br />
            love FinanceX
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-black rounded-2xl p-8 h-full">
                    <p className="text-gray-300 leading-relaxed mb-8">
                      {testimonial.content}
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-lime rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-lg">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Single Card View */}
          <div className="md:hidden">
            <div className="bg-black rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-8">
                {testimonials[currentIndex % testimonials.length].content}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-lime rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">
                    {testimonials[currentIndex % testimonials.length].avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonials[currentIndex % testimonials.length].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonials[currentIndex % testimonials.length].role}
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