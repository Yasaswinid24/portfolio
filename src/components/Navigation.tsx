"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, profile } from "@/lib/data";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = navigation
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    const hero = document.getElementById("home");
    const heroIo = new IntersectionObserver(
      ([e]) => e.isIntersecting && setActive(""),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    if (hero) heroIo.observe(hero);
    return () => {
      io.disconnect();
      heroIo.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`w-full max-w-4xl rounded-[1.75rem] border transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-paper/95 shadow-soft backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5">
          <a
            href="#home"
            className="text-sm font-semibold tracking-tight"
            onClick={() => setOpen(false)}
          >
            {profile.name}
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((n) => {
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <a
                    href={n.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-3 py-1.5 text-sm transition-colors ${
                      isActive ? "bg-wash font-medium text-cobalt-deep" : "text-ink-2 hover:bg-ink/5 hover:text-ink"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className="accordion md:hidden"
          data-open={open}
          aria-hidden={!open}
          {...(!open ? { inert: true } : {})}
        >
          <div>
            <ul className="flex flex-col gap-1 px-3 pb-3">
              {navigation.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === n.id ? "true" : undefined}
                    className={`block rounded-2xl px-4 py-3 text-base ${
                      active === n.id ? "bg-wash font-medium text-cobalt-deep" : "text-ink hover:bg-ink/5"
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
