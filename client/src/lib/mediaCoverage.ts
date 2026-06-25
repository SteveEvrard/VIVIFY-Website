export type MediaCoverageItem = {
  slug: string;
  title: string;
  publication: string;
  author?: string;
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  excerpt: string;
  /** External URL to the published article */
  url: string;
};

export const MEDIA_COVERAGE: MediaCoverageItem[] = [
  {
    slug: "datacenterfrontier-emerging-power-strategies-ai-data-center",
    title: "Emerging Power Strategies Transforming AI Data Center Development",
    publication: "Data Center Frontier",
    author: "David Chernicoff",
    date: "2026-06-16",
    excerpt:
      "Data Center Frontier examines how power availability is increasingly constraining AI data center development and driving new infrastructure approaches. The article highlights VIVIFY Technology's closed-loop, hydrogen-based power designed to reduce dependence on the traditional grid, positioning the containerized Flying Pig™ system as a modular alternative to conventional utility service and diesel backup generation.",
    url: "https://www.datacenterfrontier.com/energy/article/55383447/emerging-power-strategies-transforming-ai-data-center-development",
  },
  {
    slug: "forbes-hydrogen-developer-food-systems-off-grid",
    title: "This Hydrogen Developer Is Trying To Take Food Systems Off Grid",
    publication: "Forbes",
    author: "Daphne Ewing-Chow",
    date: "2026-06-06",
    excerpt:
      "Forbes profiles VIVIFY Technology and its push to apply hydrogen power to agriculture and food systems, exploring how the company's containerized energy platform could enable off-grid food production. The piece positions VIVIFY's approach as a path toward greater resilience for food infrastructure that has historically been tethered to fragile grid and fuel supply chains.",
    url: "https://www.forbes.com/sites/daphneewingchow/2026/06/06/this-hydrogen-developer-is-trying-to-take-food-systems-off-grid/",
  },
  {
    slug: "advanceh2-jason-herring-visionary-hydrogen-power-ai-age",
    title: "Jason Herring: The Visionary Behind Hydrogen Power Solutions for the AI Age",
    publication: "AdvanceH2",
    date: "2026-05-30",
    excerpt:
      "AdvanceH2 profiles VIVIFY Technology Founder Jason Herring and his push to establish hydrogen as a mainstream energy source for the AI-driven economy. The article spotlights VIVIFY's HOG™ (Hydrogen Oxygen Generator), a closed-loop system that produces hydrogen from water on-site, framing it as a response to the surging electricity demands of data centers projected to consume a growing share of U.S. power generation by 2030.",
    url: "https://www.advanceh2.com/news/article/jason-herring-the-visionary-behind-hydrogen-power-solutions-for-the-ai-age",
  },
  {
    slug: "intpolicydigest-elon-musk-of-hydrogen-energy",
    title: "Is Jason Herring the Elon Musk of Hydrogen Energy?",
    publication: "International Policy Digest",
    author: "Justin Teller",
    date: "2026-05-29",
    excerpt:
      "International Policy Digest profiles VIVIFY Technology Founder Jason Herring and the company's hydrogen-powered energy systems built to address the electricity demands of AI infrastructure. The piece highlights VIVIFY's HOG™ (Hydrogen Oxygen Generator) and the containerized Flying Pig™ platform as a scalable, modular alternative to legacy fuel supply chains.",
    url: "https://intpolicydigest.org/is-jason-herring-the-elon-musk-of-hydrogen-energy/",
  },
  {
    slug: "townhall-vivify-technology-game-changer-energy-independence",
    title: "VIVIFY Technology Unveils a Game Changer for Energy Independence",
    publication: "Townhall",
    author: "Amy Curtis",
    date: "2026-05-26",
    excerpt:
      "Townhall covers the unveiling of VIVIFY Technology's Flying Pig™, a 1MW containerized hydrogen power system designed for true energy independence. The article frames the deployable unit as a meaningful cost advantage over traditional grid infrastructure while eliminating dependence on legacy fuel supply chains.",
    url: "https://townhall.com/tipsheet/amy-curtis/2026/05/26/vivify-technology-n2676522",
  },
  {
    slug: "fuelcellsworks-closed-loop-hydrogen-florida-press-conference",
    title:
      "VIVIFY Technology Founder Jason Herring Highlights Closed-Loop Hydrogen Power Solution During Florida AI and Data Center Press Conference",
    publication: "Fuel Cells Works",
    date: "2026-05-12",
    excerpt:
      "Industry trade publication Fuel Cells Works reports on VIVIFY Founder Jason Herring's remarks at a Florida press conference with Lieutenant Governor Jay Collins. Coverage centers on VIVIFY's closed-loop hydrogen power platform, positioned as a way to support AI and data center growth without straining local water and energy resources.",
    url: "https://fuelcellsworks.com/2026/05/12/energy-innovation/vivify-technology-founder-jason-herring-highlights-closed-loop-hydrogen-power-solution-during-florida-ai-and-data-center-press-conference",
  },
];
