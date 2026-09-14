import type { ReactNode } from "react";

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-display text-xl font-medium text-orange">{title}</h2>
      <div className="mt-4 space-y-4 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-midnight [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-midnight/70 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:text-[15px] [&_ul]:leading-relaxed [&_ul]:text-midnight/70 [&_strong]:font-semibold [&_strong]:text-midnight">
        {children}
      </div>
    </section>
  );
}
