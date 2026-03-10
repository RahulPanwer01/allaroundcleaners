import { Hero } from "@/components/sections/hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service | All Around Cleaners",
  description: "Terms of service for All Around Cleaners website use, booking requests, and service coordination.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Terms of Service" description="These terms govern website use, quote requests, online bookings, and service coordination with All Around Cleaners." compact />
      <section className="section-space">
        <div className="container-shell max-w-4xl space-y-6 text-base leading-8 text-slate">
          <p>All Around Cleaners provides cleaning information, quote intake, and online booking request tools through this website. Submitting a form does not guarantee service until scope, timing, access, and availability are confirmed.</p>
          <p>Quoted pricing may change if property condition, size, or requested tasks differ from the original intake. Clients are responsible for providing accurate access details and disclosing conditions that materially affect labour or safety.</p>
          <p>Service windows, cancellation terms, and any site-specific requirements are confirmed directly with the client before dispatch. Website content is provided for general information and may be updated without notice.</p>
        </div>
      </section>
    </>
  );
}
