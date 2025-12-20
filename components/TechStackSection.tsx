import Image from 'next/image'

const stack = [
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
    logos: ['/images/logo-01.svg', '/images/logo-02.svg', '/images/logo-03.svg', '/images/logo-04.svg'],
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
    logos: ['/images/logo-05.svg', '/images/logo-06.svg', '/images/logo-07.svg', '/images/logo-08.svg'],
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
    logos: ['/images/logo-09.svg', '/images/logo-01.svg', '/images/logo-02.svg', '/images/logo-03.svg'],
  },
  {
    title: 'Integrations & Ecosystem Connectivity',
    tagline: 'Connect Seamlessly Across Systems',
    description: 'Our platform integrates effortlessly with your existing and partner ecosystems.',
    bullets: [
      'API-driven integrations with core banking systems',
      'Third-party data providers, credit bureaus, and KYC services',
      'CRM, LOS, LMS, and payment system integrations',
      'Event-driven and real-time data exchange',
      'Secure, scalable, and extensible integration frameworks',
    ],
    logos: ['/images/logo-04.svg', '/images/logo-05.svg', '/images/logo-06.svg', '/images/logo-07.svg'],
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
    logos: ['/images/logo-08.svg', '/images/logo-09.svg', '/images/logo-01.svg', '/images/logo-02.svg'],
  },
]

export default function TechStackSection() {
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

        <div className="mt-10 overflow-hidden rounded-3xl border border-dark-700/70 bg-dark-900/40">
          {stack.map((item, index) => (
            <div
              key={item.title}
              className={`grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center ${
                index === 0 ? '' : 'border-t border-dark-700/70'
              }`}
            >
              <div className="space-y-4">
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
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {item.logos.map((logo) => (
                  <div
                    key={logo}
                    className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                  >
                    <Image src={logo} alt="" width={120} height={60} className="h-8 w-auto opacity-80" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
