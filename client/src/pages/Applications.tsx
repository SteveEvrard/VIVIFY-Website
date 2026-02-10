/* VIVIFY Applications Page: 4 key use cases */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Link } from "wouter";

const CLOUDFRONT_BASE = "https://d2t61k482lx79u.cloudfront.net";

export default function Applications() {
  const learnMoreHref = buildContactMailto({
    subject: "Vivify — Learn More (Applications)",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to learn more about Vivify’s applications and clean energy technology offerings.",
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
        title="Applications"
        description="Explore four key VIVIFY applications: hydrogen power, clean emissions technology, industrial water treatment, and aerospace energy systems."
        path="/applications"
      />
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="applications-hero-title"
      >
        {/* Subtle brand-gray tint (replaces navy/blue feel) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 id="applications-hero-title" className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-primary">Applications</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Where VIVIFY delivers clean energy intelligence across real-world infrastructure.
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Hydrogen Power */}
      <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="applications-hydrogen-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="applications-hydrogen-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Cost‑Effective, Abundant Hydrogen Power
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hydrogen is a cornerstone for cleaner, resilient infrastructure — but it only works when it’s available where you need it, at the scale you need, at an economics that pencil. VIVIFY’s approach is built to deliver practical hydrogen power for real-world deployments.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Learn how{" "}
                <Link
                  href="/technology#technology-pulsar-title"
                  className="font-semibold text-primary hover:underline underline-offset-4"
                >
                  Pulsar™ on-demand hydrogen generation
                </Link>{" "}
                supports scalable deployments.
              </p>

              <div className="mt-10">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight" asChild>
                  <a href={learnMoreHref}>Talk to Us About Hydrogen Power</a>
                </Button>
              </div>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-200">
              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={`${CLOUDFRONT_BASE}/Intelligent-Cardiac-Hospital.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Where hydrogen power fits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              {[
                { k: "Mobility ecosystems", v: "Support clean power for connected mobility and infrastructure nodes." },
                { k: "Digital + compute", v: "Meet energy-intensive loads with high uptime requirements." },
                { k: "Industrial campuses", v: "Enable cleaner operations without sacrificing throughput or reliability." },
              ].map((x) => (
                <div key={x.k} className="bg-white/60 rounded-lg border border-gray-200 p-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{x.k}</p>
                  <p className="mt-2">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clean Emissions Technology */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="applications-emissions-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <h2 id="applications-emissions-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Clean Emissions Technology
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                VIVIFY’s{" "}
                <Link
                  href="/technology#technology-cat-title"
                  className="font-semibold text-primary hover:underline underline-offset-4"
                >
                  Clean Air Technology™ (CAT)
                </Link>{" "}
                is a retrofit-ready platform designed to remove virtually all pollutants from exhaust streams while maintaining reliable operations. It’s built for real-world integration across multiple fuel types and industrial environments.
              </p>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                  asChild
                >
                  <a href={learnMoreHref}>Talk to Us About Clean Emissions</a>
                </Button>
              </div>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-200 lg:order-1">
              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={`${CLOUDFRONT_BASE}/coal-application.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Where clean emissions fits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              {[
                { k: "Power + process heat", v: "Upgrade existing generation and thermal systems for cleaner operation." },
                { k: "Industrial facilities", v: "Reduce emissions in manufacturing, processing, and heavy industry environments." },
                { k: "Energy transition programs", v: "Deliver compliance-forward upgrades without sacrificing uptime." },
              ].map((x) => (
                <div key={x.k} className="bg-white/60 rounded-lg border border-gray-200 p-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{x.k}</p>
                  <p className="mt-2">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Water Treatment */}
      <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="applications-water-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="applications-water-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Industrial Water Treatment
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Through a configuration and expansion of{" "}
                <Link
                  href="/technology#technology-pulsar-title"
                  className="font-semibold text-primary hover:underline underline-offset-4"
                >
                  Pulsar™ technology
                </Link>
                , VIVIFY enables industrial water treatment applications designed for difficult, high-variability streams—supporting cleaner discharge, reuse, and safer handling.
              </p>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                  asChild
                >
                  <a href={learnMoreHref}>Talk to Us About Water Treatment</a>
                </Button>
              </div>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-200">
              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={`${CLOUDFRONT_BASE}/water-treatment-application.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Where water treatment fits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              {[
                { k: "Fracking / produced water", v: "Treat complex oil & gas water streams for safer handling and reuse." },
                { k: "Gray water", v: "Support on-site treatment and recycling in industrial and district environments." },
                { k: "Leachate + industrial runoff", v: "Address landfill leachate and other high-strength industrial water cases." },
              ].map((x) => (
                <div key={x.k} className="bg-white/60 rounded-lg border border-gray-200 p-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{x.k}</p>
                  <p className="mt-2">{x.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aerospace */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="applications-aerospace-title">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="lg:order-2">
              <h2 id="applications-aerospace-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Aerospace Energy Systems
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                With the inevitable decommissioning of the International Space Station, scientists are beginning to look for more advanced ways to sustain research in outer space. Utilizing VIVIFY&apos;s patented technology, the future of regenerative fuel cells can now be fully realized with the latest hydrogen energy technology—resulting in increased trip duration, deeper space travel and more power than ever before.
              </p>

              <div className="mt-10">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-black font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                  asChild
                >
                  <a href={learnMoreHref}>Talk to Us About Aerospace</a>
                </Button>
              </div>
            </div>

            <div className="bg-black rounded-xl overflow-hidden border border-gray-200 lg:order-1">
              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={`${CLOUDFRONT_BASE}/Fuel-Cells.mp4`} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="mt-12 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Where aerospace fits</h3>
            <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
              {[
                { k: "Orbital research platforms", v: "Sustain longer research cycles beyond ISS-era constraints." },
                { k: "Deep space travel", v: "Increase trip duration and support more demanding power profiles." },
                { k: "Future stations + habitats", v: "Enable scalable hydrogen energy systems for sustained operations." },
              ].map((x) => (
                <div key={x.k} className="bg-white/60 rounded-lg border border-gray-200 p-6">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider">{x.k}</p>
                  <p className="mt-2">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">Related</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Explore the full{" "}
              <Link href="/technology" className="font-semibold text-primary hover:underline underline-offset-4">
                technology overview
              </Link>{" "}
              or read the{" "}
              <Link href="/news" className="font-semibold text-primary hover:underline underline-offset-4">
                latest company updates
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24" aria-labelledby="applications-cta-title">
        <div className="container text-center">
          <h2 id="applications-cta-title" className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s Talk
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re building and we&apos;ll share how VIVIFY can support your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-black/90 text-primary font-bold" asChild>
              <a href={learnMoreHref}>Start a Conversation</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

