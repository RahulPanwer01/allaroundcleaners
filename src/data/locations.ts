import { services } from "@/data/services";

export const provinces = [
  {
    slug: "ontario",
    name: "Ontario",
    intro:
      "High-volume residential and commercial cleaning support for Ontario homes, condos, offices, and rental turnovers.",
    cities: [
      "Toronto",
      "Ottawa",
      "Mississauga",
      "Brampton",
      "Hamilton",
      "London",
      "Markham",
      "Kitchener",
      "Windsor",
      "Oakville",
      "Burlington",
      "Barrie",
      "St. Catharines",
      "Niagara Falls",
      "Sudbury",
      "Thunder Bay",
      "Cambridge",
      "Guelph",
    ],
    faqs: [
      {
        question: "Do you service condos and detached homes across Ontario?",
        answer:
          "Yes. We coordinate teams for condos, townhomes, detached homes, rental units, and commercial sites in Ontario markets.",
      },
      {
        question: "Can you handle urgent end-of-month move-outs in Ontario?",
        answer:
          "Yes, subject to crew availability and property access requirements in your city.",
      },
    ],
  },
  {
    slug: "british-columbia",
    name: "British Columbia",
    intro:
      "Flexible cleaning coverage for BC properties, including dense urban condos, suburban homes, and commercial spaces.",
    cities: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Kelowna"],
    faqs: [
      {
        question: "Do you work around condo tower move-in and elevator bookings?",
        answer:
          "Yes. We regularly coordinate access windows, loading requirements, and strata-style entry procedures.",
      },
      {
        question: "Is post-renovation cleaning available in BC?",
        answer:
          "Yes. Post-renovation and pre-sale cleaning are available across our BC service areas.",
      },
    ],
  },
  {
    slug: "alberta",
    name: "Alberta",
    intro:
      "Practical, high-response cleaning support for Alberta households, offices, and turnover-heavy rental properties.",
    cities: ["Calgary", "Edmonton"],
    faqs: [
      {
        question: "Do you provide commercial cleaning in Alberta?",
        answer:
          "Yes. Offices, clinics, retail spaces, and shared commercial zones can be quoted for one-time or recurring service.",
      },
      {
        question: "Can I bundle carpet cleaning with a move-out in Alberta?",
        answer:
          "Yes. Combined service requests are available depending on scheduling and crew type in your market.",
      },
    ],
  },
  {
    slug: "manitoba",
    name: "Manitoba",
    intro:
      "Responsive cleaning support for Winnipeg homes, offices, rental turnovers, and detailed one-time jobs.",
    cities: ["Winnipeg"],
    faqs: [
      {
        question: "Do you offer move-out cleaning in Winnipeg?",
        answer:
          "Yes. Move-out, deep cleaning, and custom turnover jobs are available in Winnipeg.",
      },
      {
        question: "Can you quote office cleaning in Manitoba?",
        answer:
          "Yes. Commercial cleaning scopes can be quoted for offices and mixed-use spaces.",
      },
    ],
  },
  {
    slug: "saskatchewan",
    name: "Saskatchewan",
    intro:
      "Coverage for residential and commercial properties in Saskatchewan with flexible quoting for specialty cleaning.",
    cities: ["Saskatoon", "Regina"],
    faqs: [
      {
        question: "Are deep cleans available outside the downtown core?",
        answer:
          "Yes. We can often service surrounding communities through custom scheduling.",
      },
      {
        question: "Do you quote heavy-duty cleanup jobs in Saskatchewan?",
        answer:
          "Yes. Hoarder and extreme-condition cleanup is handled through a custom intake process.",
      },
    ],
  },
  {
    slug: "nova-scotia",
    name: "Nova Scotia",
    intro:
      "City-focused cleaning support for Halifax properties, from recurring homes to time-sensitive turnover work.",
    cities: ["Halifax"],
    faqs: [
      {
        question: "Can I book a deep cleaning in Halifax?",
        answer:
          "Yes. Deep cleaning, move-out, and pre-sale cleaning are available in Halifax.",
      },
      {
        question: "Do you handle condo and apartment cleanings in Nova Scotia?",
        answer:
          "Yes. We service apartments, condos, and detached homes in supported areas.",
      },
    ],
  },
  {
    slug: "new-brunswick",
    name: "New Brunswick",
    intro:
      "Regional cleaning support for homes, offices, and turnover properties in New Brunswick markets.",
    cities: ["Moncton", "Fredericton", "Saint John"],
    faqs: [
      {
        question: "Do you serve all of Atlantic Canada?",
        answer:
          "Coverage expands based on demand and routing. Contact us for custom regional requests beyond the listed hubs.",
      },
      {
        question: "Can I request recurring home cleaning in this region?",
        answer:
          "Yes. Recurring home cleaning is available in supported areas.",
      },
    ],
  },
] as const;

