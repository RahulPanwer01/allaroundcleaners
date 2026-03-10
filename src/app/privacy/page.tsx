import { companyContact } from "@/data/site";
import { getPageMedia } from "@/data/media";
import { Hero } from "@/components/sections/hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | All Around Cleaners",
  description: "Privacy policy for All Around Cleaners covering website inquiries, online bookings, and quote requests.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Privacy Policy" description="This policy explains how All Around Cleaners handles website form submissions and inquiry information." compact media={getPageMedia("privacy")} />
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6 text-base leading-8 text-slate">
          <p>We collect the information you submit through booking, quote, contact, and recruiting forms to respond to your request, schedule service, and provide support. This may include property details, contact information, and service preferences.</p>
          <p>Form submissions are processed through Formspree for notification and delivery workflows. You should avoid including sensitive personal data that is not required for service coordination.</p>
          <p>
            Information is used only for operational communication, quoting, scheduling, and internal service improvement. For privacy questions,
            use our contact page during service hours: {companyContact.hours}.
          </p>
        </div>
      </section>
    </>
  );
}
