import { Eyebrow } from "./Eyebrow";

const steps = [
  {
    num: "01",
    title: "Tell us what and where",
    body: "Choose your service and drop your location — anywhere in the city works.",
  },
  {
    num: "02",
    title: "Choose now or later",
    body: "Request a pro on demand, or schedule a time that fits your week.",
  },
  {
    num: "03",
    title: "Open the door, get the look",
    body: "A vetted professional arrives with everything needed. You just show up as yourself.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-[84px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-[52px] max-w-[560px]">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="my-3.5 font-display text-[30px] font-medium leading-[1.15] tracking-[-.01em] text-midnight min-[861px]:text-[42px]">
            Beauty, delivered in three steps.
          </h2>
          <p className="text-[17px] text-midnight/60">
            No chairs, no waiting rooms, no &quot;next available is in three weeks.&quot;
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 min-[861px]:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[20px] border border-midnight/[.08] bg-white px-[26px] py-[30px]"
            >
              <div className="mb-3.5 font-display text-xl font-medium text-orange">{step.num}</div>
              <h3 className="mb-2 text-lg font-semibold text-midnight">{step.title}</h3>
              <p className="text-[15px] text-midnight/60">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
