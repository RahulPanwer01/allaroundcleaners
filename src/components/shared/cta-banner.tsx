import { ButtonLink } from "@/components/shared/button-link";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="overflow-hidden rounded-4xl bg-gradient-to-r from-ink via-teal to-mint p-8 text-white shadow-soft sm:p-12">
          <div className="max-w-3xl">
            <p className="eyebrow border-white/20 bg-white/10 text-white">Fast Response</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-white/85 sm:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/quote" className="bg-white text-ink hover:bg-sand">
              Get a Free Quote
            </ButtonLink>
            <ButtonLink href="/book-now" variant="secondary" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
              Book Online
            </ButtonLink>
            <ButtonLink href="tel:+18005550119" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
