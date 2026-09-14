import { Eyebrow } from "./Eyebrow";
import { CalendarCard } from "./CalendarCard";

export function ProsHero() {
  return (
    <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-14 px-6 py-14 text-left min-[861px]:grid-cols-[1.05fr_.95fr] min-[861px]:py-16">
      <div>
        <Eyebrow>For beauty professionals · New York City</Eyebrow>
        <h1 className="my-[18px] font-display text-[38px] font-medium leading-[1.1] tracking-[-.01em] text-creamy min-[861px]:text-[58px]">
          You're the talent.
          <br />
          We bring the <em className="text-orange italic">clients</em>.
        </h1>
        <p className="mb-[30px] max-w-[46ch] text-lg text-creamy/70">
          Ewà Biz is your mobile storefront — clients across NYC who want home service, a calendar
          you fully control, and payouts you can count on. No chair rent. No shop split.
        </p>
        <a
          href="#apply"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-[26px] py-3.5 text-[15px] font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98]"
        >
          Apply to be a founding pro
        </a>
      </div>

      <CalendarCard />
    </div>
  );
}
