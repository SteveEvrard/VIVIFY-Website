/* VIVIFY Technology Page: Five-stage process with detailed technical information */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Zap, Droplets, Wind, Cpu, Shield, Flame } from "lucide-react";

export default function Technology() {
  const whitepaperHref = buildContactMailto({
    subject: "Request: Vivify Technical Whitepaper",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "Could you please share the Vivify technical whitepaper?",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "What are you evaluating?",
      "",
      "Thanks,",
      "",
    ],
  });

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Technology"
        description="Learn how VIVIFY’s Clean Air Technology™ works—from the five-stage CAT process to on-demand hydrogen generation with Pulsar™."
        path="/technology"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Revolutionary Clean Air Technology™ powered by patented hydrogen generation systems
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Five-Stage Process - Split Layout */}
      <section className="relative bg-primary md:bg-transparent py-16 md:py-28 overflow-hidden">
        {/* Diagonal background shape */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-primary" style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)'
        }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]">
                The Five-Stage CAT Process
              </h2>
              
              <div className="space-y-6">
                {[
                  { num: "1", title: "Heavy Particulate Removal", desc: "Hydroponic towers condense and separate particulates through water mixing and high-pressure filtration" },
                  { num: "2", title: "CO₂ Removal (Cold CAT)", desc: "Cryogenic technology separates CO₂ from exhaust, converting it to solid form for removal" },
                  { num: "3", title: "Toxins Ignited & Burned", desc: "Clean Air Turbine™ incinerates residual pollutants using hydrogen-oxygen mixture" },
                  { num: "4", title: "Final Particulate Filter", desc: "Particle Acquisition Tower filters remaining particles for pollution-free gas release" },
                  { num: "5", title: "Water Filtration (AGES™)", desc: "Artificial Gravity Enhance Separator removes heavy particles like mercury from water" }
                ].map((stage) => (
                  <div key={stage.num} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border-2 border-white">
                      <span className="text-white font-bold text-lg">{stage.num}</span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg sm:text-xl mb-1 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                        {stage.title}
                      </h3>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 md:border-transparent md:bg-gray-200 rounded-lg h-80 md:h-96 overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="https://d2t61k482lx79u.cloudfront.net/CAT.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Core Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Integrated systems working together to achieve near-zero emissions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: "Hydroponic Towers", desc: "Water-based particulate separation and condensation system" },
              { icon: Wind, title: "Cold CAT", desc: "Cryogenic CO₂ precipitation and removal technology" },
              { icon: Zap, title: "Clean Air Turbine™", desc: "Multi-stage hydrogen-oxygen combustion system" },
              { icon: Droplets, title: "Particle Acquisition Tower", desc: "Final-stage particulate filtration system" },
              { icon: Cpu, title: "AGES™ Separator", desc: "Artificial gravity water filtration and purification" },
              { icon: Shield, title: "Pulsar™ Generator", desc: "On-demand hydrogen generation and fuel supply" }
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
                  <p className="text-muted-foreground">{tech.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pulsar™ Technology */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Pulsar™ Hydrogen Generator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The heart of VIVIFY's technology platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-foreground mb-6">How It Works</h3>
              
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">On-Demand Generation</p>
                  <p className="text-muted-foreground text-sm">Generates hydrogen exactly when and where it's needed for the CAT process</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Patented Technology</p>
                  <p className="text-muted-foreground text-sm">Dozens of patents protect the unique hydrogen generation process</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Scalable Design</p>
                  <p className="text-muted-foreground text-sm">Can be scaled from small industrial applications to large power plants</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Future-Ready</p>
                  <p className="text-muted-foreground text-sm">Foundation for hydrogen economy transition and alternative fuel applications</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg p-8 border border-primary/20">
              <h3 className="text-3xl font-bold text-foreground mb-6">Key Features</h3>
              
              <ul className="space-y-4">
                {[
                  "Generates hydrogen on-demand without storage requirements",
                  "Powers entire Clean Air Technology system",
                  "Enables CO₂ capture and incineration stages",
                  "Bridge technology to hydrogen-powered future",
                  "Enables distributed hydrogen production",
                  "Supports multiple industrial applications"
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-primary font-bold flex-shrink-0">✓</span>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Performance Specifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading metrics and capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { metric: "99%+", label: "Pollutant Removal", desc: "CO₂, SO₂, NOₓ, Mercury, Particulates" },
              { metric: "0%", label: "Parasitic Load", desc: "System increases plant output, not drains it" },
              { metric: "Weeks", label: "Installation Time", desc: "Minimal disruption to plant operations" },
              { metric: "Fraction", label: "Retrofit Cost", desc: "Compared to conventional systems" }
            ].map((spec, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">{spec.metric}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{spec.label}</h3>
                <p className="text-muted-foreground">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-bold text-foreground">Component</th>
                    <th className="text-left p-6 font-bold text-foreground">Function</th>
                    <th className="text-left p-6 font-bold text-primary">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { component: "Hydroponic Towers", function: "Particulate separation", performance: "Removes 85%+ of heavy particles" },
                    { component: "Cold CAT", function: "CO₂ removal", performance: "Separates 95%+ of CO₂" },
                    { component: "Clean Air Turbine™", function: "Pollutant incineration", performance: "Burns 99%+ of residual toxins" },
                    { component: "Particle Tower", function: "Final filtration", performance: "Removes 99%+ of remaining particles" },
                    { component: "AGES™ Separator", function: "Water purification", performance: "Removes heavy metals and mercury" },
                    { component: "Pulsar™ Generator", function: "Hydrogen generation", performance: "On-demand production, scalable" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-6 font-semibold text-foreground">{row.component}</td>
                      <td className="p-6 text-muted-foreground">{row.function}</td>
                      <td className="p-6 text-primary font-bold">{row.performance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Patents */}
      <section className="bg-primary text-black py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Innovation & Patents
            </h2>
            <p className="text-xl text-black/80 max-w-2xl mx-auto">
              Decades of research and development protected by dozens of patents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "50+ Patents", desc: "Patents and patents pending covering core technologies" },
              { title: "Proprietary Systems", desc: "Unique hydrogen generation and emissions control processes" },
              { title: "Continuous Innovation", desc: "Ongoing R&D for next-generation applications" }
            ].map((innovation, idx) => (
              <div key={idx} className="bg-white/10 rounded-lg p-8 border border-white/20 text-center">
                <h3 className="text-2xl font-bold mb-3">{innovation.title}</h3>
                <p className="text-black/80">{innovation.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how VIVIFY's breakthrough technology can transform your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href={whitepaperHref}>Download Technical Whitepaper</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
