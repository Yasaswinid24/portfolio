import { BookOpen } from "lucide-react";
import { publications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Publications() {
  if (publications.length === 0) return null;
  return (
    <section id="publication" aria-labelledby="publication-heading" className="section !pt-8">
      <div className="container-x">
        <SectionHeading number="06" label="Publication" id="publication-heading">
          Published <span className="accent">research.</span>
        </SectionHeading>

        <ul className="space-y-4">
          {publications.map((p) => (
            <Reveal as="li" key={p.title}>
              <article className="card card-hover flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
                <span className="icon-badge inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-[#faf9f6]">
                  <BookOpen size={20} aria-hidden />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">{p.title}</h3>
                  <p className="mt-3 text-ink-2">
                    {p.venue} <span className="mx-1 text-ink-3">·</span> {p.date}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
