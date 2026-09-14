import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-bold tracking-[.16em] uppercase text-orange">{children}</span>
  );
}
