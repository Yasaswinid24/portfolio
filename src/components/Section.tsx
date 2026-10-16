import type { ReactNode } from "react";

type Props = { id: string; title: string; children: ReactNode };

/**
 * One layout for every section: the title sits in a left column (sticky on wide screens)
 * and the content fills the right, like the index of a document.
 */
export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="section">
      <div className="container-x">
        <div className="grid gap-6 border-t border-ink/25 pt-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12 lg:pt-12">
          <h2 id={`${id}-heading`} className="h-section lg:sticky lg:top-28 lg:self-start">
            {title}
          </h2>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
