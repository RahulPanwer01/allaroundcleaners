import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";
import type { HeroMedia } from "@/data/media";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: ReadonlyArray<string>;
  compact?: boolean;
  media?: HeroMedia;
};

export function Hero({ eyebrow, title, description, bullets = [], compact = false, media }: HeroProps) {
  return (
    <section className="bg-hero-grid">
      <div className={`container-shell ${compact ? "py-16 sm:py-20" : "py-20 sm:py-24 lg:py-28"}`}>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate sm:text-lg">{description}</p>
            {bullets.length ? (
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm font-medium text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-mint" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/quote">Get a Free Quote</ButtonLink>
              <ButtonLink href="/book-now" variant="secondary">
                Book Online
              </ButtonLink>
              <ButtonLink href="tel:+18005550119" variant="ghost">
                Call Now
              </ButtonLink>
            </div>
          </div>
          {media ? (
            <div className="card-surface overflow-hidden">
              <div className="relative h-[340px] sm:h-[460px]">
                <Image src={media.src} alt={media.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/10" />
                <div className="absolute left-5 right-5 top-5">
                  <span className="inline-flex rounded-full border border-sand/60 bg-sand/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-sm">
                    {media.eyebrow}
                  </span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.75rem] border border-sand/70 bg-sand/95 p-5 shadow-soft">
                  <h2 className="text-xl font-semibold text-ink sm:text-2xl">{media.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate">{media.description}</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
