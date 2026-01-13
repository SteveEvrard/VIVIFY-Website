/* VIVIFY Impact Page: Statistics and ecological/economic impact */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { TrendingUp, Leaf, Zap, Users } from "lucide-react";

export default function Impact() {
  const learnMoreHref = buildContactMailto({
    subject: "Vivify — Learn More (Impact)",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to learn more about Vivify’s impact and clean energy technology offerings.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "What I’m interested in:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Impact"
        description="Discover the environmental and economic impact of VIVIFY’s clean energy technology—reducing emissions while preserving grid reliability."
        path="/impact"
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Global <span className="text-primary">Impact</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Understanding the economic and environmental significance of clean energy transformation
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Industry Statistics */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Energy Landscape
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Global energy statistics and the role of coal in modern power generation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { stat: "35%", label: "Global Electricity from Coal", desc: "Coal remains a dominant baseload power source worldwide" },
              { stat: "60%", label: "China's Coal Generation", desc: "Coal provides the majority of electricity in Asia" },
              { stat: "420K", label: "Jobs in Coal Industry", desc: "Direct employment in coal mining and power generation" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">{item.stat}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">The Data Center Boom</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As artificial intelligence and cloud computing drive unprecedented electricity demand, data centers are consuming more power than ever before. U.S. data center electricity consumption is projected to double by 2028, requiring massive increases in reliable baseload power generation. Coal-fired plants, when equipped with VIVIFY's Clean Air Technology™, can provide this critical power while meeting environmental standards.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Environmental Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How VIVIFY's technologies reduce emissions and protect ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Leaf,
                title: "Emissions Reduction",
                desc: "99%+ removal of CO₂, SO₂, NOₓ, mercury, and particulates from power plant exhaust",
                stats: ["99%+ pollutant removal", "Near-zero emissions", "Exceeds EPA standards"]
              },
              {
                icon: Zap,
                title: "Energy Efficiency",
                desc: "Clean Air Technology™ generates additional electricity while cleaning emissions",
                stats: ["Zero parasitic load", "Increased plant output", "Lower operational costs"]
              },
              {
                icon: Users,
                title: "Community Protection",
                desc: "Eliminates harmful air pollution that affects public health and quality of life",
                stats: ["Cleaner air quality", "Reduced health impacts", "Protected ecosystems"]
              },
              {
                icon: TrendingUp,
                title: "Climate Action",
                desc: "Enables existing power infrastructure to meet climate goals without replacement",
                stats: ["Reduced carbon footprint", "Compliance ready", "Future-proof technology"]
              }
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6">{benefit.desc}</p>
                  <ul className="space-y-2">
                    {benefit.stats.map((stat, sidx) => (
                      <li key={sidx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-bold">✓</span>
                        <span>{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="relative bg-primary md:bg-transparent py-16 md:py-28 overflow-hidden">
        {/* Diagonal background shape */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-primary" style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)'
        }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]">
                Economic Advantages
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                    Cost-Effective Retrofit
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    VIVIFY's solutions cost a fraction of traditional pollution control systems or coal plant replacement, making environmental compliance economically viable for utilities.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                    Job Preservation
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    By enabling existing coal plants to operate cleanly, VIVIFY preserves 420,000+ jobs in the coal industry and supporting communities.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                    Increased Revenue
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    Clean Air Technology™ generates additional electricity that can be sold to the grid, creating new revenue streams for power plants.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                    Grid Reliability
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    Maintains baseload power generation capacity that's essential for grid stability and meeting peak demand periods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-3xl font-bold text-foreground mb-8">Financial Impact</h3>
              
              <div className="space-y-6">
                {[
                  { label: "Installation Cost", value: "Fraction of traditional systems" },
                  { label: "Operational Savings", value: "Reduced maintenance and compliance costs" },
                  { label: "Additional Revenue", value: "From generated electricity" },
                  { label: "ROI Timeline", value: "Significantly faster than alternatives" }
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider">{item.label}</p>
                    <p className="text-lg font-bold text-foreground mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join utilities, energy providers, and environmental leaders in building a sustainable energy future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-primary font-bold" asChild>
              <a href={learnMoreHref}>Learn More</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
