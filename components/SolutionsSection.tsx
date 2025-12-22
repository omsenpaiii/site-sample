'use client'

import { Bot, ChevronLeft, ChevronRight, ClipboardCheck, FileSearch, Layers, Sparkle, Workflow } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import MacBookScene from './MacBookScene'

const solutions = [
  {
    icon: ClipboardCheck,
    title: 'Covenant & Tickler Management',
    description:
      'Protect portfolio health with an integrated Covenant & Tickler Management solution that keeps risk in check. Track covenant compliance and critical ticklers in real time with a structured review and approval workflow. Reduce surprises, improve visibility, and act early to safeguard returns.',
    // public/images/slideshow1.png
  },
  {
    icon: Workflow,
    title: 'Post-Disbursement Progress Monitoring',
    description:
      'Ensure ongoing control after or during funding with Post-Disbursement Progress Monitoring. Track milestones, conditions, and usage or milestones of funds through structured reviews and real-time updates. Detect issues early, maintain compliance, and protect portfolio performance throughout the loan lifecycle.',
    // public/images/slideshow2.png
    },
  {
    icon: Bot,
    title: 'Rule Based Dynamic Workflow Engine',
    description:
      'Automate complex processes with a Rule-Based Dynamic Workflow Engine that adapts in real time. Configure rules to route tasks, trigger approvals, and enforce policy based on data and events. Cut turnaround time, reduce manual errors, and keep operations consistently audit-ready.',
    // public/images/slideshow3.png
    },
  {
    icon: FileSearch,
    title: 'AI-Enabled Document Scrubbing',
    description:
      'Automatically extract, validate, and flag risks or inconsistencies across large document sets. Reduce manual effort, improve accuracy, and make faster, more confident decisions.',
    // public/images/slideshow4.png
  },
  {
    icon: ClipboardCheck,
    title: 'Intelligent Document Validation Engine',
    description:
      'Detect and prevent fraud with AI-powered document checks. Automatically identify forged, altered, or inconsistent documents using intelligent pattern analysis. Reduce risk, speed up reviews, and strengthen trust across every transaction.',
    // public/images/slideshow5.png
    },
  {
    icon: Layers,
    title: 'Advanced Credit Memo Builder',
    description:
      'Automate credit analysis with customizable credit memo templates, ratio calculations, AI summaries, and institution-specific narratives.',
    // public/images/slideshow6.png
    },
  {
    icon: Sparkle,
    title: 'Configurable and Advanced Spreading Capabilities',
    description:
      'Streamline analysis with Configurable and Advanced Spreading Capabilities in the platform. Easily adapt templates and rules to spread financials across industries, entities, and deal types. Improve accuracy, consistency, and speed from data capture to credit decision.',
    // public/images/slideshow7.png
    },
  {
    icon: FileSearch,
    title: 'Advanced Lending Analytics & Insights',
    description:
      'Get real-time dashboards for portfolio performance, borrower behaviour, risk scoring, and trend predictions.',
    // public/images/slideshow8.png
    },
]

export default function SolutionsSection() {
  const images = ['/images/slideshow1.png', '/images/slideshow2.png', '/images/slideshow3.png', '/images/slideshow4.png', '/images/slideshow5.png', '/images/slideshow6.png', '/images/slideshow7.png', '/images/slideshow8.png']
  const slides = solutions.map((solution, index) => ({
    ...solution,
    image: images[index % images.length],
  }))

  const [activeIndex, setActiveIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  const goToNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-900" />
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent-lime mb-3">Our Lending Technology Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold">Purpose-built tools for modern lenders</h2>
          </div>
          <p className="text-gray-300 max-w-xl">
            Combine automation, analytics, and AI so teams can move from intake to decision to servicing with confidence.
          </p>
        </div>

        

        <div className="relative overflow-hidden rounded-3xl border border-dark-700/70 bg-dark-900/40">
          <div className="relative h-[420px] sm:h-[460px] lg:h-[520px]">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                id={`solution-slide-${index}`}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={`${slide.title} background`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/80 to-dark-700/70" />
                <div className="pointer-events-none absolute inset-0 slideshow-texture" aria-hidden="true" />
                <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-transparent sm:w-2/3 lg:w-1/2" />
                <div className="relative z-10 flex h-full flex-col justify-end gap-6 px-6 py-8 sm:px-10 sm:pl-14 md:flex-row md:items-center md:justify-between md:gap-10 md:pl-16">
                  <div className="max-w-xl space-y-4">
                    <div className="flex items-center gap-3 text-accent-lime">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-lime/40 bg-accent-lime/10">
                        <slide.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">{slide.title}</h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">{slide.description}</p>
                  </div>
                  <div className="relative w-[80vw] max-w-[420px] self-center md:w-full md:self-auto md:max-w-[520px] lg:max-w-[600px]">
                    <div className="relative h-56 sm:h-64 md:h-[300px] lg:h-[360px]">
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-accent-lime/30 blur-2xl opacity-70"
                        aria-hidden="true"
                      />
                      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-dark-900/40 shadow-2xl shadow-black/40">
                        {index === activeIndex ? (
                          <MacBookScene
                            triggerId={`solution-slide-${index}`}
                            screenImage={slide.image}
                          />
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={goToPrevSlide}
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-dark-900/70 text-white transition hover:bg-dark-800/90 sm:left-3 md:left-4"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-dark-900/70 text-white transition hover:bg-dark-800/90 sm:right-3 md:right-4"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Go to ${slide.title}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? 'bg-accent-lime' : 'bg-dark-600 hover:bg-dark-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
