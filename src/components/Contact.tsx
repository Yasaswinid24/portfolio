"use client";

import { useRef, useState } from "react";
import { Check, Copy, Mail, MapPin } from "lucide-react";
import { contact } from "@/lib/data";
import Section from "./Section";
import { GithubIcon, LinkedinIcon } from "./Icons";
import HopText from "./HopText";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copyEmail() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(contact.email);
      ok = true;
    } catch {
      // Fallback for browsers/contexts without the async clipboard API.
      try {
        const ta = document.createElement("textarea");
        ta.value = contact.email;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    setStatus(ok ? "copied" : "error");
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2500);
  }

  const iconFor = (label: string) =>
    label === "GitHub" ? (
      <GithubIcon className="h-4 w-4" />
    ) : (
      <LinkedinIcon className="h-4 w-4" />
    );

  return (
    <Section id="contact" title="Contact">
      <HopText
        as="h3"
        text="Let’s build something intelligent together."
        className="display block max-w-[46rem] text-[clamp(2.4rem,6vw,4.75rem)]"
      />
      <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-ink-2">
        I&rsquo;m open to professional opportunities and collaborations in AI workflows, process
        optimization and automation. The quickest way to reach me is by email.
      </p>

      <a
        href={`mailto:${contact.email}`}
        className="mt-10 inline-block break-all text-[clamp(1.25rem,2.6vw,2rem)] font-semibold underline decoration-cobalt decoration-2 underline-offset-8 transition-[color,text-decoration-thickness] hover:text-cobalt hover:decoration-4"
      >
        {contact.email}
      </a>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={`mailto:${contact.email}`} className="btn btn-primary">
          <Mail size={16} aria-hidden /> Send an email
        </a>
        <button type="button" onClick={copyEmail} className="btn btn-ghost">
          {status === "copied" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          Copy email
        </button>
        <span role="status" aria-live="polite" className="text-sm text-ink-2">
          {status === "copied" && "Email copied to clipboard"}
          {status === "error" && "Couldn’t copy. Please select the address above."}
        </span>
      </div>

      <dl className="mt-14 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
        <div>
          <dt className="flex items-center gap-2 text-sm text-ink-3">
            <MapPin size={15} aria-hidden /> Location
          </dt>
          <dd className="mt-1 font-medium">{contact.location}</dd>
        </div>
        {contact.links.map((l) => (
          <div key={l.label} className="min-w-0">
            <dt className="flex items-center gap-2 text-sm text-ink-3">
              {iconFor(l.label)} {l.label}
            </dt>
            <dd className="mt-1 truncate font-medium">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-cobalt hover:decoration-cobalt"
              >
                {l.display}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
