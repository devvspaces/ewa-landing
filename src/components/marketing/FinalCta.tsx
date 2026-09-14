import { Eyebrow } from "./Eyebrow";
import { WaitlistCapture } from "./WaitlistCapture";

export function FinalCta() {
  return (
    <section id="waitlist" className="py-24 text-center">
      <div className="mx-auto max-w-[1080px] px-6">
        <Eyebrow>Making Beauty Convenient</Eyebrow>
        <h2 className="mx-auto my-4 max-w-[18ch] font-display text-[32px] font-medium leading-[1.12] tracking-[-.01em] text-midnight min-[861px]:text-[50px]">
          Be first when we open in NYC in 2026.
        </h2>
        <p className="mb-8 text-[17px] text-midnight/60">
          Join the waitlist — as a client, a pro, or both.
        </p>
        <WaitlistCapture idPrefix="final" thanksMessage="All set. See you in New York." centered prominent pulse={false} />
      </div>
    </section>
  );
}
