"use client";

import { useRef, useState } from "react";
import { Check, Copy, Mail, MapPin } from "lucide-react";
import { contact } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./Icons";

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
    <section id="contact" aria-labelledby="contact-heading" className="section">
      <div className="container-x">
        <SectionHeading number="07" label="Contact" id="contact-heading">
          Let&rsquo;s build something <span className="accent">intelligent</span> together.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="card h-full p-6 sm:p-9">
              <p className="max-w-lg text-base leading-relaxed text-ink-2 sm:text-lg">
                I&rsquo;m open to professional opportunities and collaborations in AI workflows, process
                optimization and automation. The quickest way to reach me is by email.
              </p>
              <p className="mt-8 break-all text-xl font-semibold tracking-tight sm:text-2xl">
                {contact.email}
              </p>
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
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card h-full divide-y divide-line p-2">
              <div className="flex items-center gap-3 p-4">
                <MapPin size={18} aria-hidden className="text-ink-2" />
                <div>
                  <p className="label !text-[0.65rem]">Location</p>
                  <p className="text-sm">{contact.location}</p>
                </div>
              </div>
              {contact.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-[#faf9f6]"
                >
                  <span className="text-ink-2">{iconFor(l.label)}</span>
                  <div className="min-w-0">
                    <p className="label !text-[0.65rem]">{l.label}</p>
                    <p className="truncate text-sm">{l.display}</p>
                    <span className="sr-only">(opens in a new tab)</span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
