import { Cpu, HeartHandshake, Landmark } from 'lucide-react'

const reasons = [
  {
    icon: Landmark,
    title: 'Deep Domain Knowledge',
    description:
      'With deep-seated roots in the banking sector, we don’t just offer services; we offer understanding. We speak your language and anticipate the unique regulatory and operational hurdles you face, allowing us to engineer optimal solutions that fit your specific ecosystem.',
  },
  {
    icon: Cpu,
    title: 'Technology-First Approach',
    description:
      'We believe that modern problems require modern tools. As a Technology-First organization, our methodology is built around digital transformation. We leverage cutting-edge tech to automate workflows, reduce risk, and solve complex financial challenges with precision and scale.',
  },
  {
    icon: HeartHandshake,
    title: 'Passionate People',
    description:
      'Beyond the code and the spreadsheets, our greatest asset is our people. We are a team of dedicated problem-solvers who are genuinely invested in your growth. We don’t just work for you—we work with you, driven by a passion to ensure your long-term success.',
  },
]

export default function WhySection() {
  return (
    <section id="solutions" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-5" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg uppercase tracking-[0.35em] text-accent-lime mb-3">
            Why Financial Institutions Partner with STGI 
          </p>
          <p className="text-gray-300 leading-relaxed">
            STGI stands at the intersection of traditional banking wisdom and modern technological innovation. Here is why industry leaders choose us: 
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
