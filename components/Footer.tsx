import { ArrowUpRight, Linkedin } from 'lucide-react'
import Image from 'next/image'

const companyLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Security', href: '#security' },
]

const connectLinks = [
  { name: 'About', href: '#about' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-12 pb-6">
      <div className="container-custom space-y-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="relative w-45 h-25">
                <Image
                  src="/assets/logos/logo3.png"
                  alt="STGI Logo"
                  width={180}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              Transforming lending with automation, AI, and cloud-native workflows tailored for regulated financial
              institutions.
            </p>
          </div>

          <div className="flex gap-12 md:justify-center">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <div className="space-y-3">
                {companyLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
              <div className="space-y-3">
                {connectLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start md:justify-end space-x-3">
            <a
              href="#demo"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/stgi-tech/"
              className="w-11 h-11 rounded-full bg-dark-800 border border-dark-700 hover:border-accent-lime/50 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 text-accent-lime" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} STGI. All rights reserved.</p>
          <p>Controls & Disclosures - STGI</p>
        </div>
      </div>
    </footer>
  )
}
