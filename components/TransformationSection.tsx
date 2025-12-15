import { CheckCircle2 } from 'lucide-react'
import DataFlow from './DataFlow'

const outcomes = [
  'Faster loan approvals',
  'Improved underwriting accuracy',
  'Reduced manual effort',
  'Better borrower experience',
]

export default function TransformationSection() {
  return (
    <section id="lifecycle" className="section-padding bg-dark-800/60 border-y border-dark-700">
      <div className="container-custom space-y-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-accent-lime mb-3">End-to-End Lending Transformation</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform every stage of the lending lifecycle</h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Intelligent automation across originations, underwriting, verifications, and servicing means you move
              quicker while staying compliant.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((item) => (
              <div key={item} className="p-4 rounded-2xl bg-dark-900 border border-dark-700 flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent-green mt-1" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="curved-panel curve-left bg-white/90 shadow-2xl">
          <DataFlow />
        </div>
      </div>
    </section>
  )
}
