'use client'

import { useState } from 'react'
import { Mail, MapPin, ArrowRight } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section-padding bg-dark-800/60 border-t border-dark-700">
      <div className="container-custom grid lg:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold">Contact STGI</h2>
          <p className="text-gray-300">
            We'd love to discuss how our lending automation solutions can help your financial institution scale faster
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

        <div className="bg-[#2c4a6b] rounded-xl p-8 border border-gray-600/30">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name*"
                required
                className="w-full bg-white text-gray-800 px-4 py-3 rounded border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*"
                required
                className="w-full bg-white text-gray-800 px-4 py-3 rounded border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (xxx-xxx-xxxx)*"
                required
                className="w-full bg-white text-gray-800 px-4 py-3 rounded border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message*"
                required
                rows={5}
                className="w-full bg-white text-gray-800 px-4 py-3 rounded border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500 resize-y"
              />
            </div>

            {/* Required note and Submit */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-gray-300 text-sm">*Required</p>
              <button
                type="submit"
                className="inline-flex items-center bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-accent-lime hover:scale-105"
              >
                SUBMIT
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
