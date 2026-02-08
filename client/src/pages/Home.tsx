/* VIVIFY Home Page: Grey Parrot-inspired template with diagonal dividers, icon grids, and modern layout */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Link } from "wouter";
import { Cpu, Leaf, Wind, TrendingUp } from "lucide-react";

export default function Home() {
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
      />
      {/* Hero Section with video background */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 saturate-50"
        >
          <source src="https://d2t61k482lx79u.cloudfront.net/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient for text readability */}
        {/* Neutral brand-gray wash (avoid navy/blue cast) */}
        <div className="absolute inset-0 bg-[#75787B]/30"></div>
        {/* Small neutral dark layer for legibility */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 pt-10 pb-20 md:pt-12 md:pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-primary/20 border border-primary px-4 py-2 rounded-full">
              <span className="text-primary font-semibold text-sm">Clean Energy • Data • Smart Grid • AI</span>
            </div>
            
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
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
            
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                <Link href="/technology">Explore the Renewable Infrastructure Framework</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
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

      {/* Positioning Strip */}
      <section className="bg-white py-10 md:py-12">
        <div className="container">
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-8 md:px-10 md:py-10">
            <p className="text-center text-sm font-semibold tracking-wide text-muted-foreground">
              Clean Energy • Data • Smart Grid • AI
            </p>
            <p className="mt-3 text-center text-xl md:text-2xl font-semibold text-foreground">
              The foundational layers of intelligent, low-carbon systems.
            </p>
          </div>
        </div>
      </section>

      {/* Core Domains Visual */}
      <section className="bg-white pb-8 md:pb-12">
        <div className="container">
          <div className="rounded-xl border border-gray-200 bg-white px-6 py-10 md:px-10">
            <div className="flex flex-col items-center justify-center gap-8">
              <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                {[
                  { icon: Leaf, label: "Clean Energy" },
                  { icon: Cpu, label: "Data" },
                  { icon: Wind, label: "Smart Grid" },
                  { icon: TrendingUp, label: "AI" },
                ].map((item, idx, arr) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <p className="mt-3 text-sm md:text-base font-semibold text-muted-foreground">
                          {item.label}
                        </p>
                      </div>
                      {idx < arr.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="hidden md:flex text-3xl font-semibold text-muted-foreground/60"
                        >
                          +
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-lg md:text-xl tracking-wide text-muted-foreground">
                <span className="font-semibold text-foreground">VIVIFY</span> | Core Domains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
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
                  "Solar (utility-scale, district-scale, and building-integrated)",
                  "Wind and hybrid renewable generation",
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
              <Link href="/technology">Explore the Renewable Infrastructure Framework</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Enablement */}
      <section className="relative bg-primary md:bg-transparent py-16 md:py-28 overflow-hidden">
        <div
          className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 10%, 100% 90%, 0 100%)" }}
        ></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]">
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

            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Note</p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Symbiosis: MOBIA + VIVIFY</h3>
              <p className="text-muted-foreground leading-relaxed">
                MOBIA is the Smart City Operating System — a living ecosystem spanning hardware, software, and Mobility-as-a-Service. VIVIFY provides the clean energy, hydrogen, data, smart grid, and AI foundation that powers and brings MOBIA’s living systems to life in real-world environments.
              </p>
              <div className="mt-6">
                <Button className="w-full bg-black hover:bg-black/90 text-primary font-bold" asChild>
                  <a href={startConversationHref}>Power Your Next Intelligent Development</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Where VIVIFY Operates</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Intelligent cities and districts",
              "Mobility and MaaS infrastructure",
              "Data centers and digital hubs",
              "Industrial and logistics campuses",
              "Large-scale mixed-use developments",
              "Energy transition and industrial decarbonization environments",
            ].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Why VIVIFY</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 p-8 md:p-10">
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              {[
                "100% clean and renewable energy focus",
                "Hydrogen and energy transition expertise",
                "Designed for AI and autonomous systems",
                "Scalable from single sites to city-scale systems",
                "Built for resilience, performance, and longevity",
                "Independent, partner-ready, future-proof",
              ].map((v) => (
                <li key={v} className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Power the Future with Clean Energy Intelligence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether developing a city, mobility ecosystem, industrial campus, or digital environment, VIVIFY provides the clean energy and intelligent infrastructure foundation required to succeed in a net-zero future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-primary font-bold" asChild>
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10" asChild>
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
