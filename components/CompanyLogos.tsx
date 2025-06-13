'use client'

import { useEffect, useState } from 'react'

export default function CompanyLogos() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const companies = [
    { name: 'PayPal', logo: 'PayPal' },
    { name: 'Webflow', logo: 'webflow' },
    { name: 'Google', logo: 'Google' },
    { name: 'Amazon', logo: 'amazon' },
    { name: 'Adobe', logo: 'Aa' }
  ]

  if (!mounted) {
    return <div className="h-32 bg-accent-lime" />
  }

  return (
    <section className="bg-accent-lime py-16">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-black font-bold text-2xl md:text-3xl opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                {company.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 