import { useState } from "react";
import {
  MapPin,
  BadgeCheck,
  CreditCard,
  Clock,
  Bell,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

type Mode = "now" | "later";

const rows: Record<
  Mode,
  {
    title: string;
    body: string;
    items: { icon: LucideIcon; title: string; body: string }[];
  }
> = {
  now: {
    title: "Need it today? Book now.",
    body: "Request a pro on demand and get matched with someone vetted, nearby, and ready to work.",
    items: [
      {
        icon: MapPin,
        title: "They come to you",
        body: "Home, hotel, office, event — you set the location.",
      },
      {
        icon: BadgeCheck,
        title: "Vetted before they arrive",
        body: "Every pro is verified before they take a single booking.",
      },
      {
        icon: CreditCard,
        title: "Price locked upfront",
        body: "See the full cost before you confirm. No surprises after.",
      },
    ],
  },
  later: {
    title: "Planning ahead? Schedule it.",
    body: "Pick your pro, pick your time, and lock it in — days or weeks in advance.",
    items: [
      {
        icon: Clock,
        title: "Your schedule, not theirs",
        body: "Book the slot that fits your week, not a shop's hours.",
      },
      {
        icon: Bell,
        title: "Reminders handled",
        body: "Confirmations and arrival updates, so nothing slips.",
      },
      {
        icon: RefreshCw,
        title: "Easy to reschedule",
        body: "Life moves. Move your appointment with it.",
      },
    ],
  },
};

export function ModeToggle() {
  const [mode, setMode] = useState<Mode>("now");
  const panel = rows[mode];

  return (
    <div
      className="rounded-[28px] bg-creamy p-7 shadow-[0_24px_60px_-30px_rgba(6,28,39,.28)]"
      aria-label="Two ways to book"
    >
      <div
        className="mb-6 flex rounded-full bg-midnight/[.07] p-1"
        role="tablist"
        aria-label="Booking modes"
      >
        <button
          role="tab"
          aria-selected={mode === "now"}
          id="tab-now"
          onClick={() => setMode("now")}
          className={
            mode === "now"
              ? "flex-1 rounded-full bg-midnight px-2.5 py-3 text-sm font-bold whitespace-nowrap text-creamy transition-colors"
              : "flex-1 rounded-full bg-transparent px-2.5 py-3 text-sm font-bold whitespace-nowrap text-midnight/60 transition-colors"
          }
        >
          On demand
        </button>
        <button
          role="tab"
          aria-selected={mode === "later"}
          id="tab-later"
          onClick={() => setMode("later")}
          className={
            mode === "later"
              ? "flex-1 rounded-full bg-midnight px-2.5 py-3 text-sm font-bold whitespace-nowrap text-creamy transition-colors"
              : "flex-1 rounded-full bg-transparent px-2.5 py-3 text-sm font-bold whitespace-nowrap text-midnight/60 transition-colors"
          }
        >
          Scheduled
        </button>
      </div>

      <div
        key={mode}
        role="tabpanel"
        aria-labelledby={mode === "now" ? "tab-now" : "tab-later"}
        className="animate-fade-up"
      >
        <h3 className="mb-2 font-display text-2xl font-medium text-midnight">{panel.title}</h3>
        <p className="mb-5 text-[15px] text-midnight/60">{panel.body}</p>
        <div className="grid gap-2.5">
          {panel.items.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5"
            >
              <span className="flex size-[38px] shrink-0 items-center justify-center rounded-xl bg-orange/[.14]">
                <item.icon size={18} className="text-orange" />
              </span>
              <div>
                <b className="block text-[14.5px] font-semibold text-midnight">{item.title}</b>
                <span className="block text-[13px] leading-[1.45] text-midnight/60">
                  {item.body}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
