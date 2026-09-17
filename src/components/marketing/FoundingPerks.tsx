import { Eyebrow } from "./Eyebrow";

const perks = [
  {
    n: "01",
    title: "Priority placement in your neighborhood",
    body: "Founding pros rank first in their area at launch — early bookings and early reviews compound.",
  },
  {
    n: "02",
    title: "Zero Ewà fees on your first 10 bookings",
    body: "Keep everything you earn while you get established on the platform.",
  },
  {
    n: "03",
    title: "A direct line to the team",
    body: "Early access to the app and real input on the features you'll rely on.",
  },
];

export function FoundingPerks() {
  return (
    <section className="pb-[76px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 items-center gap-11 rounded-[28px] bg-creamy p-8 text-midnight min-[861px]:grid-cols-2 min-[861px]:p-11">
          <div>
            <Eyebrow>The founding class</Eyebrow>
            <h2 className="my-3 font-display text-[26px] font-medium leading-[1.15] text-midnight min-[861px]:text-[36px]">
              Why join before launch?
            </h2>
            <p className="text-[15.5px] text-midnight/60">
              The first pros in each neighborhood shape the platform — and keep the advantages that
              come with being first.
            </p>
          </div>
          <div className="grid gap-3.5">
            {perks.map((perk) => (
              <div
                key={perk.n}
                className="flex items-start gap-3.5 rounded-2xl bg-white px-[18px] py-4"
              >
                <span className="mt-px shrink-0 font-display text-base font-medium text-orange">
                  {perk.n}
                </span>
                <div>
                  <b className="block text-[15px] font-semibold text-midnight">{perk.title}</b>
                  <span className="text-[13.5px] leading-[1.5] text-midnight/60">{perk.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
