/* VIVIFY Products Page: Grid-based product showcase with detailed cards */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Zap, Droplets, Wind, Flame, Shield, Cpu } from "lucide-react";

export default function Products() {
  const learnMoreCatHref = buildContactMailto({
    subject: "Vivify — Learn More (Clean Air Technology™)",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to learn more about Clean Air Technology™ (CAT) and how it could apply to our facility.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Facility / Project details:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const learnMorePulsarHref = buildContactMailto({
    subject: "Vivify — Learn More (Pulsar™ Hydrogen Generator)",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to learn more about the Pulsar™ hydrogen generator and how it integrates with Clean Air Technology™.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Facility / Project details:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const productSheetHref = buildContactMailto({
    subject: "Request: Vivify Product Sheet",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "Could you please share the latest Vivify product sheet?",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Which products are you interested in?",
      "",
      "Thanks,",
      "",
    ],
  });

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Products"
        description="Explore VIVIFY’s product suite, including Clean Air Technology™ (CAT) and Pulsar™ hydrogen generation, delivering emissions control and clean energy solutions."
        path="/products"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Comprehensive technologies for emissions control, hydrogen generation, and sustainable energy production
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Main Products Grid */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              VIVIFY's integrated product ecosystem delivers complete emissions control and clean energy solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Clean Air Technology™ */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-dashed border-primary hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 h-48 flex items-center justify-center">
                <Flame className="w-24 h-24 text-primary opacity-50" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Clean Air Technology™</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our flagship five-stage emissions control system removes virtually all pollutants from power plant exhaust, achieving near-zero emissions while maintaining operational efficiency.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">99%+ pollutant removal</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Zero parasitic load</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Increased plant efficiency</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Cost-effective retrofit</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                  <a href={learnMoreCatHref}>Learn More</a>
                </Button>
              </div>
            </div>

            {/* Pulsar™ Generator */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border-2 border-dashed border-primary hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 h-48 flex items-center justify-center">
                <Zap className="w-24 h-24 text-primary opacity-50" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4">Pulsar™ Generator</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Patented on-demand hydrogen generation technology that powers the entire Clean Air Technology system. The foundation of VIVIFY's hydrogen economy vision.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">On-demand production</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Dozens of patents</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Scalable technology</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-muted-foreground">Future-ready</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                  <a href={learnMorePulsarHref}>Learn More</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Component Technologies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Component Technologies</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Droplets, title: "Hydroponic Towers", desc: "Particulate separation through water condensation" },
                { icon: Wind, title: "Cold CAT™", desc: "Cryogenic CO₂ removal and separation" },
                { icon: Flame, title: "Clean Air Turbine™", desc: "Multi-stage pollutant incineration" },
                { icon: Cpu, title: "AGES™ Separator", desc: "Artificial gravity water filtration" },
                { icon: Shield, title: "Particle Acquisition Tower", desc: "Final stage particulate filtration" },
                { icon: Zap, title: "Control Systems", desc: "Real-time monitoring and optimization" }
              ].map((comp, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <comp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{comp.title}</h4>
                  <p className="text-sm text-muted-foreground">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose VIVIFY
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compared to conventional pollution control systems
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-bold text-foreground">Feature</th>
                    <th className="text-left p-6 font-bold text-primary">VIVIFY CAT</th>
                    <th className="text-left p-6 font-bold text-muted-foreground">Conventional Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Parasitic Load", vivify: "0%", conventional: "15-25%" },
                    { feature: "Installation Time", vivify: "Weeks", conventional: "Months/Years" },
                    { feature: "Pollutant Removal", vivify: "99%+", conventional: "85-95%" },
                    { feature: "Retrofit Cost", vivify: "Fraction", conventional: "Billions" },
                    { feature: "Additional Electricity", vivify: "Generated", conventional: "None" },
                    { feature: "Operational Complexity", vivify: "Low", conventional: "High" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-6 font-semibold text-foreground">{row.feature}</td>
                      <td className="p-6 text-primary font-bold">{row.vivify}</td>
                      <td className="p-6 text-muted-foreground">{row.conventional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Industry Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              VIVIFY technologies serve multiple sectors in the energy and environmental industries
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Coal-Fired Plants", desc: "Retrofit existing facilities for near-zero emissions" },
              { title: "Natural Gas Facilities", desc: "Enhance efficiency and reduce emissions" },
              { title: "Industrial Facilities", desc: "Wastewater treatment and air quality" },
              { title: "Data Centers", desc: "Support clean power for AI infrastructure" }
            ].map((app, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <h4 className="font-bold text-foreground mb-3">{app.title}</h4>
                <p className="text-sm text-muted-foreground">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Implement?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover how VIVIFY's products can transform your facility into a clean, efficient power source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black/10"
              asChild
            >
              <a href={productSheetHref}>Download Product Sheet</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
