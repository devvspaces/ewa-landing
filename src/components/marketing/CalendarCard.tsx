export function CalendarCard() {
  return (
    <div
      className="rounded-3xl border border-creamy/[.14] bg-creamy/[.06] p-6"
      aria-label="Calendar flexibility illustration"
    >
      <div className="mb-[18px] flex items-baseline justify-between">
        <b className="text-[15px] font-semibold text-creamy">Your week</b>
        <span className="text-[13px] text-creamy/45">Drag to reschedule</span>
      </div>

      <div className="mb-[9px] flex items-center justify-between rounded-2xl border border-orange/35 bg-creamy/[.08] px-4 py-[13px] text-sm text-creamy">
        <span className="text-[13px] text-creamy/45">10:30 AM</span> Silk press{" "}
        <span className="text-[13px] text-creamy/45">90 min</span>
      </div>
      <div className="mb-[9px] flex items-center justify-between rounded-2xl border border-dashed border-orange/35 bg-orange/10 px-4 py-[13px] text-sm text-orange">
        <span className="text-[13px] text-orange">1:00 PM – 3:00 PM</span> Knotless braids{" "}
        <span className="text-[13px] text-orange">moving…</span>
      </div>
      <div className="flex items-center justify-between rounded-2xl border border-orange/35 bg-creamy/[.08] px-4 py-[13px] text-sm text-creamy">
        <span className="text-[13px] text-creamy/45">5:30 PM</span> Retwist{" "}
        <span className="text-[13px] text-creamy/45">60 min</span>
      </div>

      <div className="mt-[14px] text-center text-[12.5px] text-creamy/45">
        Clients approve the change with one tap.
      </div>
    </div>
  );
}
