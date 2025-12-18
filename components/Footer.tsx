'use client'

import { ArrowUpRight, Linkedin } from 'lucide-react'
import Image from 'next/image'

const companyLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Technology', href: '#tech' },
  { name: 'Security', href: '#security' },
]

const connectLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      const headerHeight = 80
      const windowHeight = window.innerHeight
      const elementHeight = el.getBoundingClientRect().height
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      
      // Center the section vertically on screen
      const centerOffset = (windowHeight - elementHeight) / 2
      const offsetPosition = elementPosition - headerHeight - Math.max(centerOffset, 0)
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="bg-dark-900 border-t border-dark-700 pt-12 pb-6">
      <div className="container-custom space-y-10">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3 text-center md:text-left">
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center space-x-3 justify-center md:justify-start cursor-pointer"
            >
              <div className="relative w-45 h-25">
                <Image
                  src="/assets/logos/logo3.png"
                  alt="STGI Logo"
                  width={180}
                  height={100}
                  className="object-contain"
                />
              </div>
            </button>
            <p className="text-gray-400 max-w-md text-xs mx-auto md:mx-0">
              Transforming lending with automation, AI, and cloud-native workflows tailored for regulated financial
              institutions.
            </p>
          </div>

          <div className="flex gap-12 justify-center">
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <div className="space-y-3">
                {companyLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>
              <div className="space-y-3">
                {connectLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="block text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end space-x-3">
            <button
              onClick={() => handleNavClick('#demo')}
              className="btn-primary inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://www.linkedin.com/company/stgi-tech/"
              className="w-11 h-11 rounded-full bg-dark-800 border border-dark-700 hover:border-accent-lime/50 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 text-accent-lime" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-sm text-center md:text-left space-y-2 md:space-y-0">
          <p>© {new Date().getFullYear()} STGI. All rights reserved.</p>
          <button onClick={() => handleNavClick('#contact')} className="hover:text-accent-lime transition-colors cursor-pointer">
            Controls & Disclosures - STGI
          </button>
        </div>
      </div>
    </footer>
  )
}
