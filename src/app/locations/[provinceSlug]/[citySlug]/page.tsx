import Link from "next/link";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ServiceCard } from "@/components/shared/cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { getLocationMedia } from "@/data/media";
import { cities, getCityBySlugs, provinces } from "@/data/locations";
import { services } from "@/data/services";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { JsonLd, getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return cities.map((city) => ({ provinceSlug: city.provinceSlug, citySlug: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provinceSlug: string; citySlug: string }>;
}) {
  const { provinceSlug, citySlug } = await params;
  const city = getCityBySlugs(provinceSlug, citySlug);

  if (!city) {
    return buildMetadata({
      title: "City Coverage | All Around Cleaners",
      description: "City coverage page for All Around Cleaners.",
    });
  }

  return buildMetadata({
    title: `${city.name} Cleaning Services | All Around Cleaners`,
    description: city.intro,
    path: `/locations/${city.provinceSlug}/${city.slug}`,
  });
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ provinceSlug: string; citySlug: string }>;
}) {
  const { provinceSlug, citySlug } = await params;
  const city = getCityBySlugs(provinceSlug, citySlug);

  if (!city) {
    notFound();
  }

  const cityFaqs = [
    {
      question: `What cleaning services are most popular in ${city.name}?`,
      answer:
        "Move-out cleaning, deep cleaning, maid service, pre-sale cleaning, and post-renovation cleanup are common requests in this market.",
    },
    {
      question: `Do you cover neighbourhoods beyond central ${city.name}?`,
      answer: `Yes. We often support surrounding neighbourhoods and nearby communities depending on scheduling and route density.`,
    },
    {
      question: `Can I get pricing before a site visit in ${city.name}?`,
      answer:
        "Yes. Standard homes can often be estimated remotely, while larger or heavy-condition projects may require a custom review.",
    },
  ];

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Coverage", url: `${siteUrl}/coverage` },
          { name: city.provinceName, url: `${siteUrl}/locations/${city.provinceSlug}` },
          { name: city.name, url: `${siteUrl}/locations/${city.provinceSlug}/${city.slug}` },
        ])}
      />
      <JsonLd data={getFaqSchema(cityFaqs)} />
      <div className="pt-8">
        <div className="container-shell">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/coverage", label: "Coverage" },
              { href: `/locations/${city.provinceSlug}`, label: city.provinceName },
              { label: city.name },
            ]}
          />
        </div>
        <Hero
          eyebrow={`${city.name}, ${city.provinceName}`}
          title={`Professional cleaning services in ${city.name}`}
          description={`${city.intro} We support homeowners, renters, landlords, offices, and real estate teams with reliable scheduling and conversion-focused service packages.`}
          compact
          media={getLocationMedia("city")}
        />
      </div>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Why locals choose us"
              title={`A practical local option for cleaning in ${city.name}`}
              description={`Clients in ${city.name} book us for responsive quoting, service clarity, and the ability to handle both routine and detail-heavy cleaning scopes.`}
            />
            <ul className="mt-8 space-y-3 text-sm leading-6 text-slate">
              <li>Neighbourhood coverage across {city.neighborhoods.join(", ")}</li>
              <li>Ideal for turnovers, pre-sale prep, recurring cleaning, and office support</li>
              <li>Pricing guidance before booking, with custom quotes for larger properties</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/quote">Get a quote in {city.name}</ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View pricing
              </ButtonLink>
            </div>
          </div>
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-ink">Services available in {city.name}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {services.slice(0, 8).map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-3xl border border-mist px-4 py-4 text-sm font-medium text-ink hover:border-teal hover:text-teal"
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate">
              Pricing note: final rates in {city.name} depend on property size, current condition, building access, timing, and requested add-ons.
            </p>
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading eyebrow="Neighbourhood Coverage" title={`Areas we commonly service in ${city.name}`} />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {city.neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="card-surface p-5 text-sm font-medium text-ink">
                {neighborhood}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow="Internal Links" title={`Explore related services for ${city.name}`} />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.excerpt} href={`/services/${service.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="City FAQs" title={`Questions about booking cleaning in ${city.name}`} />
          </div>
          <FaqAccordion items={cityFaqs} />
        </div>
      </section>
    </>
  );
}
