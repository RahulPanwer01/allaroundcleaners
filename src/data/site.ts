import {
  BadgeCheck,
  Building2,
  Clock3,
  Leaf,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

export const companyContact = {
  hours: "Monday to Sunday, 7:00 AM to 9:00 PM local time",
  responseTime: "Most online requests are reviewed within 15 minutes during operating hours.",
  primaryCta: {
    href: "/quote",
    label: "Request a Quote",
  },
  secondaryCta: {
    href: "/contact",
    label: "Send a Message",
  },
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/coverage", label: "Coverage" },
  { href: "/checklist", label: "Checklist" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const trustPoints = [
  "Trained professionals",
  "Local cleaning teams",
  "Top-rated service",
  "Tools and products provided",
  "Satisfaction guaranteed",
  "One-off or recurring options",
];

export const socialProof = [
  { label: "Canadian cities served", value: "29+" },
  { label: "Average response time", value: "< 15 min" },
  { label: "Satisfaction guarantee", value: "100%" },
  { label: "Recurring clients", value: "4,800+" },
];

export const whyChooseUs = [
  {
    title: "Built for real-life turnovers",
    description:
      "From move-outs to post-renovation cleanup, we handle high-detail jobs with clear scopes and dependable arrival windows.",
    icon: Clock3,
  },
  {
    title: "Screened, insured, accountable",
    description:
      "Every team follows a documented checklist, quality-control signoff, and insured operating standard.",
    icon: ShieldCheck,
  },
  {
    title: "Residential and commercial depth",
    description:
      "Homeowners, landlords, offices, realtors, and property managers can book one provider for every location.",
    icon: Building2,
  },
  {
    title: "Coverage across Canada",
    description:
      "We coordinate local crews in major markets while maintaining one national service standard and support team.",
    icon: MapPinned,
  },
  {
    title: "Healthy-product options",
    description:
      "Ask for low-scent, eco-conscious product selections for households with children, pets, or sensitivity concerns.",
    icon: Leaf,
  },
  {
    title: "Quote clarity first",
    description:
      "Transparent base pricing, add-on visibility, and custom quoting for heavy-duty or specialty cleaning work.",
    icon: BadgeCheck,
  },
];

export const footerGroups = {
  services: [
    { href: "/services/move-in-move-out-cleaning", label: "Move In / Move Out" },
    { href: "/services/deep-cleaning", label: "Deep Cleaning" },
    { href: "/services/commercial-cleaning", label: "Commercial Cleaning" },
    { href: "/services/post-renovation-cleaning", label: "Post-Renovation" },
    { href: "/services/housekeeper-maid-services", label: "Maid Services" },
  ],
  help: [
    { href: "/book-now", label: "Book Online" },
    { href: "/quote", label: "Get a Free Quote" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQs" },
    { href: "/join-us", label: "Join Our Team" },
  ],
  legal: [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};
