import { experience } from "@/lib/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line border-b border-line">
        {experience.map((e) => (
          <li
            key={`${e.role}-${e.org}`}
            className="row grid gap-2 py-8 first:pt-0 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-8"
          >
            <p className="period font-medium text-ink-3 md:pt-1.5">{e.period}</p>
            <div>
              <h3 className="text-xl font-bold leading-snug tracking-tight">{e.role}</h3>
              <p className="mt-1 text-ink-2">
                {e.org}
                {e.type && <span className="chip ml-2 align-middle">{e.type}</span>}
              </p>
              <ul className="mt-4 max-w-[42rem] space-y-2 text-ink-2">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span aria-hidden className="dash mt-[0.7em] h-0.5 w-3 shrink-0 bg-cobalt" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
