import { Eyebrow } from "./Eyebrow";
import { ModeToggle } from "./ModeToggle";

export function TwoWaysToBook() {
  return (
    <section id="two-ways" className="bg-creamy/40 py-[110px]">
      <div className="mx-auto max-w-[1080px] px-6 text-center">
        <Eyebrow>How you book</Eyebrow>
        <h2 className="mx-auto my-4 max-w-[16ch] font-display text-[36px] font-medium leading-[1.08] tracking-[-.01em] text-midnight min-[861px]:text-[54px]">
          Two ways to book.
        </h2>
        <p className="mx-auto mb-12 max-w-[52ch] text-[17px] text-midnight/60">
          Need it today, or planning for next week? Ewà works either way.
        </p>
        <div className="mx-auto max-w-[560px] text-left">
          <ModeToggle />
        </div>
      </div>
    </section>
  );
}
