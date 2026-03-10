import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { getPageMedia } from "@/data/media";
import { companyContact } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us | All Around Cleaners",
  description: "Contact All Around Cleaners for service questions, booking support, coverage checks, or custom quotes.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Reach the team that handles quotes, bookings, and service questions."
        description="Use the form for general inquiries, coverage requests, and support. For custom projects, the quote form is the fastest path."
        compact
        media={getPageMedia("contact")}
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">Response details</h2>
              <p className="mt-4 text-sm leading-6 text-slate">{companyContact.responseTime}</p>
              <p className="mt-4 text-sm leading-6 text-slate">Hours: {companyContact.hours}</p>
              <p className="mt-4 text-sm leading-6 text-slate">
                Use the contact form for general support and coverage questions. Use the quote form when the job needs pricing, scope review, or photo references.
              </p>
            </div>
            <div className="card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">Service regions</h2>
              <p className="mt-4 text-sm leading-6 text-slate">
                Ontario, British Columbia, Alberta, Saskatchewan, Manitoba, Nova Scotia, and custom routing for surrounding communities.
              </p>
            </div>
            <div className="card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">Quick links</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/faq" className="rounded-full border border-mist px-4 py-2 text-sm font-medium text-ink hover:border-teal hover:text-teal">
                  FAQ
                </Link>
                <Link href="/pricing" className="rounded-full border border-mist px-4 py-2 text-sm font-medium text-ink hover:border-teal hover:text-teal">
                  Pricing
                </Link>
                <Link href="/coverage" className="rounded-full border border-mist px-4 py-2 text-sm font-medium text-ink hover:border-teal hover:text-teal">
                  Coverage
                </Link>
              </div>
            </div>
            <ButtonLink href="/quote">Request a custom quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
