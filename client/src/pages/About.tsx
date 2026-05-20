/* VIVIFY About Page: Manifesto-driven layout — mission, vision, and the case for replacing the energy establishment. */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { tm, TM } from "@/lib/tm";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

type MissionPillar = {
  headingLines: string[];
  body: string;
};

type VisionCard = {
  title: string;
  body: string;
};

type StandForValue = {
  category: string;
  headline: string;
  body: string;
};

type OperateLine = {
  category: string;
  line: string;
};

export default function About() {
  const getInTheRoomHref = buildContactMailto({
    subject: "VIVIFY — Get In the Room",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to get in the room and have a real conversation about VIVIFY's mission and platform.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "What I'm interested in (energy independence / industrial retrofit / deployment partnership / other):",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const missionPillars: MissionPillar[] = [
    {
      headingLines: ["Take Out the", "Big Energy Companies."],
      body: "The large energy monopolies have not served America — they have served themselves. They have inflated costs, manufactured dependence, and lobbied to prevent the very competition that would free this country. VIVIFY builds the technologies that compete with them on engineering merits alone — and win. No subsidies required. No political favors needed. The products speak.",
    },
    {
      headingLines: ["Make America", "Energy Independent."],
      body: "Energy independence is not a foreign policy position. It is a technical problem with a technical solution. When a country controls its own energy generation — when no cartel, no pipeline, no tanker route can hold the economy hostage — the geopolitical equation changes entirely. VIVIFY provides the technology to make that control real, scalable, and permanent.",
    },
    {
      headingLines: ["Change", "the World."],
      body: "That is not hyperbole. That is the only acceptable measure of success. Near-zero-emission, water-based, hydrogen-driven power that scales from a single facility to an entire industrial region — deployed in America first, then wherever people are ready to stop being told that clean, independent energy is impossible. It is not impossible. We already built it.",
    },
  ];

  const visionCards: VisionCard[] = [
    {
      title: "Energy Independence",
      body: "America will not negotiate its energy supply from a position of dependence. VIVIFY's platforms provide on-site, on-demand, behind-the-meter power generation fueled by water — answerable to no foreign government, no cartel, and no pipeline. That is not a vision. That is what our systems do, today.",
    },
    {
      title: "Industrial Transformation",
      body: "The industrial base of this country does not need to choose between economic viability and clean operation. CAT™ retrofits existing infrastructure. HOG™ and Flying Pig™ replace the need for diesel and grid dependence entirely. The transition is not a sacrifice — it is an upgrade. VIVIFY makes that upgrade available now.",
    },
    {
      title: "American Leadership",
      body: "The country that builds the replacement energy infrastructure — not talks about it, builds it — leads the next century. VIVIFY intends that country to be America. The engineering is done. The systems are ready. What comes next is deployment at scale, and we will not be apologetic about the pace.",
    },
    {
      title: "Global Impact",
      body: "After America, the world. Every country that runs on imported fuel, every grid held hostage by commodity pricing, every industrial region told clean power is too expensive — all of it is addressable with the technology VIVIFY has already built. The impact is not contained by borders. Neither are we.",
    },
  ];

  const standForValues: StandForValue[] = [
    {
      category: "People",
      headline: "We hire thinkers.",
      body: "We hire exceptional people and then trust them completely. Smart people think and say things that challenge the direction — that is not a problem to manage. It is the engine of everything we build.",
    },
    {
      category: "Respect",
      headline: "Greatness earns attention.",
      body: "Inventors, scientists, and thought leaders who risked everything to push the world forward — they are our benchmark. We are humbled by what they built. We intend to be worthy of the same standard.",
    },
    {
      category: "Visionary",
      headline: "No does not exist here.",
      body: "We do not use the word \"no.\" There are things we have not yet created — that is a reason to be excited, not cautious. The boundaries of what is possible are a starting point, not a ceiling.",
    },
    {
      category: "Laser Focused",
      headline: "The mission is engraved.",
      body: "We exist at the intersection of science and technology, and we do not wander from it. Our mission is not a statement that changes with the market. It is fixed, and we are not afraid to defend it.",
    },
    {
      category: "Innovative",
      headline: "The only static thing is our IP.",
      body: "We are dynamic, and that is not a buzzword — it is an operating principle. The desire to make things better is not occasional inspiration. It is the fuel running the whole organization, every day. Technology is what we use. Science is what we are made of. The only thing at VIVIFY that stays fixed is the intellectual property we create. Everything else is in motion.",
    },
    {
      category: "Perspective",
      headline: "Clean is a choice.",
      body: "We build clean. We operate clean. We believe a cleaner world is not an aspiration — it is an engineering problem, and engineering problems have solutions. The question is whether you are willing to build them.",
    },
    {
      category: "Action",
      headline: "We do. Others discuss.",
      body: "Others theorize about what might be possible. We build it. Obstacles do not slow us — they raise the standard. The extra mile is not a measure of effort. It is where the work actually starts.",
    },
    {
      category: "Results",
      headline: "Tomorrow's solutions, today.",
      body: "Possibility is a starting point. What matters is delivery. We are not in the business of what could happen — we are in the business of making it happen, ahead of schedule, at a standard the industry has not yet set.",
    },
  ];

  const operateLines: OperateLine[] = [
    {
      category: "People",
      line: "We hire exceptional people and then get out of their way.",
    },
    {
      category: "Respect",
      line: "The inventors who came before us set a bar. We intend to clear it.",
    },
    {
      category: "Visionary",
      line: "We don't use the word \"no.\" We haven't created the answer yet. We're excited to.",
    },
    {
      category: "Laser Focused",
      line: "Where science meets technology is exactly where we live. We don't leave.",
    },
    {
      category: "Innovative",
      line: "Everything moves. Technology is our fuel. Science is our energy.",
    },
    {
      category: "Perspective",
      line: "We are clean. We believe in a cleaner world. Shouldn't you?",
    },
    {
      category: "Action",
      line: "We do what others think. The extra mile is where we start.",
    },
    {
      category: "Results",
      line: "Some discuss possibilities. We deliver. Tomorrow's solutions, today.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="About — Built to Break an Empire"
        description="VIVIFY is a clean energy technology company building the platforms — HOG™, CAT™, and Flying Pig™ — that make the existing energy establishment irrelevant. Read the mission, the vision, and the case for replacement."
        path="/about"
      />

      {/* Hero — Built to Break an Empire */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="about-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              About VIVIFY
            </p>
            <h1
              id="about-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">Built to</span>
              <span className="block">Break an</span>
              <span className="block text-primary">Empire.</span>
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              VIVIFY was not founded to find a seat at the table. It was founded to flip the table over. The energy establishment built a world designed for their benefit. We built the technology to make it irrelevant.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-black"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Who We Are */}
      <section
        className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="about-who-title"
      >
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Who We Are
              </p>
              <h2
                id="about-who-title"
                className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white"
              >
                <span className="block">We Are Not</span>
                <span className="block text-primary">Reformers.</span>
                <span className="block">We Are the</span>
                <span className="block text-primary">Replacement.</span>
              </h2>
            </div>

            <div className="grid gap-6 text-base md:text-lg text-white/80 leading-relaxed">
              <p>
                VIVIFY is a clean energy technology company. But that description barely touches it. We develop and deploy the technologies that make existing energy infrastructure — oil, gas, coal, diesel — unnecessary. Not in fifty years. Not after the next policy cycle.{" "}
                <strong className="font-bold text-white">Now.</strong>
              </p>
              <p>
                The HOG<TM />. The CAT<TM />. The Flying Pig<TM />. Each platform is a working system, engineered to operate in the real world, at real scale, without the fuel contracts, delivery chains, or monopoly pricing that the incumbent industry has weaponized against American independence for a century.
              </p>
              <p>
                We did not arrive with a roadmap asking for permission. We arrived with systems that work, a mission that doesn't flinch, and the conviction that the most patriotic thing an American company can do right now is make the energy establishment obsolete.
              </p>
              <blockquote className="relative border-l-4 border-primary pl-6 py-2 my-2">
                <p className="text-xl md:text-2xl font-semibold leading-snug text-white">
                  The incumbents had a century and the full weight of government in their corner. All they produced was dependence. We had engineers, a clear mission, and no interest in compromise. The outcome was obvious.
                </p>
              </blockquote>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary pt-2">
                — VIVIFY Leadership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section
        className="relative bg-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="about-mission-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Mission
            </p>
            <h2
              id="about-mission-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-foreground"
            >
              <span className="block">Take out the</span>
              <span className="block">big energy</span>
              <span className="block">companies. Make</span>
              <span className="block text-primary">America independent.</span>
              <span className="block">Change the world.</span>
            </h2>
          </div>

          <div className="mt-16 md:mt-20 grid gap-12 md:gap-16">
            {missionPillars.map((pillar, idx) => (
              <div
                key={pillar.headingLines.join(" ")}
                className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-16 items-start"
              >
                <div className="flex gap-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary pt-2">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground">
                    {pillar.headingLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section
        className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="about-stand-for-title"
      >
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              What We Stand For
            </p>
            <h2
              id="about-stand-for-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white"
            >
              <span className="block">Eight Things</span>
              <span className="block">That Are</span>
              <span className="block text-primary">Non-Negotiable.</span>
            </h2>
            <p className="mt-8 text-base md:text-lg text-white/80 leading-relaxed">
              Every company claims values. Most of them are posters on a wall. Ours are operational — they describe how decisions get made, who gets hired, and what we refuse to compromise on regardless of how inconvenient it becomes. Read them that way.
            </p>
          </div>

          <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-2">
            {standForValues.map((value, idx) => (
              <div
                key={value.category}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
              >
                <div className="flex items-baseline gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    {value.category}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                  {value.headline}
                </h3>
                <p className="mt-4 text-base text-white/80 leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section
        className="relative bg-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="about-vision-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Vision for the Future
              </p>
              <h2
                id="about-vision-title"
                className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-foreground"
              >
                <span className="block">The Old Order</span>
                <span className="block">Has an</span>
                <span className="block text-primary">Expiration Date.</span>
              </h2>
            </div>

            <div className="grid gap-8">
              <blockquote className="relative border-l-4 border-primary pl-6 py-2">
                <p className="text-xl md:text-2xl font-semibold leading-snug text-foreground">
                  "We are not here to participate in the existing energy economy. We are here to end it."
                </p>
              </blockquote>
              <div className="grid gap-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  The world runs on infrastructure built for fossil fuels, maintained by companies whose survival depends on that infrastructure never changing. VIVIFY represents the end of that arrangement. Not the beginning of a negotiation — the end.
                </p>
                <p>
                  The future is clean, American-made, and controlled by no monopoly on earth. The technologies to make that future real are not hypothetical. They exist. They are deployed. The only question left is the pace at which the world is willing to accept the obvious.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20 grid gap-6 md:grid-cols-2">
            {visionCards.map((card, idx) => (
              <div
                key={card.title}
                className="relative rounded-2xl border border-gray-200 bg-gray-50 p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  {card.title}
                </h3>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">{tm(card.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Mission CTA */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="about-cta-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              Join the Mission
            </p>
            <h2
              id="about-cta-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">Be Part of</span>
              <span className="block">What Comes</span>
              <span className="block">Next.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              VIVIFY is building something that will matter for generations. If that is the kind of work you want to be part of — as an operator, a partner, or an investor — the conversation starts here.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={getInTheRoomHref}>Get In the Room</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <Link href="/technology">
                  See the Technology <ArrowRight className="ml-2 h-4 w-4" />
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
