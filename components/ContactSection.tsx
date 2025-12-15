import {ArrowRight, Mail, MapPin } from 'lucide-react'


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
            <div className="flex items-start space-x-3 text-gray-200">
              <MapPin className="w-5 h-5 text-accent-lime mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <p className="font-semibold text-white">Our Offices:</p>
                <p className="text-sm">5050 Ritter Rd Suite B, Mechanicsburg, PA 17055</p>
                <p className="text-sm">Socomo Technologies Building, Sector 22, Budanpur, Haryana 134116</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-200">
              <Mail className="w-5 h-5 text-accent-lime" />
              <span>Email : STGIndia {'<'}stgindia@thesummitgrp.com{'>'}</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-dark-600/80 rounded-2xl p-8 border border-dark-500">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500 font-medium"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500 font-medium"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (xxx-xxx-xxxx)*"
                required
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500 font-medium"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message*"
                required
                rows={6}
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-accent-lime placeholder:text-gray-500 font-medium resize-y"
              />
            </div>

            {/* Required note and Submit */}
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-sm">*Required</p>
              <button
                type="submit"
                className="inline-flex items-center space-x-2 bg-[#f7931e] text-black font-semibold px-8 py-3 rounded-full text-sm transition-all duration-500 hover:text-white hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden group shadow-lg"
              >
                <span className="relative z-10">Submit</span>
                <ArrowRight className="w-4 h-4 relative z-10" />
                <span className="absolute -inset-5 bg-[#1e3a5f] rounded-full transform -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
