/* VIVIFY About Page: Split layout with company story and leadership */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Users, Lightbulb, Globe, Target } from "lucide-react";
import { Link } from "wouter";

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
      <Seo
        title="About"
        description="Learn about VIVIFY’s mission and leadership—transforming existing energy infrastructure into near-zero emissions, reliable power."
        path="/about"
      />
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="about-hero-title"
      >
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 id="about-hero-title" className="text-6xl md:text-7xl font-bold mb-6">
              About <span className="text-primary">VIVIFY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Pioneering revolutionary energy technologies that solve the world's most pressing environmental and
              economic challenges
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white" style={{
          clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
        }}></div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="about-mission-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="about-mission-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                VIVIFY is dedicated to transforming global energy infrastructure by enabling coal-fired, diesel, and
                natural gas power plants to operate at near-zero emissions while maintaining reliability and
                profitability.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe the world doesn&apos;t have to choose between clean energy and reliable power. Through
                technologies like Clean Air Technology™ and Pulsar™, we&apos;re building the bridge to a sustainable
                energy future where both are possible.
              </p>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Explore our{" "}
                <Link href="/technology" className="font-semibold text-primary hover:underline underline-offset-4">
                  core technologies
                </Link>
                , see{" "}
                <Link href="/applications" className="font-semibold text-primary hover:underline underline-offset-4">
                  where they’re applied
                </Link>
                , or read{" "}
                <Link href="/news" className="font-semibold text-primary hover:underline underline-offset-4">
                  recent press releases
                </Link>
                .
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                What we&apos;re here to do
              </p>
              <div className="space-y-4">
                {[
                  { icon: Lightbulb, text: "Innovate breakthrough energy solutions" },
                  { icon: Globe, text: "Enable global energy transformation" },
                  { icon: Users, text: "Preserve jobs and communities" },
                  { icon: Target, text: "Advance the hydrogen economy" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex gap-3">
                      <div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="about-values-title">
        <div className="container">
          <div className="text-center mb-16">
            <h2 id="about-values-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
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
              { title: "Partnership", desc: "Collaborative relationships with our customers" },
            ].map((value, idx) => (
              <div key={idx}
                   className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="bg-primary text-black py-20 md:py-28" aria-labelledby="about-stats-title">
        <div className="container">
          <div className="text-center mb-16">
            <h2 id="about-stats-title" className="text-5xl md:text-6xl font-bold mb-6">
              By The Numbers
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "50+", label: "Patents & Patents Pending" },
              { stat: "420K", label: "Jobs Supported" },
              { stat: "99%+", label: "Emissions Reduction" },
              { stat: "Global", label: "Market Reach" },
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
      <section className="bg-white py-20 md:py-28" aria-labelledby="about-vision-title">
        <div className="container">
          <div className="text-center mb-16">
            <h2 id="about-vision-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
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
                desc: "Hydrogen-powered systems providing clean, reliable energy for all applications",
              },
              {
                title: "Zero Emissions",
                desc: "All energy production operating at near-zero emissions with full environmental compliance",
              },
              {
                title: "Economic Prosperity",
                desc: "Jobs, communities, and industries thriving in the hydrogen economy transition",
              },
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
      <section className="bg-primary text-black py-16 md:py-24" aria-labelledby="about-cta-title">
        <div className="container text-center">
          <h2 id="about-cta-title" className="text-5xl md:text-6xl font-bold mb-6">
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
