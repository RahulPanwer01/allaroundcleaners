export type HeroMedia = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type CardMedia = {
  src: string;
  alt: string;
};

const library = {
  homeCleaning: {
    src: "https://images.pexels.com/photos/7513163/pexels-photo-7513163.jpeg?cs=srgb&dl=pexels-shvets-production-7513163.jpg&fm=jpg",
    alt: "Cleaner mopping a tidy modern home interior.",
  },
  cleanerPortrait: {
    src: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?cs=srgb&dl=pexels-olly-3768914.jpg&fm=jpg",
    alt: "Professional cleaner holding supplies inside a bright home.",
  },
  disinfecting: {
    src: "https://images.pexels.com/photos/4008518/pexels-photo-4008518.jpeg?cs=srgb&dl=pexels-polina-zimmerman-4008518.jpg&fm=jpg",
    alt: "Hands disinfecting an interior surface with spray cleaner and cloth.",
  },
  kitchen: {
    src: "https://images.pexels.com/photos/7214453/pexels-photo-7214453.jpeg?cs=srgb&dl=pexels-artbovich-7214453.jpg&fm=jpg",
    alt: "Bright modern kitchen with clean counters and cabinets.",
  },
  lounge: {
    src: "https://images.pexels.com/photos/10339232/pexels-photo-10339232.jpeg?cs=srgb&dl=pexels-ron-lach-10339232.jpg&fm=jpg",
    alt: "Warm-toned lounge seating area with tables and clean finishes.",
  },
  keys: {
    src: "https://images.pexels.com/photos/29871187/pexels-photo-29871187.jpeg?cs=srgb&dl=pexels-jakubzerdzicki-29871187.jpg&fm=jpg",
    alt: "House keys held in front of a softly blurred home interior.",
  },
  bathroom: {
    src: "https://images.pexels.com/photos/4529498/pexels-photo-4529498.jpeg?cs=srgb&dl=pexels-curtis-adams-1694007-4529498.jpg&fm=jpg",
    alt: "Fresh, bright bathroom interior with clean fixtures and vanity.",
  },
  livingRoom: {
    src: "https://images.pexels.com/photos/27059629/pexels-photo-27059629.jpeg?cs=srgb&dl=pexels-wilcle-nunes-38713774-27059629.jpg&fm=jpg",
    alt: "Neutral living room with warm wood tones and a styled seating area.",
  },
  emptyInterior: {
    src: "https://images.pexels.com/photos/35896210/pexels-photo-35896210.jpeg?cs=srgb&dl=pexels-peter-vang-2157328093-35896210.jpg&fm=jpg",
    alt: "Bright empty apartment interior with open kitchen and flooring.",
  },
  cityBuilding: {
    src: "https://images.pexels.com/photos/18732717/pexels-photo-18732717.jpeg?cs=srgb&dl=pexels-aloevera-18732717.jpg&fm=jpg",
    alt: "Modern apartment building exterior with balconies and glass.",
  },
} as const;

export const pageMedia = {
  home: {
    ...library.homeCleaning,
    eyebrow: "Warm, polished results",
    title: "Residential, rental, and office cleaning that feels orderly from the first click.",
    description: "Clear scheduling, warm presentation, and service pages built around real property turnover needs.",
  },
  about: {
    ...library.cleanerPortrait,
    eyebrow: "People behind the standard",
    title: "A service model built around calm communication and dependable detail work.",
    description: "The company story, standards, and quality promise are now paired with real-world interiors instead of placeholder blocks.",
  },
  services: {
    ...library.disinfecting,
    eyebrow: "Service depth",
    title: "From routine resets to detail-heavy turnovers, every service is mapped to a clear outcome.",
    description: "The visuals now support the practical, room-by-room positioning of the service catalogue.",
  },
  pricing: {
    ...library.kitchen,
    eyebrow: "Transparent scope",
    title: "Warm interiors and clear pricing guidance work better together than sterile pricing tables alone.",
    description: "This page now feels more premium and grounded, with imagery that matches the quoting flow.",
  },
  quote: {
    ...library.lounge,
    eyebrow: "Custom projects",
    title: "The quote flow now sits inside a calmer, warmer visual language.",
    description: "Better suited for custom residential, commercial, and specialty cleaning inquiries.",
  },
  bookNow: {
    ...library.homeCleaning,
    eyebrow: "Ready to schedule",
    title: "Booking now feels like a real property intake flow, not a generic form page.",
    description: "The image treatment reinforces home-ready presentation and practical service planning.",
  },
  contact: {
    ...library.lounge,
    eyebrow: "Support and coordination",
    title: "Use the contact page for general questions, routing, and follow-up support.",
    description: "Warm hospitality-style imagery fits the communication layer better than cold placeholders.",
  },
  coverage: {
    ...library.cityBuilding,
    eyebrow: "Coverage with context",
    title: "Province and city pages now feel connected to real buildings and real client use cases.",
    description: "Urban residential imagery supports the local-service positioning across coverage routes.",
  },
  checklist: {
    ...library.kitchen,
    eyebrow: "Room-by-room expectations",
    title: "The checklist now sits beside a clean interior reference instead of text alone.",
    description: "This helps the page feel more tangible for homeowners comparing service scope.",
  },
  faq: {
    ...library.bathroom,
    eyebrow: "Questions answered clearly",
    title: "A practical FAQ works better when the page looks like the spaces clients actually care about.",
    description: "Neutral, polished interiors keep the page aligned with service credibility.",
  },
  joinUs: {
    ...library.cleanerPortrait,
    eyebrow: "Join the team",
    title: "Recruiting pages should feel human and service-driven, not generic or corporate.",
    description: "The new visual direction supports team quality, professionalism, and field credibility.",
  },
  blog: {
    ...library.livingRoom,
    eyebrow: "Advice clients can use",
    title: "The blog now looks like it belongs to a premium cleaning brand, not a text archive.",
    description: "Warm neutral interiors make the advice pages feel grounded and relevant.",
  },
  privacy: {
    ...library.lounge,
    eyebrow: "Clear policies",
    title: "Even legal pages now sit inside the same polished, warm visual system.",
    description: "The imagery stays subtle while keeping the overall site from dropping back into placeholders.",
  },
  terms: {
    ...library.lounge,
    eyebrow: "Service terms",
    title: "Legal content still needs a coherent visual frame.",
    description: "This keeps policy pages aligned with the rest of the redesigned site.",
  },
} as const;

