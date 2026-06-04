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
