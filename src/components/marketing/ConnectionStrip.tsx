// Hero connection strip: pro → customer handoff visualization.
// Decorative; aria-hidden. Transforms-only animation; static under prefers-reduced-motion.
import { Logomark } from "./Nav";



function LaneDashed({ vertical = false, laneIndex }: { vertical?: boolean; laneIndex: 1 | 2 }) {
  const color = "rgba(255,130,63,.5)";
  const trailCls = vertical
    ? `ewa-trail-v-${laneIndex}`
    : `ewa-trail-h-${laneIndex}`;
  return (
    <div
      aria-hidden
      className="relative"
      style={{
        flex: vertical ? "none" : "1 1 0",
        height: vertical ? 42 : 2.5,
        width: vertical ? 2.5 : "auto",
        alignSelf: "center",
        backgroundImage: vertical
          ? `linear-gradient(to bottom, ${color} 50%, transparent 0)`
          : `linear-gradient(to right, ${color} 50%, transparent 0)`,
        backgroundSize: vertical ? "2.5px 8px" : "8px 2.5px",
        backgroundRepeat: vertical ? "repeat-y" : "repeat-x",
      }}
    >
      {/* Glowing trail overlay */}
      <span
        aria-hidden
        className={trailCls}
        style={{
          position: "absolute",
          background: "#FF823F",
          boxShadow: "0 0 10px 2px rgba(255,130,63,0.75)",
          borderRadius: 999,
          pointerEvents: "none",
          ...(vertical
            ? {
                left: "50%",
                top: 0,
                width: 3,
                height: "100%",
                transform: "translateX(-50%) scaleY(0)",
                transformOrigin: "top center",
              }
            : {
                top: "50%",
                left: 0,
                width: "100%",
                height: 3,
                transform: "translateY(-50%) scaleX(0)",
                transformOrigin: "left center",
              }),
        }}
      />
      {/* chevron arrowheads pointing forward along the lane */}
      {[0.32, 0.72].map((t, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute"
          style={
            vertical
              ? {
                  left: "50%",
                  top: `${t * 100}%`,
                  transform: "translate(-50%, -50%) rotate(90deg)",
                }
              : {
                  top: "50%",
                  left: `${t * 100}%`,
                  transform: "translate(-50%, -50%)",
                }
          }
        >
          <svg width="9" height="9" viewBox="0 0 9 9" style={{ opacity: 0.8 }}>
            <path
              d="M2 1 L7 4.5 L2 8"
              fill="none"
              stroke="#FF823F"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

const cardCls =
  "flex items-center gap-3 rounded-[18px] bg-white shadow-[0_10px_28px_-16px_rgba(6,28,39,0.22)]";
const cardStyle: React.CSSProperties = {
  border: "1px solid rgba(6,28,39,0.09)",
  padding: "13px 16px",
};

function ProCard() {
  return (
    <div className={cardCls} style={cardStyle}>
      <div
        className="flex shrink-0 items-center justify-center rounded-full bg-midnight text-creamy"
        style={{ width: 38, height: 38, fontSize: 12, fontWeight: 600 }}
      >
        AO
      </div>
      <div className="text-left">
        <div className="font-semibold text-midnight" style={{ fontSize: 13.5, lineHeight: 1.15 }}>
          Amara, your pro
        </div>
        <div className="text-midnight/55" style={{ fontSize: 11.5, lineHeight: 1.2 }}>
          Vetted · Heading out
        </div>
      </div>
    </div>
  );
}

function YouCard() {
  return (
    <div className={`${cardCls} ewa-door-bloom`} style={cardStyle}>
      <div className="relative">
        <div
          className="flex shrink-0 items-center justify-center rounded-full"
          style={{
            width: 38,
            height: 38,
            fontSize: 12,
            fontWeight: 600,
            background: "#F0EBD8",
            color: "#7a4b2a",
          }}
        >
          You
        </div>
        {/* doorbell ping */}
        <span
          aria-hidden
          className="ewa-doorbell pointer-events-none absolute inset-0 rounded-full"
          style={{
            border: "2.5px solid #FF823F",
          }}
        />
      </div>
      <div className="text-left">
        <div className="font-semibold text-midnight" style={{ fontSize: 13.5, lineHeight: 1.15 }}>
          Your door
        </div>
        <div className="text-midnight/55" style={{ fontSize: 11.5, lineHeight: 1.2 }}>
          Home · hotel · office
        </div>
      </div>
    </div>
  );
}

function Traveler({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      aria-hidden
      className={vertical ? "ewa-traveler-v" : "ewa-traveler-h"}
      style={{
        position: "absolute",
        width: 22,
        height: 22,
        borderRadius: 999,
        background: "#061C27",
        color: "#F5EFE0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 8.5,
        fontWeight: 700,
        letterSpacing: "0.02em",
        boxShadow: "0 4px 10px -3px rgba(6,28,39,0.4)",
        top: vertical ? 0 : "50%",
        left: vertical ? "50%" : 0,
        willChange: "transform, opacity",
      }}
    >
      AO
    </div>
  );
}

export function ConnectionStrip() {
  return (
    <div aria-hidden className="mx-auto mt-[34px]">
      {/* Desktop horizontal layout */}
      <div
        className="relative mx-auto hidden min-[861px]:flex items-center"
        style={{ width: "min(620px, 100%)", gap: 0 }}
      >
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <ProCard />
        </div>
        <div className="mx-2 flex items-center" style={{ width: 60 }}>
          <LaneDashed laneIndex={1} />
        </div>
        <Logomark size={34} />
        <div className="mx-2 flex items-center" style={{ width: 60 }}>
          <LaneDashed laneIndex={2} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0 }}>
          <YouCard />
        </div>
        <Traveler />
      </div>

      {/* Mobile stacked layout */}
      <div
        className="relative mx-auto flex min-[861px]:hidden flex-col items-center"
        style={{ width: "min(250px, 100%)" }}
      >
        <div className="w-full">
          <ProCard />
        </div>
        <LaneDashed vertical laneIndex={1} />
        <Logomark size={34} />
        <LaneDashed vertical laneIndex={2} />
        <div className="w-full">
          <YouCard />
        </div>
        <Traveler vertical />
      </div>
    </div>
  );
}

export function ServiceChips() {
  const items = ["Braids", "Silk press", "Cuts & fades", "Locs", "Nails", "Makeup"];
  return (
    <div aria-hidden className="mt-5 flex flex-wrap justify-center gap-2">
      {items.map((s) => (
        <span
          key={s}
          className="rounded-full font-medium text-midnight/70"
          style={{
            background: "#F0EBD8",
            border: "1px solid rgba(6,28,39,0.08)",
            padding: "6px 14px",
            fontSize: 12,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
