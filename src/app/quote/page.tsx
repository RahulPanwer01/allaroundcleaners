import { QuoteForm } from "@/components/forms/quote-form";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get a Free Quote | All Around Cleaners",
  description: "Request a custom cleaning quote for homes, offices, post-renovation projects, and heavy-duty cleanup jobs.",
  path: "/quote",
});

export default function QuotePage() {
  return (
    <>
      <Hero
        eyebrow="Custom Quotes"
        title="Get a tailored quote for larger, urgent, or specialty cleaning jobs."
        description="Share the property details, timing, and target outcome. Our team reviews the scope and follows up with the right service plan."
        compact
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Designed for custom work"
              title="Use this form when standard pricing is not enough."
              description="Ideal for commercial spaces, post-renovation dust, heavy-duty cleanups, multi-unit turnovers, and time-sensitive property preparation."
            />
            <div className="mt-8 card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">What happens after you submit</h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-slate">
                <li>1. We review the scope and any notes or photo references.</li>
                <li>2. We confirm timing, property access, and the best service mix.</li>
                <li>3. You receive a clear quote or a follow-up request for any missing detail.</li>
              </ol>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
