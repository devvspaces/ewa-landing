import { Eyebrow } from "./Eyebrow";

const feats = [
  {
    title: "We bring you the clients",
    body: "People across your city who want exactly what you do — you bring your craft to their homes, hotels, offices, and events.",
  },
  {
    title: "Total calendar control",
    body: "Open and close availability, drag bookings to new times, drop personal blocks anywhere. Reschedules go to your client for one-tap approval.",
  },
  {
    title: "On demand, scheduled, or both",
    body: "Go online for instant requests when you want the work. Switch to scheduled-only when you don't. You choose, day by day.",
  },
];

export function ProsFeatures() {
  return (
    <section className="py-[76px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="mb-12 max-w-[560px]">
          <Eyebrow>Built around how you actually work</Eyebrow>
          <h2 className="my-3.5 font-display text-[28px] font-medium leading-[1.15] tracking-[-.01em] text-creamy min-[861px]:text-[40px]">
            Your craft, your calendar, your rules.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[18px] min-[861px]:grid-cols-3">
          {feats.map((feat) => (
            <div
              key={feat.title}
              className="rounded-[20px] border border-creamy/10 bg-midnight-2 px-6 py-7"
            >
              <span className="mb-4 block size-2.5 rounded-full bg-orange" />
              <h3 className="mb-2 text-[17px] font-semibold text-creamy">{feat.title}</h3>
              <p className="text-[14.5px] text-creamy/70">{feat.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
