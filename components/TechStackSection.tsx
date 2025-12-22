'use client'

import Image from 'next/image'
import { useState } from 'react'

const services = [
  {
    title: 'Cloud & Infrastructure Services',
    sideLabel: 'Cloud Services',
    tagline: 'AWS-Native. Secure. Scalable.',
    description: 'We design and implement cloud architectures optimized for regulated financial environments.',
    bullets: [
      'Multi-tenant, cloud-native architecture on AWS',
      'Secure deployment aligned with financial and regulatory standards',
      'High availability, scalability, and performance optimization',
      'Infrastructure automation, monitoring, and cost optimization',
      'Support for DevOps, CI/CD pipelines, and cloud governance',
    ],
    icon: '/images/aws.png',
  },
  {
    title: 'Data & Analytics Enablement',
    sideLabel: 'Data & Analytics',
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
    sideLabel: 'RPA Automation',
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
    sideLabel: 'Integrations',
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
    sideLabel: 'Tech Support',
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
  const providerLogos = ['/images/aws.png', '/images/azure.png', '/images/gcp.png', '/images/oracle.png']
  const dataLogos = ['/images/Datadog.png', '/images/dataRobot.png', '/images/posgresql.webp', '/images/redis.png']
  const rpaLogos = ['/images/UiPath.png', '/images/automationanywhere.png', '/images/blueprism.png']
  const integrationsLogos = ['/images/postman.png', '/images/DocuSign.svg', '/images/fico.webp', '/images/Experian.png']
  const supportLogos = ['/images/argocd.png', '/images/splunk.png', '/images/sentry.webp', '/images/temporal.svg']

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

        <div className="mt-10 space-y-4 lg:space-y-0 lg:pt-8">
          <div className="hidden lg:block">
            <div className="overflow-hidden rounded-3xl border border-dark-700/60 bg-dark-900/40">
              {services.map((item, index) => {
                const isActive = index === activeIndex

                return (
                  <div key={item.title} className={index === 0 ? '' : 'border-t border-dark-700/60'}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition ${
                        isActive ? 'bg-dark-800/60' : 'hover:bg-dark-800/40'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 shrink-0">
                          <Image
                            src={item.icon}
                            alt={`${item.title} icon`}
                            width={48}
                            height={48}
                            className="w-9 h-9 object-contain"
                          />
                        </div>
                        <div className="min-w-0 space-y-1">
                          <p className="text-xs uppercase tracking-[0.28em] text-accent-lime">{item.sideLabel}</p>
                          <p className="text-lg font-semibold text-white leading-tight">{item.tagline}</p>
                        </div>
                      </div>
                    </button>

                    <div
                      aria-hidden={!isActive}
                      className={`overflow-hidden transition-[max-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                        isActive ? 'max-h-[820px]' : 'max-h-0'
                      }`}
                    >
                      <div
                        className={`px-6 pb-8 pt-4 transition-all duration-500 ease-out motion-reduce:transition-none ${
                          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        }`}
                      >
                        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-start">
                          <div className="space-y-4">
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed">{item.description}</p>
                            <ul className="flex flex-col gap-2 text-sm md:text-base text-gray-200 leading-relaxed">
                              {item.bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white/5 px-6 py-5">
                              {(index === 0 ? providerLogos : index === 1 ? dataLogos : index === 2 ? rpaLogos : index === 3 ? integrationsLogos : index === 4 ? supportLogos : [item.icon]).map((logo) => (
                                <div key={logo} className="flex h-16 w-16 items-center justify-center rounded-xl bg-transparent shrink-0">
                                  <Image src={logo} alt="Cloud provider logo" width={64} height={64} className="w-16 h-16 object-contain" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            {services.map((item, index) => {
              const isActive = index === activeIndex

              return (
                <div key={item.title} className="rounded-3xl border border-dark-700/70 bg-dark-900/40">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 shrink-0">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={40}
                        height={40}
                        className="w-9 h-9 object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-accent-lime">{item.sideLabel}</p>
                      <p className="text-lg font-semibold text-white leading-tight">{item.tagline}</p>
                    </div>
                  </button>
                  {isActive ? (
                    <div className="space-y-4 px-6 pb-7">
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      <ul className="flex flex-col gap-2 text-sm text-gray-200">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-lime" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {index === 0 ? (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          {providerLogos.map((logo) => (
                            <div key={logo} className="flex h-16 w-16 items-center justify-center rounded-lg bg-transparent shrink-0">
                              <Image src={logo} alt="Cloud provider logo" width={64} height={64} className="w-14 h-14 object-contain" />
                            </div>
                          ))}
                        </div>
                      ) : index === 1 ? (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          {dataLogos.map((logo) => (
                            <div key={logo} className="flex h-16 w-16 items-center justify-center rounded-lg bg-transparent shrink-0">
                              <Image src={logo} alt="Data tool logo" width={64} height={64} className="w-14 h-14 object-contain" />
                            </div>
                          ))}
                        </div>
                      ) : index === 2 ? (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          {rpaLogos.map((logo) => (
                            <div key={logo} className="flex h-16 w-16 items-center justify-center rounded-lg bg-transparent shrink-0">
                              <Image src={logo} alt="RPA tool logo" width={64} height={64} className="w-14 h-14 object-contain" />
                            </div>
                          ))}
                        </div>
                      ) : index === 3 ? (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          {integrationsLogos.map((logo) => (
                            <div key={logo} className="flex h-16 w-16 items-center justify-center rounded-lg bg-transparent shrink-0">
                              <Image src={logo} alt="Integration tool logo" width={64} height={64} className="w-14 h-14 object-contain" />
                            </div>
                          ))}
                        </div>
                      ) : index === 4 ? (
                        <div className="grid grid-cols-2 gap-4 pt-2">
                          {supportLogos.map((logo) => (
                            <div key={logo} className="flex h-16 w-16 items-center justify-center rounded-lg bg-transparent shrink-0">
                              <Image src={logo} alt="Support tool logo" width={64} height={64} className="w-14 h-14 object-contain" />
                            </div>
                          ))}
                        </div>
                      ) : null}
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
