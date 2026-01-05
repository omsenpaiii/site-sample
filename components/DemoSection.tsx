'use client'

import { CalendarDays, PhoneCall } from 'lucide-react'

export default function DemoSection() {
  const loadCalendly = () => {
    if (typeof window === 'undefined') {
      return Promise.resolve()
    }

    if ((window as any).Calendly) {
      return Promise.resolve()
    }

    return new Promise<void>((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>('script[data-calendly]')
      if (existingScript) {
        existingScript.addEventListener('load', () => resolve())
        existingScript.addEventListener('error', () => reject())
        return
      }

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      link.dataset.calendly = 'true'
      document.head.appendChild(link)

      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.dataset.calendly = 'true'
      script.onload = () => resolve()
      script.onerror = () => reject()
      document.body.appendChild(script)
    })
  }

  const openCalendly = async () => {
    try {
      await loadCalendly()
      if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
          url: 'https://calendly.com/stgi/30min'
        })
      }
    } catch {
      // no-op: fallback to normal button behavior if Calendly fails to load
    }
  }

  return (
    <section id="demo" className="section-padding relative border-y border-dark-700 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/videos/bg-video-careers.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-900/70" />
      
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-center relative z-10">
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
