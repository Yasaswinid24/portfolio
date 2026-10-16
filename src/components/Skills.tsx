import { skillGroups } from "@/lib/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="divide-y divide-line border-b border-line">
        {skillGroups.map((g) => (
          <div key={g.id} className="row grid gap-4 py-6 first:pt-0 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8">
            <h3 className="font-semibold leading-snug">{g.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
