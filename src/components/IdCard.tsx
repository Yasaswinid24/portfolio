"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { contact, education, profile, publications } from "@/lib/data";

/**
 * Hanging ID card. Everything printed on it comes from src/lib/data.ts.
 * - Pendulum swing: pointer velocity pushes the card, a damped spring pulls it back,
 *   and a faint idle sway keeps it alive. The loop only runs while the card is on screen.
 * - Flip: hover (mouse), tap (touch) or Enter / Space (keyboard).
 */

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export default function IdCard() {
  const [flipped, setFlipped] = useState(false);
  const swingRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const motion = useRef({ angle: 0, vel: 0 });
  const lastType = useRef<string>("mouse");

  const program = education[0];
  const validTill = program.note.match(/\d{4}/)?.[0];
  const backLines = [
    `${program.degree}, ${program.school}. ${program.note}.`,
    `${education[1].degree}, ${education[1].school}. ${education[1].note}.`,
    profile.aboutHighlights[1].text,
    ...(publications[0] ? [`Published: ${publications[0].venue}, ${publications[0].date}.`] : []),
  ];

  useEffect(() => {
    const swing = swingRef.current;
    const host = hostRef.current;
    if (!swing || !host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const m = motion.current;
    let raf = 0;
    let visible = false;
    let prev = performance.now();

    const tick = (now: number) => {
      if (!visible) {
        raf = 0;
        return;
      }
      const dt = Math.min((now - prev) / 1000, 0.032);
      prev = now;
      const rest = Math.sin(now / 1100) * 1.8; // idle sway, degrees
      const acc = -22 * (m.angle - rest) - 3.2 * m.vel; // spring + damping
      m.vel += acc * dt;
      const limit = window.innerWidth < 640 ? 8 : 16; // keep the card on screen on phones
      m.angle = clamp(m.angle + m.vel * dt, -limit, limit);
      swing.style.transform = `rotate(${m.angle.toFixed(3)}deg)`;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !raf) {
        prev = performance.now();
        raf = requestAnimationFrame(tick);
      }
    });
    io.observe(host);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Moving the pointer to the right pushes the card to the right, so the swing angle goes negative.
  const push = (e: PointerEvent<HTMLDivElement>) => {
    const m = motion.current;
    m.vel = clamp(m.vel - e.movementX * 0.9, -140, 140);
  };

  const onPointerEnter = (e: PointerEvent<HTMLDivElement>) => {
    lastType.current = e.pointerType;
    if (e.pointerType === "mouse") setFlipped(true);
  };
  const onPointerLeave = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") setFlipped(false);
  };
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    lastType.current = e.pointerType;
  };
  const onClick = () => {
    // A mouse already flips on hover; clicks only matter for touch and pen.
    if (lastType.current !== "mouse") setFlipped((v) => !v);
  };
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((v) => !v);
    }
  };

  return (
    <div ref={hostRef} className="id-host">
      <div ref={swingRef} className="id-swing">
        {/* Lanyard */}
        <div className="id-anchor" aria-hidden />
        <div className="id-strap" aria-hidden>
          <div className="id-strap-text">
            <span>
              {profile.name} · {program.degree} ·&nbsp;
            </span>
            <span>
              {profile.name} · {program.degree} ·&nbsp;
            </span>
          </div>
        </div>
        <div className="id-clip" aria-hidden />

        {/* Card */}
        <div
          className="id-card"
          data-flipped={flipped}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label={`ID card for ${profile.name}. Press to flip it over.`}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerMove={push}
          onClick={onClick}
          onKeyDown={onKeyDown}
        >
          <div className="id-inner">
            {/* Front */}
            <div className="id-face id-front" aria-hidden={flipped}>
              <div className="id-band">Portfolio ID</div>

              <div className="id-photo-ring">
                <div className="id-photo">
                  <Image
                    src={profile.characterImage.src}
                    alt=""
                    fill
                    sizes="132px"
                    className="id-photo-img"
                  />
                </div>
              </div>

              <p className="id-name">{profile.name}</p>
              <p className="id-role">{profile.eyebrow}</p>

              <dl className="id-rows">
                <div>
                  <dt>Program</dt>
                  <dd>{program.degree}</dd>
                </div>
                <div>
                  <dt>University</dt>
                  <dd>BTU Cottbus</dd>
                </div>
                {validTill && (
                  <div>
                    <dt>Valid till</dt>
                    <dd>{validTill}</dd>
                  </div>
                )}
                <div>
                  <dt>Base</dt>
                  <dd>{contact.location}</dd>
                </div>
              </dl>

              <div className="id-foot" aria-hidden>
                <span className="id-barcode" />
                <span className="id-holo" />
              </div>
            </div>

            {/* Back */}
            <div className="id-face id-back" aria-hidden={!flipped}>
              <div className="id-band">What I am</div>
              <ul className="id-lines">
                {backLines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <p className="id-sign">{profile.name}</p>
              <p className="id-found">
                If found, say hello:<span>{contact.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
