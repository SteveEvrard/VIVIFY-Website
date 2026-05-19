/* VIVIFY Applications Page: Manifesto-driven layout — where the technology actually deploys. */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { tm, TM } from "@/lib/tm";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

const CLOUDFRONT_BASE = "https://d2t61k482lx79u.cloudfront.net";

type FitCard = { title: string; body: string };

type MediaSpec =
  | { kind: "video"; src: string }
  | { kind: "placeholder"; category: string };

type Application = {
  id: string;
  number: string;
  eyebrow: string;
  isNew?: boolean;
  headingLines: string[];
  primaryLineIndex: number;
  paragraphs: string[];
  pulsarBlurb?: { prefix: string; linkText: string; suffix: string };
  ctaSubject: string;
  ctaLabel: string;
  media: MediaSpec;
  mediaCaption: string;
  mediaOnLeft: boolean;
  fitTitle: string;
  fitCards: FitCard[];
};

export default function Applications() {
  const buildTalkToUsHref = (subject: string) =>
    buildContactMailto({
      subject,
      bodyLines: [
        "Hi VIVIFY team,",
        "",
        "I'd like to talk about deploying VIVIFY's platform for the application below.",
        "",
        "Name:",
        "Company / Organization:",
        "Role:",
        "Project type:",
        "Location:",
        "Timeline:",
        "Best way to reach me:",
        "",
        "Thanks,",
        "",
      ],
    });

  const getInTheRoomHref = buildContactMailto({
    subject: "VIVIFY — Get In the Room (Applications)",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to get in the room and discuss how VIVIFY's applications fit our deployment.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Application of interest (hydrogen / emissions / water / other):",
      "Location:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const applications: Application[] = [
    {
      id: "application-emergency",
      number: "01",
      eyebrow: "Application 01",
      isNew: true,
      headingLines: ["Power That", "Deploys When", "the Grid Doesn't."],
      primaryLineIndex: 2,
      paragraphs: [
        "When disaster strikes, when the mission demands field power, when the grid is damaged, delayed, or simply absent — the agencies responsible for the response cannot wait for utility restoration. VIVIFY's modular hydrogen units are built for exactly this: rapid deployment, zero fuel supply chain, and scalable capacity that moves with the mission.",
        "From disaster recovery to forward operating bases to humanitarian infrastructure restoration, VIVIFY provides containerized power that can be transported, deployed, and scaled without dependence on any external fuel delivery chain or grid connection.",
      ],
      ctaSubject: "VIVIFY — Emergency Deployment Application",
      ctaLabel: "Talk to Us About Emergency Deployment",
      media: { kind: "placeholder", category: "Government & Emergency" },
      mediaCaption: "Containerized hydrogen power for emergency and government deployment",
      mediaOnLeft: false,
      fitTitle: "Where government & emergency response fits",
      fitCards: [
        {
          title: "Disaster Response",
          body: "Emergency power for damaged or unavailable grid regions — deployable on hours, not weeks.",
        },
        {
          title: "Defense + Forward Operations",
          body: "Remote field operations, military sites, mobile command centers, and strategic deployments.",
        },
        {
          title: "Critical Infrastructure",
          body: "Public facility resiliency, humanitarian restoration, and temporary operating bases.",
        },
      ],
    },
    {
      id: "application-data-centers",
      number: "02",
      eyebrow: "Application 02",
      isNew: true,
      headingLines: ["The Grid Can't", "Keep Pace.", "VIVIFY Can."],
      primaryLineIndex: 2,
      paragraphs: [
        "Utility interconnection queues stretch years. Grid congestion in high-demand corridors is structural. The AI and data center boom is real — and the power infrastructure to support it is not keeping pace. VIVIFY provides behind-the-meter power that moves on the project's timeline, not the utility's.",
        "Modular units for phased demand. Site-specific plants engineered to long-term load profiles. Both built on VIVIFY's hydrogen platform — no interconnection queue, no utility dependency, no waiting.",
      ],
      ctaSubject: "VIVIFY — Data Center Power Application",
      ctaLabel: "Talk to Us About Data Center Power",
      media: { kind: "placeholder", category: "Data Center & High-Demand Infrastructure" },
      mediaCaption: "Behind-the-meter hydrogen power for AI and data center campuses",
      mediaOnLeft: true,
      fitTitle: "Where data center & high-demand power fits",
      fitCards: [
        {
          title: "AI + Data Center Campuses",
          body: "Behind-the-meter generation for facilities that cannot wait on interconnection queues.",
        },
        {
          title: "High-Performance Computing",
          body: "Dedicated power for HPC facilities with demanding, continuous load profiles.",
        },
        {
          title: "Large-Load Development",
          body: "Site-specific plants or modular deployments engineered to the customer's actual requirements.",
        },
      ],
    },
    {
      id: "application-hydrogen",
      number: "03",
      eyebrow: "Application 03",
      headingLines: ["Hydrogen Power.", "On Demand.", "Without Compromise."],
      primaryLineIndex: 2,
      paragraphs: [
        "Hydrogen has always been the right answer. The industry's failure was never the science — it was the inability to deliver it where needed, at the scale required, at a cost that holds. VIVIFY's approach ends that excuse. Practical hydrogen power for real-world deployments — available where you need it, at economics that make it undeniable.",
      ],
      pulsarBlurb: {
        prefix: "Learn how ",
        linkText: "Pulsar™ on-demand hydrogen generation",
        suffix: " supports scalable deployments.",
      },
      ctaSubject: "VIVIFY — Hydrogen Power Application",
      ctaLabel: "Talk to Us About Hydrogen Power",
      media: { kind: "placeholder", category: "Hydrogen Power Deployment" },
      mediaCaption: "Hydrogen power deployment in a connected infrastructure environment",
      mediaOnLeft: false,
      fitTitle: "Where hydrogen power fits",
      fitCards: [
        {
          title: "Mobility Ecosystems",
          body: "Support clean power for connected mobility and infrastructure nodes.",
        },
        {
          title: "Digital + Compute",
          body: "Meet energy-intensive loads with high uptime requirements.",
        },
        {
          title: "Industrial Campuses",
          body: "Enable cleaner operations without sacrificing throughput or reliability.",
        },
      ],
    },
    {
      id: "application-emissions",
      number: "04",
      eyebrow: "Application 04",
      headingLines: ["Near-Zero", "Emissions.", "No Excuses."],
      primaryLineIndex: 2,
      paragraphs: [
        "The industrial sector has been told for decades that clean operation means compromised performance. VIVIFY's Clean Air Technology™ (CAT™) is the answer to that false choice. A retrofit-ready five-stage platform designed to remove virtually all pollutants from exhaust streams — built for real-world integration across multiple fuel types and industrial environments, without touching operational reliability.",
      ],
      ctaSubject: "VIVIFY — Clean Emissions Application",
      ctaLabel: "Talk to Us About Clean Emissions",
      media: { kind: "video", src: `${CLOUDFRONT_BASE}/coal-application.mp4` },
      mediaCaption: "Industrial exhaust treatment in a heavy industry environment",
      mediaOnLeft: true,
      fitTitle: "Where clean emissions fits",
      fitCards: [
        {
          title: "Power + Process Heat",
          body: "Upgrade existing generation and thermal systems for cleaner operation.",
        },
        {
          title: "Industrial Facilities",
          body: "Reduce emissions in manufacturing, processing, and heavy industry environments.",
        },
        {
          title: "Energy Transition Programs",
          body: "Deliver compliance-forward upgrades without sacrificing uptime.",
        },
      ],
    },
    {
      id: "application-water",
      number: "05",
      eyebrow: "Application 05",
      headingLines: ["Industrial Water", "Treatment", "That Holds."],
      primaryLineIndex: 2,
      paragraphs: [
        "The hardest water treatment problems — high-variability streams, difficult industrial inputs, fracking runoff — are precisely where standard solutions fail. Through a configuration and expansion of Pulsar™ technology, VIVIFY operates where other platforms quit: difficult streams, demanding conditions, and real-world discharge requirements that don't bend to ideal-case assumptions — supporting cleaner discharge, reuse, and safer handling.",
      ],
      ctaSubject: "VIVIFY — Water Treatment Application",
      ctaLabel: "Talk to Us About Water Treatment",
      media: { kind: "video", src: `${CLOUDFRONT_BASE}/water-treatment-application.mp4` },
      mediaCaption: "Industrial water treatment facility",
      mediaOnLeft: false,
      fitTitle: "Where water treatment fits",
      fitCards: [
        {
          title: "Fracking / Produced Water",
          body: "Treat complex oil & gas water streams for safer handling and reuse.",
        },
        {
          title: "Gray Water",
          body: "Support on-site treatment and recycling in industrial and district environments.",
        },
        {
          title: "Leachate + Industrial Runoff",
          body: "Address landfill leachate and other high-strength industrial water cases.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Applications — Where the Technology Actually Deploys"
        description="VIVIFY's clean energy platform deploys across hydrogen power, near-zero emissions retrofits, and difficult industrial water treatment — built for real-world conditions, not lab assumptions."
        path="/applications"
      />

      {/* Hero — Where the Technology Actually Deploys */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="applications-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Applications
            </p>
            <h1
              id="applications-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">Where the</span>
              <span className="block">Technology</span>
              <span className="block text-primary">Actually Deploys.</span>
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Emergency response. Data centers. Clean hydrogen power. Near-zero emissions. Water treatment. Five applications. One engineering platform. None of it theoretical.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-black"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Application Deep-Dives */}
      {applications.map((app, index) => {
        const isDark = index % 2 === 0;
        const sectionBg = isDark ? "bg-black text-white" : "bg-gray-50 text-foreground";
        const headingColor = isDark ? "text-white" : "text-foreground";
        const subheadingColor = isDark ? "text-white/90" : "text-foreground/85";
        const bodyColor = isDark ? "text-white/85" : "text-muted-foreground";
        const cardClass = isDark
          ? "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
          : "rounded-2xl border border-gray-200 bg-white p-6";
        const fitWrapperClass = isDark
          ? "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
          : "rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8";

        return (
          <section
            key={app.id}
            id={app.id}
            className={`relative overflow-hidden py-20 md:py-28 scroll-mt-24 ${sectionBg}`}
            aria-labelledby={`${app.id}-title`}
          >
            {isDark && (
              <>
                <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
              </>
            )}

            <div className="container relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Text Column */}
                <div className={app.mediaOnLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <div className="flex items-center gap-3">
                    <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-primary`}>
                      {app.eyebrow}
                    </p>
                    {app.isNew && (
                      <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-black">
                        New
                      </span>
                    )}
                  </div>

                  <h2
                    id={`${app.id}-title`}
                    className={`mt-5 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] ${headingColor}`}
                  >
                    {app.headingLines.map((line, lineIdx) => (
                      <span
                        key={line}
                        className={`block ${lineIdx === app.primaryLineIndex ? "text-primary" : ""}`}
                      >
                        {line}
                      </span>
                    ))}
                  </h2>

                  <div className={`mt-8 space-y-5 text-base md:text-lg leading-relaxed ${bodyColor}`}>
                    {app.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{tm(paragraph)}</p>
                    ))}
                    {app.pulsarBlurb && (
                      <p className={subheadingColor}>
                        {app.pulsarBlurb.prefix}
                        <Link
                          href="/technology#hog"
                          className="font-semibold text-primary hover:underline underline-offset-4"
                        >
                          {tm(app.pulsarBlurb.linkText)}
                        </Link>
                        {app.pulsarBlurb.suffix}
                      </p>
                    )}
                  </div>

                  <div className="mt-10">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                      asChild
                    >
                      <a href={buildTalkToUsHref(app.ctaSubject)}>
                        {app.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Media Column */}
                <div className={`order-1 ${app.mediaOnLeft ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xl">
                    {app.media.kind === "video" ? (
                      <div className="bg-black">
                        <video
                          autoPlay
                          muted
                          loop
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full aspect-video object-cover"
                        >
                          <source src={app.media.src} type="video/mp4" />
                        </video>
                      </div>
                    ) : (
                      <div className="relative aspect-video bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
                        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>
                        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                          <p className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-primary leading-none">
                            {app.number}
                          </p>
                          <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
                            {app.media.category}
                          </p>
                          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Image / Video Coming Soon
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="px-6 py-5 bg-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {app.eyebrow}
                      </p>
                      <p className="mt-2 text-base font-semibold text-foreground leading-snug">
                        {app.mediaCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Where X fits */}
              <div className={`mt-16 ${fitWrapperClass}`}>
                <h3 className={`text-2xl md:text-3xl font-bold tracking-tight ${headingColor}`}>
                  {app.fitTitle}
                </h3>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {app.fitCards.map((card) => (
                    <div key={card.title} className={cardClass}>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        {card.title}
                      </p>
                      <p className={`mt-3 text-sm leading-relaxed ${bodyColor}`}>{card.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Related */}
      <section
        className="bg-white py-20 md:py-24"
        aria-labelledby="applications-related-title"
      >
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Related
              </p>
              <h2
                id="applications-related-title"
                className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              >
                Go Deeper.
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Explore the engineering behind the deployments — and the news shaping what comes next.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Link
                href="/technology"
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  The Technology
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                  See How It's Built
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Deep-dives on HOG<TM />, CAT<TM />, and Flying Pig<TM /> — the three platforms behind every application on this page.
                </p>
                <p className="mt-5 inline-flex items-center text-sm font-semibold text-primary group-hover:underline underline-offset-4">
                  Explore the Platform <ArrowRight className="ml-2 h-4 w-4" />
                </p>
              </Link>

              <Link
                href="/news"
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Latest News
                </p>
                <p className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                  What's Moving
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Press releases, partnerships, and deployments — read where VIVIFY is showing up in the real world.
                </p>
                <p className="mt-5 inline-flex items-center text-sm font-semibold text-primary group-hover:underline underline-offset-4">
                  Read the Latest <ArrowRight className="ml-2 h-4 w-4" />
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="applications-cta-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              Discuss a Deployment
            </p>
            <h2
              id="applications-cta-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">Tell Us What</span>
              <span className="block">You're Building.</span>
              <span className="block">We'll Power It.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              Six applications. One platform. If your project needs power that the grid can't deliver on the timeline you require, this is the conversation to have.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={getInTheRoomHref}>Start a Conversation</a>
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
