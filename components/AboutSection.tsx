import { Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-dark-900">
      <div className="container-custom space-y-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.25em] text-[#f7931e]">Company</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Us</h2>
          <p className="text-gray-200 leading-relaxed">
            We have deep banking roots and we love technology – which lands us in a unique spot where we understand the banking
            problems deeply and provide optimal solutions. We leverage technology to solve core banking problems quickly.
          </p>
          <p className="text-gray-200 leading-relaxed">
            With deep experience and expertise in the financial domain, STGI built several platforms that drive efficiency,
            simplify operations, protect against frauds, integrate artificial intelligence and drive results at scale – ensuring
            critical finances reach those who need it most – fast.
          </p>
          </div>

          <div className="rounded-2xl bg-dark-800/70 border border-dark-700 p-5 md:p-6 space-y-3 lg:mt-24">
            <div className="flex items-center space-x-2 text-[#f7931e]">
              <Users className="w-5 h-5" />
              <p className="text-sm uppercase tracking-[0.2em]">Built on a Dynamic Culture and a Connection of Trust</p>
            </div>
            <p className="text-gray-200 leading-relaxed">
              STGI's team is built on a strong fibre of trust where 90% of the team is built on connections and referrals. 
              With a mission to grow ourselves, our employees, partners & clients – we provide hypercare. 
            </p>
          </div>
        </div>

          <div className="rounded-2xl bg-white border border-gray-200 shadow-xl px-7 py-10 md:px-10 md:py-12">
            <div className="flex items-center gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f7931e]">Our Values</p>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-3xl leading-tight font-medium text-[#f7931e]">
                Urgency:
                <br />
                We Move Quickly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We understand that the programs we support often operate under critical time constraints. That’s why “Urgency”
                is central to our culture. Whether we’re deploying a new solution or resolving complex challenges, we move with
                speed and efficiency to ensure our customers can meet their goals without delay.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl leading-tight font-medium text-[#f7931e]">
                Collaboration:
                <br />
                We Work Together
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Great outcomes are born from teamwork. We believe the best solutions come from diverse perspectives and shared
                expertise. Our collaborative approach ensures that we’re constantly learning from each other and working together
                to solve the toughest problems.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl leading-tight font-medium text-[#f7931e]">
                Commitment:
                <br />
                We See It Through
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We take pride in our unwavering dedication to our customers and their missions. “Commitment” means going above
                and beyond, finding solutions to the most complex challenges, and ensuring success every step of the way. When
                we start something, we don’t stop until we get results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
