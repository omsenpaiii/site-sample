'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Technology', href: '#tech' },
    { name: 'About Us', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      const headerHeight = 70
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      
      // Position section just below the header with minimal offset
      // No offset for contact section
      const offsetPosition = href === '#contact' 
        ? elementPosition - headerHeight - 30
        : elementPosition - headerHeight + 60
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-dark-700' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-3">
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none focus-visible:outline-none"
          >
            <div className="relative w-40 h-20">
              <Image
                src="/assets/logos/logo3.png"
                alt="STGI Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="relative text-base uppercase tracking-wide text-gray-300 hover:text-accent-lime group focus:outline-none focus-visible:outline-none"
              >
                {item.name}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-full mt-1 h-0 w-0 -translate-x-1/2 translate-y-1 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-[#f7931e] opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0"
                />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleNavClick('#demo')}
              className="hidden md:inline-flex items-center space-x-2 bg-[#f7931e] text-black font-semibold px-4 py-2 rounded-full text-sm transition-all duration-500 hover:text-white hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Request a Demo</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
              <span className="absolute -inset-5 bg-[#1e3a5f] rounded-full transform -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-dark-900/95 backdrop-blur-xl border-b border-dark-700">
            <div className="container-custom py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-200 hover:text-accent-lime py-2"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#demo')}
                className="w-full flex items-center justify-center space-x-2 btn-primary"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
