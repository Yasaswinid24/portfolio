import { profile } from "@/lib/data";
import Section from "./Section";
import IdCard from "./IdCard";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-10">
        <div>
          <p className="text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-[1.2] tracking-tight">
            {profile.aboutLead}
          </p>

          <div className="mt-8 space-y-5 leading-relaxed text-ink-2">
            {profile.aboutParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-semibold">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {profile.languages.map((l) => (
                <li key={l.name} className="chip">
                  <span className="mr-2 font-semibold text-ink">{l.name}</span>
                  {l.level}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="-mt-2 lg:-mt-6">
          <IdCard />
        </div>
      </div>

      <dl className="mt-16 divide-y divide-line border-y border-line">
        {profile.aboutHighlights.map((h) => (
          <div key={h.title} className="row grid gap-1 py-5 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8">
            <dt className="font-semibold">{h.title}</dt>
            <dd className="max-w-[40rem] text-ink-2">{h.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
