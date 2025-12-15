import { Lightbulb, Target } from 'lucide-react'

const values = [
  'Empowering problem-solvers',
  'Delivering excellence as a standard',
  'Practicing client-first thinking',
  'Creating a space for innovation and growth',
  'Building long-term partnerships with lenders',
]

export default function ValuesSection() {
  return (
    <section className="section-padding bg-dark-800/60 border-y border-dark-700">
      <div className="container-custom grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Values</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Culture: Built on Trust, Ownership, and Expertise</h2>
          <p className="text-gray-300 leading-relaxed">
            We hire people who think like owners and innovate like builders. With 90% of the team joining through
            referrals, our culture stays rooted in collaboration and accountability.
          </p>
          <div className="p-4 rounded-2xl bg-dark-900 border border-dark-700 flex items-center space-x-3">
            <Target className="w-6 h-6 text-accent-lime" />
            <p className="text-gray-200">Delivering excellence with a client-first mindset in every engagement.</p>
          </div>
        </div>
        <div className="card bg-dark-900 space-y-3">
          <div className="flex items-center space-x-2 text-accent-lime">
            <Lightbulb className="w-5 h-5" />
            <p className="text-sm uppercase tracking-[0.25em]">We Believe In</p>
          </div>
          <ul className="space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent-lime" />
                <p className="text-gray-200">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
