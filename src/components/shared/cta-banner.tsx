import { ButtonLink } from "@/components/shared/button-link";

type CtaBannerProps = {
  title: string;
  description: string;
};

export function CtaBanner({ title, description }: CtaBannerProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="overflow-hidden rounded-4xl border border-mist bg-gradient-to-r from-[#f7ede3] via-[#f3e4d6] to-[#ecd7c2] p-8 text-ink shadow-soft sm:p-12">
          <div className="max-w-3xl">
            <p className="eyebrow">Fast Response</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base text-slate sm:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/quote">
              Get a Free Quote
            </ButtonLink>
            <ButtonLink href="/book-now" variant="secondary">
              Book Online
            </ButtonLink>
            <ButtonLink href="tel:+18005550119" variant="ghost">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
