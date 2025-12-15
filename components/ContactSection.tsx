import { Mail, MapPin, Shield } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-dark-800/60 border-t border-dark-700">
      <div className="container-custom grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact STGI</h2>
          <p className="text-gray-300">
            We’d love to discuss how our lending automation solutions can help your financial institution scale faster
            and operate more efficiently.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-200">
              <MapPin className="w-5 h-5 text-accent-lime" />
              <span>Office Address : Mechanicsburg + Panchkula Address</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-200">
              <Mail className="w-5 h-5 text-accent-lime" />
              <span>Email : STGIndia {'<'}stgindia@thesummitgrp.com{'>'}</span>
            </div>
          </div>
        </div>

        <div className="card bg-dark-900 border-accent-lime/30 space-y-4">
          <div className="flex items-center space-x-2 text-accent-lime">
            <Shield className="w-5 h-5" />
            <p className="text-sm uppercase tracking-[0.25em]">Controls & Disclosures</p>
          </div>
          <p className="text-gray-200">
            STGI is committed to maintaining the highest standards of data security, risk management, and regulatory
            compliance.
          </p>
          <p className="text-gray-400 text-sm">Controls & Disclosures - STGI</p>
        </div>
      </div>
    </section>
  )
}
