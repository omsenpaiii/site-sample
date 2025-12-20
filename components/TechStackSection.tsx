'use client'

import Image from 'next/image'
import { useState } from 'react'

const services = [
  {
    title: 'Cloud & Infrastructure Services',
    tagline: 'AWS-Native. Secure. Scalable.',
    description: 'We design and implement cloud architectures optimized for regulated financial environments.',
    bullets: [
      'Multi-tenant, cloud-native architecture on AWS',
      'Secure deployment aligned with financial and regulatory standards',
      'High availability, scalability, and performance optimization',
      'Infrastructure automation, monitoring, and cost optimization',
      'Support for DevOps, CI/CD pipelines, and cloud governance',
    ],
    icon: '/images/logo3.png',
  },
  {
    title: 'Data & Analytics Enablement',
    tagline: 'Turn Data into Actionable Lending Intelligence',
    description: 'We enable data-driven decisioning through modern analytics and AI-ready foundations.',
    bullets: [
      'Data ingestion and ETL pipeline design',
      'Cloud data lakes and analytics platforms',
      'Predictive models framework for reconciliations across platforms',
      'Real-time and batch analytics for lending decisions',
      'Auditability, explainability, and reporting support',
    ],
    icon: '/images/Datadog.png',
  },
  {
    title: 'Robotics & Process Automation (RPA)',
    tagline: 'Automate What Slows You Down',
    description: 'We streamline lending operations using intelligent automation.',
    bullets: [
      'RPA-based automation for repetitive tasks',
      'Automated validations, reconciliations, and checks',
      'Straight-through loan processing workflows',
      'Reduced manual effort and operational risk',
      'Faster turnaround times and improved accuracy',
    ],
    icon: '/images/UiPath.png',
  },
  {
    title: 'Connect Seamlessly Across Systems',
    tagline: 'Integrations & Ecosystem Connectivity',
    description: 'Our platform integrates effortlessly with your existing and partner ecosystems.',
    bullets: [
      'API-driven integrations with core banking systems',
      'Third-party data providers, credit bureaus, and KYC services',
      'CRM, LOS, LMS, and payment system integrations',
      'Event-driven and real-time data exchange',
      'Secure, scalable, and extensible integration frameworks',
    ],
    icon: '/images/postman.png',
  },
  {
    title: 'Implementation & Ongoing Technology Support',
    tagline: 'From Go-Live to Scale',
    description: 'We partner with clients throughout the product lifecycle.',
    bullets: [
      'End-to-end product implementation and onboarding',
      'Configuration and tenant setup for multi-entity environments',
      'Performance tuning and scalability planning',
      'Continuous enhancements and technology upgrades',
      'Dedicated support for production stability and growth',
    ],
    icon: '/images/argocd.png',
  },
]

export default function TechStackSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="tech" className="section-padding bg-dark-800/60 border-y border-dark-700">
      <div className="container-custom">
        <p className="text-sm uppercase tracking-[0.25em] text-accent-lime mb-3">Technology</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Technology services built for lending</h2>
          <p className="text-gray-300 max-w-2xl">
            Cloud-enabled infrastructure combined with AI, ML, and automation to keep lending decisions resilient,
            auditable, and scalable.
          </p>
        </div>

        <div className="mt-10 space-y-4 lg:space-y-0">
          <div className="hidden overflow-hidden rounded-3xl border border-dark-700/70 bg-dark-900/40 lg:flex">
            {services.map((item, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex min-h-[360px] min-w-[88px] overflow-hidden text-left transition-all duration-500 ${
                    isActive ? 'flex-[3]' : 'flex-[0.7]'
                  } ${index === services.length - 1 ? '' : 'border-r border-dark-700/70'}`}
                >
                  <div className="absolute inset-y-0 left-0 z-10 flex w-16 flex-col items-center justify-between border-r border-white/10 bg-dark-900/70 py-6">
                    <Image
                      src={item.icon}
                      alt={`${item.title} icon`}
                      width={40}
                      height={40}
                      className="h-8 w-auto"
                    />
                    <span
                      style={{ writingMode: 'vertical-rl' }}
                      className="text-xs uppercase tracking-[0.3em] text-gray-200"
                    >
                      {item.title}
                    </span>
                  </div>

                  <div
                    className={`relative flex w-full min-w-0 flex-col gap-6 px-6 py-8 pl-20 transition-opacity duration-300 lg:flex-row lg:items-center lg:justify-between ${
                      isActive ? 'opacity-100' : 'lg:opacity-0'
                    }`}
                  >
                    <div className="min-w-0 space-y-4">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-[0.3em] text-accent-lime">{item.title}</p>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">{item.tagline}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      <ul className="grid gap-2 text-sm text-gray-200 sm:grid-cols-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden shrink-0 lg:flex">
                      <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4">
                        <Image src={item.icon} alt={`${item.title} logo`} width={96} height={96} className="h-14 w-auto" />
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="grid gap-4 lg:hidden">
            {services.map((item, index) => {
              const isActive = index === activeIndex

              return (
                <div key={item.title} className="rounded-3xl border border-dark-700/70 bg-dark-900/40">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex w-full items-center gap-4 px-6 py-4 text-left"
                  >
                    <Image src={item.icon} alt={`${item.title} icon`} width={36} height={36} className="h-8 w-auto" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-accent-lime">{item.title}</p>
                      <p className="text-lg font-semibold text-white">{item.tagline}</p>
                    </div>
                  </button>
                  {isActive ? (
                    <div className="space-y-4 px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      <ul className="grid gap-2 text-sm text-gray-200 sm:grid-cols-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
