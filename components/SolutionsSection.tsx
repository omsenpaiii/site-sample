'use client'

import { Bot, ChevronLeft, ChevronRight, ClipboardCheck, FileSearch, Layers, Sparkle, Workflow } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const solutions = [
  {
    icon: ClipboardCheck,
    title: 'Covenant & Tickler Management',
    description:
      'Protect portfolio health with an integrated Covenant & Tickler Management solution that keeps risk in check. Track covenant compliance and critical ticklers in real time with a structured review and approval workflow. Reduce surprises, improve visibility, and act early to safeguard returns.',
  },
  {
    icon: Workflow,
    title: 'Post-Disbursement Progress Monitoring',
    description:
      'Ensure ongoing control after or during funding with Post-Disbursement Progress Monitoring. Track milestones, conditions, and usage or milestones of funds through structured reviews and real-time updates. Detect issues early, maintain compliance, and protect portfolio performance throughout the loan lifecycle.',
  },
  {
    icon: Bot,
    title: 'Rule Based Dynamic Workflow Engine',
    description:
      'Automate complex processes with a Rule-Based Dynamic Workflow Engine that adapts in real time. Configure rules to route tasks, trigger approvals, and enforce policy based on data and events. Cut turnaround time, reduce manual errors, and keep operations consistently audit-ready.',
  },
  {
    icon: FileSearch,
    title: 'AI-Enabled Document Scrubbing',
    description:
      'Automatically extract, validate, and flag risks or inconsistencies across large document sets. Reduce manual effort, improve accuracy, and make faster, more confident decisions.',
  },
  {
    icon: ClipboardCheck,
    title: 'Intelligent Document Validation Engine',
    description:
      'Detect and prevent fraud with AI-powered document checks. Automatically identify forged, altered, or inconsistent documents using intelligent pattern analysis. Reduce risk, speed up reviews, and strengthen trust across every transaction.',
  },
  {
    icon: Layers,
    title: 'Advanced Credit Memo Builder',
    description:
      'Automate credit analysis with customizable credit memo templates, ratio calculations, AI summaries, and institution-specific narratives.',
  },
  {
    icon: Sparkle,
    title: 'Configurable and Advanced Spreading Capabilities',
    description:
      'Streamline analysis with Configurable and Advanced Spreading Capabilities in the platform. Easily adapt templates and rules to spread financials across industries, entities, and deal types. Improve accuracy, consistency, and speed from data capture to credit decision.',
  },
  {
    icon: FileSearch,
    title: 'Advanced Lending Analytics & Insights',
    description:
      'Get real-time dashboards for portfolio performance, borrower behaviour, risk scoring, and trend predictions.',
  },
]

export default function SolutionsSection() {
  const images = ['/images/slideshow1.png', '/images/slideshow2.png', '/images/slideshow3.png']
  const slides = solutions.map((solution, index) => ({
    ...solution,
    image: images[index % images.length],
  }))
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
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
                <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-dark-900/90 via-dark-900/70 to-transparent sm:w-2/3 lg:w-1/2" />
                <div className="relative z-10 flex h-full items-end md:items-center">
                  <div className="max-w-2xl space-y-4 px-6 py-8 sm:px-10 sm:pl-14 md:pl-16">
                    <div className="flex items-center gap-3 text-accent-lime">
                      <div className="w-11 h-11 rounded-xl bg-accent-lime/10 border border-accent-lime/40 flex items-center justify-center">
                        <slide.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">{slide.title}</h3>
                    </div>
                    <p className="text-gray-100 leading-relaxed">{slide.description}</p>
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
