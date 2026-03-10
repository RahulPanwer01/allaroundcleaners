import { Hero } from "@/components/sections/hero";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { faqCategories } from "@/data/faqs";
import { getPageMedia } from "@/data/media";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, getFaqSchema } from "@/lib/schemas";

export const metadata = buildMetadata({
  title: "FAQ | All Around Cleaners",
  description: "Answers to common questions about booking, pricing, supplies, cancellation, coverage, and specialty cleaning.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(faqCategories.flatMap((category) => category.items))} />
      <Hero
        eyebrow="Frequently Asked Questions"
        title="The operational details clients ask for before they book."
        description="Everything from pricing and supplies to cancellations, custom quotes, and service coverage."
        compact
        media={getPageMedia("faq")}
      />
      <section className="section-space">
        <div className="container-shell space-y-10">
          {faqCategories.map((category) => (
            <section key={category.slug}>
              <SectionHeading eyebrow={category.title} title={category.title} />
              <div className="mt-8">
                <FaqAccordion items={category.items} />
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
