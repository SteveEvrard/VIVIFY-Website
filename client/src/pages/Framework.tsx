/* VIVIFY Framework Page: Renewable Infrastructure Framework (4 pillars) */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Cpu, Leaf, TrendingUp, Wind } from "lucide-react";
import { Link } from "wouter";

export default function Framework() {
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
        path="/framework"
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
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
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
                  "District-scale clean energy systems and on-site generation",
                  "Hybrid generation, storage, and energy conversion integration",
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
                    <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Focus Areas
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
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
              asChild
            >
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
              asChild
            >
              <a href="/VIVIFY-Brochure.pdf" download>
                Download the Infrastructure Framework
              </a>
            </Button>
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
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
              asChild
            >
              <a href={startConversationHref}>Start a Conversation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
              asChild
            >
              <Link href="/technology">Explore Technology</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

