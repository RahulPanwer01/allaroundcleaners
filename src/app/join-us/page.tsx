import { JoinForm } from "@/components/forms/join-form";
import { Hero } from "@/components/sections/hero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Join Our Team | All Around Cleaners",
  description: "Apply to join All Around Cleaners as a residential or commercial cleaner in Canadian service cities.",
  path: "/join-us",
});

export default function JoinUsPage() {
  return (
    <>
      <Hero
        eyebrow="Join Us"
        title="Work with a cleaning company that values reliability, professionalism, and practical support."
        description="We hire detail-focused cleaners for residential, commercial, and specialty jobs across Canadian service markets."
        compact
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">Why work with us</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
                <li>Consistent scheduling opportunities in active markets</li>
                <li>Support for residential, commercial, and specialty job types</li>
                <li>Clear job notes and client expectations before dispatch</li>
              </ul>
            </div>
            <div className="card-surface p-6">
              <h2 className="text-xl font-semibold text-ink">Requirements</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
                <li>Professional cleaning experience preferred</li>
                <li>Strong communication and reliability</li>
                <li>Ability to travel within your local market</li>
                <li>Open to contractor or employee-style opportunities depending on region</li>
              </ul>
            </div>
          </div>
          <JoinForm />
        </div>
      </section>
    </>
  );
}
