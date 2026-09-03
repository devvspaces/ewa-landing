"use client"

import * as React from "react"
import { Home as HomeIcon, ChevronDown, Sparkles } from "lucide-react"
import { EmailWaitlistForm } from "./email-waitlist-form"

const SERVICE_TAGS = [
  "Braids",
  "Haircuts",
  "Silk Press",
  "Color",
  "Nails",
  "Makeup",
]

export function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center flex flex-col items-center">
      {/* Top Launch Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF5C28]/10 text-[#FF5C28] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <span>Launching in New York City • 2026</span>
      </div>

      {/* Main Serif Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#0A1626] max-w-3xl leading-[1.1] mb-6">
        Book your next look <span className="text-[#0A1626]">.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-[#556070] max-w-xl mx-auto mb-8 sm:mb-10 font-normal leading-relaxed">
        EWÁ connects you with vetted beauty professionals who come to you — no salon, no commute, no wait times.
      </p>

      {/* Email Form */}
      <div className="w-full max-w-lg mb-3">
        <EmailWaitlistForm buttonText="Get on the list" id="hero-waitlist" />
      </div>

      {/* Privacy Guarantee */}
      <p className="text-xs text-[#8C95A6] mb-12 sm:mb-14">
        We respect your privacy. No spam ever. Unsubscribe at any time.
      </p>

      {/* Visual Journey Capsule */}
      <div className="w-full max-w-md sm:max-w-xl bg-white/95 backdrop-blur-sm rounded-full border border-[#E8E2D9] px-4 sm:px-7 py-3 sm:py-3.5 shadow-sm mb-6 sm:mb-8">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          {/* Left item */}
          <div className="flex items-center gap-2.5 text-left">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
              AD
            </div>
            <div>
              <p className="font-semibold text-[#0F172A] text-xs sm:text-sm leading-tight">
                Arrive on time
              </p>
              <p className="text-[10px] sm:text-xs text-[#717C8E]">
                vetted beauty pro
              </p>
            </div>
          </div>

          {/* Dotted connecting line + Center house */}
          <div className="flex items-center gap-1 sm:gap-2 px-2 shrink-0">
            <div className="hidden sm:block w-8 border-b-2 border-dashed border-[#DCD3C7]" />
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF5C28]/15 border border-[#FF5C28]/30 flex items-center justify-center text-[#FF5C28] shadow-sm">
              <HomeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF5C28]" />
            </div>
            <div className="hidden sm:block w-8 border-b-2 border-dashed border-[#DCD3C7]" />
          </div>

          {/* Right item */}
          <div className="flex items-center gap-2.5 text-right sm:text-left">
            <div className="hidden xs:block text-right">
              <p className="font-semibold text-[#0F172A] text-xs sm:text-sm leading-tight">
                You relax
              </p>
              <p className="text-[10px] sm:text-xs text-[#717C8E]">
                salon-quality style
              </p>
            </div>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E8F0FE] text-[#1E40AF] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
            </div>
          </div>
        </div>
      </div>

      {/* Category Tag Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-xl mx-auto mb-12 sm:mb-16">
        {SERVICE_TAGS.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full bg-white border border-[#E5DFD7] text-[#475569] text-xs sm:text-sm font-medium hover:border-[#FF5C28] hover:text-[#FF5C28] transition-colors cursor-default shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#how-to-book"
        aria-label="Scroll to how to book"
        className="inline-flex items-center justify-center text-gray-400 hover:text-[#FF5C28] transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  )
}