export const serviceMedia: Record<string, HeroMedia> = {
  "move-in-move-out-cleaning": {
    ...library.emptyInterior,
    eyebrow: "Turnover ready",
    title: "Vacant and near-vacant properties benefit from crisp, presentation-ready interiors.",
    description: "This image supports move-in, move-out, listing, and final handover positioning.",
  },
  "deep-cleaning": {
    ...library.disinfecting,
    eyebrow: "Detailed reset",
    title: "Deep cleaning is about visible care, sanitation, and a stronger baseline.",
    description: "The image reinforces hands-on detail work rather than generic brochure styling.",
  },
  "post-renovation-cleaning": {
    ...library.emptyInterior,
    eyebrow: "After the dust settles",
    title: "Fresh interiors and clean surfaces make renovation handoff feel complete.",
    description: "Used here as a cleaned, ready-to-occupy space rather than a construction scene.",
  },
  "pre-sale-cleaning": {
    ...library.keys,
    eyebrow: "Showing ready",
    title: "Pre-sale cleaning is about presentation, timing, and buyer confidence.",
    description: "The keys and softly staged interior support real-estate-facing positioning.",
  },
  "hoarder-cleaning": {
    ...library.cleanerPortrait,
    eyebrow: "Respectful heavy-duty support",
    title: "Sensitive cleanup work still needs a calm, human visual tone.",
    description: "This avoids sensational imagery while still feeling service-related.",
  },
  "carpet-upholstery-cleaning": {
    ...library.livingRoom,
    eyebrow: "Soft-surface refresh",
    title: "Living spaces make the upholstery and carpet service more relatable immediately.",
    description: "Warm residential furniture photography fits the service better than abstractions.",
  },
  "appliance-cleaning": {
    ...library.kitchen,
    eyebrow: "Kitchen detail",
    title: "Appliance cleaning needs a clean, modern kitchen reference to feel relevant.",
    description: "This keeps the service grounded in the room clients usually picture first.",
  },
  "commercial-cleaning": {
    ...library.lounge,
    eyebrow: "Commercial spaces",
    title: "Business-facing cleaning pages need polished interiors that still feel real.",
    description: "The warm lounge environment works for office, hospitality, and shared-space service positioning.",
  },
  "pressure-washing": {
    ...library.cityBuilding,
    eyebrow: "Exterior presentation",
    title: "Exterior cleaning is about curb appeal, surfaces, and visible upkeep.",
    description: "A strong building exterior supports the outdoor service narrative better than generic placeholders.",
  },
  "housekeeper-maid-services": {
    ...library.homeCleaning,
    eyebrow: "Ongoing home support",
    title: "Recurring home care should feel lived-in, warm, and realistic.",
    description: "This image reinforces the maintenance-service side of the business clearly.",
  },
};

export const blogMedia: Record<string, CardMedia> = {
  "move-out-cleaning-cost-canada": library.keys,
  "deep-cleaning-vs-regular-cleaning": library.homeCleaning,
  "included-in-post-renovation-cleaning": library.emptyInterior,
  "prepare-for-professional-cleaner": library.cleanerPortrait,
  "best-time-to-book-pre-sale-cleaning": library.livingRoom,
};

export function getPageMedia(page: keyof typeof pageMedia) {
  return pageMedia[page];
}

export function getServiceMedia(slug: string) {
  return serviceMedia[slug] ?? pageMedia.services;
}

export function getBlogMedia(slug: string) {
  return blogMedia[slug] ?? pageMedia.blog;
}

export function getLocationMedia(kind: "province" | "city") {
  if (kind === "province") {
    return {
      ...library.cityBuilding,
      eyebrow: "Regional coverage",
      title: "Province pages now feel tied to the kinds of buildings and communities clients actually book from.",
      description: "A modern residential exterior supports coverage, reach, and location-driven trust.",
    };
  }

  return {
    ...library.livingRoom,
    eyebrow: "Local service fit",
    title: "City pages work better with a warm residential visual than another abstract content block.",
    description: "This keeps local landing pages grounded in the spaces clients are trying to reset.",
  };
}

export function getLocationCardMedia() {
  return library.cityBuilding;
}
