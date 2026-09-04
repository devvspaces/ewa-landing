"use client"

import * as React from "react"

const STEPS = [
  {
    number: "01",
    title: "Tell us what and where",
    description:
      "Choose your service and drop your location — anywhere in the five boroughs.",
  },
  {
    number: "02",
    title: "Choose now or later",
    description:
      "Request a pro on-demand or schedule an appointment that fits your week.",
  },
  {
    number: "03",
    title: "Open the door, get the look",
    description:
      "A vetted pro arrives at your door with everything needed. Sit back and relax in your space.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-left mb-10 sm:mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF5C28] uppercase mb-2.5">
          How It Works
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1626] mb-3">
          Beauty, delivered in three steps.
        </h2>
        <p className="text-sm sm:text-base text-[#556070]">
          No chairs, no waiting rooms, no travel. Available in three steps:
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8E1D7] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#FF5C28]/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <span className="inline-block font-semibold text-sm sm:text-base text-[#FF5C28] mb-4 sm:mb-5">
                {step.number}
              </span>
              <h3 className="font-bold text-[#0A1626] text-sm sm:text-base mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

