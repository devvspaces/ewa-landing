"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/landing/hero"
import { HowToBook } from "@/components/landing/how-to-book"
import { HowItWorks } from "@/components/landing/how-it-works"
import { TrustSection } from "@/components/landing/trust-section"
import { ProsSection } from "@/components/landing/pros-section"
import { BottomCta } from "@/components/landing/bottom-cta"
import { Footer } from "@/components/footer"
import { ProWaitlistModal } from "@/components/landing/pro-waitlist-modal"

export default function Home() {
  const [isProModalOpen, setIsProModalOpen] = React.useState(false)

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#0A1626] selection:bg-[#FF5C28]/20 selection:text-[#FF5C28]">
      <Navbar />
      <Hero />
      <HowToBook />
      <HowItWorks />
      <TrustSection />
      <ProsSection onOpenProModal={() => setIsProModalOpen(true)} />
      <BottomCta />
      <Footer />
      <ProWaitlistModal open={isProModalOpen} onOpenChange={setIsProModalOpen} />
    </main>
  )
}
