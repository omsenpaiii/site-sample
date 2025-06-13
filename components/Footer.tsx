'use client'

import { useState, useEffect } from 'react'
import { Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock newsletter subscription - frontend only
    alert('Thank you for subscribing! (This is a demo)')
    setEmail('')
  }

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Pricing', href: '#' }
  ]

  const resourceLinks = [
    { name: 'Templates', href: '#' },
    { name: 'Tutorials', href: '#' },
    { name: 'Free resources', href: '#' },
    { name: 'Contract templates', href: '#' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Github', icon: Github, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Website', icon: ExternalLink, href: '#' }
  ]

  if (!mounted) {
    return <div className="h-96 bg-dark-900" />
  }

  return (
    <footer id="contact" className="bg-dark-900 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-lime to-accent-green rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">FX</span>
              </div>
              <span className="text-xl font-bold text-white">FinanceX</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-dark-700 hover:bg-accent-lime rounded-lg flex items-center justify-center transition-colors group cursor-pointer"
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-lime transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-accent-lime transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Join Our Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-lime transition-colors cursor-text"
              />
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-sm">
              * Will send you weekly updates for your better finance management.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 pt-8">
          <div className="text-center text-gray-400">
            <p>Copyright © Kartik Bansal 2022. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 