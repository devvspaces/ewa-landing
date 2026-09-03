"use client"

import * as React from "react"

export function TrustSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-[#F5ECE5] border border-[#E9DFD4] rounded-3xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Column */}
        <div className="flex-1 text-left">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF5C28] uppercase mb-2.5">
            Built On Trust
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0A1626] mb-3 sm:mb-4 leading-tight">
            A stranger at your door? Never.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#556070] leading-relaxed max-w-2xl">
            Every professional is heavily vetted before their first booking, and every appointment starts with a one-time ID verification — so you always know the right person arrived, and they know they're in the right place.
          </p>
        </div>

        {/* Right Column: Waitlist Stat Card */}
        <div className="w-full md:w-auto shrink-0 flex justify-center md:justify-end">
          <div className="bg-white rounded-2xl border border-[#EDE5DC] px-8 sm:px-10 py-6 sm:py-7 text-center shadow-[0_2px_8px_rgba(0,0,0,0.03)] min-w-[200px] sm:min-w-[220px]">
            <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">
              Join list of
            </p>
            <p className="text-4xl sm:text-5xl font-serif font-bold text-[#0A1626] tracking-tight mb-1">
              2196
            </p>
            <p className="text-[11px] sm:text-xs text-[#64748B] font-medium">
              Pros and clients on waitlist
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

