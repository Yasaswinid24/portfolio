"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectVisual from "./ProjectVisual";

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section">
      <div className="container-x">
        <SectionHeading number="03" label="Selected Work" id="projects-heading">
          Things I&rsquo;ve <span className="accent">built.</span>
        </SectionHeading>

        <ul className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => {
            const open = openIdx === i;
            const panelId = `project-panel-${p.number}`;
            const btnId = `project-btn-${p.number}`;
            return (
              <Reveal
                as="li"
                key={p.number}
                delay={(i % 2) * 90}
                className={i === 0 ? "lg:col-span-2" : ""}
              >
                <article className="card card-hover flex h-full flex-col gap-6 p-5 sm:p-7 lg:flex-row-reverse lg:gap-8">
                  <div className={i === 0 ? "lg:w-[42%]" : "lg:hidden"}>
                    <ProjectVisual kind={p.visual} />
                    <p className="mt-2 text-[0.68rem] text-ink-3">Illustrative graphic, not a screenshot.</p>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <p className="label">Project {p.number}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-2">{p.summary}</p>

                    {i !== 0 && (
                      <div className="mt-5 hidden lg:block">
                        <ProjectVisual kind={p.visual} />
                      </div>
                    )}

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
                      {p.stack.map((s) => (
                        <li key={s} className="chip">
                          {s}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => setOpenIdx(open ? null : i)}
                        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-ink/40 hover:bg-[#faf9f6]"
                      >
                        {open ? "Hide details" : "Details"}
                        <ChevronDown
                          size={16}
                          aria-hidden
                          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                        />
                      </button>
                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline"
                        >
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
                        <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm leading-relaxed text-ink-2">
                          {p.highlights.map((h) => (
                            <li key={h} className="flex gap-3">
                              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
