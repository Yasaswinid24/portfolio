import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { number: string; label: string; id: string; children: ReactNode };

export default function SectionHeading({ number, label, id, children }: Props) {
  return (
    <Reveal className="mb-12 lg:mb-16">
      <p className="label mb-4 flex items-center gap-3">
        <span>{number}</span>
        <span aria-hidden className="h-px w-10 bg-ink/25" />
        <span>{label}</span>
      </p>
      <h2 id={id} className="h-section max-w-3xl">
        {children}
      </h2>
    </Reveal>
  );
}
