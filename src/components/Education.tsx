import { education } from "@/lib/data";
import Section from "./Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="divide-y divide-line border-b border-line">
        {education.map((e) => (
          <li key={e.degree} className="row grid gap-2 py-8 first:pt-0 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8">
            <p className="period font-medium text-ink-3 md:pt-1.5">{e.period}</p>
            <div>
              <h3 className="text-xl font-bold leading-snug tracking-tight">{e.degree}</h3>
              <p className="mt-1 text-ink-2">{e.school}</p>
              <p className="mt-3 inline-flex rounded-full bg-wash px-3 py-1 text-sm font-medium text-cobalt-deep">
                {e.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
