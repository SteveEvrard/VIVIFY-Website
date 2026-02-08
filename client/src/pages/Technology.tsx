/* VIVIFY Framework Page: Renewable Infrastructure Framework (4 pillars) */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Cpu, Leaf, TrendingUp, Wind } from "lucide-react";
import { Link } from "wouter";

export default function Technology() {
  const startConversationHref = buildContactMailto({
    subject: "VIVIFY — Renewable Infrastructure Framework",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I’d like to learn more about the Renewable Infrastructure Framework and how it applies to our project.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Project type (city / mobility / data center / industrial / mixed-use):",
      "Location:",
      "Timeline:",
      "",
      "Thanks,",
      "",
    ],
  });

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Renewable Infrastructure Framework"
        description="Explore VIVIFY’s Renewable Infrastructure Framework—four integrated pillars: clean energy systems, data transmission, smart grids, and AI-driven system intelligence."
        path="/technology"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Renewable <span className="text-primary">Infrastructure Framework</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Clean energy, data, smart grids, and AI — the foundational layers of intelligent, low-carbon systems.
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Four Pillars */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Foundations of Intelligent, Clean Energy Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              VIVIFY delivers the core infrastructure stack required for intelligent cities, mobility ecosystems, data centers, and large-scale developments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: Leaf,
                title: "Clean & Renewable Energy Systems",
                desc:
                  "Advanced clean energy systems that combine renewables, hydrogen, storage, and energy conversion technologies to support net-zero and post-carbon infrastructure.",
                capabilities: [
                  "Solar (utility-scale, district-scale, and building-integrated)",
                  "Wind and hybrid renewable generation",
                  "Battery energy storage systems (BESS)",
                  "Green hydrogen production, storage, and integration",
                  "Power-to-X systems for fuels and industrial energy",
                  "Renewable microgeneration and district energy",
                ],
              },
              {
                icon: Cpu,
                title: "Data & Digital Connectivity",
                desc:
                  "The digital nervous system that lets intelligent environments sense, communicate, and adapt in real time.",
                capabilities: [
                  "High-capacity, low-latency data transmission",
                  "Energy-efficient digital networks",
                  "Edge computing and modular data infrastructure",
                  "Secure data movement for critical systems",
                  "AI-ready digital environments",
                ],
              },
              {
                icon: Wind,
                title: "Smart Renewable Grids",
                desc:
                  "Renewable-first grid infrastructure designed for modern energy demand, mobility integration, and decentralized generation.",
                capabilities: [
                  "Renewable microgrids and district grids",
                  "Intelligent load balancing and demand response",
                  "Grid-edge intelligence and automation",
                  "Integration of storage, hydrogen, and variable renewables",
                  "EV and data-center-ready grids",
                ],
              },
              {
                icon: TrendingUp,
                title: "AI & Energy Intelligence",
                desc:
                  "Artificial intelligence that continuously optimizes energy, data, and grid systems across complex environments.",
                capabilities: [
                  "AI-driven energy optimization",
                  "Renewable and hydrogen forecasting",
                  "Digital twins for infrastructure systems",
                  "Predictive maintenance and performance analytics",
                  "Autonomous system coordination",
                ],
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
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Capabilities</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {pillar.capabilities.map((cap) => (
                        <li key={cap} className="flex gap-2">
                          <span className="text-primary font-bold">✓</span>
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold" asChild>
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <a href="/VIVIFY-Brochure.pdf" download>
                Download the Infrastructure Framework
              </a>
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

        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
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
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Where VIVIFY Operates</p>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Intelligent cities and districts",
                  "Mobility and MaaS infrastructure",
                  "Data centers and digital hubs",
                  "Industrial and logistics campuses",
                  "Large-scale mixed-use developments",
                  "Energy transition and industrial decarbonization environments",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <Button className="bg-black hover:bg-black/90 text-primary font-bold" asChild>
                  <a href={startConversationHref}>Start a Conversation</a>
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                  <Link href="/products">Explore Capabilities</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Power Your Next Intelligent Development
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            If you’re building a city, mobility ecosystem, industrial campus, or digital environment, VIVIFY can deliver the clean energy and system intelligence foundation to make it real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold" asChild>
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
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
