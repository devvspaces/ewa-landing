"use client"

import * as React from "react"
import { EmailWaitlistForm } from "./email-waitlist-form"

export function BottomCta() {
  return (
    <section id="waitlist" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF5C28] uppercase mb-3">
        Making Beauty Convenient
      </p>
      <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1626] mb-3 leading-tight">
        Be first when we open in NYC in 2026.
      </h2>
      <p className="text-sm sm:text-base text-[#556070] mb-8">
        Join the waitlist — as a client, a pro, or both.
      </p>

      <div className="w-full max-w-lg mx-auto">
        <EmailWaitlistForm buttonText="Get on the list" id="bottom-waitlist" />
      </div>
    </section>
  )
}

