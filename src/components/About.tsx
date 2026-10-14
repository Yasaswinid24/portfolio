import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section">
      <div className="container-x">
        <SectionHeading number="01" label="About" id="about-heading">
          A little <span className="accent">about me.</span>
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="text-xl leading-snug tracking-tight sm:text-2xl">{profile.aboutLead}</p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-2">
              {profile.aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="label mb-3">Languages</h3>
              <ul className="flex flex-wrap gap-2">
                {profile.languages.map((l) => (
                  <li key={l.name} className="chip">
                    <span className="font-medium text-ink">{l.name}</span>
                    <span className="mx-2 text-ink-3">·</span>
                    {l.level}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <ul className="grid gap-3 sm:grid-cols-2">
            {profile.aboutHighlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 80} className={i === 0 ? "sm:col-span-2" : ""}>
                <div className="card card-hover h-full p-5">
                  <h3 className="text-sm font-semibold tracking-tight">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
