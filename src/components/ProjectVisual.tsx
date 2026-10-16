import type { Project } from "@/lib/data";

/** Grayscale HTML/CSS illustrations. These are diagrams, not product screenshots. */
const box = "rounded-md border border-ink/15 bg-white";
const bar = "h-1.5 rounded-full bg-ink/15";

function Rag() {
  return (
    <div className="flex h-full items-center justify-between gap-3">
      <div className="flex w-1/4 flex-col gap-1.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`${box} p-1.5`}>
            <div className={`${bar} w-full`} />
            <div className={`${bar} mt-1 w-2/3`} />
          </div>
        ))}
      </div>
      <span className="text-ink/30">→</span>
      <div className="grid w-1/4 grid-cols-4 gap-1.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i % 5 === 0 ? "bg-cobalt" : "bg-ink/25"}`} />
        ))}
      </div>
      <span className="text-ink/30">→</span>
      <div className={`${box} w-1/4 p-2`}>
        <div className="h-1.5 w-full rounded-full bg-cobalt" />
        <div className={`${bar} mt-1.5 w-full`} />
        <div className={`${bar} mt-1 w-3/4`} />
      </div>
    </div>
  );
}

function Evaluation() {
  const heights = [40, 65, 50, 85, 70, 95];
  return (
    <div className="flex h-full items-end justify-center gap-2 px-4">
      {heights.map((h, i) => (
        <div
          key={i}
          style={{ height: `${h}%` }}
          className={`w-6 rounded-t-md ${i === heights.length - 1 ? "bg-cobalt" : "bg-ink/20"}`}
        />
      ))}
    </div>
  );
}

function Copilot() {
  const rows = [88, 71, 54];
  return (
    <div className="flex h-full flex-col justify-center gap-2">
      {rows.map((r, i) => (
        <div key={r} className={`${box} flex items-center justify-between gap-3 px-3 py-2`}>
          <div className="flex-1">
            <div className={`${bar} w-3/4`} />
            <div className={`${bar} mt-1 w-1/2 opacity-60`} />
          </div>
          <span
            className={`rounded-full px-2 py-0.5 text-[0.65rem] font-medium ${
              i === 0 ? "bg-cobalt text-white" : "bg-ink/10 text-ink-2"
            }`}
          >
            {r}
          </span>
        </div>
      ))}
    </div>
  );
}

function Analytics() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[16rem]">
      <div className={`${box} absolute left-1/2 top-1/2 h-10 w-16 -translate-x-1/2 -translate-y-1/2 bg-cobalt`} />
      {[
        "left-0 top-0",
        "right-0 top-0",
        "left-0 bottom-0",
        "right-0 bottom-0",
      ].map((pos) => (
        <div key={pos} className={`${box} absolute ${pos} h-8 w-14 p-1.5`}>
          <div className={`${bar} w-full`} />
          <div className={`${bar} mt-1 w-1/2`} />
        </div>
      ))}
      <div className="absolute inset-0 -z-0 m-auto h-px w-3/4 rotate-[24deg] bg-ink/15" />
      <div className="absolute inset-0 -z-0 m-auto h-px w-3/4 -rotate-[24deg] bg-ink/15" />
    </div>
  );
}

function Hmi() {
  return (
    <div className="flex h-full items-center justify-between gap-2">
      <div className={`${box} flex h-10 w-10 items-center justify-center rounded-full`}>
        <span className="h-3 w-1.5 rounded-full bg-cobalt" />
      </div>
      <span className="text-ink/30">→</span>
      <div className="flex flex-col gap-1.5">
        {["Agent", "Agent", "Guardrails"].map((t, i) => (
          <div
            key={i}
            className={`rounded-md border px-2 py-1 text-[0.62rem] ${
              i === 2 ? "border-cobalt bg-cobalt text-white" : "border-ink/15 bg-white text-ink-2"
            }`}
          >
            {t}
          </div>
        ))}
      </div>
      <span className="text-ink/30">→</span>
      <div className="flex flex-col gap-1.5">
        {["MCP", "A2A"].map((t) => (
          <div key={t} className="rounded-md border border-ink/15 bg-white px-2 py-1 text-[0.62rem] text-ink-2">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  return (
    <div
      aria-hidden="true"
      className="h-36 overflow-hidden rounded-2xl bg-wash p-4"
    >
      {kind === "rag" && <Rag />}
      {kind === "eval" && <Evaluation />}
      {kind === "copilot" && <Copilot />}
      {kind === "analytics" && <Analytics />}
      {kind === "hmi" && <Hmi />}
    </div>
  );
}
