/* VIVIFY Home Page: Grey Parrot-inspired template with diagonal dividers, icon grids, and modern layout */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Link } from "wouter";
import { Cpu, Leaf, Wind, TrendingUp } from "lucide-react";

export default function Home() {
  const SHOW_FRAMEWORK_SECTION = false;

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
            <div className="inline-flex items-center bg-primary/20 border border-primary px-4 py-2 rounded-full">
              <span className="text-primary font-semibold text-sm">Clean Energy • Data • Smart Grid • AI</span>
            </div>
            
            <h1
              id="home-hero-title"
              className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]"
            >
              VIVIFY — Bringing Technology to Life
            </h1>

            <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Renewable Energy, Data, and Intelligence
            </p>
            
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              VIVIFY delivers 100% clean and renewable energy systems, intelligent data transmission, smart grids, and AI-driven infrastructure — including coal and hydrogen advanced energy conversion technologies — that power intelligent cities, mobility ecosystems, data centers, and large-scale developments worldwide.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              From district-scale energy systems to AI-optimized infrastructure, VIVIFY provides the foundational layers that enable living, adaptive systems to operate in the real world.
            </p>

            <p className="mt-5 text-sm sm:text-base text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Explore{" "}
              <Link href="/applications" className="font-semibold text-primary hover:underline underline-offset-4">
                real-world applications
              </Link>{" "}
              or read the{" "}
              <Link href="/news" className="font-semibold text-primary hover:underline underline-offset-4">
                latest company news
              </Link>
              .
            </p>
            
            <div className="mt-7 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-bold w-full sm:w-auto whitespace-normal text-center leading-tight h-auto py-3 sm:h-10 sm:py-0"
                asChild
              >
                <Link href="/technology">Explore Technology</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 w-full sm:w-auto whitespace-normal text-center leading-tight h-auto py-3 sm:h-10 sm:py-0"
                asChild
              >
                <a href={startConversationHref}>Power Your Next Intelligent Development</a>
              </Button>
            </div>
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

      {/* Ecosystem Enablement */}
      <section
        className="relative bg-primary md:bg-transparent py-16 md:py-28 overflow-hidden"
        aria-labelledby="home-ecosystem-title"
      >
        <div
          className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2
                id="home-ecosystem-title"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]"
              >
                Enabling Living Systems at Scale
              </h2>
              <div className="space-y-5 text-white/90 leading-relaxed">
                <p>
                  VIVIFY’s clean energy, data, smart grid, and AI capabilities provide the foundational infrastructure required to support advanced intelligent systems across cities, campuses, industrial zones, and digital environments.
                </p>
                <p>
                  In mobility-led developments, VIVIFY works in close partnership with <span className="font-semibold text-white">MOBIA</span>, the Smart City Operating System for Living Mobility, delivering the energy and intelligence required to bring living urban systems to life.
                </p>
                <p>
                  Beyond mobility, VIVIFY powers clean, intelligent infrastructure for data centers, industrial campuses, mixed-use developments, and next-generation cities.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-8 pt-8">
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Featured Video
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  MOBIA + VIVIFY Overview
                </h3>
              </div>

              <div className="mt-6 border-t border-gray-200 bg-black">
                <video
                  autoPlay
                  muted
                  controls
                  playsInline
                  preload="auto"
                  className="w-full aspect-video"
                >
                  <source
                    src="https://d2t61k482lx79u.cloudfront.net/VIVIFY-Mobia_020526_v1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              <div className="px-8 pb-8 pt-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  See how VIVIFY provides the clean energy, digital infrastructure, smart grid, and AI foundation that brings living mobility systems to life.
                </p>
                <div className="mt-6">
                  <Button className="w-full bg-black hover:bg-black/90 text-primary font-bold whitespace-normal text-center leading-tight h-auto py-3" asChild>
                    <a href={startConversationHref}>Power Your Next Intelligent Development</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
