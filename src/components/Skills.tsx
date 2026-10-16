"use client";

import { useMemo, useState } from "react";
import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [filter, setFilter] = useState<string>("all");

  const tiles = useMemo(
    () =>
      skillGroups.flatMap((g) => g.skills.map((s) => ({ name: s, group: g.id, groupLabel: g.label }))),
    [],
  );
  const visible = filter === "all" ? tiles : tiles.filter((t) => t.group === filter);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="section">
      <div className="container-x">
        <SectionHeading number="02" label="Skills" id="skills-heading">
          The tools behind the <span className="accent">solutions.</span>
        </SectionHeading>

        <Reveal>
          <div role="group" aria-label="Filter skills by category" className="mb-8 flex flex-wrap gap-2">
            {[{ id: "all", label: "All" }, ...skillGroups].map((g) => {
              const on = filter === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setFilter(g.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    on
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-ink-2 hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {g.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" aria-live="polite">
          {visible.map((t) => (
            <li key={`${t.group}-${t.name}`}>
              <div className="card card-hover skill-tile flex h-full min-h-[5.5rem] flex-col justify-between gap-3 rounded-2xl p-4">
                <span className="text-[0.95rem] font-medium tracking-tight">{t.name}</span>
                <span className="label !text-[0.62rem]">{t.groupLabel}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
