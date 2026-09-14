import { useEffect, useState } from "react";

export function ScrollCue({ targetId = "two-ways" }: { targetId?: string }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) setHidden(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to next section"
      onClick={handleClick}
      className="absolute left-1/2 -translate-x-1/2 text-midnight transition-opacity duration-500 ewa-scroll-cue"
      style={{
        bottom: "28px",
        opacity: hidden ? 0 : 0.35,
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}
