import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Cpu, Droplets, Flame, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

const CAT_IMAGE_URL = "https://d2t61k482lx79u.cloudfront.net/CAT.jpg";

export default function Technology() {
  const learnMoreHogHref = buildContactMailto({
    subject: "Vivify — Learn More (HOG System)",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to learn more about the HOG system and how it fits within your technology platform.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Project details:",
      "Timeline:",
      "",
      "Thanks,",
      "",
    ],
  });

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
        description="Explore VIVIFY’s technology platform through two product sections: HOG and Clean Air Technology™ (CAT)."
        path="/technology"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="technology-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 id="technology-hero-title" className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-primary">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Explore HOG and CAT as distinct parts of the VIVIFY technology platform.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Core Technologies */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="technology-core-title">
        <div className="container">
          <div className="text-center mb-16">
            <h2 id="technology-core-title" className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Core Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              VIVIFY’s technology story is organized around two distinct product sections: HOG and CAT.
            </p>
            <p className="mt-5 text-base text-muted-foreground max-w-2xl mx-auto">
              Each system was carefully designed to maximize output while removing as many innefficinceies from the traditional energy generation systems previously available. Explore how they map to{" "}
              <Link href="/applications" className="font-semibold text-primary hover:underline underline-offset-4">
                hydrogen power, clean emissions, water treatment, and aerospace applications
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <Accordion type="single" collapsible defaultValue="hog" className="w-full">
              <AccordionItem value="hog" className="border-gray-200">
                <AccordionTrigger className="px-2 py-6 text-left text-base font-semibold hover:no-underline md:px-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Cpu className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Section 01</p>
                      <h3 className="mt-1 text-2xl md:text-3xl font-bold text-foreground">HOG</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-6 md:px-4">
                  <div className="rounded-3xl bg-gray-50 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Cpu className="w-6 h-6 text-primary" />
                      </div>
                      <h3 id="technology-hog-title" className="text-3xl md:text-4xl font-bold text-foreground">
                        HOG (Hydrogen Oxygen Generator)
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                      Our flagship energy system designed to be a self supporting hydrogen energy source powered from a simple H2O based starter. HOG provides a pollutant free hydrogen energy source designed for behind the meter services
                    </p>

                    <ul className="space-y-3 text-muted-foreground mb-10">
                      {[
                        "Self supporting energy system for maximum energy creation with minimum inneddiciencied",
                        "99% emission free energy",
                        "Scalable infrastructure to accommodate all power requirement needs",
                        "On demand hydrogen system",
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-primary font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6">
                      <h4 className="text-2xl font-bold text-foreground mb-6">HOG Component Technology</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          { icon: Zap, title: "Pulsar", desc: "For on demand hydrogen creation and system revitalization" },
                          { icon: Cpu, title: "Multi Stage Turbine system", desc: "" },
                          { icon: Shield, title: "Multi functioning Transformers", desc: "" },
                          { icon: Droplets, title: "H2O Input Generator", desc: "" },
                          { icon: Flame, title: "Combustion chambers for power and heat distribution", desc: "" },
                        ].map((component) => (
                          <div key={component.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                              <component.icon className="w-5 h-5 text-primary" />
                            </div>
                            <h5 className="font-bold text-foreground">{component.title}</h5>
                            {component.desc ? <p className="mt-2 text-sm text-muted-foreground">{component.desc}</p> : null}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="mt-8 bg-primary hover:bg-primary/90 text-black font-bold" asChild>
                      <a href={learnMoreHogHref}>Learn More About HOG</a>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cat" className="border-gray-200">
                <AccordionTrigger className="px-2 py-6 text-left text-base font-semibold hover:no-underline md:px-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Flame className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Section 02</p>
                      <h3 className="mt-1 text-2xl md:text-3xl font-bold text-foreground">CAT</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pb-6 md:px-4">
                  <div className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                    <p className="text-lg text-muted-foreground max-w-3xl">
                      Clean Air Technology™ (CAT) and Pulsar™ form an integrated platform for emissions control and hydrogen power.
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Flame className="w-6 h-6 text-primary" />
                        </div>
                        <h3 id="technology-cat-title" className="text-3xl md:text-4xl font-bold text-foreground">
                          Clean Air Technology™
                        </h3>
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

                  <div className="mt-16">
                    <h4
                      id="technology-cat-components-title"
                      className="text-3xl font-bold text-foreground mb-8 text-center"
                    >
                      CAT Component Technologies
                    </h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      {[
                        { icon: Droplets, title: "Hydroponic Towers", desc: "Particulate separation through water condensation" },
                        { icon: Cpu, title: "Cold CAT", desc: "Cryogenic CO2 removal and separation" },
                        { icon: Flame, title: "Clean Air Turbine™", desc: "Multi-stage pollutant incineration" },
                        { icon: Shield, title: "AGES™ Separator", desc: "Artificial gravity water filtration" },
                        { icon: Shield, title: "Particle Acquisition Tower", desc: "Final stage particulate filtration" },
                        { icon: Zap, title: "Multi-Fuel Inputs", desc: "Integrates with coal, natural gas, diesel, and other exhaust streams-cleaning emissions without changing core operations." },
                      ].map((comp) => (
                        <div key={comp.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <comp.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="font-bold text-foreground mb-2">{comp.title}</h4>
                          <p className="text-sm text-muted-foreground">{comp.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>

          <div className="mt-16 rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-tight">Related</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Explore{" "}
              <Link href="/applications" className="font-semibold text-primary hover:underline underline-offset-4">
                use cases and deployments
              </Link>{" "}
              or read{" "}
              <Link href="/news" className="font-semibold text-primary hover:underline underline-offset-4">
                press releases and updates
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-black py-16 md:py-24" aria-labelledby="technology-cta-title">
        <div className="container text-center">
          <h2 id="technology-cta-title" className="text-5xl md:text-6xl font-bold mb-6">
            Request a Technology Overview
          </h2>
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

