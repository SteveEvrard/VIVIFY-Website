/* VIVIFY About Page: Split layout with company story and leadership */

import { Button } from "@/components/ui/button";
import { buildContactMailto } from "@/lib/contactMailto";
import { Users, Lightbulb, Globe, Target } from "lucide-react";

export default function About() {
  const getInTouchHref = buildContactMailto({
    subject: "Vivify — Get in Touch",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to connect to learn more about Vivify’s clean energy technology.",
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden">
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              About <span className="text-primary">VIVIFY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Pioneering revolutionary energy technologies that solve the world's most pressing environmental and economic challenges
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Company Mission - Split Layout */}
      <section className="relative bg-primary md:bg-transparent py-16 md:py-28 overflow-hidden">
        {/* Diagonal background shape */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-primary" style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)'
        }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]">
                Our Mission
              </h2>
              
              <p className="text-base sm:text-lg leading-relaxed mb-6 text-white/90">
                VIVIFY is dedicated to transforming global energy infrastructure by enabling coal-fired, diesel, and natural gas power plants to operate at near-zero emissions while maintaining reliability and profitability.
              </p>

              <p className="text-base sm:text-lg leading-relaxed mb-8 text-white/90">
                We believe the world doesn't have to choose between clean energy and reliable power. Through revolutionary technologies like Clean Air Technology™ and Pulsar™, we're building the bridge to a sustainable energy future where both are possible.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Lightbulb className="w-6 h-6 flex-shrink-0" />
                  <span className="text-white/95 font-semibold">Innovate breakthrough energy solutions</span>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-6 h-6 flex-shrink-0" />
                  <span className="text-white/95 font-semibold">Enable global energy transformation</span>
                </div>
                <div className="flex gap-3">
                  <Users className="w-6 h-6 flex-shrink-0" />
                  <span className="text-white/95 font-semibold">Preserve jobs and communities</span>
                </div>
                <div className="flex gap-3">
                  <Target className="w-6 h-6 flex-shrink-0" />
                  <span className="text-white/95 font-semibold">Pioneer the hydrogen economy</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 md:border-transparent md:bg-gray-200 rounded-lg h-80 md:h-96 overflow-hidden">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="https://d2t61k482lx79u.cloudfront.net/overview-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at VIVIFY
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Innovation", desc: "Breakthrough technologies that transform industries" },
              { title: "Sustainability", desc: "Environmental responsibility and long-term impact" },
              { title: "Reliability", desc: "Dependable solutions that power the world" },
              { title: "Partnership", desc: "Collaborative relationships with our customers" }
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visionary leaders driving innovation in clean energy
            </p>
          </div>

          <div className="space-y-16">
            {/* CEO & Founder */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 rounded-lg h-80 md:h-96 overflow-hidden">
                <img
                  src="/CEO.jpeg"
                  alt="Jason Herring"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  CEO &amp; Founder
                </p>
                <h3 className="text-4xl font-bold text-foreground mb-4">
                  Jason Herring
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Jason founded VIVIFY to eliminate the false choice between clean energy and reliable power. He believes the fastest path to meaningful
                  decarbonization is transforming the grid-connected systems we already have—without breaking communities, budgets, or stability.
                </p>

                <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                  <p className="text-foreground font-semibold mb-2">Founder Perspective</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Legacy infrastructure is leverage: capital-dense, grid-connected assets that can be upgraded rather than abandoned</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>AI, data centers, and electrification demand reliable baseload power—intermittency isn&apos;t an option</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>VIVIFY focuses on solutions that scale within existing operations and timelines</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  His mission is straightforward: keep the grid stable, keep electricity affordable, and make the air cleaner—at speed and at scale.
                </p>
              </div>
            </div>

            {/* Chief Engineer (no image) */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Technical Leadership
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Chief Engineer
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                VIVIFY&apos;s Chief Engineer leads the engineering execution of our Clean Air Technology™ platform—from plant integration and reliability to
                monitoring, controls, and long-term performance in real-world operations.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
                <p className="text-foreground font-semibold mb-2">Areas of Focus</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Systems engineering for retrofit deployments with minimal operational disruption</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Safety, compliance, and performance validation across emissions-control stages</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Controls, telemetry, and continuous optimization for predictable results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials (hidden until we have real quotes) */}
      {false && (
        <section className="bg-white py-20 md:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                What Our Partners Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading energy providers and utilities worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "VIVIFY's technology gives us the ability to meet environmental standards while maintaining operational efficiency. It's a game-changer for our industry.",
                  author: "Director of Operations",
                  company: "Major Utility Company",
                },
                {
                  quote:
                    "The Clean Air Technology system was installed with minimal disruption to our operations. The results exceeded our expectations.",
                  author: "Plant Manager",
                  company: "Coal-Fired Power Generation",
                },
                {
                  quote:
                    "We've been impressed by VIVIFY's commitment to innovation and their deep understanding of our operational challenges.",
                  author: "Chief Technology Officer",
                  company: "Energy Infrastructure Provider",
                },
                {
                  quote:
                    "VIVIFY's solutions enable us to invest in our existing infrastructure while meeting future environmental regulations.",
                  author: "Executive Vice President",
                  company: "Regional Utility",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <div className="mb-4">
                    <p className="text-lg text-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Company Stats */}
      <section className="bg-primary text-black py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              By The Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "50+", label: "Patents & Patents Pending" },
              { stat: "420K", label: "Jobs Supported" },
              { stat: "99%+", label: "Emissions Reduction" },
              { stat: "Global", label: "Market Reach" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl md:text-6xl font-bold mb-2">{item.stat}</p>
                <p className="text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building the energy infrastructure of tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clean Energy Everywhere",
                desc: "Hydrogen-powered systems providing clean, reliable energy for all applications"
              },
              {
                title: "Zero Emissions",
                desc: "All energy production operating at near-zero emissions with full environmental compliance"
              },
              {
                title: "Economic Prosperity",
                desc: "Jobs, communities, and industries thriving in the hydrogen economy transition"
              }
            ].map((vision, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-foreground mb-4">{vision.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{vision.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Join Us in Transforming Energy
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of the revolution in clean energy technology and sustainable power generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-primary font-bold" asChild>
              <a href={getInTouchHref}>Get in Touch</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
