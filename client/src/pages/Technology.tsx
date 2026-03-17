import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { Cpu, Droplets, Flame, Shield, Zap } from "lucide-react";
import { Link } from "wouter";

const HOG_IMAGE_URL = "/hog-system.png";
const CAT_IMAGE_URL = "/cat-system.png";

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

  const products = [
    {
      value: "hog",
      label: "HOG",
      titleId: "technology-hog-title",
      title: "HOG",
      subtitle: "Hydrogen Oxygen Generator",
      icon: Cpu,
      imageSrc: HOG_IMAGE_URL,
      imageAlt: "HOG system concept rendering",
      imageClassName: "object-center",
      eyebrow: "Flagship energy platform",
      intro:
        "HOG is VIVIFY’s flagship hydrogen-based energy platform, designed to create a self-supporting, behind-the-meter power solution from a simple H2O-based starter input. It is positioned as a cleaner, highly controlled system architecture for organizations looking to reduce traditional generation inefficiencies while building a more resilient on-site energy strategy.",
      overview:
        "Rather than treating hydrogen as a separate add-on, HOG packages generation, conversion, system balancing, and usable power delivery into one integrated product story. The result is a modular energy platform built for industrial operators, infrastructure developers, and advanced facilities that need cleaner output, flexible deployment, and a system that can scale with demand.",
      whatItIs:
        "HOG is an integrated hydrogen energy system engineered to support on-site power creation with a focus on controllability, lower emissions, and operational independence. It is designed for environments where reliability, efficiency, and deployment flexibility matter as much as raw output.",
      whatItDoes:
        "In practical terms, HOG helps organizations generate and manage a pollutant-free hydrogen energy source for behind-the-meter services, power resilience planning, and future-ready infrastructure. It is intended to support both immediate operational needs and longer-horizon energy transition strategies.",
      benefits: [
        "Self-supporting energy architecture designed to maximize output while minimizing traditional system inefficiencies.",
        "99% emission-free positioning for organizations seeking cleaner industrial and on-site energy solutions.",
        "Scalable infrastructure that can be configured around a broad range of power requirement profiles.",
        "On-demand hydrogen system logic that supports more responsive energy delivery and operational control.",
      ],
      useCases: [
        "Industrial campuses and production environments requiring resilient on-site power support.",
        "Large facilities and developments evaluating behind-the-meter energy independence strategies.",
        "Projects that need a modular hydrogen platform aligned with long-term clean infrastructure goals.",
      ],
      components: [
        {
          icon: Zap,
          title: "Pulsar Integration",
          desc: "Supports on-demand hydrogen creation and system revitalization as part of the broader HOG architecture.",
        },
        {
          icon: Cpu,
          title: "Multi-Stage Turbine System",
          desc: "Converts system energy into usable output through a staged approach built for controlled performance and operational continuity.",
        },
        {
          icon: Shield,
          title: "Multi-Functioning Transformers",
          desc: "Condition, regulate, and route energy across the system so output can be aligned with practical site-level requirements.",
        },
        {
          icon: Droplets,
          title: "H2O Input Generator",
          desc: "Anchors the system’s water-based starting input and supports the platform’s self-supporting hydrogen energy narrative.",
        },
        {
          icon: Flame,
          title: "Combustion and Thermal Distribution",
          desc: "Delivers power and heat distribution through integrated chambers designed to support usable industrial energy applications.",
        },
        {
          icon: Shield,
          title: "Deployment-Ready System Packaging",
          desc: "Brings generation, conversion, and control functions into a single platform story for cleaner implementation at project scale.",
        },
      ],
      href: learnMoreHogHref,
      ctaLabel: "Learn More About HOG",
    },
    {
      value: "cat",
      label: "CAT",
      titleId: "technology-cat-title",
      title: "CAT",
      subtitle: "Clean Air Technology",
      icon: Flame,
      imageSrc: CAT_IMAGE_URL,
      imageAlt: "Clean Air Technology system rendering",
      imageClassName: "object-[50%_60%]",
      eyebrow: "Emissions control platform",
      intro:
        "CAT is VIVIFY’s flagship emissions-control platform, designed to remove virtually all pollutants from exhaust streams while maintaining operational performance. It is positioned as a practical clean-air solution for industrial operators who need a path to cleaner output without rebuilding their entire energy or process environment from the ground up.",
      overview:
        "The platform is built around a multi-stage treatment approach that combines filtration, separation, and pollutant incineration into one integrated system. For industrial companies, utilities, and major infrastructure operators, CAT is presented as a retrofit-friendly pathway toward near-zero emissions, improved plant efficiency, and a more defensible environmental operating profile.",
      whatItIs:
        "CAT is a five-stage emissions-control and air-quality platform engineered to treat exhaust and process-output streams in a structured, performance-oriented sequence. It is designed for organizations that need cleaner operation, practical deployment, and a system architecture that can integrate with existing infrastructure.",
      whatItDoes:
        "Operationally, CAT helps reduce pollutants, lower parasitic load, improve system efficiency, and create a clearer route to cleaner industrial performance. It gives operators a productized technology story that supports environmental targets while remaining grounded in real-world facility and retrofit considerations.",
      benefits: [
        "99%+ pollutant-removal positioning for cleaner industrial exhaust treatment and stronger environmental performance.",
        "Zero parasitic load narrative focused on protecting useful system output while improving emissions handling.",
        "Plant-efficiency improvement potential through better treatment logic and integrated system design.",
        "Cost-effective retrofit profile that supports modernization without requiring a full operational redesign.",
      ],
      useCases: [
        "Industrial facilities seeking a cleaner path for existing exhaust-heavy operations.",
        "Energy and process environments where retrofit practicality matters as much as emissions performance.",
        "Operators preparing for stricter environmental standards while preserving core production capability.",
      ],
      components: [
        {
          icon: Droplets,
          title: "Hydroponic Towers",
          desc: "Support particulate separation through water condensation and help prepare the exhaust stream for downstream treatment stages.",
        },
        {
          icon: Cpu,
          title: "Cold CAT",
          desc: "Applies cryogenic CO2 removal and separation logic to strengthen the platform’s overall emissions-treatment profile.",
        },
        {
          icon: Flame,
          title: "Clean Air Turbine",
          desc: "Provides multi-stage pollutant incineration as part of the platform’s broader strategy for cleaner final output.",
        },
        {
          icon: Shield,
          title: "AGES Separator",
          desc: "Uses artificial-gravity water filtration to improve treatment performance within the CAT process chain.",
        },
        {
          icon: Shield,
          title: "Particle Acquisition Tower",
          desc: "Acts as a final-stage particulate filtration element to support cleaner downstream release conditions.",
        },
        {
          icon: Zap,
          title: "Multi-Fuel Input Compatibility",
          desc: "Integrates with coal, natural gas, diesel, and other exhaust streams so operators can clean emissions without changing core operations.",
        },
      ],
      href: learnMoreCatHref,
      ctaLabel: "Learn More About CAT",
    },
  ] as const;

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
            <p className="mt-5 text-base text-muted-foreground max-w-2xl mx-auto">
              Each system was carefully designed to maximize output while removing as many innefficinceies from the traditional energy generation systems previously available. Explore how they map to{" "}
              <Link href="/applications" className="font-semibold text-primary hover:underline underline-offset-4">
                hydrogen power, clean emissions, water treatment, and aerospace applications
              </Link>
              .
            </p>
          </div>

          <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <Tabs defaultValue="hog" className="w-full">
              <TabsList className="mx-auto mb-10 grid h-auto w-full max-w-3xl grid-cols-2 rounded-full border-4 border-primary bg-white p-2">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.value}
                    value={product.value}
                    className="rounded-full px-6 py-4 text-lg font-bold text-primary data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-none"
                  >
                    {product.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {products.map((product) => {
                const Icon = product.icon;

                return (
                  <TabsContent key={product.value} value={product.value} className="mt-0">
                    <div className="rounded-3xl bg-gray-50 p-6 md:p-8">
                      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-start">
                        <div className="order-2 lg:order-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                {product.eyebrow}
                              </p>
                              <h3 id={product.titleId} className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
                                {product.title}
                              </h3>
                              <p className="mt-1 text-lg md:text-xl font-semibold text-muted-foreground">
                                {product.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                            <p>{product.intro}</p>
                            <p>{product.overview}</p>
                          </div>
                        </div>

                        <div className="order-1 lg:order-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className={`w-full aspect-[4/3] rounded-xl object-cover ${product.imageClassName}`}
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="mt-10 grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl border border-gray-200 bg-white p-6">
                          <h4 className="text-xl font-bold text-foreground">What It Is</h4>
                          <p className="mt-4 text-muted-foreground leading-relaxed">{product.whatItIs}</p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-6">
                          <h4 className="text-xl font-bold text-foreground">What It Does</h4>
                          <p className="mt-4 text-muted-foreground leading-relaxed">{product.whatItDoes}</p>
                        </div>
                      </div>

                      <div className="mt-10 grid gap-6 md:grid-cols-2">
                        <div className="rounded-2xl border border-gray-200 bg-white p-6">
                          <h4 className="text-xl font-bold text-foreground">Operational Value</h4>
                          <ul className="mt-4 space-y-3 text-muted-foreground">
                            {product.benefits.map((benefit) => (
                              <li key={benefit} className="flex gap-3">
                                <span className="text-primary font-bold">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="rounded-2xl border border-gray-200 bg-white p-6">
                          <h4 className="text-xl font-bold text-foreground">Deployment Fit</h4>
                          <ul className="mt-4 space-y-3 text-muted-foreground">
                            {product.useCases.map((useCase) => (
                              <li key={useCase} className="flex gap-3">
                                <span className="text-primary font-bold">•</span>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-10">
                        <h4 className="text-2xl font-bold text-foreground text-center">Core System Elements</h4>
                        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                          {product.components.map((component) => (
                            <div key={component.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <component.icon className="w-6 h-6 text-primary" />
                              </div>
                              <h5 className="font-bold text-foreground">{component.title}</h5>
                              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{component.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </TabsContent>
                );
              })}
            </Tabs>
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

