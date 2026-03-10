import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { LocationCard } from "@/components/shared/cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { cities, provinces } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Coverage Areas | All Around Cleaners",
  description: "Explore provinces and cities served by All Around Cleaners across Canada.",
  path: "/coverage",
});

export default function CoveragePage() {
  return (
    <>
      <Hero
        eyebrow="National Coverage"
        title="Cleaning services across major Canadian provinces and city hubs."
        description="Browse province filters, local landing pages, and city-specific service notes for homes, rentals, offices, and specialty cleanup projects."
        compact
      />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Province Filters"
            title="Start by province, then drill into the right city page."
            description="Each province page includes cities served, available services, FAQs, and local CTA pathways."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {provinces.map((province) => (
              <ButtonLink key={province.slug} href={`/locations/${province.slug}`} variant="secondary">
                {province.name}
              </ButtonLink>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <LocationCard
                key={city.slug}
                title={`${city.name}, ${city.provinceName}`}
                description={`Local cleaning support in ${city.name}, including move-out, deep cleaning, commercial, and specialty services.`}
                href={`/locations/${city.provinceSlug}/${city.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