type CityRecord = {
  slug: string;
  name: string;
  provinceSlug: string;
  provinceName: string;
  intro: string;
  neighborhoods: string[];
};

function citySlug(name: string) {
  return name.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-");
}

const cityDefinitionsInput: Array<[string, string, string[]]> = [
  ["Toronto", "ontario", ["Downtown", "North York", "Etobicoke"]],
  ["Vancouver", "british-columbia", ["Downtown", "Kitsilano", "Mount Pleasant"]],
  ["Calgary", "alberta", ["Beltline", "Bridgeland", "Auburn Bay"]],
  ["Edmonton", "alberta", ["Downtown", "Strathcona", "Windermere"]],
  ["Ottawa", "ontario", ["Centretown", "Kanata", "Orleans"]],
  ["Mississauga", "ontario", ["City Centre", "Port Credit", "Erin Mills"]],
  ["Winnipeg", "manitoba", ["Exchange District", "St. James", "St. Vital"]],
  ["Brampton", "ontario", ["Downtown", "Bramalea", "Mount Pleasant"]],
  ["Surrey", "british-columbia", ["Guildford", "Fleetwood", "Newton"]],
  ["Halifax", "nova-scotia", ["Downtown", "Bedford", "Dartmouth"]],
  ["Hamilton", "ontario", ["Durand", "Stoney Creek", "Ancaster"]],
  ["London", "ontario", ["Old North", "Masonville", "Byron"]],
  ["Markham", "ontario", ["Unionville", "Cornell", "Thornhill"]],
  ["Burnaby", "british-columbia", ["Metrotown", "Brentwood", "Edmonds"]],
  ["Kitchener", "ontario", ["Downtown", "Lackner Woods", "Huron Park"]],
  ["Windsor", "ontario", ["Walkerville", "South Windsor", "Riverside"]],
  ["Saskatoon", "saskatchewan", ["Nutana", "Evergreen", "Stonebridge"]],
  ["Regina", "saskatchewan", ["Cathedral", "Harbour Landing", "Greens"]],
  ["Richmond", "british-columbia", ["Steveston", "City Centre", "Bridgeport"]],
  ["Oakville", "ontario", ["Bronte", "Uptown", "Glen Abbey"]],
  ["Burlington", "ontario", ["Downtown", "Aldershot", "The Orchard"]],
  ["Barrie", "ontario", ["Allandale", "Painswick", "Ardagh"]],
  ["St. Catharines", "ontario", ["Port Dalhousie", "Merritton", "Downtown"]],
  ["Niagara Falls", "ontario", ["Lundy's Lane", "Drummond", "Chippawa"]],
  ["Kelowna", "british-columbia", ["Downtown", "Rutland", "Lower Mission"]],
  ["Sudbury", "ontario", ["New Sudbury", "South End", "Minnow Lake"]],
  ["Thunder Bay", "ontario", ["Port Arthur", "Fort William", "Northwood"]],
  ["Cambridge", "ontario", ["Galt", "Preston", "Hespeler"]],
  ["Guelph", "ontario", ["Downtown", "South End", "Exhibition Park"]],
];

const cityDefinitions: CityRecord[] = cityDefinitionsInput.map(([name, provinceSlug, neighborhoods]) => {
  const province = provinces.find((entry) => entry.slug === provinceSlug)!;

  return {
    slug: citySlug(name),
    name,
    provinceSlug,
    provinceName: province.name,
    intro: `All Around Cleaners provides detail-focused cleaning services in ${name}, with support for homes, rentals, offices, and urgent turnover jobs.`,
    neighborhoods,
  };
});

export const cities = cityDefinitions;

export const cityServices = services.map((service) => ({
  slug: service.slug,
  name: service.name,
}));

export function getProvinceBySlug(slug: string) {
  return provinces.find((province) => province.slug === slug);
}

export function getCityBySlugs(provinceSlug: string, citySlugValue: string) {
  return cities.find(
    (city) => city.provinceSlug === provinceSlug && city.slug === citySlugValue,
  );
}
