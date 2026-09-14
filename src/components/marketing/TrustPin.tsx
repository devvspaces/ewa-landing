import { Eyebrow } from "./Eyebrow";

export function TrustPin() {
  return (
    <section className="pb-[84px]">
      <div className="mx-auto max-w-[1080px] px-6">
        <div className="grid grid-cols-1 items-center gap-9 rounded-[28px] bg-creamy p-8 min-[861px]:grid-cols-[1fr_auto] min-[861px]:p-11">
          <div>
            <Eyebrow>Built on trust</Eyebrow>
            <h3 className="my-2.5 font-display text-2xl font-medium leading-[1.2] text-midnight min-[861px]:text-[30px]">
              A stranger at your door? Never.
            </h3>
            <p className="max-w-[52ch] text-base text-midnight/60">
              Every professional is identity-verified before their first booking, and every
              appointment starts with a one-time PIN handshake — so you always know the right person
              arrived, and they know they're in the right place.
            </p>
          </div>
          <div
            className="rounded-[20px] bg-white px-7 py-[22px] text-center shadow-[0_14px_34px_-20px_rgba(6,28,39,.3)]"
            aria-hidden="true"
          >
            <small className="mb-1.5 block text-[11px] font-bold tracking-[.14em] text-midnight/40">
              ARRIVAL PIN
            </small>
            <strong className="font-display text-[34px] font-medium tracking-[.18em] text-midnight">
              2196
            </strong>
            <em className="mt-1.5 block text-[12.5px] not-italic text-midnight/60">
              Share when your pro arrives
            </em>
          </div>
        </div>
      </div>
    </section>
  );
}
