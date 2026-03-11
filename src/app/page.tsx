import Link from "next/link";
import { PlayCircle, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { ServiceCard, PricingCard, LocationCard, BlogCard } from "@/components/shared/cards";
import { SectionHeading } from "@/components/shared/section-heading";
import { TrustStrip } from "@/components/shared/trust-strip";
import { ProcessSteps } from "@/components/shared/process-steps";
import { StatsSection } from "@/components/shared/stats-section";
import { CtaBanner } from "@/components/shared/cta-banner";
import { blogPosts } from "@/data/blog";
import { getPageMedia } from "@/data/media";
import { cities } from "@/data/locations";
import { pricingTiers } from "@/data/pricing";
import { services } from "@/data/services";
import { trustPoints, whyChooseUs } from "@/data/site";

const stats = [
  { value: "29+", label: "Cities covered", description: "National support with local crew coordination in major Canadian markets." },
  { value: "7 days", label: "Service availability", description: "Weekday and weekend scheduling for high-demand households and businesses." },
  { value: "15 min", label: "Fast quote response", description: "Rapid intake for online leads and urgent turnover requests." },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Professional Cleaning Services Across Canada"
        title="Reliable, fully equipped cleaning teams for homes, rentals, offices, and move-out jobs."
        description="All Around Cleaners helps homeowners, renters, landlords, realtors, and businesses keep properties presentation-ready with transparent pricing, fast scheduling, and detail-led cleaning standards."
        bullets={trustPoints}
        media={getPageMedia("home")}
      />
      <TrustStrip />
      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Built for confidence"
              title="A premium cleaning experience designed to convert inquiries into booked jobs."
              description="The site is structured around the real buying flow: service discovery, pricing clarity, coverage validation, and friction-free booking."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Property managers", "Fast turnover support with clear scopes and photo-ready results."],
              ["Homeowners", "Flexible one-time and recurring service with transparent add-ons."],
              ["Realtors", "Listing-ready presentation cleaning and timing-sensitive touch-ups."],
              ["Businesses", "Dependable office and commercial cleaning without operational friction."],
            ].map(([title, description]) => (
              <div key={title} className="card-surface p-6">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How It Works"
            title="Request, confirm, and clean without the usual back-and-forth."
            description="Every booking follows a clear path so clients know what to expect before the crew arrives."
            align="center"
          />
          <div className="mt-12">
            <ProcessSteps
              steps={[
                { title: "Choose your service", description: "Start with a fixed-price package or request a custom quote for larger or specialty jobs." },
                { title: "Confirm property details", description: "We review size, condition, add-ons, access notes, and timing before dispatch." },
                { title: "Get a polished result", description: "Your crew arrives equipped, follows a checklist, and completes a final quality review." },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Residential and commercial cleaning services built around real-world property needs."
            description="From routine upkeep to heavy-duty reset work, every service is designed to support a specific outcome."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.excerpt} href={`/services/${service.slug}`} />
            ))}
          </div>
        </div>
      </section>
      <StatsSection stats={stats} />
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The trust layer clients need before they book."
            description="We combine responsive lead handling, operational consistency, and a practical service mix that fits homes, rentals, and commercial sites."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="card-surface p-6">
                  <span className="inline-flex rounded-2xl bg-teal/10 p-3 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Get a cleaning plan that fits the property, not a generic package."
        description="Tell us what you need, choose your city, and we will recommend the right service mix with straightforward pricing."
      />
      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8">
            <SectionHeading
              eyebrow="What To Expect"
              title="A service standard designed for fewer surprises."
              description="Clients choose us because the process stays clear from intake to completion."
            />
            <ul className="mt-8 space-y-4 text-sm leading-6 text-slate">
              {[
                "Arrival windows confirmed before dispatch",
                "Checklist-led cleaning with clear add-on notes",
                "Products and tools included for standard jobs",
                "Custom quoting for heavy-duty and specialty work",
                "Follow-up support if the agreed scope needs attention",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface overflow-hidden">
            <div className="flex h-full flex-col justify-between bg-gradient-to-br from-[#f8efe6] via-[#f3e5d7] to-[#ebd5c2] p-8 text-ink">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-teal/80">Client-ready standards</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold">The handover checklist clients expect before they call a job complete.</h2>
                <p className="mt-4 text-sm leading-7 text-slate">
                  Every service is reviewed against access notes, scope details, kitchen and bath standards, floor finishing, and a final presentation check.
                </p>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-ink sm:grid-cols-2">
                {[
                  "Arrival and access confirmed",
                  "Bathrooms sanitized and reset",
                  "Kitchen fronts and surfaces detailed",
                  "Floors finished and final walkthrough completed",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#d9c2ad] bg-white/70 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <PlayCircle className="h-4 w-4 text-teal" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Pricing Preview"
            title="Transparent starting prices for standard homes."
            description="Custom properties, commercial sites, heavy-duty jobs, and specialty equipment scopes are quoted separately."
          />
          <div className="mt-12 grid gap-6 xl:grid-cols-5">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.slug} label={tier.label} price={tier.price} lead={tier.lead} features={tier.features} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/pricing">View full pricing</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Coverage"
            title="Major Canadian city coverage with local dispatch support."
            description="Browse province and city pages for service notes, local FAQs, and internal links to the most relevant cleaning services."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cities.slice(0, 9).map((city) => (
              <LocationCard
                key={city.slug}
                title={city.name}
                description={`${city.name} cleaning services for homes, rentals, offices, and specialty projects.`}
                href={`/locations/${city.provinceSlug}/${city.slug}`}
              />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/coverage" variant="secondary">
              Explore all coverage pages
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="section-space bg-sand">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Advice"
            title="Helpful articles that support pricing, planning, and booking decisions."
            description="Original, search-ready content written for homeowners, renters, landlords, and business operators."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                href={`/blog/${post.slug}`}
                meta={`${post.category} • ${post.readTime}`}
              />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
              Read all articles <Sparkles className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
