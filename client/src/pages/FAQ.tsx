/* VIVIFY FAQ Page: Manifesto-driven layout with a sticky "Jump To" sidebar, client-side search, and accordion answers. */

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  Cpu,
  Handshake,
  Leaf,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";

type FaqItem = {
  question: string;
  answer: string[];
};

type FaqCategory = {
  id: string;
  shortLabel: string;
  title: string;
  titleAccent?: string;
  icon: LucideIcon;
  items: FaqItem[];
};

export default function FAQ() {
  const askQuestionHref = buildContactMailto({
    subject: "VIVIFY — FAQ Follow-Up Question",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I had a question that wasn't covered on the FAQ page — please get back to me with the engineering team's perspective.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Question:",
      "Context (site, project type, timeline):",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const categories: FaqCategory[] = [
    {
      id: "faq-technology",
      shortLabel: "Technology",
      title: "Technology &",
      titleAccent: "How It Works",
      icon: Cpu,
      items: [
        {
          question: "What exactly does VIVIFY's system do?",
          answer: [
            "VIVIFY's platform generates hydrogen on demand from water and uses that hydrogen to produce clean, reliable power — without combustion, without stored fuel, and without grid dependence. The system takes water in and produces electricity out, with near-zero emissions at the point of generation.",
            "It is not a hydrogen fuel cell in the traditional sense, and it is not a battery. It is a self-contained, closed-loop energy generation platform designed for continuous operation at industrial and commercial scale.",
          ],
        },
        {
          question: "How does on-demand hydrogen generation work?",
          answer: [
            "The system uses an electrochemical process to split water into hydrogen and oxygen at the moment power is required. The hydrogen produced is fed directly into the generation process — it is not held, stored, or pressurized. The loop is continuous: water in, electricity out, with the generation process consuming what it produces in real time.",
            "There is no reservoir of hydrogen waiting to be used. At any given moment during operation, the volume present in the system is minimal — comparable, in practical terms, to what you would find in a balloon.",
          ],
        },
        {
          question: "Does VIVIFY's system require a connection to the power grid?",
          answer: [
            "No. VIVIFY's platform is designed to operate independently of the grid. It can function as a primary power source, a backup source, or in a hybrid configuration alongside existing infrastructure. For sites where grid access is unavailable, unreliable, or prohibitively expensive, VIVIFY provides a fully self-sufficient alternative.",
            "The system requires a water supply and, in certain configurations, a startup power source — but it does not depend on continuous grid connectivity to operate.",
          ],
        },
        {
          question: "How does VIVIFY compare to a diesel generator?",
          answer: [
            "A diesel generator burns fossil fuel to produce electricity. It requires a fuel supply chain, produces significant emissions and noise, requires frequent maintenance, and carries operational costs that rise with fuel prices. The infrastructure to support it — fuel storage, delivery contracts, containment requirements — is substantial.",
            "VIVIFY's platform uses water as its input, produces power with near-zero emissions, operates quietly, and does not require a fuel supply chain. Over a comparable operational lifecycle, VIVIFY eliminates the dependencies that make diesel expensive, logistically complex, and increasingly regulated out of viability.",
          ],
        },
        {
          question: "What is the power output capacity of a VIVIFY system?",
          answer: [
            "VIVIFY's platform is modular and scalable. Output configurations range from smaller installations suitable for remote or off-grid operations to larger deployments designed for industrial facilities, data centers, and critical infrastructure. Systems can be stacked to meet virtually any power requirement.",
            "Specific capacity configurations are discussed during the engineering consultation phase. Contact our team to discuss the power requirements for your specific application.",
          ],
        },
        {
          question: "What monitoring and diagnostics does the system include?",
          answer: [
            "Every VIVIFY system ships with integrated sensor arrays and real-time telemetry built into the core architecture. Pressure, temperature, flow rate, and system performance are monitored continuously — not as an afterthought, but as a fundamental design element.",
            "Anomalies are identified at the data stage, not the event stage. Remote monitoring capability is standard, enabling VIVIFY's engineering team and site operators to maintain visibility into system performance at all times.",
          ],
        },
      ],
    },
    {
      id: "faq-safety",
      shortLabel: "Safety",
      title: "Safety",
      icon: ShieldCheck,
      items: [
        {
          question: "Is hydrogen dangerous? Should I be concerned?",
          answer: [
            "The concerns people have about hydrogen come from a specific type of hydrogen system — one that stores large volumes under high pressure. Those concerns are legitimate for that architecture. They are not applicable to VIVIFY's.",
            "VIVIFY generates hydrogen on demand and consumes it as it is produced. There is no storage phase. There is no pressurized reserve. At any given moment of operation, the volume of hydrogen in the system is minimal — the worst-case failure scenario is roughly equivalent to a balloon popping. Not a pressure vessel rupturing. A pop — and then it is over, because there is nothing left to sustain it.",
          ],
        },
        {
          question: "What happens if something goes wrong with the system?",
          answer: [
            "The system's integrated monitoring detects anomalies before they become failures. In the event of an unexpected condition, the system is designed to fail safe — meaning it stops generating rather than continuing under abnormal parameters.",
            "Because there is no stored hydrogen reserve, any release event is inherently self-limiting. Hydrogen is fourteen times lighter than air and disperses upward immediately — it does not pool, accumulate, or create sustained risk the way heavier-than-air vapors do. The architecture removes the conditions necessary for a serious failure to propagate.",
          ],
        },
        {
          question: "Is the system compliant with safety codes and regulations?",
          answer: [
            "VIVIFY's systems are engineered to meet applicable safety standards. Because the platform's operational hydrogen volumes are minimal and the architecture is closed-loop, it engages a different — and considerably less restrictive — category of regulatory requirements than stored-hydrogen systems.",
            "Specific compliance documentation, site-level regulatory requirements, and permitting support are addressed during the deployment consultation process. Our engineering team works directly with operators and regulators to ensure every installation meets local and federal requirements.",
          ],
        },
        {
          question: "Can the system be deployed indoors or in enclosed spaces?",
          answer: [
            "Deployment configurations — indoor, outdoor, semi-enclosed — are evaluated on a site-by-site basis during the engineering consultation. The closed-loop architecture and minimal operational hydrogen volumes make a wider range of deployment environments viable than traditional hydrogen systems.",
            "Ventilation, clearances, and environmental conditions are all assessed as part of the standard installation process. VIVIFY does not deploy systems into configurations that do not meet its engineering safety requirements.",
          ],
        },
        {
          question: "What is the fuel source, and is it safe to handle?",
          answer: [
            "The input that drives hydrogen generation is water. There is no diesel on site, no natural gas connection, no combustible fuel delivery chain, and no flammable inventory of any kind. The supply chain for this fuel is a water line.",
            "The risk profile of the fuel input is zero. It is the same material used to suppress fires.",
          ],
        },
      ],
    },
    {
      id: "faq-applications",
      shortLabel: "Applications",
      title: "Applications &",
      titleAccent: "Industries",
      icon: Building2,
      items: [
        {
          question: "What industries is VIVIFY's platform designed for?",
          answer: [
            "VIVIFY's platform is relevant to any industry where reliable, independent power is operationally critical — and where the cost, logistics, or emissions profile of conventional energy sources has become a liability.",
            "Current focus areas include data centers, critical infrastructure, remote industrial operations, defense and government, mining, maritime, and commercial facilities with large power demands or sustainability mandates. The platform's modularity means it scales to fit the requirements of each sector rather than requiring operations to adapt to the technology.",
          ],
        },
        {
          question: "Is this viable for remote or off-grid sites?",
          answer: [
            "This is one of the most compelling use cases for VIVIFY's platform. Remote and off-grid sites traditionally face a stark choice: absorb the enormous logistics cost of diesel fuel delivery, or build grid infrastructure that may not be economically viable. VIVIFY removes that choice.",
            "The system requires a water supply — which is a significantly less complex logistics problem than a fuel supply chain. For mining operations, remote industrial facilities, island installations, and similar environments, VIVIFY represents a fundamental change in what is operationally possible.",
          ],
        },
        {
          question: "Can VIVIFY power a data center?",
          answer: [
            "Yes. Data centers represent one of VIVIFY's primary target applications. The sector's needs align precisely with what the platform delivers: continuous, reliable power independent of grid constraints, scalable output, near-zero emissions, and a dramatically simplified infrastructure footprint compared to diesel backup systems.",
            "The AI compute buildout is placing extraordinary demand on energy infrastructure. VIVIFY's platform is positioned as a direct response to that demand — one that does not require waiting for grid expansion to proceed.",
          ],
        },
        {
          question: "Is VIVIFY relevant for defense or government applications?",
          answer: [
            "Defense and government represent a significant area of interest and active development for VIVIFY. The operational profile of the platform — grid independence, minimal logistical footprint, reliable output, and no combustible fuel supply chain — maps directly to the requirements of forward-operating environments, critical infrastructure protection, and energy security mandates.",
            "For specific inquiries related to defense or government applications, please contact us directly at info@vivify-technology.com.",
          ],
        },
        {
          question: "Can the system be used as a backup power source rather than a primary one?",
          answer: [
            "Yes. VIVIFY's platform can be configured as primary power, backup power, or in a hybrid arrangement alongside existing grid or generator infrastructure. The deployment architecture is determined by the specific operational requirements of each site.",
            "For facilities that require seamless failover — hospitals, data centers, critical infrastructure — the system can be configured to provide immediate backup capacity without the warm-up time associated with conventional diesel generators.",
          ],
        },
      ],
    },
    {
      id: "faq-environment",
      shortLabel: "Environment",
      title: "Environmental",
      titleAccent: "Impact",
      icon: Leaf,
      items: [
        {
          question: "What emissions does VIVIFY's system produce?",
          answer: [
            "VIVIFY's platform generates power without combustion. There is no exhaust, no NOx, no particulate matter, and no CO₂ at the point of generation. The system's emission output is near zero — the primary byproduct of the generation process is water vapor.",
            "This is not a marginal improvement on conventional generation. It is a categorically different emissions profile — one that meets the requirements of the most stringent regulatory environments without retrofits or offsets.",
          ],
        },
        {
          question: "Is this \"green hydrogen\"? What does that mean for VIVIFY?",
          answer: [
            "The hydrogen industry uses color-coded terminology to describe how hydrogen is produced. \"Green hydrogen\" refers to hydrogen produced via electrolysis powered by renewable energy — meaning the production process itself carries no carbon cost. VIVIFY's on-demand generation process is consistent with this classification.",
            "The more important point for most operators is practical: VIVIFY's system produces power with near-zero emissions, from water, without a fossil fuel supply chain. Whether or not the regulatory framework in a given jurisdiction credits this as \"green\" is a compliance question — the underlying physics does not change.",
          ],
        },
        {
          question: "Does deploying VIVIFY count toward corporate sustainability or ESG commitments?",
          answer: [
            "In most frameworks, yes — though the precise credit depends on the specific ESG reporting standard in use and the scope of emissions the organization is tracking. Replacing or displacing diesel generation with VIVIFY's zero-combustion platform has measurable, documentable impact on Scope 1 and Scope 2 emissions.",
            "We work with partners on documentation and emissions quantification to support their reporting requirements. Contact us to discuss specifics for your organization's framework.",
          ],
        },
        {
          question: "How much water does the system consume?",
          answer: [
            "Water consumption varies with output configuration and operational profile. VIVIFY's engineering team provides site-specific consumption estimates during the deployment consultation process.",
            "For context: water is a considerably more accessible, logistically manageable, and environmentally benign input than fossil fuel. In most deployment environments — including remote sites — establishing a water supply for VIVIFY's system is a substantially simpler problem than managing a diesel fuel supply chain.",
          ],
        },
      ],
    },
    {
      id: "faq-partnerships",
      shortLabel: "Partnerships",
      title: "Getting Started &",
      titleAccent: "Partnerships",
      icon: Handshake,
      items: [
        {
          question: "How do I find out if VIVIFY is right for my operation?",
          answer: [
            "The process starts with a direct conversation. VIVIFY does not operate through a standard sales funnel — the first meeting is with people who understand the engineering and can engage substantively with the specifics of your site, your power requirements, and your operational constraints.",
            "Reach out at info@vivify-technology.com or call 888.277.8370. Be direct about what you need. We will be direct about whether we can deliver it.",
          ],
        },
        {
          question: "What does the deployment process look like?",
          answer: [
            "Deployment begins with a site assessment — understanding the power requirements, the physical environment, the water supply, and any regulatory or permitting considerations specific to the location. From there, VIVIFY's engineering team develops a configuration tailored to the site.",
            "Installation timelines vary with system scale and site complexity. VIVIFY handles the engineering integration; site preparation and coordination with local infrastructure are managed collaboratively with the operator. Ongoing support, monitoring, and maintenance are part of the operational relationship — not add-ons.",
          ],
        },
        {
          question: "Does VIVIFY work with integration partners, resellers, or channel partners?",
          answer: [
            "Yes. VIVIFY is actively developing its partner network — particularly with system integrators, EPC contractors, and technology companies whose customers have significant power infrastructure requirements. If you represent an organization that serves clients in industries where VIVIFY's platform is relevant, we want to talk.",
            "Partnership inquiries should be directed to info@vivify-technology.com.",
          ],
        },
        {
          question: "Is VIVIFY seeking investors?",
          answer: [
            "VIVIFY is a company at the intersection of energy independence, AI infrastructure, and national security — three of the most significant capital themes of this decade. We engage with investors who understand the scale of what we are building and are prepared to be part of something that matters at that scale.",
            "Investment inquiries are handled directly. Reach out at info@vivify-technology.com with a brief description of your background and interest.",
          ],
        },
        {
          question: "What kind of ongoing support does VIVIFY provide after installation?",
          answer: [
            "VIVIFY's relationship with operators does not end at installation. Remote monitoring is built into every system, and VIVIFY's engineering team maintains active visibility into deployed systems. Maintenance, diagnostics, and performance optimization are part of the operational support structure.",
            "The specific terms of ongoing support are established during the deployment agreement. For critical infrastructure applications, VIVIFY can discuss enhanced response protocols tailored to the operational requirements of the site.",
          ],
        },
      ],
    },
    {
      id: "faq-cost",
      shortLabel: "Cost & Economics",
      title: "Cost &",
      titleAccent: "Economics",
      icon: CircleDollarSign,
      items: [
        {
          question: "How does VIVIFY's cost compare to diesel or grid power?",
          answer: [
            "The comparison requires a total-cost-of-ownership framework rather than a line-item price comparison. The capital cost of a VIVIFY system is offset by the elimination of fuel purchasing, fuel storage infrastructure, fuel delivery contracts, generator maintenance cycles, and — increasingly — carbon compliance costs.",
            "For remote and off-grid applications, the economics are particularly compelling. The logistics cost of diesel delivery to remote sites is often the single largest operating expense. Replacing that variable with a water supply is a structural cost reduction that compounds over time rather than tracking fuel price volatility.",
          ],
        },
        {
          question: "What is the capital cost of a VIVIFY system?",
          answer: [
            "Capital cost varies significantly with system size, output configuration, and site-specific integration requirements. VIVIFY does not publish a standard price list because the platform is engineered to the requirements of each deployment rather than sold as a commodity product.",
            "The right starting point is a conversation about your specific power requirements and operational context. From there, VIVIFY can provide a configuration and cost framework. Contact us directly to begin that discussion.",
          ],
        },
        {
          question: "What are the ongoing operational costs?",
          answer: [
            "The primary ongoing input cost is water — a commodity available at orders of magnitude lower cost than diesel fuel and without the supply chain volatility associated with fossil fuels. Beyond water, operational costs consist of maintenance and support — structured, predictable, and not subject to commodity price fluctuations.",
            "The absence of combustion also means the system has fewer wear components than a diesel generator, reducing both maintenance frequency and parts cost over the operational lifecycle of the system.",
          ],
        },
        {
          question: "Are there financing or leasing options available?",
          answer: [
            "VIVIFY works with partners and operators to structure commercial arrangements that reflect the long-term value profile of the platform. Options including capital purchase, lease structures, and power purchase agreements are discussed on a case-by-case basis depending on the operator's financial requirements and operational context.",
            "If a specific financing structure is a prerequisite for your evaluation, raise it in your initial conversation with our team. We approach commercial structure as a solvable problem, not a fixed constraint.",
          ],
        },
        {
          question: "Does VIVIFY's system qualify for clean energy incentives or tax credits?",
          answer: [
            "The incentive landscape for clean hydrogen and zero-emission power generation is evolving rapidly at both the federal and state level. Depending on the jurisdiction, deployment context, and the operator's entity type, VIVIFY installations may qualify for investment tax credits, clean energy production incentives, or other programs.",
            "We strongly recommend engaging a qualified tax advisor to assess the incentive picture for your specific situation. VIVIFY can provide technical documentation to support incentive applications, but determination of eligibility is an advisor-level question, not a question we answer on behalf of operators.",
          ],
        },
      ],
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState<string>(categories[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isSearching = normalizedQuery.length > 0;

  // Filter categories + items based on the search query.
  const filteredCategories = useMemo(() => {
    if (!isSearching) return categories;
    return categories
      .map((category) => {
        const items = category.items.filter((item) => {
          const haystack = (
            item.question +
            " " +
            item.answer.join(" ")
          ).toLowerCase();
          return haystack.includes(normalizedQuery);
        });
        return { ...category, items };
      })
      .filter((category) => category.items.length > 0);
  }, [categories, normalizedQuery, isSearching]);

  const noResults = isSearching && filteredCategories.length === 0;

  // Scroll-spy: update the active category as the user scrolls.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isSearching) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (a.target as HTMLElement).offsetTop - (b.target as HTMLElement).offsetTop);
        if (visible.length > 0) {
          setActiveCategoryId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    categories.forEach((category) => {
      const el = sectionRefs.current[category.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories, isSearching]);

  const handleJumpTo = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveCategoryId(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="FAQ — Questions Answered. Plainly."
        description="The questions we hear most about VIVIFY's on-demand hydrogen platform — technology, safety, applications, environmental impact, partnerships, and cost. Answered without jargon."
        path="/faq"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="faq-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              FAQ
            </p>
            <h1
              id="faq-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">Questions</span>
              <span className="block">Answered.</span>
              <span className="block text-primary">Plainly.</span>
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              We built something new. New things generate questions. Here are the ones we hear most — answered without jargon, without hedging, and without making you sit through a sales call to get the truth.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-black z-20"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* FAQ Body — Sidebar + Accordion */}
      <section
        className="relative bg-black text-white py-20 md:py-28 overflow-hidden"
        aria-labelledby="faq-body-title"
      >
        <h2 id="faq-body-title" className="sr-only">
          Frequently asked questions
        </h2>
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[260px_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24" aria-label="Jump to category">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                  Jump To
                </p>
                <nav className="mt-4">
                  <ul className="space-y-1">
                    {categories.map((category) => {
                      const isActive = activeCategoryId === category.id && !isSearching;
                      return (
                        <li key={category.id}>
                          <button
                            type="button"
                            onClick={() => handleJumpTo(category.id)}
                            aria-current={isActive ? "true" : undefined}
                            className={`group relative flex w-full items-center justify-between gap-2 rounded-md py-2 pl-3 pr-2 text-left text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-primary/10 text-primary"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            {isActive && (
                              <span
                                aria-hidden="true"
                                className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 rounded-full bg-primary"
                              ></span>
                            )}
                            <span className="truncate">{category.shortLabel}</span>
                            <span
                              className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums ${
                                isActive
                                  ? "bg-primary/20 text-primary"
                                  : "bg-white/10 text-white/60 group-hover:text-white/80"
                              }`}
                            >
                              {category.items.length}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="mt-5 pt-5 border-t border-white/10">
                  <label htmlFor="faq-search" className="sr-only">
                    Search questions
                  </label>
                  <div className="relative">
                    <Search
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50"
                    />
                    <Input
                      id="faq-search"
                      type="search"
                      placeholder="Search questions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="h-10 w-full rounded-md border-white/10 bg-white/5 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus-visible:border-primary focus-visible:ring-primary/30"
                    />
                  </div>
                  {isSearching && (
                    <p className="mt-3 text-xs text-white/60">
                      Showing matches across all categories.
                    </p>
                  )}
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0">
              {noResults ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-10 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    No matches
                  </p>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-white">
                    Nothing matches &ldquo;{searchQuery}&rdquo; yet.
                  </h3>
                  <p className="mt-4 text-base text-white/80 leading-relaxed max-w-xl mx-auto">
                    Try a different keyword — or send the question directly. The engineering team answers.
                  </p>
                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-black font-bold"
                      asChild
                    >
                      <a href={askQuestionHref}>
                        Send Your Question <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-16 md:space-y-20">
                  {filteredCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div
                        key={category.id}
                        id={category.id}
                        ref={(el) => {
                          sectionRefs.current[category.id] = el;
                        }}
                        className="scroll-mt-24"
                      >
                        <div className="flex items-center gap-4">
                          <span
                            aria-hidden="true"
                            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary"
                          >
                            <Icon className="h-6 w-6" />
                          </span>
                          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                            {category.title}
                            {category.titleAccent && (
                              <>
                                {" "}
                                <span className="text-primary italic">
                                  {category.titleAccent}
                                </span>
                              </>
                            )}
                          </h3>
                        </div>
                        <div className="mt-6 h-px w-full bg-white/10"></div>

                        <Accordion
                          type="multiple"
                          className="mt-2 divide-y divide-white/10"
                        >
                          {category.items.map((item, idx) => (
                            <AccordionItem
                              key={`${category.id}-${idx}`}
                              value={`${category.id}-${idx}`}
                              className="border-b-0"
                            >
                              <AccordionTrigger className="py-5 text-left text-base md:text-lg font-semibold text-white hover:no-underline hover:text-primary [&>svg]:text-primary [&>svg]:size-5">
                                {item.question}
                              </AccordionTrigger>
                              <AccordionContent className="pb-6 pt-0 text-base text-white/80 leading-relaxed">
                                <div className="space-y-4">
                                  {item.answer.map((para, pIdx) => (
                                    <p key={pIdx}>{para}</p>
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="faq-cta-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              Still Not Answered
            </p>
            <h2
              id="faq-cta-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">Ask Us</span>
              <span className="block">Directly.</span>
              <span className="block">We Pick Up.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              If your question isn't here, it means we haven't heard it enough times yet. That is not a reason to stay in the dark. Call us or send an email — the engineering team answers.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={askQuestionHref}>Send Your Question</a>
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
