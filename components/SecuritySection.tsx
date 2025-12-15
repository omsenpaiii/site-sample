import { BadgeCheck, Lock } from 'lucide-react'

export default function SecuritySection() {
  return (
    <section id="security" className="section-padding bg-dark-900">
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Security & Compliance</p>
          <h2 className="text-3xl md:text-4xl font-bold">Enterprise-grade controls for regulated banking</h2>
          <p className="text-gray-300 leading-relaxed">
            ISO Certified / ISO 27001 Certified. Enterprise-grade security, compliance, and controls across our
            platforms. Banking-grade privacy, encryption, access controls, and audit trails keep your data protected end
            to end.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card space-y-3">
            <div className="w-12 h-12 rounded-xl bg-accent-lime/10 border border-accent-lime/30 flex items-center justify-center text-accent-lime">
              <BadgeCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Certified & Audited</h3>
            <p className="text-gray-300 text-sm">
              ISO 27001 controls, continuous monitoring, and audit-ready reporting for confident governance.
            </p>
          </div>
          <div className="card space-y-3">
            <div className="w-12 h-12 rounded-xl bg-accent-lime/10 border border-accent-lime/30 flex items-center justify-center text-accent-lime">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold">Banking-grade Security</h3>
            <p className="text-gray-300 text-sm">
              Encryption, granular access controls, audit trails, and privacy safeguards engineered for financial
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
