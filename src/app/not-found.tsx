import { ButtonLink } from "@/components/shared/button-link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-shell text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate">
          The page you requested does not exist or may have moved. Use the links below to continue browsing the site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Browse services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
