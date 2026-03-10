import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { ServiceCard } from "@/components/shared/cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { getServiceBySlug, services } from "@/data/services";
import { buildMetadata, siteUrl } from "@/lib/seo";
import { JsonLd, getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found | All Around Cleaners",
      description: "The requested cleaning service page could not be found.",
    });
  }

  return buildMetadata({
    title: `${service.name} | All Around Cleaners`,
    description: service.excerpt,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services.filter((item) => (service.related as ReadonlyArray<string>).includes(item.slug));

  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: siteUrl },
          { name: "Services", url: `${siteUrl}/services` },
          { name: service.name, url: `${siteUrl}/services/${service.slug}` },
        ])}
      />
      <JsonLd data={getFaqSchema(service.faqs)} />
      <div className="pt-8">
        <div className="container-shell">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: service.name }]} />
        </div>
        <Hero eyebrow={service.shortLabel} title={service.name} description={service.intro} bullets={service.benefits} compact />
      </div>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <SectionHeading eyebrow="Detailed Checklist" title="What this service typically includes" />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate">
              {service.checklist.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-8">
            <SectionHeading eyebrow="Ideal Use Cases" title="When this cleaning service is the right fit" />
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate">
              {service.useCases.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <h2 className="mt-8 text-xl font-semibold text-ink">Service area note</h2>
            <p className="mt-3 text-sm leading-6 text-slate">{service.serviceAreaNote}</p>
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading eyebrow="Process" title="How this job is delivered" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {service.process.map((item, index) => (
              <div key={item} className="card-surface p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white">{index + 1}</span>
                <p className="mt-5 text-sm leading-6 text-slate">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="FAQs" title={`Questions about ${service.shortLabel.toLowerCase()} service`} />
          </div>
          <FaqAccordion items={service.faqs} />
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading eyebrow="Related Services" title="Clients often compare these related services too." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedServices.map((item) => (
              <ServiceCard key={item.slug} title={item.name} description={item.excerpt} href={`/services/${item.slug}`} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/quote">Get a Free Quote</ButtonLink>
            <ButtonLink href="/book-now" variant="secondary">
              Book Online
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
