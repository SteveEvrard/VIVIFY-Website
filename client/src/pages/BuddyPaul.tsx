import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const careerStages = [
  {
    number: "01",
    era: "Structural Engineering - 1980s - Clary Corporation",
    title: "Building the foundations",
    body: "Paul's first granted patents were mechanical: a pair of 1986 design patents for a truss connector plate, assigned to Clary Corporation. Early proof of a mind drawn to load, structure, and how parts hold together under stress - the same instincts that would define everything he built next.",
    patents: "US D286,855 - US D287,223",
  },
  {
    number: "02",
    era: "Aerospace, Defense & NASA - 1990s-2000s",
    title: "The engineer who fixed the cryogenic leak",
    body: "On NASA's Space Shuttle program, Paul engineered the solution to a persistent cryogenic liquid-hydrogen leak - the kind of failure that grounds a fleet. The same precision-mechanism thinking runs through his work on the Terminal High Altitude Area Defense (THAAD) missile system and Airbus aircraft systems, and spans electronics, hydraulics, pneumatics, and nuclear applications. His granted patents from this era are missile-launch systems built at Lockheed Martin: a passive dynamically disconnecting arm, a rocket-launcher docking system, a passively-actuated snubber, and a canister closure that releases on a pressure pulse. Each was engineered to perform once, flawlessly, in the split second of a launch. In 2003, Lockheed Martin named him its Inventor of the Year.",
    patents: "US 6,679,154 - US 7,070,434 - US 7,624,669 - US 7,685,920",
  },
  {
    number: "03",
    era: "Clean Energy - 2010s-Present",
    title: "A complete energy architecture",
    body: "Paul then turned the same discipline on the energy problem. Across more than thirty patent filings, he built out a full clean-energy architecture - hydrogen generation and electrolysis, emissions capture, turbines, and combustion - and secured three issued U.S. patents at its core. That body of work is the engineering foundation beneath VIVIFY's HOG™, CAT™, and Flying Pig™ platforms.",
    patents: "US 9,038,595 B2 - US 9,624,801 B2 - US 9,664,139 B2",
  },
];

const corePatents = [
  {
    number: "US 9,038,595 B2",
    title: "Carbon Oxygen Hydrogen Motor",
    body: "The hydrogen-combustion engine at the heart of the HOG™ generator platform.",
    platform: "HOG™ - Hydrogen Energy",
  },
  {
    number: "US 9,624,801 B2",
    title: "Exhaust Mitigating System & Power",
    body: "Removes contaminants from exhaust gas and generates electrical power: the basis of CAT™.",
    platform: "CAT™ - Emissions Control",
  },
  {
    number: "US 9,664,139 B2",
    title: "Captive Oxygen Fuel Reactor",
    body: "The reaction core that drives on-demand, water-based hydrogen power generation.",
    platform: "Reaction Core",
  },
];

const issuedPatents = [
  [
    "US D286,855",
    "Connector plate for trusses",
    "Structural",
    "Clary Corp.",
    "1986",
  ],
  [
    "US D287,223",
    "Connector plate for trusses",
    "Structural",
    "Clary Corp.",
    "1986",
  ],
  [
    "US 6,679,154",
    "Passive dynamically disconnecting arm",
    "Aerospace & Defense",
    "Lockheed Martin",
    "2004",
  ],
  [
    "US 7,070,434",
    "Rocket-launcher docking system",
    "Aerospace & Defense",
    "Lockheed Martin",
    "2006",
  ],
  [
    "US 7,624,669",
    "Apparatus comprising a passively-actuated snubber",
    "Aerospace & Defense",
    "Lockheed Martin",
    "2009",
  ],
  [
    "US 7,685,920",
    "Canister closure with pressure-pulse release",
    "Aerospace & Defense",
    "Lockheed Martin",
    "2010",
  ],
  ["US 9,038,595", "Carbon Oxygen Hydrogen Motor", "Clean Energy", "", "2015"],
  [
    "US 9,624,801",
    "Exhaust Mitigating System & Power",
    "Clean Energy",
    "",
    "2017",
  ],
  ["US 9,664,139", "Captive Oxygen Fuel Reactor", "Clean Energy", "", "2017"],
];

