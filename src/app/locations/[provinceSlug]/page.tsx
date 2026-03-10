import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { LocationCard, ServiceCard } from "@/components/shared/cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { cities, getProvinceBySlug, provinces } from "@/data/locations";
import { services } from "@/data/services";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { JsonLd, getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return provinces.map((province) => ({ provinceSlug: province.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provinceSlug: string }>;
}) {
  const { provinceSlug } = await params;
  const province = getProvinceBySlug(provinceSlug);

  if (!province) {
    return buildMetadata({
      title: "Coverage Area | All Around Cleaners",
      description: "Coverage page for All Around Cleaners.",
    });
  }

  return buildMetadata({
    title: `${province.name} Cleaning Services | All Around Cleaners`,
    description: province.intro,
    path: `/locations/${province.slug}`,
  });
}

export default async function ProvincePage({
  params,
}: {
  params: Promise<{ provinceSlug: string }>;
}) {
  const { provinceSlug } = await params;
  const province = getProvinceBySlug(provinceSlug);

  if (!province) {
    notFound();
  }

  const provinceCities = cities.filter((city) => city.provinceSlug === province.slug);

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Coverage", url: `${siteUrl}/coverage` },
          { name: province.name, url: `${siteUrl}/locations/${province.slug}` },
        ])}
      />
      <JsonLd data={getFaqSchema(province.faqs)} />
      <div className="pt-8">
        <div className="container-shell">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/coverage", label: "Coverage" }, { label: province.name }]} />
        </div>
        <Hero eyebrow="Province Coverage" title={`${province.name} cleaning services`} description={province.intro} compact />
      </div>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Cities Served"
              title={`Local cleaning coverage across ${province.name}`}
              description="Explore city landing pages for neighbourhood coverage, common service requests, and local SEO content."
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {provinceCities.map((city) => (
              <LocationCard key={city.slug} title={city.name} description={city.intro} href={`/locations/${province.slug}/${city.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Available Services"
            title={`Popular services in ${province.name}`}
            description="Service availability varies by city, but these are the core options clients most often book."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.excerpt} href={`/services/${service.slug}`} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/quote">Get a local quote</ButtonLink>
            <ButtonLink href="/book-now" variant="secondary">
              Book Online
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Local FAQs" title={`Questions about service in ${province.name}`} />
          </div>
          <FaqAccordion items={province.faqs} />
        </div>
      </section>
    </>
  );
}
