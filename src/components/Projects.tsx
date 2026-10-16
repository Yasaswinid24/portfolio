"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Section from "./Section";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <Section id="projects" title="Projects">
      <ul className="divide-y divide-line border-b border-line">
        {projects.map((p, i) => {
          const open = openIdx === i;
          const panelId = `project-panel-${p.number}`;
          const btnId = `project-btn-${p.number}`;
          return (
            <li key={p.number} className="row py-9 first:pt-0">
              <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12">
                <div>
                  <h3 className="max-w-[34rem] text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-[38rem] leading-relaxed text-ink-2">{p.summary}</p>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-5">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIdx(open ? null : i)}
                      className="link-quiet !px-0 text-cobalt"
                    >
                      {open ? "Hide details" : "Show details"}
                      <ChevronDown
                        size={16}
                        aria-hidden
                        className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      />
                    </button>
                    {p.href && (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className="link-quiet">
                        View project <ArrowUpRight size={14} aria-hidden />
                      </a>
                    )}
                  </div>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="accordion"
                    data-open={open}
                    {...(!open ? { inert: true } : {})}
                  >
                    <div>
                      <ul className="mt-4 max-w-[38rem] space-y-2 border-l-2 border-cobalt pl-5 text-ink-2">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="visual-lift hidden lg:block">
                  <ProjectVisual kind={p.visual} />
                </div>
              </article>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 hidden text-sm text-ink-3 lg:block">
        The panels beside each project are diagrams of its structure, not screenshots.
      </p>
    </Section>
  );
}
