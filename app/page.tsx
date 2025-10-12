import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { EwaBizSection } from "@/components/ewa-biz-section"
import { EwaAppSection } from "@/components/ewa-app-section"
import { AppFeatures } from "@/components/app-features"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <EwaBizSection />
      <EwaAppSection />
      <AppFeatures />
      <Testimonials />
      <FaqSection />
      <Footer />
    </main>
  )
}
