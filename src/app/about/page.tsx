import { Hero } from "@/components/sections/hero";
import { CtaBanner } from "@/components/shared/cta-banner";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us | All Around Cleaners",
  description: "Learn about All Around Cleaners, our service standards, insured teams, and national cleaning support model.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About All Around Cleaners"
        title="A cleaning company built around reliable execution, not vague promises."
        description="We help households, real estate teams, landlords, and businesses get dependable cleaning support with a clear process, strong communication, and practical service coverage across Canada."
        compact
      />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Created for clients who need confidence before the crew arrives."
              description="All Around Cleaners was positioned to bridge the gap between local crew responsiveness and national-grade service consistency. Clients wanted one brand they could trust for move-outs, deep cleans, recurring support, and commercial cleaning across multiple cities."
            />
          </div>
          <div className="grid gap-6">
            {[
              ["Mission", "Make professional cleaning easy to understand, easy to book, and easy to trust."],
              ["Standards", "Documented checklists, quality signoff, and crews trained for both maintenance and detail-heavy work."],
              ["Insured teams", "Teams operate with insured service standards and practical job-scope review before work begins."],
              ["Philosophy", "Premium but practical service. Clean enough to be credible, not dressed up with vague marketing."],
              ["National reach", "Local teams in major Canadian hubs with one consistent service voice and support flow."],
              ["Quality promise", "If the agreed scope needs attention, we respond quickly and resolve it properly."],
            ].map(([title, description]) => (
              <div key={title} className="card-surface p-6">
                <h2 className="text-xl font-semibold text-ink">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Need a cleaning partner that can support multiple properties or cities?"
        description="Start with a quote request and we will build the right plan for your home, listing, rental portfolio, or commercial space."
      />
    </>
  );
}
