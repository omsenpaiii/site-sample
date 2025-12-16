import { CloudCog, Cpu, Network } from 'lucide-react'

const stack = [
  {
    icon: CloudCog,
    title: 'Cloud-Enabled Lending Solutions',
    description: 'Secure, scalable, AWS-native architecture designed for regulated financial operations.',
  },
  {
    icon: Cpu,
    title: 'Data & Analytics Infrastructure',
    description: 'ETL pipelines, ML models, predictive scoring, and data-driven decision intelligence for lenders.',
  },
  {
    icon: Network,
    title: 'Robotics & Lending Automation',
    description: 'RPA-based automation for repetitive tasks, validations, and straight-through loan processing.',
  },
]

export default function TechStackSection() {
  return (
    <section id="tech" className="section-padding bg-dark-800/60 border-y border-dark-700">
      <div className="container-custom">
        <p className="text-sm uppercase tracking-[0.25em] text-accent-lime mb-3">Technology</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Cloud-native and analytics-first</h2>
          <p className="text-gray-300 max-w-2xl">
            Cloud-enabled infrastructure combined with AI, ML, and RPA to keep lending decisions resilient, auditable,
            and scalable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {stack.map((item) => (
            <div key={item.title} className="card h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-lime/10 border border-accent-lime/30 flex items-center justify-center text-accent-lime">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
