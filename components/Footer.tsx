'use client'

import { ArrowUpRight, Linkedin } from 'lucide-react'
import Image from 'next/image'

const companyLinks = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Technology', href: '#tech' },
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
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
          {/* Left Section - STGI Logo & Description */}
          <div className="space-y-3 text-center lg:text-left max-w-sm mx-auto lg:mx-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center space-x-3 justify-center lg:justify-start cursor-pointer mx-auto lg:mx-0 w-fit"
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
            <p className="text-gray-300 text-xs">
              Transforming lending with automation, AI, and cloud-native workflows tailored for regulated financial
              institutions.
            </p>
          </div>

          {/* ISO Certification Logo */}
          <div className="flex items-center justify-center lg:justify-center order-2 lg:order-none">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <Image
                src="/images/iso-certified-company.png"
                alt="ISO Certified Company"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </div>

          {/* Middle Section - Navigation */}
          <div className="flex gap-6 sm:gap-8 lg:gap-10 justify-center lg:justify-start items-start order-3 lg:order-none lg:ml-14">
            <div className="text-center sm:text-left">
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
            
            <div className="text-center sm:text-left">
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

          {/* Right Section - CTA & Social */}
          <div className="flex items-center justify-center lg:justify-end lg:ml-auto space-x-3">
            <button
              onClick={() => handleNavClick('#demo')}
              className="btn-primary inline-flex items-center space-x-2 cursor-pointer"
            >
              <span>Request a Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://www.linkedin.com/company/stgi-tech/"
              aria-label="STGI on LinkedIn"
              className="w-11 h-11 rounded-full bg-dark-800 border border-dark-700 hover:border-accent-lime/50 flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5 text-accent-lime" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-gray-500 text-sm text-center md:text-left space-y-2 md:space-y-0">
          <p>© {new Date().getFullYear()} STGI. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
