'use client'

import { ArrowRight, CreditCard, ShieldCheck, Sparkles, Wifi } from 'lucide-react'

export default function Hero() {
  const scrollToDemo = () => {
    const el = document.querySelector('#demo')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
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
            <div className="relative w-full max-w-xl">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-lime/20 to-accent-green/20 rounded-full blur-3xl animate-pulse-custom" />

              {/* Card Stack */}
              <div className="relative z-10 space-y-5">
                {/* Front Card */}
                <div className="relative transform rotate-6 animate-float">
                  <div className="w-80 h-48 bg-gradient-to-br from-accent-lime to-accent-green rounded-2xl p-6 shadow-2xl">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-8 h-8 text-black" />
                        <span className="text-black font-bold text-lg">STGI</span>
                      </div>
                      <Wifi className="w-6 h-6 text-black" />
                    </div>

                    <div className="space-y-4">
                      <div className="text-black font-mono text-xl tracking-wider">
                        Lending OS
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-black/70 text-xs uppercase">Engine</div>
                          <div className="text-black font-semibold">Underwriting</div>
                        </div>
                        <div>
                          <div className="text-black/70 text-xs uppercase">Mode</div>
                          <div className="text-black font-semibold">AI + Rules</div>
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
                <div
                  className="absolute top-0 -right-6 transform -rotate-6 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="w-80 h-48 bg-gradient-to-br from-dark-700 to-dark-600 rounded-2xl p-6 shadow-2xl border border-dark-500">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center space-x-2">
                        <CreditCard className="w-8 h-8 text-accent-lime" />
                        <span className="text-accent-lime font-bold text-lg">STGI</span>
                      </div>
                      <Wifi className="w-6 h-6 text-white" />
                    </div>

                    <div className="space-y-4">
                      <div className="text-white font-mono text-l tracking-wider">
                        Loan Originsation Systems
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-gray-400 text-xs uppercase">Pipeline</div>
                          <div className="text-white font-semibold">Originations</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs uppercase">Status</div>
                          <div className="text-white font-semibold">Straight</div>
                        </div>
                        <div className="flex space-x-1">
                          <div className="w-8 h-5 bg-white/20 rounded-full" />
                          <div className="w-8 h-5 bg-white/40 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Panel */}
                <div className="mt-10 p-5 rounded-2xl bg-dark-800/80 border border-accent-lime/30">
                  <p className="text-gray-200 text-sm">
                    Accelerate loan processing with automation, AI, advanced analytics, and cloud-based workflows
                    tailored for regulated financial institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
