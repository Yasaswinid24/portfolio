import Image from "next/image";
import { ArrowDownRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const { characterImage: img } = profile;
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative pt-28 sm:pt-32 lg:pt-24">
      <div className="container-x grid items-center gap-8 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="hero-text order-2 pb-16 lg:order-1 lg:pb-0">
          <p className="label mb-6">{profile.eyebrow}</p>
          <h1
            id="hero-heading"
            className="h-display text-[clamp(2.5rem,7vw,5.25rem)]"
          >
            Building <span className="accent">intelligent</span> solutions that make work{" "}
            <span className="accent">simpler.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
            {profile.heroIntro}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn btn-primary">
              Explore My Work <ArrowDownRight size={16} aria-hidden />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&rsquo;s Connect
            </a>
            <a
              href={profile.resumeHref}
              download
              className="btn btn-ghost border-transparent px-3 text-ink-2 hover:border-transparent hover:bg-transparent hover:text-ink"
            >
              <Download size={16} aria-hidden /> Résumé
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="hero-enter mix-blend-multiply">
            <div className="hero-float">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                priority
                sizes="(max-width: 1024px) 70vw, 460px"
                className="mx-auto h-auto max-h-[62svh] w-auto max-w-full lg:max-h-[88svh]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