const portfolioSections = [
  {
    title: "Hydrogen & Electrolysis",
    rows: [
      [
        "Electrolysis Apparatus and Related Devices and Methods",
        "12/909,813",
        "US 2011/0100328 A1",
        false,
      ],
      ["Hydrogen Oxygen Generator", "61/256,129", "US 2011/0100328 A1", false],
      [
        "Hydrogen Oxygen Combustion Alternator",
        "61/258,102",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "Hydro Electric River Oxygenator",
        "61/495,257",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "Alternating Direct Current Electrolyzer",
        "61/548,334",
        "US 2011/0100328 A1",
        false,
      ],
      ["Hydrogen Generator Battery", "61/559,550", "US 2011/0100328 A1", false],
      [
        "Solar Wind Electrolyzer Electrical Turbine",
        "62/050,486",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "Solar Wind Electrolyzer Electrical Turbine",
        "62/202,348",
        "US 2011/0100328 A1",
        false,
      ],
    ],
  },
  {
    title: "Combustion, Motors & Fuel",
    rows: [
      ["Carbon Oxygen Hydrogen Motor", "13/444,594", "US 9,038,595 B2", true],
      ["Captive Oxygen Fuel Reactor", "15/205,721", "US 9,664,139 B2", true],
      ["Captive Oxygen Fuel Reactor", "62/190,052", "US 9,664,139 B2", true],
      [
        "Captive Oxygen Fuel Reactor",
        "62/022,071",
        "US 2017/0009702 A1",
        false,
      ],
      [
        "Carbon Oxygen Hydrogen Motor",
        "61/474,147",
        "US 2012/0255518 A1",
        false,
      ],
      [
        "New Internal Combustion Engine",
        "61/258,103",
        "US 2011/0100328 A1",
        false,
      ],
      ["Carbon Compound Rod", "61/320,380", "US 2011/0100328 A1", false],
      [
        "Spark Oxygen Hydrogen Injection Plug",
        "61/453,382",
        "US 2011/0100328 A1",
        false,
      ],
      ["Turbine Jet", "61/542,646", "US 2011/0100328 A1", false],
    ],
  },
  {
    title: "Clean Air & Emissions",
    rows: [
      [
        "Mitigating System to Remove Contaminants from Exhaust Gas & Generate Power",
        "14/719,540",
        "US 9,624,801 B2",
        true,
      ],
      ["Clean Air Turbine", "61/440,078", "US 9,624,801 B2", true],
      ["Clean Air Turbine", "61/598,376", "US 9,624,801 B2", true],
      [
        "Artificial Gravity Enhance Separator",
        "61/497,365",
        "US 9,624,801 B2",
        true,
      ],
      ["Particle Acquisition Tower", "61/497,618", "US 9,624,801 B2", true],
      ["Cryogenic Air Pump", "61/497,623", "US 9,624,801 B2", true],
      [
        "Natural Ecological Way Mitigating System",
        "61/497,361",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "Recycle Incinerator Generator",
        "61/512,815",
        "US 2011/0100328 A1",
        false,
      ],
    ],
  },
  {
    title: "Turbines, Power & Systems",
    rows: [
      [
        "Heat Exchange Turbine Generator",
        "61/527,970",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "AC-DC Voltage and Current Doublers",
        "61/321,165",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "Hygienic Induction Cauldron",
        "61/505,928",
        "US 2011/0100328 A1",
        false,
      ],
    ],
  },
  {
    title: "Water & Process",
    rows: [
      [
        "Digital Electronic Water Conditioner",
        "61/485,685",
        "US 2011/0100328 A1",
        false,
      ],
      [
        "Method of Reducing Salt and Sugar Content in Food",
        "61/536,337",
        "US 2011/0100328 A1",
        false,
      ],
    ],
  },
] as const;

