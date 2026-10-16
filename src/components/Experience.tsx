import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section">
      <div className="container-x">
        <SectionHeading number="04" label="Experience" id="experience-heading">
          Experience that shaped <span className="accent">my work.</span>
        </SectionHeading>

        <ol className="relative ml-1.5 border-l border-ink/20 pl-7 sm:pl-10">
          {experience.map((e, i) => (
            <Reveal as="li" key={`${e.role}-${e.org}`} delay={i * 60} className="tl-item relative pb-10 last:pb-0">
              <span className="timeline-dot absolute -left-[2.2rem] top-1.5 sm:-left-[2.85rem]" aria-hidden />
              <div className="card card-hover p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                  <p className="label">{e.period}</p>
                </div>
                <p className="mt-1 text-sm text-ink-2">
                  {e.org}
                  {e.type && <span className="chip ml-2 align-middle">{e.type}</span>}
                </p>
                <ul className="mt-4 space-y-2 text-[0.93rem] leading-relaxed text-ink-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-ink/50" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
