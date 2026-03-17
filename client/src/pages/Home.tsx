/* VIVIFY Home Page: Grey Parrot-inspired template with diagonal dividers, icon grids, and modern layout */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Link } from "wouter";
import { Cpu, Leaf, Wind, TrendingUp } from "lucide-react";

export default function Home() {
  const SHOW_FRAMEWORK_SECTION = false;
  const mobiaVideoUrl = "https://d2t61k482lx79u.cloudfront.net/VIVIFY-Mobia_020526_v1.mp4";
  const hogImageUrl = "/hog-system.png";
  const catImageUrl = "/cat-system.png";

  const startConversationHref = buildContactMailto({
    subject: "VIVIFY — Renewable Infrastructure Framework",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I’d like to start a conversation about clean energy intelligence for an upcoming project.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Project type (city / mobility / data center / industrial / mixed-use):",
      "Location:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const featureSections = [
    {
      id: "home-hog-title",
      title: "HOG",
      subtitle: "Hydrogen Oxygen Generator",
      mediaLabel: "Featured Product",
      mediaTitle: "HOG System Overview",
      mediaSummary:
        "A visual concept of the HOG system and its integrated energy-generation architecture.",
      ctaLabel: "Learn More About HOG",
      ctaHref: "/technology",
      showCta: false,
      mediaOnLeft: true,
      sectionClassName: "py-16 md:pt-28 md:pb-16",
      paragraphs: [
        "Our flagship energy system designed to be a self supporting hydrogen energy source powered from a simple H2O based starter. HOG provides a pollutant free hydrogen energy source designed for behind the meter services",
        "Designed as a self supporting energy platform, HOG is built to maximize energy creation while minimizing traditional inefficiencies. The system is positioned as a 99% emission free, scalable, on demand hydrogen solution that can support a wide range of behind the meter power requirements.",
        "Its integrated architecture brings together Pulsar for on demand hydrogen creation and system revitalization, alongside multi stage turbines, multi functioning transformers, an H2O input generator, and combustion chambers for power and heat distribution.",
      ],
      mediaType: "image",
      mediaSrc: hogImageUrl,
      mediaAlt: "HOG system concept rendering",
    },
    {
      id: "home-cat-title",
      title: "CAT",
      subtitle: "Clean Air Technology",
      mediaLabel: "Featured Product",
      mediaTitle: "CAT System Overview",
      mediaSummary:
        "An overview of the CAT platform and its role in cleaner, more efficient industrial energy systems.",
      ctaLabel: "Learn More About CAT",
      ctaHref: "/technology",
      showCta: true,
      mediaOnLeft: false,
      sectionClassName: "py-16 md:pt-28 md:pb-16",
      paragraphs: [
        "Our flagship five-stage emissions control system is designed to remove virtually all pollutants from exhaust while maintaining strong operational performance. CAT helps industrial systems move toward near-zero emissions without compromising practical deployment needs.",
        "Built as a retrofit-friendly clean energy solution, CAT is positioned to reduce parasitic load, improve plant efficiency, and deliver a more cost-effective path toward cleaner output across legacy and modern infrastructure environments.",
        "Its integrated platform brings together multiple stages of filtration, separation, and incineration technologies to support cleaner exhaust streams and a more scalable emissions-control strategy for real-world operations.",
      ],
      mediaType: "image",
      mediaSrc: catImageUrl,
      mediaAlt: "Clean Air Technology system rendering",
      mediaClassName: "object-[50%_60%]",
    },
    {
      id: "home-ecosystem-title",
      title: "Enabling Living Systems at Scale",
      mediaLabel: "Featured Video",
      mediaTitle: "MOBIA + VIVIFY Overview",
      mediaSummary:
        "See how VIVIFY provides the clean energy, digital infrastructure, smart grid, and AI foundation that brings living mobility systems to life.",
      ctaLabel: "Learn More",
      ctaHref: "https://mobia.ai/",
      showCta: true,
      ctaNewTab: true,
      mediaOnLeft: true,
      sectionClassName: "py-16 md:pt-28 md:pb-16",
      paragraphs: [
        "VIVIFY’s clean energy, data, smart grid, and AI capabilities provide the foundational infrastructure required to support advanced intelligent systems across cities, campuses, industrial zones, and digital environments.",
        "In mobility-led developments, VIVIFY works in close partnership with MOBIA, the Smart City Operating System for Living Mobility, delivering the energy and intelligence required to bring living urban systems to life.",
        "Beyond mobility, VIVIFY powers clean, intelligent infrastructure for data centers, industrial campuses, mixed-use developments, and next-generation cities.",
      ],
      mediaType: "video",
      mediaSrc: mobiaVideoUrl,
      mediaAlt: "MOBIA and VIVIFY overview video",
    },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Clean Energy Intelligence"
        description="VIVIFY delivers 100% clean and renewable energy systems, intelligent data transmission, smart grids, and AI-driven infrastructure that power intelligent cities, mobility ecosystems, data centers, and large-scale developments worldwide."
        path="/"
        brandFirst
      />
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden"
        aria-labelledby="home-hero-title"
      >
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-40 saturate-75"
        >
          <source
            src="https://d2t61k482lx79u.cloudfront.net/VIVIFY-hero-background.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle brand-gray tint (keeps header style consistent) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>
        {/* Small dark layer for legibility */}
        <div className="pointer-events-none absolute inset-0 bg-black/35"></div>

        <div className="container relative z-10 pb-14 sm:pb-10">
          <div className="max-w-2xl">
            <h1 id="home-hero-title" className="sr-only">
              VIVIFY
            </h1>

            <img
              src="/vivify-hero-logo.png"
              alt="VIVIFY"
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]"
            />

            <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Renewable Energy, Data, and Intelligence
            </p>
            
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              VIVIFY delivers 100% clean and renewable energy systems, intelligent data transmission, smart grids, and AI-driven infrastructure including coal and hydrogen advanced energy conversion technologies.
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Four Pillars (at-a-glance) */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden" aria-labelledby="home-pillars-title">
        {/* subtle background texture */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>
        <div className="container">
          <div className="text-center mb-10 md:mb-12 relative z-10">
            <p className="mt-4 mb-8 text-sm sm:text-base md:text-lg font-semibold text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              District-scale energy systems to AI-optimized infrastructure, VIVIFY provides the foundational layers that enable living, adaptive systems to operate in the real world.
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              The VIVIFY stack
            </p>
            <h2 id="home-pillars-title" className="mt-3 text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Four <span className="text-primary">Pillars</span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A tight, integrated set of capabilities that power intelligent, low‑carbon systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { icon: Leaf, name: "Clean Energy", tagline: "Net‑zero energy systems that scale from site to district." },
              { icon: Cpu, name: "Data", tagline: "The secure, real‑time digital backbone for connected infrastructure." },
              { icon: Wind, name: "Smart Grid", tagline: "Renewable‑first grids that balance generation, storage, and demand." },
              { icon: TrendingUp, name: "AI", tagline: "AI optimization for forecasting, digital twins, and predictive performance." },
            ].map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.name}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-white via-white to-gray-50 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-primary/20 transition"></div>
                  <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-primary/70 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Decorative blobs */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity"></div>
                  <div className="pointer-events-none absolute -left-12 -bottom-12 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-60 group-hover:opacity-85 transition-opacity"></div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Pillar {String(idx + 1).padStart(2, "0")}
                  </p>

                  <div className="mt-4 w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center shadow-sm ring-1 ring-primary/15 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="mt-5 text-xl font-extrabold text-foreground tracking-tight">
                    {p.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      {SHOW_FRAMEWORK_SECTION && (
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Foundations of Intelligent, Clean Energy Systems
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Every intelligent city, mobility network, or digital environment depends on resilient, clean, and intelligent infrastructure. VIVIFY delivers that foundation through four tightly integrated pillars.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: Leaf,
                title: "Clean & Renewable Energy Systems",
                desc:
                  "VIVIFY designs and delivers advanced clean energy systems that combine renewables, hydrogen, storage, and energy conversion technologies to support net-zero and post-carbon infrastructure.",
                capabilities: [
                  "District-scale clean energy systems and on-site generation",
                  "Hybrid generation, storage, and energy conversion integration",
                  "Battery energy storage systems (BESS)",
                  "Green hydrogen production, storage, and integration",
                  "Power-to-X systems for fuels and industrial energy",
                  "Clean energy conversion (coal, oil & gas) and transition systems",
                  "Renewable microgeneration and district energy",
                  "Net-zero and carbon-neutral energy planning",
                ],
                outcome: "Clean, resilient energy systems designed for intelligent, future-ready infrastructure.",
              },
              {
                icon: Cpu,
                title: "Data Transmission & Digital Infrastructure",
                desc:
                  "VIVIFY builds the digital nervous system that allows intelligent environments to sense, communicate, and adapt in real time.",
                capabilities: [
                  "High-capacity, low-latency data transmission",
                  "Energy-efficient digital networks",
                  "Edge computing and modular data infrastructure",
                  "Secure data movement for critical systems",
                  "AI-ready digital environments",
                ],
                outcome: "Reliable, low-carbon digital infrastructure optimized for AI-driven and energy-intensive systems.",
              },
              {
                icon: Wind,
                title: "Smart Renewable Grids",
                desc:
                  "VIVIFY delivers intelligent, renewable-first grids designed for modern energy demand, mobility integration, and decentralized generation.",
                capabilities: [
                  "Renewable microgrids and district grids",
                  "Intelligent load balancing and demand response",
                  "Grid-edge intelligence and automation",
                  "Integration of storage, hydrogen, and variable renewables",
                  "EV, autonomous mobility, and data-center-ready grids",
                  "Utility modernization and resilience planning",
                ],
                outcome: "Adaptive grids that optimize clean energy flows in real time.",
              },
              {
                icon: TrendingUp,
                title: "AI & System Intelligence",
                desc:
                  "VIVIFY applies artificial intelligence to continuously optimize energy, data, and grid systems across complex environments.",
                capabilities: [
                  "AI-driven energy optimization",
                  "Renewable and hydrogen forecasting",
                  "Digital twins for infrastructure systems",
                  "Predictive maintenance and performance analytics",
                  "Autonomous system coordination",
                ],
                outcome: "Infrastructure that learns, adapts, and improves over time.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>

                  <div className="mt-6">
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Capabilities
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex gap-2">
                          <span className="text-primary font-bold">✓</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-lg bg-white border border-gray-200 p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Outcome</p>
                    <p className="text-sm text-muted-foreground">{pillar.outcome}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold" asChild>
              <Link href="/technology">Explore Technology</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
          </div>
        </div>
      </section>
      )}

      {featureSections.map((section) => (
        <section
          key={section.id}
          className={`relative bg-primary md:bg-transparent overflow-hidden ${"sectionClassName" in section ? section.sectionClassName : "py-16 md:py-28"}`}
          aria-labelledby={section.id}
        >
          <div
            className={`hidden md:block absolute top-0 bottom-0 w-1/2 bg-primary ${
              section.mediaOnLeft ? "right-0" : "left-0"
            }`}
            style={{
              clipPath: section.mediaOnLeft
                ? "polygon(0 10%, 100% 0, 100% 100%, 0 90%)"
                : "polygon(0 0, 100% 10%, 100% 90%, 0 100%)",
            }}
          ></div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className={section.mediaOnLeft ? "order-2 md:order-2 text-white" : "order-2 md:order-1 text-white"}>
                <h2
                  id={section.id}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]"
                >
                  {section.title}
                </h2>
                {"subtitle" in section ? (
                  <p className="-mt-4 mb-6 text-xl sm:text-2xl font-semibold text-white/95 tracking-tight">
                    {section.subtitle}
                  </p>
                ) : null}
                <div className="space-y-5 text-white/90 leading-relaxed">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph.includes("MOBIA") ? (
                        <>
                          {paragraph.split("MOBIA")[0]}
                          <span className="font-semibold text-white">MOBIA</span>
                          {paragraph.split("MOBIA")[1]}
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
              </div>

              <div className={`order-1 bg-white rounded-lg border border-gray-200 overflow-hidden ${section.mediaOnLeft ? "md:order-1" : "md:order-2"}`}>
                <div className="px-8 pt-8">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    {section.mediaLabel}
                  </p>
                  <h3 className="text-2xl font-bold text-foreground">
                    {section.mediaTitle}
                  </h3>
                </div>

                <div className="mt-6 border-t border-gray-200 bg-black">
                  {section.mediaType === "image" ? (
                    <img
                      src={section.mediaSrc}
                      alt={section.mediaAlt}
                      className={`w-full aspect-video object-cover ${"mediaClassName" in section ? section.mediaClassName : ""}`}
                      loading="lazy"
                    />
                  ) : (
                    <video
                      autoPlay
                      muted
                      controls
                      playsInline
                      preload="auto"
                      className="w-full aspect-video"
                    >
                      <source
                        src={section.mediaSrc}
                        type="video/mp4"
                      />
                    </video>
                  )}
                </div>

                <div className="px-8 pb-8 pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.mediaSummary}
                  </p>
                  {section.showCta ? (
                    <div className="mt-6">
                      <Button className="w-full bg-black hover:bg-black/90 text-primary font-bold whitespace-normal text-center leading-tight h-auto py-3" asChild>
                        <a
                          href={section.ctaHref}
                          target={"ctaNewTab" in section && section.ctaNewTab ? "_blank" : undefined}
                          rel={"ctaNewTab" in section && section.ctaNewTab ? "noreferrer" : undefined}
                        >
                          {section.ctaLabel}
                        </a>
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24" aria-labelledby="home-cta-title">
        <div className="container text-center">
          <h2 id="home-cta-title" className="text-5xl md:text-6xl font-bold mb-6">
            Power the Future with Clean Energy Intelligence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether developing a city, mobility ecosystem, industrial campus, or digital environment, VIVIFY provides the clean energy and intelligent infrastructure foundation required to succeed in a net-zero future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight" asChild>
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight" asChild>
              <a href="/VIVIFY-Brochure.pdf" download>
                Download the Infrastructure Framework
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
