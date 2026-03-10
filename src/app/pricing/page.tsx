import { ButtonLink } from "@/components/shared/button-link";
import { PricingCard } from "@/components/shared/cards";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPageMedia } from "@/data/media";
import { addOns, pricingTiers } from "@/data/pricing";
import { buildMetadata } from "@/lib/seo";
import { formatCurrency } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Pricing | All Around Cleaners",
  description: "View transparent starting prices for standard home cleaning packages and add-on services in Canada.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Hero
        eyebrow="Transparent Pricing"
        title="Clear starting rates for standard home cleaning packages."
        description="Use these prices as a baseline for studios through three-bedroom homes. Larger homes, heavy-condition properties, and specialty scopes receive custom quotes."
        compact
        media={getPageMedia("pricing")}
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 xl:grid-cols-5">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.slug} label={tier.label} price={tier.price} lead={tier.lead} features={tier.features} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Add-On Services"
              title="Optional extras that make turnover and deep-clean jobs more complete."
              description="Choose the add-ons that matter most to the property instead of overpaying for blanket packages."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {addOns.map((item) => (
              <div key={item.label} className="card-surface flex items-center justify-between p-5">
                <span className="font-medium text-ink">{item.label}</span>
                <span className="text-sm font-semibold text-teal">{formatCurrency(item.price)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <h2 className="text-2xl font-semibold text-ink">Compare plans at a glance</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[540px] text-left text-sm text-slate">
                <thead>
                  <tr className="border-b border-mist text-ink">
                    <th className="py-3 pr-4">Plan</th>
                    <th className="py-3 pr-4">Best for</th>
                    <th className="py-3">Starting price</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier) => (
                    <tr key={tier.slug} className="border-b border-mist">
                      <td className="py-3 pr-4 font-medium text-ink">{tier.label}</td>
                      <td className="py-3 pr-4">{tier.lead}</td>
                      <td className="py-3">{tier.price ? formatCurrency(tier.price) : "Custom"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate">
              Pricing disclaimer: Actual rates may vary by condition, access, supply needs, parking, urgency, and specialty service requirements.
            </p>
          </div>
          <div>
            <FaqAccordion
              items={[
                {
                  question: "Are the listed prices for regular cleaning or deep cleaning?",
                  answer:
                    "They are starting points for standard scopes. Deep cleaning, move-out work, and condition-heavy jobs may require a higher quote.",
                },
                {
                  question: "Do you quote custom properties over 3 bedrooms?",
                  answer:
                    "Yes. Larger homes, unique layouts, and luxury properties are quoted separately for accuracy.",
                },
                {
                  question: "Is commercial pricing shown here?",
                  answer:
                    "No. Commercial cleaning is quoted by site type, traffic level, frequency, and checklist requirements.",
                },
              ]}
            />
          </div>
        </div>
        <div className="container-shell mt-10">
          <ButtonLink href="/quote">Request a custom quote</ButtonLink>
        </div>
      </section>
    </>
  );
}
