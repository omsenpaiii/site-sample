import {ArrowRight, Mail, MapPin } from 'lucide-react'


export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-dark-800/60 border-t border-dark-700">
      <div className="container-custom grid lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.25em] text-accent-lime">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
          <p className="text-gray-300 text-lg">
            We'd love to discuss how our lending solutions can help your financial institution scale faster and operate more efficiently.
          </p>
          <div className="space-y-4 mt-8">
            {/* Offices Card */}
            <div className="bg-dark-700/50 rounded-xl p-5 border border-dark-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-lime mt-1 flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <p className="font-bold text-white text-base">Our Offices:</p>
                  <div className="space-y-3 border-t border-dark-600 pt-3">
                    <div className="pb-3 border-b border-dark-600">
                      <p className="text-sm font-semibold text-white mb-0.5">USA :</p>
                      <p className="text-sm text-gray-300">5050 Ritter Road, Mechanicsburg, Pennsylvania, USA – 17055</p>
                    </div>
                    <div className="pb-3 border-b border-dark-600">
                      <p className="text-sm font-semibold text-white mb-0.5">India :</p>
                      <p className="text-sm text-gray-300">STGi Technologies Consulting, Seventh Floor Plot No. 16, IT Park Sector-22, NA, Panchkula, Haryana 134109, India</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-0.5">Canada :</p>
                      <p className="text-sm text-gray-300">STGC Technologies Consulting, 100 Kellog's Road, London, Ontario, Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-dark-700/50 rounded-xl p-5 border border-dark-600">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-lime mt-1 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white text-base mb-1.5">Email :</p>
                  <p className="text-sm text-gray-300">STGIndia {'<'}stgindia@thesummitgrp.com{'>'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-[#2c5f7c] to-[#1e3a5f] rounded-2xl p-8 border border-[#3d6f8f] shadow-xl h-full flex flex-col">
          <form className="space-y-6 flex-1 flex flex-col">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                required
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-[#1e3a5f] placeholder:text-gray-500 font-medium"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-[#1e3a5f] placeholder:text-gray-500 font-medium"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone (xxx-xxx-xxxx)*"
                required
                className="w-full bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-[#1e3a5f] placeholder:text-gray-500 font-medium"
              />
            </div>

            {/* Message */}
            <div className="flex-1">
              <textarea
                name="message"
                placeholder="Message*"
                required
                className="w-full h-full min-h-[200px] bg-white text-dark-900 px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-[#1e3a5f] placeholder:text-gray-500 font-medium resize-none"
              />
            </div>

            {/* Required note and Submit */}
            <div className="flex items-center justify-between pt-2">
              <p className="text-gray-300 text-sm">*Required</p>
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
