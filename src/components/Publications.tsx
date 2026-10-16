import { publications } from "@/lib/data";
import Section from "./Section";

export default function Publications() {
  if (publications.length === 0) return null;
  return (
    <Section id="publication" title="Publication">
      <ul className="divide-y divide-line border-b border-line">
        {publications.map((p) => (
          <li key={p.title} className="row grid gap-2 py-8 first:pt-0 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
            <p className="period font-medium text-ink-3 md:pt-1.5">{p.date}</p>
            <article>
              <h3 className="max-w-[40rem] text-xl font-bold leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-2 text-ink-2">{p.venue}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
