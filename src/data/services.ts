const serviceAreaNote =
  "Service availability and lead times vary by city. Request a quote for surrounding communities or custom-property scheduling.";

export const services = [
  {
    slug: "move-in-move-out-cleaning",
    shortLabel: "Move In / Move Out",
    name: "Move In / Move Out Cleaning",
    excerpt:
      "Detailed turnover cleaning for tenants, landlords, property managers, and homeowners preparing for keys or final inspection.",
    intro:
      "Vacant and near-vacant properties need a cleaning standard that goes beyond maintenance. We reset kitchens, bathrooms, floors, and overlooked edges so the space is ready for move-in, handover, or listing photos.",
    benefits: [
      "Helps support deposit-ready or handover-ready condition",
      "Faster turnaround for landlords and property managers",
      "Clear add-ons for appliance interiors and interior cabinets",
    ],
    checklist: [
      "Inside and outside of reachable cabinets",
      "Appliance exterior and optional interior detailing",
      "Bathroom sanitation and mineral deposit reduction",
      "Baseboards, trim, door frames, and switch plates",
      "Vacuuming, mopping, and final visual reset",
    ],
    useCases: [
      "End-of-lease cleaning",
      "Realtor turnover preparation",
      "Vacant property refresh before move-in day",
    ],
    process: [
      "Review property size, condition, and access details",
      "Confirm add-ons, target outcome, and appointment window",
      "Complete checklist-led cleaning and final walkthrough notes",
    ],
    faqs: [
      {
        question: "Do you clean empty and partially occupied properties?",
        answer:
          "Yes. We service both, although fully vacant properties allow the most complete access and fastest turnaround.",
      },
      {
        question: "Can you handle same-week move-out requests?",
        answer:
          "Yes, subject to scheduling availability in your city.",
      },
    ],
    related: [
      "deep-cleaning",
      "pre-sale-cleaning",
      "appliance-cleaning",
    ],
    serviceAreaNote,
  },
  {
    slug: "deep-cleaning",
    shortLabel: "Deep Cleaning",
    name: "Deep Cleaning",
    excerpt:
      "A full-home reset focused on buildup, overlooked details, and rooms that need more than routine maintenance.",
    intro:
      "Deep cleaning is the right starting point when a property needs a real reset. We target corners, trim, buildup, and detail work so the entire home feels fresher, healthier, and easier to maintain.",
    benefits: [
      "Ideal before starting recurring service",
      "Stronger visual improvement in neglected spaces",
      "Good fit after busy seasons, travel, or renovations",
    ],
    checklist: [
      "Detailed dusting of trim, frames, and ledges",
      "Kitchen grease and splash-zone cleanup",
      "Bathroom fixture detailing and grout-line attention",
      "Baseboard, vent, and high-touch point cleaning",
      "Floor care throughout main living spaces",
    ],
    useCases: [
      "Seasonal reset",
      "Post-event cleanup",
      "Pre-guest or pre-listing preparation",
    ],
    process: [
      "Assess current condition and room priorities",
      "Assign crew size based on home size and buildup level",
      "Perform a top-to-bottom detailed clean",
    ],
    faqs: [
      {
        question: "Is deep cleaning different from regular maid service?",
        answer:
          "Yes. It includes more detailed hand work, buildup removal, and neglected-area attention than a standard maintenance visit.",
      },
      {
        question: "Should I book deep cleaning before recurring service?",
        answer:
          "Usually yes. It establishes a stronger baseline and makes ongoing maintenance more effective.",
      },
    ],
    related: ["housekeeper-maid-services", "pre-sale-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "post-renovation-cleaning",
    shortLabel: "Post-Renovation",
    name: "Post Renovation Cleaning",
    excerpt:
      "Construction dust, debris residue, and finishing cleanup for renovated homes, offices, and investment properties.",
    intro:
      "Renovation work leaves behind fine dust and presentation issues that standard cleaning cannot fully address. Our post-renovation crews remove residue, polish surfaces, and prepare spaces for occupancy or client handoff.",
    benefits: [
      "Targets fine dust after sanding and cutting",
      "Reduces residue on surfaces, trim, and fixtures",
      "Presentation-ready finish for occupancy or photos",
    ],
    checklist: [
      "HEPA vacuuming of floors and reachable surfaces",
      "Detailed damp dusting of trim, frames, and ledges",
      "Kitchen and bathroom sanitization",
      "Sticker, adhesive, and paint-speck attention where possible",
      "Final presentation polish",
    ],
    useCases: ["Home renovation completion", "Builder handoff", "Retail fit-outs"],
    process: [
      "Confirm whether debris has been removed",
      "Identify dust-heavy surfaces and sensitive finishes",
      "Clean in repeated passes where required for fine particles",
    ],
    faqs: [
      {
        question: "Do you remove construction debris?",
        answer:
          "Light leftover debris can be managed, but large debris removal should be confirmed during quoting.",
      },
      {
        question: "Can you clean right after contractors finish?",
        answer:
          "Yes, once dust-producing work is complete and the site is safe for entry.",
      },
    ],
    related: ["deep-cleaning", "commercial-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "pre-sale-cleaning",
    shortLabel: "Pre-Sale",
    name: "Pre Sale Cleaning",
    excerpt:
      "Showing-ready cleaning designed for homeowners, realtors, staging teams, and investment property listings.",
    intro:
      "A clean property photographs better, shows better, and feels more maintained to buyers. We focus on visual impact, hygiene, and finishing details that help listing-ready spaces stand out.",
    benefits: [
      "Supports better first impressions for showings",
      "Flexible around staging and photo schedules",
      "Tailored for occupied or vacant listings",
    ],
    checklist: [
      "Kitchen and bathroom presentation detailing",
      "Glass, mirrors, and high-touch point polishing",
      "Trim, entry, and flooring refresh",
      "Odour-reduction and surface reset",
      "Final visual staging support clean",
    ],
    useCases: ["MLS launch prep", "Open house weekend", "Investor resale"],
    process: [
      "Align cleaning with listing timeline",
      "Target buyer-facing rooms and traffic areas first",
      "Finish with a presentation-focused walkthrough",
    ],
    faqs: [
      {
        question: "When should pre-sale cleaning be booked?",
        answer:
          "Usually after repairs and painting are finished, and before photography or staging traffic begins.",
      },
      {
        question: "Do you offer touch-up visits?",
        answer:
          "Yes. Follow-up touch-ups can be quoted for occupied homes and staged properties.",
      },
    ],
    related: ["move-in-move-out-cleaning", "deep-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "hoarder-cleaning",
    shortLabel: "Hoarder Cleanup",
    name: "Hoarder Cleaning",
    excerpt:
      "Respectful heavy-duty cleanup support for overwhelmed homes, neglected properties, and extreme-condition resets.",
    intro:
      "Some homes require a higher level of discretion, labour, and coordination. We approach heavy-duty cleanups with a calm process, clear communication, and a scope-first plan tailored to the property condition.",
    benefits: [
      "Non-judgmental approach and staged cleanup planning",
      "Suitable for landlords, families, and case managers",
      "Custom quoting for disposal and condition level",
    ],
    checklist: [
      "Initial condition review and risk flagging",
      "Surface recovery and sanitation",
      "Odour, debris, and contamination-focused cleaning",
      "Targeted bathroom and kitchen rehabilitation",
      "Optional multi-visit cleanup scheduling",
    ],
    useCases: ["Extreme neglect", "Probate properties", "Landlord recovery"],
    process: [
      "Review photos or arrange a custom quote intake",
      "Phase work based on safety and access needs",
      "Complete cleanup and document scope completion",
    ],
    faqs: [
      {
        question: "Do you offer private quoting for sensitive jobs?",
        answer:
          "Yes. We handle heavy-duty inquiries discreetly and can quote from photos or a scheduled assessment.",
      },
      {
        question: "Can this be done over multiple visits?",
        answer:
          "Yes. Larger cleanups are often phased for safety, budget, and access reasons.",
      },
    ],
    related: ["deep-cleaning", "move-in-move-out-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "carpet-upholstery-cleaning",
    shortLabel: "Carpet and Upholstery",
    name: "Carpet & Upholstery Cleaning",
    excerpt:
      "Refresh carpets, rugs, sofas, chairs, and soft furnishings with spot-focused and presentation-ready care.",
    intro:
      "Soft surfaces hold dust, odours, and visible wear. Our carpet and upholstery cleaning service helps restore freshness, improve appearance, and extend the life of high-traffic fabrics.",
    benefits: [
      "Helps reduce odours and visible spotting",
      "Improves presentation in homes and offices",
      "Pairs well with move-out and pre-sale cleaning",
    ],
    checklist: [
      "Pre-inspection of fabric or carpet condition",
      "Targeted stain and spot treatment",
      "Machine cleaning based on surface type",
      "Drying and aftercare guidance",
      "Optional bundled room reset cleaning",
    ],
    useCases: ["Rental turnovers", "Pet households", "Office seating refresh"],
    process: [
      "Inspect material and identify high-traffic zones",
      "Apply the appropriate cleaning method",
      "Review drying expectations and immediate care steps",
    ],
    faqs: [
      {
        question: "Do all stains come out completely?",
        answer:
          "Not always. Results depend on stain type, age, fabric, and prior treatment history.",
      },
      {
        question: "How long does drying take?",
        answer:
          "Dry times vary, but most surfaces dry within several hours with normal airflow.",
      },
    ],
    related: ["deep-cleaning", "pre-sale-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "appliance-cleaning",
    shortLabel: "Appliance Cleaning",
    name: "Appliance Cleaning",
    excerpt:
      "Interior and exterior appliance detailing for kitchens that need a true reset, not just a quick wipe.",
    intro:
      "Appliances are some of the most time-consuming parts of a proper turnover clean. We clean ovens, fridges, microwaves, and other kitchen appliances so the room looks and feels genuinely refreshed.",
    benefits: [
      "Popular add-on for move-out and pre-sale jobs",
      "Helps remove food residue, grease, and odour",
      "Clear per-appliance add-on pricing",
    ],
    checklist: [
      "Fridge shelves and drawers cleaned",
      "Oven interior degreased where condition allows",
      "Microwave interior and exterior detailed",
      "Exterior polishing of visible appliance faces",
      "Control panel and handle sanitization",
    ],
    useCases: ["Move-out", "Kitchen reset", "Rental turnover preparation"],
    process: [
      "Confirm which appliances need interior service",
      "Assess condition and time required",
      "Detail each unit and reset visible surfaces",
    ],
    faqs: [
      {
        question: "Is appliance cleaning included in every package?",
        answer:
          "Exterior wipe-downs are common, but interior appliance cleaning is usually an add-on unless otherwise stated.",
      },
      {
        question: "Can you clean heavily soiled ovens?",
        answer:
          "Yes, though extreme buildup may require extra labour and custom pricing.",
      },
    ],
    related: ["move-in-move-out-cleaning", "deep-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "commercial-cleaning",
    shortLabel: "Commercial",
    name: "Commercial Cleaning",
    excerpt:
      "Flexible cleaning support for offices, clinics, retail spaces, common areas, and small commercial facilities.",
    intro:
      "Commercial environments need reliable crews, clear communication, and consistent quality. We support scheduled and one-time cleaning scopes for workplaces that need a professional finish without operational friction.",
    benefits: [
      "After-hours and low-disruption scheduling",
      "Suitable for office, retail, and mixed-use spaces",
      "Account management for repeat clients",
    ],
    checklist: [
      "Desk-area dusting and common-space reset",
      "Washroom sanitization and restocking notes",
      "Breakroom and kitchenette cleaning",
      "Entrance, glass touchpoint, and floor care",
      "Custom zone checklists by site",
    ],
    useCases: ["Office upkeep", "Retail cleaning", "Shared building areas"],
    process: [
      "Assess traffic, timing, and access requirements",
      "Build a checklist aligned to the facility",
      "Deliver recurring or one-time service with reporting",
    ],
    faqs: [
      {
        question: "Do you offer recurring contracts?",
        answer:
          "Yes. Daily, weekly, and custom schedules are available depending on the site.",
      },
      {
        question: "Can you clean outside business hours?",
        answer:
          "Yes. Early morning, evening, and weekend scheduling is available in many service areas.",
      },
    ],
    related: ["post-renovation-cleaning", "pressure-washing"],
    serviceAreaNote,
  },
  {
    slug: "pressure-washing",
    shortLabel: "Pressure Washing",
    name: "Pressure Washing",
    excerpt:
      "Exterior cleaning for driveways, walkways, patios, siding, storefronts, and other hard surfaces.",
    intro:
      "Pressure washing helps remove built-up grime, algae, and seasonal residue from outdoor surfaces. We tailor pressure levels and methods to the surface condition so cleaning is effective without being careless.",
    benefits: [
      "Improves curb appeal quickly",
      "Good fit for pre-sale and commercial exterior refreshes",
      "Custom assessment for delicate surfaces",
    ],
    checklist: [
      "Driveways, pathways, and entry approaches",
      "Patios, decks, and outdoor hardscape zones",
      "Storefront or common-area exterior surfaces",
      "Surface-condition review before washing",
      "Optional bundled exterior cleanup quote",
    ],
    useCases: ["Spring exterior refresh", "Listing prep", "Commercial frontage"],
    process: [
      "Review surface type and runoff considerations",
      "Confirm weather and access requirements",
      "Complete washing and final spot check",
    ],
    faqs: [
      {
        question: "Do you pressure wash all exterior materials?",
        answer:
          "Not all surfaces should be treated the same way. We assess the safest method before confirming the job.",
      },
      {
        question: "Is water access required onsite?",
        answer:
          "In most cases, yes. If access is limited, let us know during the quote request.",
      },
    ],
    related: ["pre-sale-cleaning", "commercial-cleaning"],
    serviceAreaNote,
  },
  {
    slug: "housekeeper-maid-services",
    shortLabel: "Maid Services",
    name: "Housekeeper / Maid Services",
    excerpt:
      "Recurring or one-time home cleaning for busy households that want a dependable maintenance routine.",
    intro:
      "When you need reliable upkeep without micromanaging every appointment, our housekeeper and maid service offers practical home maintenance with clear standards and flexible frequency options.",
    benefits: [
      "Weekly, bi-weekly, or monthly scheduling",
      "Simple recurring-home checklist structure",
      "Easy to upgrade with occasional add-ons",
    ],
    checklist: [
      "Kitchen, bathrooms, bedrooms, and living areas",
      "Dusting, floors, and high-touch sanitation",
      "Bed making and light tidying on request",
      "Garbage and recycling reset",
      "Optional laundry or fridge add-ons",
    ],
    useCases: ["Busy households", "Professionals", "Family homes"],
    process: [
      "Select frequency and household priorities",
      "Start with a baseline clean if needed",
      "Maintain the home on a recurring schedule",
    ],
    faqs: [
      {
        question: "Can I request the same cleaner or team?",
        answer:
          "We do our best to keep recurring clients with a consistent crew whenever scheduling allows.",
      },
      {
        question: "Do you offer one-time maid service?",
        answer:
          "Yes. One-time housekeeping visits are available as well.",
      },
    ],
    related: ["deep-cleaning", "appliance-cleaning"],
    serviceAreaNote,
  },
] as const;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
