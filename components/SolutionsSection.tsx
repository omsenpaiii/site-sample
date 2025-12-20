import { Bot, ClipboardCheck, FileSearch, Layers, Sparkle, Workflow } from 'lucide-react'
import Image from 'next/image'

const solutions = [
  {
    icon: ClipboardCheck,
    title: 'Covenant & Tickler Management',
    description:
      'Protect portfolio health with an integrated Covenant & Tickler Management solution that keeps risk in check. Track covenant compliance and critical ticklers in real time with a structured review and approval workflow. Reduce surprises, improve visibility, and act early to safeguard returns.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: Workflow,
    title: 'Post-Disbursement Progress Monitoring',
    description:
      'Ensure ongoing control after or during funding with Post-Disbursement Progress Monitoring. Track milestones, conditions, and usage or milestones of funds through structured reviews and real-time updates. Detect issues early, maintain compliance, and protect portfolio performance throughout the loan lifecycle.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: Bot,
    title: 'Rule Based Dynamic Workflow Engine',
    description:
      'Automate complex processes with a Rule-Based Dynamic Workflow Engine that adapts in real time. Configure rules to route tasks, trigger approvals, and enforce policy based on data and events. Cut turnaround time, reduce manual errors, and keep operations consistently audit-ready.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: FileSearch,
    title: 'AI-Enabled Document Scrubbing',
    description:
      'Automatically extract, validate, and flag risks or inconsistencies across large document sets. Reduce manual effort, improve accuracy, and make faster, more confident decisions.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: ClipboardCheck,
    title: 'Intelligent Document Validation Engine',
    description:
      'Detect and prevent fraud with AI-powered document checks. Automatically identify forged, altered, or inconsistent documents using intelligent pattern analysis. Reduce risk, speed up reviews, and strengthen trust across every transaction.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: Layers,
    title: 'Advanced Credit Memo Builder',
    description:
      'Automate credit analysis with customizable credit memo templates, ratio calculations, AI summaries, and institution-specific narratives.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: Sparkle,
    title: 'Configurable and Advanced Spreading Capabilities',
    description:
      'Streamline analysis with Configurable and Advanced Spreading Capabilities in the platform. Easily adapt templates and rules to spread financials across industries, entities, and deal types. Improve accuracy, consistency, and speed from data capture to credit decision.',
    logo: '/images/logo-04.svg',
  },
  {
    icon: FileSearch,
    title: 'Advanced Lending Analytics & Insights',
    description:
      'Get real-time dashboards for portfolio performance, borrower behaviour, risk scoring, and trend predictions.',
    logo: '/images/logo-04.svg',
  },
]

export default function SolutionsSection() {
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

        <div className="rounded-2xl border border-dark-700/70 bg-dark-900/40 divide-y divide-dark-700/70">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="grid gap-6 px-6 py-6 md:grid-cols-[minmax(0,1fr)_180px] md:items-center"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-accent-lime">
                  <div className="w-11 h-11 rounded-xl bg-accent-lime/10 border border-accent-lime/40 flex items-center justify-center">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
              <div className="flex md:justify-end">
                <Image
                  src={solution.logo}
                  alt={`${solution.title} logo`}
                  width={160}
                  height={48}
                  className="h-12 w-auto object-contain opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
