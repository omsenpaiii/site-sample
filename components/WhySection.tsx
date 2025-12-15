import { Building2, Gauge, Workflow } from 'lucide-react'

const reasons = [
  {
    icon: Building2,
    title: 'Built for Banks',
    description:
      'STGI empowers banks and financial institutions to transform lending operations with automation, AI, advanced analytics, and cloud-based workflows.',
  },
  {
    icon: Workflow,
    title: 'Streamlined Lending',
    description:
      'Digitize originations, automate underwriting, and modernize servicing to reduce operational overhead while ensuring compliance at scale.',
  },
  {
    icon: Gauge,
    title: 'Faster Decisions',
    description:
      'Our platform accelerates underwriting decisions, improves consistency, and creates better borrower experiences end-to-end.',
  },
]

export default function WhySection() {
  return (
    <section id="solutions" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-5" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime mb-3">
            Why Lending Institutions Choose STGI
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted technology partner for lending leaders</h2>
          <p className="text-gray-300 leading-relaxed">
            STGI empowers banks and financial institutions to transform their lending operations with automation, AI,
            advanced analytics, and cloud-based workflows. Our lending technology platform streamlines originations,
            accelerates underwriting decisions, reduces operational overhead, and ensures compliance at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {reasons.map((reason) => (
            <div key={reason.title} className="card h-full flex flex-col space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent-lime/10 border border-accent-lime/30 flex items-center justify-center text-accent-lime">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
