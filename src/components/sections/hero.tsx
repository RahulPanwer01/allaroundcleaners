import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/shared/button-link";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: ReadonlyArray<string>;
  compact?: boolean;
};

export function Hero({ eyebrow, title, description, bullets = [], compact = false }: HeroProps) {
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
          <div className="card-surface relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-transparent to-mint/15" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                Cleaner, faster turnovers
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["Homes and condos", "Move-outs, deep cleans, recurring maintenance"],
                  ["Commercial spaces", "Offices, common areas, retail, post-renovation"],
                  ["Specialty add-ons", "Appliances, upholstery, pressure washing"],
                  ["National support", "One brand standard across Canadian markets"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-3xl border border-mist bg-white/80 p-4">
                    <h2 className="text-sm font-semibold text-ink">{label}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-3xl bg-ink p-6 text-white">
                <p className="text-sm text-white/75">Book now, pay later</p>
                <p className="mt-2 text-2xl font-semibold">Transparent quotes without chasing crews for updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
