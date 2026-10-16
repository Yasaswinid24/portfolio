import Image from "next/image";
import { Download } from "lucide-react";
import { contact, profile } from "@/lib/data";

export default function Hero() {
  const { characterImage: img } = profile;
  return (
    <section id="home" aria-labelledby="hero-heading" className="section !pb-16 lg:!pb-24">
      <div className="container-x grid items-center gap-14 pt-32 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-10 lg:pt-36">
        <div className="hero-text">
          <h1 id="hero-heading" className="display text-[clamp(3.1rem,8.6vw,7.4rem)]">
            {profile.heroHeading}
          </h1>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink-2">{profile.heroIntro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
            <a href="#projects" className="btn btn-primary">
              See my projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
            <a href={profile.resumeHref} download className="link-quiet">
              <Download size={16} aria-hidden /> Download résumé
            </a>
          </div>
          <p className="mt-10 text-sm text-ink-3">
            Based in {contact.location}. Open to professional opportunities.
          </p>
        </div>

        <div className="justify-self-center pb-3 pr-3 lg:justify-self-end">
          <div className="arch-wrap">
            <div className="arch">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                priority
                sizes="(max-width: 1024px) 300px, 340px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
