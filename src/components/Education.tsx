import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="section">
      <div className="container-x">
        <SectionHeading number="05" label="Education" id="education-heading">
          Learning by <span className="accent">building.</span>
        </SectionHeading>

        <ul className="grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} delay={i * 100}>
              <div className="card card-hover h-full p-6 sm:p-8">
                <span className="icon-badge mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-[#faf9f6]">
                  <GraduationCap size={20} aria-hidden />
                </span>
                <p className="label">{e.period}</p>
                <h3 className="mt-2 text-xl font-semibold leading-tight tracking-tight">{e.degree}</h3>
                <p className="mt-2 text-ink-2">{e.school}</p>
                <p className="mt-5 inline-flex rounded-full bg-ink px-3 py-1 text-xs text-white">{e.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
