/* VIVIFY Safety Page: Manifesto-driven layout — the physics behind on-demand hydrogen safety. */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type EngineeringReason = {
  number: string;
  headingLines: string[];
  body: string;
};

type PropertyStat = {
  value: string;
  label: string;
  body: string;
};

export default function Safety() {
  const askEngineeringHref = buildContactMailto({
    subject: "VIVIFY — Safety Question for the Engineering Team",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I have a specific question about the safety profile of VIVIFY's on-demand hydrogen platform and would like to talk with the engineering team.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Question / Site context (deployment location, site conditions, system architecture):",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const engineeringReasons: EngineeringReason[] = [
    {
      number: "01",
      headingLines: ["No Stored", "Hydrogen. Ever."],
      body: "VIVIFY's system generates hydrogen on demand and consumes it immediately. There is no storage phase, no accumulation, and no reservoir of pressurized gas waiting to be released. The system carries only the hydrogen required for the current moment of operation — nothing more. Remove the stored inventory and you remove the primary risk vector of hydrogen systems entirely.",
    },
    {
      number: "02",
      headingLines: ["Hydrogen Rises.", "Rapidly."],
      body: "Hydrogen is the lightest element. It is fourteen times lighter than air. In any scenario where hydrogen escapes confinement, it rises immediately and disperses upward — away from equipment, away from ignition sources, away from occupied areas. Unlike hydrocarbon vapors, which are heavier than air and pool in low-lying areas where they concentrate, hydrogen's physical properties make it inherently self-dispersing. A release dissipates before it can accumulate to levels that present risk.",
    },
    {
      number: "03",
      headingLines: ["Closed-Loop", "Architecture.", "No Open Points."],
      body: "VIVIFY's systems are engineered as closed-loop platforms. The hydrogen generation, distribution, and consumption process is contained within a sealed system. There are no open vents, no atmospheric release points during normal operation, and no junctions where gas can migrate into uncontrolled environments. The architecture itself removes the opportunity for accumulation.",
    },
    {
      number: "04",
      headingLines: ["Built-In Sensors.", "Continuous", "Monitoring."],
      body: "Every VIVIFY system ships with pre-installed sensors and telemetry integrated into its architecture. The system monitors itself in real time. Any anomaly — pressure deviation, temperature variance, flow irregularity — is detected and flagged before it progresses. Problems are identified at the stage where they are still data points, not events. The monitoring system is not an add-on; it is part of the core design.",
    },
    {
      number: "05",
      headingLines: ["The Fuel Source", "Is Safe by Design."],
      body: "VIVIFY's hydrogen generation runs on water as its primary fuel input — the same material used to suppress fires. The supply chain is a water line. The system is engineered from the ground up around non-volatile inputs, giving operators a fundamentally safer site profile regardless of application or environment. The risk profile starts low and stays there.",
    },
  ];

  const propertyStats: PropertyStat[] = [
    {
      value: "14×",
      label: "Lighter Than Air",
      body: "Hydrogen disperses upward immediately upon any release. It does not pool, accumulate, or concentrate in occupied areas the way heavier-than-air vapors do.",
    },
    {
      value: "~0",
      label: "Stored Volume",
      body: "On-demand generation means no reserve exists. The operational volume at any moment is minimal — the same order of magnitude as a balloon. No reserve, no risk.",
    },
    {
      value: "H₂O",
      label: "The Fuel Input",
      body: "Water is VIVIFY's primary fuel input. It's non-volatile and available through a standard water line. The raw material is inert by definition.",
    },
    {
      value: "Closed",
      label: "System Architecture",
      body: "The loop is sealed. Hydrogen is generated, consumed, and contained within the system boundary — no atmospheric exposure during normal operation.",
    },
    {
      value: "Live",
      label: "Sensor Telemetry",
      body: "Pre-installed sensors monitor pressure, temperature, and flow in real time. Anomalies are identified at the data stage — not the event stage.",
    },
    {
      value: "99%",
      label: "Emission-Free Output",
      body: "The system produces power at near-zero pollutant output. The safety profile and the emissions profile reinforce each other. Clean and safe are the same architecture.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Safety — The Conversation Is Shorter Than You Think"
        description="VIVIFY's on-demand hydrogen platform is categorically different from stored hydrogen systems. No tank. No reserve. No accumulation. See the physics, the engineering, and the five reasons the safety case is straightforward."
        path="/safety"
      />

      {/* Hero — The Safety Conversation Is Shorter Than You Think */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="safety-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Safety
            </p>
            <h1
              id="safety-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">The Safety</span>
              <span className="block">Conversation Is</span>
              <span className="block text-primary">Shorter Than</span>
              <span className="block text-primary">You Think.</span>
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              The concerns people have about hydrogen come from a fundamentally different kind of hydrogen system. VIVIFY's system is categorically different. The answer is simple, and the physics backs it up.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-black z-20"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* The Core Fact */}
      <section
        className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="safety-core-fact-title"
      >
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                The Core Fact
              </p>
              <h2
                id="safety-core-fact-title"
                className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white"
              >
                <span className="block">VIVIFY Generates</span>
                <span className="block text-primary">Hydrogen on Demand.</span>
                <span className="block">It Does Not</span>
                <span className="block text-primary">Store It.</span>
              </h2>
            </div>

            <div className="grid gap-6 text-base md:text-lg text-white/80 leading-relaxed">
              <p>
                <strong className="font-bold text-white">
                  There is no reserve. There is no accumulation. There is no tank.
                </strong>
              </p>
              <p>
                Most hydrogen safety concerns are about stored hydrogen — large quantities held under high pressure, accumulated in enclosed spaces, sitting in delivery vessels traveling down public roads. Those concerns are legitimate for those systems. They are simply irrelevant to VIVIFY's.
              </p>
              <p>
                VIVIFY's platform produces hydrogen at the moment it is needed and consumes it as it is produced. The process is closed-loop and continuous. At any given instant during operation, the volume of hydrogen present in the system is minimal — comparable, in practical terms, to what you would find inside a balloon.
              </p>
              <blockquote className="relative border-l-4 border-primary pl-6 py-2 my-2">
                <p className="text-xl md:text-2xl font-semibold leading-snug text-white">
                  The worst-case failure scenario for a VIVIFY system is roughly equivalent to a balloon popping. Not a pressure vessel rupturing. Not a storage tank failing. A pop — and then it is over, because there is nothing left to sustain it.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Comparison */}
      <section
        className="relative bg-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="safety-comparison-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              The Comparison
            </p>
            <h2
              id="safety-comparison-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              <span className="block">Stored Hydrogen</span>
              <span className="block text-primary">vs.</span>
              <span className="block">On-Demand Hydrogen.</span>
              <span className="block">These Are Not</span>
              <span className="block text-primary">the Same Thing.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                The fears that follow hydrogen as a fuel source originate with a specific scenario: large volumes of gas stored under pressure in environments where ignition sources are present. That scenario describes a category of hydrogen system that VIVIFY does not build and does not use.
              </p>
              <p>
                On-demand generation is a fundamentally different architecture. The hydrogen is produced, used, and gone — in a continuous cycle with no accumulation phase. There is no inventory of fuel. There is no vessel under pressure waiting to fail. The fuel source is water, and the process produces only what the system needs in that moment.
              </p>
              <p>
                Evaluating VIVIFY's safety profile based on stored-hydrogen scenarios is the equivalent of evaluating the fire risk of a gas stove burner by referencing a natural gas pipeline rupture. They involve the same element. They are not remotely the same situation.
              </p>
            </div>
          </div>

          {/* Side-by-side comparison cards */}
          <div className="mt-16 md:mt-20 grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Other Systems */}
            <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Other Hydrogen Systems
              </p>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Stored & Pressurized
              </h3>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Large volumes held under high pressure. Delivery chains. On-site tanks. An accumulated reserve that must be managed, monitored, and protected. This is where hydrogen safety concerns originate. It is a valid concern for this architecture.
              </p>
            </div>

            {/* VIVIFY */}
            <div className="relative rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 via-primary/5 to-white p-8 md:p-10 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                VIVIFY
              </p>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Generated On Demand
              </h3>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                No stored reserve. No pressurized tank. No delivery chain. Hydrogen is produced and consumed in a closed-loop process — continuously, in minimal volumes. The fuel source is water. The risk profile is a balloon. There is nothing left to sustain a failure event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Engineering — Five Reasons */}
      <section
        className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="safety-engineering-title"
      >
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              The Engineering
            </p>
            <h2
              id="safety-engineering-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white"
            >
              <span className="block">Five Reasons</span>
              <span className="block">the Physics</span>
              <span className="block text-primary">Favor Safety.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
              Safety is not a marketing position. It is an outcome of engineering decisions. Here are the five that make VIVIFY's hydrogen platform as safe as it is.
            </p>
          </div>

          <div className="mt-16 md:mt-20 grid gap-12 md:gap-16">
            {engineeringReasons.map((reason) => (
              <div
                key={reason.number}
                className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-16 items-start"
              >
                <div className="flex gap-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary pt-2">
                    {reason.number}
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white">
                    {reason.headingLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Properties */}
      <section
        className="relative bg-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="safety-properties-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              The Properties
            </p>
            <h2
              id="safety-properties-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              <span className="block">Hydrogen's Physics</span>
              <span className="block text-primary">Work For Safety —</span>
              <span className="block">Not Against It.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hydrogen's physical properties — the ones that concern people when it is stored in volume — are the same properties that make on-demand hydrogen safe in practice. Context is everything.
            </p>
          </div>

          <div className="mt-16 md:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {propertyStats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 shadow-sm"
              >
                <p className="text-5xl md:text-6xl font-extrabold text-primary leading-none">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                  {stat.label}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {stat.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Still Have Questions */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="safety-cta-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              Still Have Questions
            </p>
            <h2
              id="safety-cta-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">Ask Us</span>
              <span className="block">Anything.</span>
              <span className="block">We Have Answers.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              The safety case for VIVIFY's on-demand hydrogen platform is straightforward. If you have a specific technical question about deployment, site conditions, or system architecture — the engineering team is the right conversation to have.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={askEngineeringHref}>Ask the Engineering Team</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <Link href="/technology">
                  See How It Works <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="mt-10 text-sm md:text-base font-semibold text-black/80">
              Or call directly —{" "}
              <a href="tel:+18882778370" className="underline underline-offset-4 hover:text-black">
                888.277.8370
              </a>
              {"  ·  "}
              <a
                href="mailto:info@vivify-technology.com"
                className="underline underline-offset-4 hover:text-black"
              >
                info@vivify-technology.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
