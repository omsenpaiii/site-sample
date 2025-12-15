import { HeartHandshake, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Company</p>
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            We are bankers and we love technology – which lands us in a unique spot where we understand the banking
            problems deeply and provide optimal solutions. We leverage technology to solve core banking problems
            quickly.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With deep experience and expertise in the financial domain, STGI built several platforms that drive
            efficiency, simplify operations, protect against frauds, integrate artificial intelligence and drive results
            at scale – ensuring critical finances reach those who need it most – fast.
          </p>
          <div className="p-4 rounded-2xl bg-dark-800 border border-dark-700 space-y-3">
            <div className="flex items-center space-x-2 text-accent-lime">
              <Users className="w-5 h-5" />
              <p className="text-sm uppercase tracking-[0.2em]">Built on a Dynamic Culture and a Connection of Trust</p>
            </div>
            <p className="text-gray-200">
              STGI’s team is built on a strong fibre of trust where 90% of the team is built on connections and
              referrals. With a mission to grow ourselves and our partners – we provide hypercare.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">The STGI advantage</h3>
          <p className="text-gray-300 leading-relaxed">
            STGI is a unique blend of bankers who understand technology and technologists who understand banking. This
            gives us a rare advantage: we deeply understand real-world lending challenges and build solutions that solve
            them with speed, intelligence, and precision.
          </p>
          <p className="text-gray-300 leading-relaxed">
            With decades of experience across the financial domain, we’ve built platforms that streamline lending
            workflows, reduce manual effort, minimize fraud risk, incorporate AI across decision layers, and deliver
            measurable operational impact.
          </p>
          <p className="text-gray-200 font-semibold">
            Our mission is simple: 
            <br/>
            Empower financial institutions to lend better, faster, and smarter.
            <br/>
          </p>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-accent-lime/10 to-accent-green/10 border border-accent-lime/30 space-y-2">
            <div className="flex items-center space-x-2 text-accent-lime">
              <HeartHandshake className="w-5 h-5" />
              <p className="text-sm uppercase tracking-[0.2em]">Our Culture</p>
            </div>
            <p className="text-gray-200">
              With 90% of our team joining through referrals, STGI is built on a strong culture of trust, collaboration,
              and long-term commitment. We hire people who think like owners and innovate like builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
