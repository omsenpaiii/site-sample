'use client'

import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToDemo = () => {
    const el = document.querySelector('#demo')
    if (el) {
      const headerHeight = 80
      const windowHeight = window.innerHeight
      const elementHeight = el.getBoundingClientRect().height
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      
      // Center the section vertically on screen
      const centerOffset = (windowHeight - elementHeight) / 2
      const offsetPosition = elementPosition - headerHeight - Math.max(centerOffset, 0)
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/60 via-dark-900 to-dark-900" />
      <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-accent-lime/25 blur-3xl" />
      <div className="absolute -left-32 bottom-0 w-96 h-96 rounded-full bg-accent-green/20 blur-3xl" />

      <div className="container-custom relative z-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-3 text-accent-lime">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-[0.25em]">
                Trusted Technology Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming
                Lending <span className="gradient-text">Ecosystem</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl font-semibold">
              Accelerate Loan Processing with Precision, Intelligence, and Ease.
            </p>
            <p className="text-lg text-gray-100 leading-relaxed max-w-2xl">
              <span className="scribble-circle italic font-semibold text-white">
                Built for Banks. Designed by Bankers. Delivered with Technology.
              </span>
            </p>
            <p className="text-gray-200 text-base md:text-lg">
              Digitize Originations. Automate Underwriting. Modernize Servicing. Transform your lending ecosystem end-to-end in a faster, smarter, and secure manner.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={scrollToDemo} className="btn-primary text-lg px-8 py-4">
                <span>Request a Demo</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <div className="flex items-center space-x-3 text-gray-300">
                <ShieldCheck className="w-5 h-5 text-accent-green" />
                <span className="text-sm uppercase tracking-wide">Secure. Compliant. Bank-ready.</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-lime/15 to-accent-green/15 rounded-full blur-3xl" />
            <div className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl">
              
              {/* Hero Image */}
              <Image
                src="/images/Loans-Screen.webp"
                alt="Loans platform dashboard screen"
                width={1536}
                height={1005}
                className="relative z-10 h-auto w-full scale-125"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
