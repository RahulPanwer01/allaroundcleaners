import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/shared/cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cleaning Services | All Around Cleaners",
  description: "Browse residential, commercial, and specialty cleaning services available across Canada.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <Hero
        eyebrow="Service Hub"
        title="The full cleaning service lineup for homes, rentals, offices, and specialty projects."
        description="Explore every cleaning service offered by All Around Cleaners, from standard home support to high-detail property resets."
        compact
      />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="All Services"
            title="Choose the cleaning service that best matches the property and outcome."
            description="Each service page includes benefits, checklists, ideal use cases, FAQs, and internal links to related solutions."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.excerpt} href={`/services/${service.slug}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
