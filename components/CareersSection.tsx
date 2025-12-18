'use client'

import { ArrowRight, Briefcase, X } from 'lucide-react'
import type { FormEvent } from 'react'
import { useEffect, useId, useRef, useState } from 'react'

const reasons = [
  'Build next-generation Fintech products & platforms.',
  'Work closely with domain experts in credit, fraud, and underwriting.',
  'Grow fast in an entrepreneurial, ownership-driven environment.',
  'Solve meaningful problems that impact millions of users of the platforms.',
  'Enjoy a flexible, trust-based, high-performance culture.',
]

export default function CareersSection() {
  const [isApplyOpen, setIsApplyOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const modalTitleId = useId()
  const initialFocusRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!isApplyOpen) return

    setIsSubmitted(false)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsApplyOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    initialFocusRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isApplyOpen])

  const onSubmitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const contactNumber = String(formData.get('contactNumber') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()

    const to = 'stgi.hirings@thesummitgrp.com'
    const subject = encodeURIComponent(`STGI Careers Application - ${name || 'New Candidate'}`)
    const body = encodeURIComponent(
      [
        'STGI Careers Application',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Contact Number: ${contactNumber}`,
        '',
        'Message:',
        message,
        '',
        'Note: Please attach your CV/Resume to this email before sending.',
      ].join('\n'),
    )

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    setIsSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section id="careers" className="section-padding bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-5" />
      <div className="container-custom relative z-10">
        <div className="flex items-center space-x-3 text-accent-lime mb-4">
          <Briefcase className="w-5 h-5" />
          <p className="text-sm uppercase tracking-[0.25em]">Join Our Team - STGI</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Careers at STGI</h2>
            <p className="text-gray-300 leading-relaxed">
              Join a fast-growing financial technology engineering team transforming how banks and institutions manage
              lending operations. At STGI, you’ll work on AI-driven underwriting solutions, lending automation platforms,
              cloud-native systems, and mission-critical workflows.
            </p>
          </div>
          <div className="card bg-dark-800/80 border-accent-lime/40 space-y-4 transition-none hover:bg-dark-800/80 hover:border-accent-lime/40">
            <p className="text-lg font-semibold text-accent-lime">Why Work at STGI?</p>
            <ul className="space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start space-x-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent-lime" />
                  <p className="text-gray-200">{reason}</p>
                </li>
              ))}
            </ul>
            <button
              className="relative inline-flex w-full items-center justify-center rounded-lg bg-accent-lime px-6 py-3 font-semibold text-black cursor-pointer overflow-hidden group"
              type="button"
              onClick={() => setIsApplyOpen(true)}
            >
              <span className="relative z-10">Apply Here</span>
              <ArrowRight className="relative z-10 w-4 h-4 ml-2" />
              <span className="absolute inset-0 bg-accent-green transform -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
            <p className="text-xs text-gray-400">
              If you love solving real financial challenges with modern technology, STGI is the place for you.
            </p>
          </div>
        </div>
      </div>

      {isApplyOpen ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={modalTitleId}
        >
          <button
            type="button"
            aria-label="Close application form"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsApplyOpen(false)}
          />

          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
            <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-6 py-5">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-lime">STGI Careers</p>
                <h3 id={modalTitleId} className="text-xl md:text-2xl font-bold text-gray-900">
                  Apply Here
                </h3>
                <p className="text-sm text-gray-600">Submit your details and we’ll reach out if there’s a fit.</p>
              </div>
              <button
                type="button"
                onClick={() => setIsApplyOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-lime"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={onSubmitApplication} className="px-6 py-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label className="mb-1 block text-sm font-semibold text-gray-900" htmlFor="careers-name">
                    Name
                  </label>
                  <input
                    ref={initialFocusRef}
                    id="careers-name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-accent-lime"
                  />
                </div>

                <div className="md:col-span-1">
                  <label className="mb-1 block text-sm font-semibold text-gray-900" htmlFor="careers-email">
                    Email
                  </label>
                  <input
                    id="careers-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-accent-lime"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold text-gray-900" htmlFor="careers-contactNumber">
                    Contact Number
                  </label>
                  <input
                    id="careers-contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-accent-lime"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold text-gray-900" htmlFor="careers-message">
                    Message
                  </label>
                  <textarea
                    id="careers-message"
                    name="message"
                    required
                    placeholder="Tell us what you’re looking for and any relevant experience."
                    className="min-h-[140px] w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-accent-lime"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-1 block text-sm font-semibold text-gray-900" htmlFor="careers-cv">
                    CV – Document Upload
                  </label>
                  <input
                    id="careers-cv"
                    name="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-accent-lime file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-accent-green focus:outline-none focus:ring-2 focus:ring-accent-lime focus:border-accent-lime"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    For now, this opens an email draft — please attach your CV/Resume in your email client before sending.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">
                  Sends to <span className="font-semibold text-gray-700">stgi.hirings@thesummitgrp.com</span>
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="btn-secondary rounded-full px-6 py-2.5 text-sm"
                    onClick={() => setIsApplyOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center space-x-2 bg-[#f7931e] text-black font-semibold px-6 py-2.5 rounded-full text-sm transition-all duration-500 hover:text-white hover:scale-105 active:scale-95 cursor-pointer relative overflow-hidden group shadow-lg"
                  >
                    <span className="relative z-10">Continue to Email</span>
                    <ArrowRight className="w-4 h-4 relative z-10 ml-2" />
                    <span className="absolute -inset-5 bg-[#1e3a5f] rounded-full transform -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </button>
                </div>
              </div>

              {isSubmitted ? (
                <div className="mt-4 rounded-lg border border-accent-lime/40 bg-[#f4fff0] px-4 py-3 text-sm text-gray-800">
                  Email draft opened. Attach your CV/Resume and send to complete your application.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      ) : null}
    </section>
  )
}
