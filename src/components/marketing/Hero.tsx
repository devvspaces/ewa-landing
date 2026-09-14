import { Atmosphere } from "./Atmosphere";
import { ConnectionStrip, ServiceChips } from "./ConnectionStrip";
import { Eyebrow } from "./Eyebrow";
import { ScrollCue } from "./ScrollCue";
import { WaitlistCapture } from "./WaitlistCapture";

export function Hero() {
  return (
    <section
      className="relative flex flex-col px-6 py-16 overflow-hidden"
      style={{ minHeight: "92vh" }}
    >
      <Atmosphere />

      {/* Spacer to center content at ~45% of viewport height */}
      <div aria-hidden style={{ flex: "0.9 1 0" }} />

      <div className="relative mx-auto w-full max-w-[860px] text-center">
        <Eyebrow>Launching in New York City · 2026</Eyebrow>
        <h1
          className="mx-auto my-6 font-display font-medium leading-[1.02] tracking-[-.015em] text-midnight"
          style={{ fontSize: "clamp(48px, 7vw, 84px)" }}
        >
          Book your next{" "}
          <span className="relative inline-block whitespace-nowrap">
            look
            <span className="absolute inset-x-0 bottom-[.02em] h-1 origin-left animate-draw rounded-sm bg-orange" />
          </span>
          .
        </h1>
        <p className="mx-auto mb-8 max-w-[480px] text-lg text-midnight/60">
          Ewà connects you with vetted beauty professionals who come to you —{" "}
          <b className="font-semibold text-midnight">no salon, no shop, no commute.</b>
        </p>

        <div id="hero-waitlist" className="flex justify-center">
          <WaitlistCapture
            idPrefix="hero"
            thanksMessage="All set. We'll be in touch before doors open in NYC."
            prominent
            centered
          />
        </div>

        <p className="mt-4 text-[13px] text-midnight/40">
          Free to join · <b className="font-semibold text-midnight/60">Vetted professionals</b> ·
          Clear pricing, no surprises
        </p>
        <p className="mt-[10px] text-center text-[13px] text-midnight/55">
          Are you a beauty pro?{" "}
          <a
            href="/pros"
            className="font-semibold text-orange hover:underline"
            style={{ color: "#FF823F" }}
          >
            Join as a founding pro →
          </a>
        </p>

        <ConnectionStrip />
        <ServiceChips />
      </div>

      <div aria-hidden style={{ flex: "1.1 1 0" }} />

      <ScrollCue targetId="two-ways" />
    </section>
  );
}
