import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/marketing/Nav";
import { Footer } from "../components/marketing/Footer";
import { Hero } from "../components/marketing/Hero";
import { TwoWaysToBook } from "../components/marketing/TwoWaysToBook";
import { HowItWorks } from "../components/marketing/HowItWorks";
import { TrustPin } from "../components/marketing/TrustPin";
import { ProsBand } from "../components/marketing/ProsBand";
import { FinalCta } from "../components/marketing/FinalCta";
import { MobileStickyCta } from "../components/marketing/MobileStickyCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ewà — Making Beauty Convenient" },
      {
        name: "description",
        content:
          "Vetted barbers, stylists, braiders and nail techs who come to you — on demand or scheduled. Launching in New York City in 2026.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-paper text-midnight">
      <Nav variant="landing" />
      <main>
        <Hero />
        <TwoWaysToBook />
        <HowItWorks />
        <TrustPin />
        <ProsBand />
        <FinalCta />
      </main>
      <Footer variant="landing" />
      <MobileStickyCta />
    </div>
  );
}
