/* VIVIFY Technology Page: CAT + Pulsar + component technologies */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Cpu, Droplets, Flame, Shield, Zap } from "lucide-react";

const CAT_IMAGE_URL = "https://d2t61k482lx79u.cloudfront.net/CAT.jpg";
const PULSAR_VIDEO_URL = "https://d2t61k482lx79u.cloudfront.net/Pulsar.mp4";

export default function Technology() {
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

  const technologyOverviewHref = buildContactMailto({
    subject: "Request: Vivify Technology Overview",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "Could you please share the latest Vivify technology overview?",
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
        description="Explore VIVIFY’s core technologies—Clean Air Technology™ (CAT), Pulsar™ hydrogen generation, and the components that enable near-zero emissions and scalable hydrogen power."
        path="/technology"
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Core technologies and component systems that enable cleaner operations and scalable hydrogen power.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Core Technologies */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Core Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clean Air Technology™ (CAT) and Pulsar™ form an integrated platform for emissions control and hydrogen power.
            </p>
          </div>

          {/* Clean Air Technology™ + Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Clean Air Technology™</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our flagship five-stage emissions control system removes virtually all pollutants from exhaust, achieving near-zero emissions while maintaining operational efficiency.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {["99%+ pollutant removal", "Zero parasitic load", "Increased plant efficiency", "Cost-effective retrofit"].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                <a href={learnMoreCatHref}>Learn More About CAT</a>
              </Button>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-200">
              <img
                src={CAT_IMAGE_URL}
                alt="Clean Air Technology™ overview"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* CAT Component Technologies */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">CAT Component Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Droplets, title: "Hydroponic Towers", desc: "Particulate separation through water condensation" },
                { icon: Cpu, title: "Cold CAT", desc: "Cryogenic CO₂ removal and separation" },
                { icon: Flame, title: "Clean Air Turbine™", desc: "Multi-stage pollutant incineration" },
                { icon: Shield, title: "AGES™ Separator", desc: "Artificial gravity water filtration" },
                { icon: Shield, title: "Particle Acquisition Tower", desc: "Final stage particulate filtration" },
                { icon: Zap, title: "Multi‑Fuel Inputs", desc: "Integrates with coal, natural gas, diesel, and other exhaust streams—cleaning emissions without changing core operations." },
              ].map((comp, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <comp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{comp.title}</h4>
                  <p className="text-sm text-muted-foreground">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pulsar™ + Video */}
          <div className="mt-20 grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Pulsar™ Generator</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Patented on-demand hydrogen generation technology that supports scalable hydrogen power deployments and integrates with the Clean Air Technology platform.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-8">
                {["On-demand production", "Dozens of patents", "Scalable technology", "Future-ready"].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                <a href={learnMorePulsarHref}>Learn More About Pulsar</a>
              </Button>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-200">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={PULSAR_VIDEO_URL} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Pulsar Component Technologies */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Pulsar Component Technologies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Hydrogen Generation Core", desc: "On-demand hydrogen generation for power and process needs" },
                { icon: Shield, title: "Safety + Containment", desc: "Designed for safe operation in real-world deployments" },
                { icon: Cpu, title: "Controls & Telemetry", desc: "Monitoring, automation, and performance optimization" },
                { icon: Flame, title: "Integration Interface", desc: "Connects to downstream systems for continuous operation" },
                { icon: Shield, title: "Power Conditioning", desc: "Stabilization and control for consistent output" },
                { icon: Cpu, title: "System Diagnostics", desc: "Predictive insights for uptime and maintenance planning" },
              ].map((comp, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
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

      {/* CTA */}
      <section className="bg-primary text-black py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Request a Technology Overview</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Share what you’re evaluating and we’ll send the right technical materials and next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
              asChild
            >
              <a href={technologyOverviewHref}>Request Technology Overview</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

