'use client'

import { CalendarDays, PhoneCall } from 'lucide-react'

export default function DemoSection() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/omatworks'
      })
    }
  }

  return (
    <section id="demo" className="section-padding bg-gradient-to-r from-accent-lime/15 via-dark-800 to-accent-green/10 border-y border-dark-700">
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Request a Demo</p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience how modern lending technology performs</h2>
          <p className="text-gray-200 leading-relaxed">
            Experience how modern lending technology can cut processing time, improve accuracy, and increase throughput.
            Schedule a personalized demo today.
          </p>
        </div>
        <div className="card bg-dark-900 border-accent-lime/30">
          <div className="flex items-center space-x-3 mb-6 text-accent-lime">
            <CalendarDays className="w-5 h-5" />
            <p className="text-sm uppercase tracking-[0.25em]">Schedule Your Session</p>
          </div>
          <div className="space-y-4">
            <p className="text-gray-200">
              Accelerate loan processing with precision, intelligence, and ease. We’ll tailor the walkthrough to your
              lending environment and regulatory requirements.
            </p>
            <button 
              onClick={openCalendly}
              className="btn-primary w-full justify-center text-lg py-4"
            >
              <span>Schedule a Demo</span>
              <PhoneCall className="w-5 h-5 ml-2" />
            </button>
            <p className="text-xs text-gray-400">
              Talk to our experts for precise guidance on your policies and controls.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
