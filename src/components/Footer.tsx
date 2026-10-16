"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { contact, profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="border-t border-ink/25 py-10">
      <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-3">
            &copy; <span suppressHydrationWarning>{year ?? ""}</span> Yasaswini Dharmavarapu. Built with Next.js.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {contact.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${l.label} (opens in a new tab)`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink-2 shadow-[inset_0_0_0_1px_var(--color-line)] transition-[transform,color,background-color] duration-200 hover:-translate-y-0.5 hover:bg-wash hover:text-cobalt"
            >
              {l.label === "GitHub" ? (
                <GithubIcon className="h-4 w-4" />
              ) : (
                <LinkedinIcon className="h-4 w-4" />
              )}
            </a>
          ))}
          <a href="#home" className="btn btn-ghost !px-4 !py-2 text-sm">
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
