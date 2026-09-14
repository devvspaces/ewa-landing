import { useEffect, useState } from "react";
import { useIsMobile } from "../../hooks/use-mobile";

export function MobileStickyCta() {
  const isMobile = useIsMobile();
  const [dismissed, setDismissed] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const [finalVisible, setFinalVisible] = useState(false);

  useEffect(() => {
    if (!isMobile || dismissed) return;

    const hero = document.getElementById("hero-waitlist");
    const finalCta = document.getElementById("waitlist");
    if (!hero && !finalCta) return;

    const observers: IntersectionObserver[] = [];
    if (hero) {
      const io = new IntersectionObserver(
        ([entry]) => setHeroVisible(entry.isIntersecting),
        { threshold: 0.15 },
      );
      io.observe(hero);
      observers.push(io);
    }
    if (finalCta) {
      const io = new IntersectionObserver(
        ([entry]) => setFinalVisible(entry.isIntersecting),
        { threshold: 0.15 },
      );
      io.observe(finalCta);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, [isMobile, dismissed]);

  useEffect(() => {
    const handler = () => setDismissed(true);
    window.addEventListener("ewa:waitlist-submitted", handler);
    return () => window.removeEventListener("ewa:waitlist-submitted", handler);
  }, []);

  if (!isMobile || dismissed || heroVisible || finalVisible) return null;

  const handleClick = () => {
    const hero = document.getElementById("hero-waitlist");
    hero?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("ewa:focus-hero-email"));
    }, 450);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 bg-midnight px-4 pt-3 animate-fade-up"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
    >
      <button
        type="button"
        onClick={handleClick}
        className="w-full rounded-full bg-orange px-6 py-4 text-[16px] font-semibold text-midnight transition-transform active:scale-[.98]"
      >
        Get on the list
      </button>
    </div>
  );
}
