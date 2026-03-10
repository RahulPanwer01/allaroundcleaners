import { Hero } from "@/components/sections/hero";
import { ButtonLink } from "@/components/shared/button-link";
import { SectionHeading } from "@/components/shared/section-heading";
import { getPageMedia } from "@/data/media";
import { buildMetadata } from "@/lib/seo";

const checklistSections: Array<{ title: string; items: string[] }> = [
  { title: "Kitchen", items: ["Countertops and backsplashes", "Sink and faucet sanitization", "Appliance exterior cleaning", "Cabinet exterior wipe-down", "Floor vacuum and mop"] },
  { title: "Bathrooms", items: ["Toilets, sinks, and tubs sanitized", "Mirrors polished", "Shower fixtures detailed", "Cabinet exteriors wiped", "Floor edges cleaned"] },
  { title: "Bedrooms", items: ["Dusting of reachable surfaces", "Floor care and corners", "Closet wipe-down on request", "Baseboards and trim as booked"] },
  { title: "Living Areas", items: ["Dusting of ledges and media surfaces", "Cushion and upholstery touch-up", "Vacuuming and mopping", "High-touch point sanitization"] },
  { title: "Hallways", items: ["Entryway floor reset", "Switch plates and handles", "Baseboards, corners, and trim touch-up"] },
  { title: "Optional Extras", items: ["Inside oven", "Inside fridge", "Interior windows", "Interior cabinets", "Laundry folding"] },
  { title: "Move-Out Focus", items: ["Inside cabinets and drawers", "Appliance interiors", "Wall mark spot attention", "Vacant-property final reset"] },
  { title: "Deep Cleaning Tasks", items: ["Grime and buildup reduction", "Detailed trim work", "Behind and around fixtures", "Extra bathroom and kitchen detail"] },
];

export const metadata = buildMetadata({
  title: "Cleaning Checklist | All Around Cleaners",
  description: "Review the room-by-room cleaning checklist for standard, move-out, and deep cleaning services.",
  path: "/checklist",
});

export default function ChecklistPage() {
  return (
    <>
      <Hero
        eyebrow="Cleaning Checklist"
        title="A room-by-room checklist that shows what professional cleaning should actually cover."
        description="Use this page to understand typical tasks, compare service scope, and decide which add-ons make sense for your property."
        compact
        media={getPageMedia("checklist")}
      />
      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Detailed Scope"
            title="Core tasks, specialty add-ons, and turnover-focused details."
            description="The exact scope can vary by service type and property condition, but this checklist shows the depth clients can expect."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {checklistSections.map(({ title, items }) => (
              <div key={title} className="card-surface p-6">
                <h2 className="text-xl font-semibold text-ink">{title}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/quote">Downloadable checklist CTA</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
