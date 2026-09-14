import { Link } from "@tanstack/react-router";
import { Eyebrow } from "./Eyebrow";
import { CalendarCard } from "./CalendarCard";

const feats = [
  {
    title: "We bring you the clients",
    body: "People across your city who want exactly what you do — you bring your craft to their homes, hotels, offices, and events.",
  },
  {
    title: "Your calendar, your rules",
    body: "Open and close availability, drag bookings to new slots, add personal blocks. Flexibility is the whole point.",
  },
  {
    title: "Work on demand, scheduled, or both",
    body: "Go online for instant requests when you want them. Take scheduled bookings when you don't.",
  },
];

export function ProsBand() {
  return (
    <section id="pros" className="pb-[84px]">
      <div className="mx-4 rounded-[36px] bg-midnight min-[861px]:mx-3">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-10 px-6 py-[60px] min-[861px]:grid-cols-[1.05fr_.95fr] min-[861px]:px-10 min-[861px]:py-[84px]">
          <div>
            <Eyebrow>For beauty professionals</Eyebrow>
            <h2 className="my-4 font-display text-[30px] font-medium leading-[1.12] tracking-[-.01em] text-creamy min-[861px]:text-[44px]">
              You're the talent. We bring the clients.
            </h2>
            <p className="mb-7 max-w-[46ch] text-[17px] text-creamy/60">
              Ewà Biz is your mobile storefront — clients who want home service, a calendar you
              fully control, and payouts you can count on.
            </p>
            <div className="mb-8 grid gap-3.5">
              {feats.map((feat) => (
                <div key={feat.title} className="flex items-start gap-3.5">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-orange" />
                  <div>
                    <b className="text-[15.5px] font-semibold text-creamy">{feat.title}</b>
                    <span className="block text-[14.5px] leading-[1.55] text-creamy/60">
                      {feat.body}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/pros"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-[26px] py-3.5 text-[15px] font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98]"
            >
              Join as a founding pro
            </Link>
          </div>

          <CalendarCard />
        </div>
      </div>
    </section>
  );
}
