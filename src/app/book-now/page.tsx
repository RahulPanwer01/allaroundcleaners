import { BookingForm } from "@/components/forms/booking-form";
import { Hero } from "@/components/sections/hero";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book Online | All Around Cleaners",
  description: "Book residential or commercial cleaning online with transparent service details and real-time booking intake.",
  path: "/book-now",
});

export default function BookNowPage() {
  return (
    <>
      <Hero
        eyebrow="Book Online"
        title="Reserve your cleaning request online in a few minutes."
        description="Choose your service, enter property details, and submit your preferred schedule. We confirm the scope before your appointment."
        compact
      />
      <section className="section-space">
        <div className="container-shell">
          <BookingForm />
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Booking FAQ"
              title="Answers that help reduce friction before checkout."
              description="Quick answers to the questions most clients ask before confirming a date."
            />
          </div>
          <FaqAccordion
            items={[
              {
                question: "Do I pay when I submit the form?",
                answer:
                  "No. Booking requests are reviewed first, and scope details are confirmed before any final payment arrangement.",
              },
              {
                question: "Can I add service details after I submit?",
                answer:
                  "Yes. Our support team can update notes, access details, or add-ons before dispatch.",
              },
              {
                question: "What if my property needs a custom quote?",
                answer:
                  "We will follow up with a revised scope if the online estimate does not fully match the property condition or service complexity.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
