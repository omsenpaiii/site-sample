import { ArrowRight, Briefcase } from 'lucide-react'

const reasons = [
  'Build next-generation lending platforms.',
  'Work closely with domain experts in credit, fraud, and underwriting.',
  'Grow fast in an entrepreneurial, ownership-driven environment.',
  'Solve meaningful problems that impact millions of borrowers.',
  'Enjoy a flexible, trust-based, high-performance culture.',
]

export default function CareersSection() {
  return (
    <section id="careers" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-5" />
      <div className="container-custom relative z-10">
        <div className="flex items-center space-x-3 text-accent-lime mb-4">
          <Briefcase className="w-5 h-5" />
          <p className="text-sm uppercase tracking-[0.25em]">Join Our Team - STGI</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Careers at STGI</h2>
            <p className="text-gray-300 leading-relaxed">
              Join a fast-growing financial technology engineering team transforming how banks and institutions manage
              lending operations. At STGI, you’ll work on AI-driven underwriting solutions, lending automation platforms,
              cloud-native systems, and mission-critical workflows.
            </p>
          </div>
          <div className="card bg-dark-800/80 border-accent-lime/40 space-y-4">
            <p className="text-lg font-semibold text-accent-lime">Why Work at STGI?</p>
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start space-x-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-lime" />
                  <p className="text-gray-200">{reason}</p>
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full justify-center">
              <span>Explore Roles</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <p className="text-xs text-gray-400">
              If you love solving real financial challenges with modern technology, STGI is the place for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
