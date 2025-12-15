import { Bot, ClipboardCheck, FileSearch, Layers, Sparkle, Workflow } from 'lucide-react'

const solutions = [
  {
    icon: Bot,
    title: 'Automated Underwriting Engine',
    description:
      'AI-enhanced underwriting tailored to your bank’s credit policies, rules, and risk models. Improve decision speed and consistency with automated credit assessment.',
  },
  {
    icon: FileSearch,
    title: 'AI-Enabled Document Scrubbing',
    description:
      'Extract data from income documents, financial statements, and applicant records with high accuracy using machine learning and OCR.',
  },
  {
    icon: ClipboardCheck,
    title: 'Intelligent Document Validation Engine',
    description: 'Identify mismatches, detect anomalies, verify income, and produce clean, decision-ready data.',
  },
  {
    icon: Layers,
    title: 'Advanced Credit Memo Builder',
    description:
      'Automate credit analysis with customizable credit memo templates, ratio calculations, AI summaries, and institution-specific narratives.',
  },
  {
    icon: Workflow,
    title: 'Dynamic Workflow Automation',
    description:
      'No-code lending workflows for loan origination, underwriting, verifications, servicing, escalations, and compliance tasks.',
  },
  {
    icon: Sparkle,
    title: 'Advanced Lending Analytics & Insights',
    description:
      'Get real-time dashboards for portfolio performance, borrower behaviour, risk scoring, and trend predictions.',
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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="card h-full flex flex-col space-y-4 border-dark-600 hover:border-accent-lime/40"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-lime/10 border border-accent-lime/40 flex items-center justify-center text-accent-lime">
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="text-gray-300 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