export default function BuddyPaul() {
  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Buddy R. Paul - Distinguished Engineer & Chief Systems Architect"
        description="Meet Buddy R. Paul, VIVIFY's Distinguished Engineer and Chief Systems Architect, whose four-decade career spans NASA, THAAD, Airbus, Lockheed Martin, and clean energy innovation."
        path="/leadership/buddy-paul"
      />

      <section
        className="relative overflow-hidden bg-white py-16 md:py-24"
        aria-labelledby="buddy-hero-title"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary" />
        <div className="container">
          <Link
            href="/leadership"
            className="inline-flex items-center text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Leadership
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                The Inventor
              </p>
              <h1
                id="buddy-hero-title"
                className="mt-5 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
              >
                Buddy R. Paul
              </h1>
              <p className="mt-5 text-lg font-semibold text-foreground md:text-xl">
                Distinguished Engineer &amp; Chief Systems Architect
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Aerospace - NASA - Clean Energy
              </p>
              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Buddy R. Paul, VIVIFY's Chief Systems Architect, is a career
                design engineer whose work spans more than four decades and some
                of the most demanding programs in modern engineering, including
                NASA's Space Shuttle - where he engineered the fix for a
                cryogenic fuel leak that threatened the program - the THAAD
                missile-defense system, Airbus aircraft systems, and Lockheed
                Martin, where he was named Inventor of the Year in 2003. His
                experience runs across aerospace, defense, energy, electronics,
                hydraulics, pneumatics, and nuclear systems, and includes
                roughly 250 patents and patent-related technologies.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-gray-950 shadow-xl">
              <img
                src="/images/team/buddy-paul.jpg"
                alt="Buddy R. Paul"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 border-y border-gray-200 sm:grid-cols-4">
            {[
              ["40+", "Years of engineering & invention"],
              ["~250", "Patents & patent-related technologies"],
              ["9", "Documented issued U.S. patents"],
              ["4", "Landmark programs"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-gray-200 px-4 py-7 even:border-l sm:border-l sm:first:border-l-0 md:px-7"
              >
                <p className="text-4xl font-extrabold text-primary md:text-5xl">
                  {value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase leading-relaxed tracking-wider text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gray-950 py-20 text-white md:py-28"
        aria-labelledby="career-title"
      >
        <div className="container">
          <blockquote className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            “My passion has always been design. I like identifying the need for
            something and then coming up with the answer for that need.”
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Buddy R. Paul
            </footer>
          </blockquote>

          <figure className="mt-14 overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <img
              src="/images/buddy-paul/DSC07446.jpg"
              alt="Buddy R. Paul working with VIVIFY technology"
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>

          <div className="mt-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              A Career of Invention
            </p>
            <h2
              id="career-title"
              className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              One discipline, applied to three hard problems.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-white/15 border-y border-white/15">
            {careerStages.map(stage => (
              <article
                key={stage.number}
                className="grid gap-6 py-10 md:grid-cols-[80px_1fr] md:gap-10 md:py-14"
              >
                <p className="text-3xl font-extrabold text-primary">
                  {stage.number}
                </p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                    {stage.era}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {stage.title}
                  </h3>
                  <p className="mt-5 max-w-5xl text-base leading-relaxed text-white/75 md:text-lg">
                    {stage.body}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-primary">
                    Representative patents: {stage.patents}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-white py-20 md:py-28"
        aria-labelledby="core-patents-title"
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            The Clean-Energy Core
          </p>
          <h2
            id="core-patents-title"
            className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Three issued patents power VIVIFY's platforms.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {corePatents.map(patent => (
              <article
                key={patent.number}
                className="flex flex-col rounded-xl border border-gray-200 bg-gray-50 p-7 shadow-sm md:p-8"
              >
                <p className="text-sm font-bold text-primary">
                  {patent.number}
                </p>
                <h3 className="mt-4 text-2xl font-bold text-foreground">
                  {patent.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                  {patent.body}
                </p>
                <p className="mt-8 border-t border-gray-200 pt-5 text-xs font-semibold uppercase tracking-wider text-foreground">
                  {patent.platform}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gray-50 py-20 md:py-28"
        aria-labelledby="issued-patents-title"
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Appendix A
          </p>
          <h2
            id="issued-patents-title"
            className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
          >
            Issued United States patents
          </h2>

          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full min-w-[850px] border-collapse text-left">
              <thead className="bg-gray-950 text-white">
                <tr>
                  {[
                    "Patent No.",
                    "Invention",
                    "Field",
                    "Assignee",
                    "Issued",
                  ].map(heading => (
                    <th
                      key={heading}
                      className="px-5 py-4 text-xs font-semibold uppercase tracking-wider"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {issuedPatents.map(patent => (
                  <tr
                    key={patent[0]}
                    className="transition-colors hover:bg-primary/5"
                  >
                    {patent.map((cell, index) => (
                      <td
                        key={`${patent[0]}-${index}`}
                        className={`px-5 py-4 text-sm ${index === 0 ? "font-bold text-foreground" : "text-muted-foreground"}`}
                      >
                        {cell || "VIVIFY"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="bg-white py-20 md:py-28"
        aria-labelledby="portfolio-title"
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Appendix B
          </p>
          <h2
            id="portfolio-title"
            className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
          >
            Clean-energy portfolio
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            The full body of clean-energy filings - hydrogen, emissions,
            turbines, and combustion - grouped by domain. Granted patents are
            marked. Serial numbers prefixed 61/ and 62/ are provisional filings.
          </p>

          <div className="mt-12 space-y-10">
            {portfolioSections.map(section => (
              <div key={section.title}>
                <h3 className="border-l-4 border-primary pl-4 text-xl font-bold text-foreground">
                  {section.title}
                </h3>
                <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        {[
                          "Invention",
                          "Application",
                          "Publication / Grant",
                        ].map(heading => (
                          <th
                            key={heading}
                            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {section.rows.map(
                        ([invention, application, publication, granted]) => (
                          <tr key={`${invention}-${application}`}>
                            <td className="px-5 py-3 text-sm font-medium text-foreground">
                              {invention}
                            </td>
                            <td className="px-5 py-3 text-sm text-muted-foreground">
                              {application}
                            </td>
                            <td className="px-5 py-3 text-sm text-muted-foreground">
                              {publication}
                              {granted && (
                                <span className="ml-3 inline-flex rounded-full bg-primary/15 px-2.5 py-1 text-xs font-bold text-foreground">
                                  Granted
                                </span>
                              )}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs leading-relaxed text-muted-foreground">
            Sources: United States Patent and Trademark Office (USPTO); Justia
            Patents inventor record for Buddy R. Paul; VIVIFY Technology patent
            list.
          </p>
        </div>
      </section>

      <section
        className="bg-primary py-20 text-black md:py-28"
        aria-labelledby="buddy-closing-title"
      >
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/60">
            Vivify: Bringing Technology to Life
          </p>
          <h2
            id="buddy-closing-title"
            className="mt-5 max-w-5xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          >
            Space Shuttle.
            <br />
            THAAD. Airbus.
            <br />
            Now VIVIFY.
          </h2>
          <Button
            className="mt-10 bg-black text-primary hover:bg-black/90"
            size="lg"
            asChild
          >
            <Link href="/leadership">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Leadership
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
