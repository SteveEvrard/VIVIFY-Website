/* VIVIFY Technology Page: Manifesto-driven layout with pill-tab platform selection. */

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { tm, TM } from "@/lib/tm";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

const HOG_IMAGE_URL = "/images/vivify-hog.jpg";
const FLYING_PIG_IMAGE_URL = "/images/vivify-flying-pig-shipping-case.jpg";
const CAT_IMAGE_URL = "/cat-system.png";
const BROCHURE_HREF = "/VIVIFY-Brochure.pdf";

const PRODUCT_TABS = ["hog", "flying-pig", "cat"] as const;
type ProductTab = (typeof PRODUCT_TABS)[number];

export default function Technology() {
  const [location] = useLocation();
  const [activeTab, setActiveTab] = useState<ProductTab>("hog");
  const tabsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyHash = (smooth: boolean) => {
      const hash = window.location.hash.replace(/^#/, "");
      if ((PRODUCT_TABS as readonly string[]).includes(hash)) {
        setActiveTab(hash as ProductTab);
        requestAnimationFrame(() => {
          tabsSectionRef.current?.scrollIntoView({
            behavior: smooth ? "smooth" : "auto",
            block: "start",
          });
        });
      }
    };

    applyHash(false);
    const onHashChange = () => applyHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [location]);

  const learnMoreHogHref = buildContactMailto({
    subject: "VIVIFY — Learn More (HOG™ System)",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to learn more about the HOG™ system and how it fits within your technology platform.",
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

  const learnMoreFlyingPigHref = buildContactMailto({
    subject: "VIVIFY — Learn More (Flying Pig™ 1MW)",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to learn more about the VIVIFY Flying Pig™ 1MW system and how it could support our project.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Project details:",
      "Deployment location:",
      "Timeline:",
      "",
      "Thanks,",
      "",
    ],
  });

  const learnMoreCatHref = buildContactMailto({
    subject: "VIVIFY — Learn More (Clean Air Technology™)",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to learn more about Clean Air Technology™ (CAT™) and how it could apply to our facility.",
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

  const getInTheRoomHref = buildContactMailto({
    subject: "VIVIFY — Get In the Room (Technology)",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to talk about deploying VIVIFY's platform — HOG™, CAT™, and Flying Pig™.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Platform of interest (HOG™ / CAT™ / Flying Pig™ / all):",
      "Project type:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const products = [
    {
      value: "hog",
      label: "HOG™",
      titleId: "technology-hog-title",
      title: "HOG™",
      subtitle: "Hydrogen Oxygen Generator",
      imageSrc: HOG_IMAGE_URL,
      imageAlt: "HOG system concept rendering",
      imageClassName: "object-center",
      nativeAspect: true,
      paragraphs: [
        "Our flagship energy system designed to be a self-supporting hydrogen energy source powered from a simple H₂O-based starter. HOG™ provides a pollutant-free hydrogen energy source designed for behind-the-meter services.",
        "Designed as a self-supporting energy platform, HOG™ is built to maximize energy creation while minimizing traditional inefficiencies. The system is positioned as a 99% emission-free, scalable, on-demand hydrogen solution that can support a wide range of behind-the-meter power requirements.",
        "Its integrated architecture brings together Pulsar™ for on-demand hydrogen creation and system revitalization, alongside multi-stage turbines, multi-functioning transformers, an H₂O input generator, and combustion chambers for power and heat distribution.",
      ],
      overviewTitle: "HOG™ System Overview",
      overviewCaption:
        "A visual concept of the HOG™ system and its integrated energy-generation architecture.",
      href: learnMoreHogHref,
      ctaLabel: "Learn More About HOG™",
    },
    {
      value: "flying-pig",
      label: "Flying Pig™",
      titleId: "technology-flying-pig-title",
      title: "Flying Pig™",
      subtitle: "1MW Scalable Containerized Solution",
      imageSrc: FLYING_PIG_IMAGE_URL,
      imageAlt: "VIVIFY Flying Pig containerized 1MW system rendering",
      imageClassName: "object-[50%_55%]",
      nativeAspect: true,
      paragraphs: [
        "Featuring the core elements of the flagship HOG™, the Flying Pig™ delivers power using turbines and Pulsar™ technology within a scalable containerized architecture. Designed for quick assembly and connection points, it can be deployed in remote areas. This modular system is capable of scaling when additional modules are applied.",
      ],
      overviewTitle: "Flying Pig™ System Overview",
      overviewCaption:
        "A visual concept of the Flying Pig™ 1MW containerized power product and its modular architecture.",
      href: learnMoreFlyingPigHref,
      ctaLabel: "Learn More About Flying Pig™",
    },
    {
      value: "cat",
      label: "CAT™",
      titleId: "technology-cat-title",
      title: "CAT™",
      subtitle: "Clean Air Technology",
      imageSrc: CAT_IMAGE_URL,
      imageAlt: "Clean Air Technology system rendering",
      imageClassName: "object-[50%_60%]",
      paragraphs: [
        "Our flagship five-stage emissions control system is designed to remove virtually all pollutants from exhaust while maintaining strong operational performance. CAT™ helps industrial systems move toward near-zero emissions without compromising practical deployment needs.",
        "Built as a retrofit-friendly clean energy solution, CAT™ is positioned to reduce parasitic load, improve plant efficiency, and deliver a more cost-effective path toward cleaner output across legacy and modern infrastructure environments.",
        "Its integrated platform brings together multiple stages of filtration, separation, and incineration technologies to support cleaner exhaust streams and a more scalable emissions-control strategy for real-world operations.",
      ],
      overviewTitle: "CAT™ System Overview",
      overviewCaption:
        "An overview of the CAT™ platform and its role in cleaner, more efficient industrial energy systems.",
      href: learnMoreCatHref,
      ctaLabel: "Learn More About CAT™",
    },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Technology — The Proof Is in the Engineering"
        description="VIVIFY's clean energy platforms — HOG™ hydrogen energy, CAT™ emissions control, and Flying Pig™ 1MW containerized power. Engineered, integrated, and ready to operate at scale."
        path="/technology"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="technology-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              VIVIFY Technology
            </p>
            <h1
              id="technology-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">The Proof</span>
              <span className="block">Is in the</span>
              <span className="block text-primary">Engineering.</span>
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Declarations are cheap. Patents are not. These are the platforms that make energy independence an engineering reality — not a political aspiration. Three systems. Zero tolerance for the way things used to be done.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-white z-20"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Platforms Intro + Tabs */}
      <section
        ref={tabsSectionRef}
        className="relative bg-white py-20 md:py-28 scroll-mt-24 overflow-hidden"
        aria-labelledby="technology-platforms-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              The Platforms
            </p>
            <h2
              id="technology-platforms-title"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
            >
              <span className="block">Systems That</span>
              <span className="block text-primary">Actually Work.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                VIVIFY develops clean energy technology that enables reliable, near-zero emissions power from existing infrastructure. These are not concepts under development or prototypes awaiting funding. They are engineered, integrated platforms ready to operate at scale.
              </p>
              <p>
                The HOG<TM />, the CAT<TM />, and the Flying Pig<TM /> each address a specific failure of the incumbent energy model. Together, they form the complete alternative to it.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-4 shadow-sm md:p-6">
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as ProductTab)}
              className="w-full"
            >
              <TabsList className="mx-auto mb-10 grid h-auto w-full max-w-4xl grid-cols-1 rounded-3xl border-4 border-primary bg-white p-2 sm:grid-cols-3 sm:rounded-full">
                {products.map((product) => (
                  <TabsTrigger
                    key={product.value}
                    value={product.value}
                    className="rounded-full px-4 py-4 text-base font-bold text-primary whitespace-normal data-[state=active]:bg-primary data-[state=active]:text-black data-[state=active]:shadow-none md:text-lg"
                  >
                    {tm(product.label)}
                  </TabsTrigger>
                ))}
              </TabsList>

              {products.map((product) => (
                <TabsContent key={product.value} value={product.value} className="mt-0">
                  <div className="rounded-3xl bg-gray-50 p-6 md:p-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                      {/* Text Column */}
                      <div className="order-2 lg:order-1">
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                          Featured Product
                        </p>
                        <h3
                          id={product.titleId}
                          className="mt-4 text-5xl md:text-6xl font-bold tracking-tight text-foreground"
                        >
                          {tm(product.title)}
                        </h3>
                        <p className="mt-2 text-lg md:text-xl font-semibold text-foreground/80">
                          {product.subtitle}
                        </p>

                        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                          {product.paragraphs.map((paragraph, pIdx) => (
                            <p key={pIdx}>{tm(paragraph)}</p>
                          ))}
                        </div>

                        <div className="mt-8">
                          <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-black font-bold"
                            asChild
                          >
                            <a href={product.href}>
                              {tm(product.ctaLabel)} <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className="order-1 lg:order-2">
                        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                          <div className="bg-black">
                            <img
                              src={product.imageSrc}
                              alt={product.imageAlt}
                              className={
                                "nativeAspect" in product && product.nativeAspect
                                  ? "w-full h-auto"
                                  : `w-full aspect-[4/3] object-cover ${product.imageClassName}`
                              }
                              loading="lazy"
                            />
                          </div>
                          <div className="px-6 py-5 bg-white">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                              {tm(product.overviewTitle)}
                            </p>
                            <p className="mt-2 text-base font-semibold text-foreground leading-snug">
                              {tm(product.overviewCaption)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="technology-cta-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              Ready to Deploy
            </p>
            <h2
              id="technology-cta-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">These Systems</span>
              <span className="block">Exist Right Now.</span>
              <span className="block">So Does the Phone.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              The technology is built, documented, and ready to operate. The only question is when you stop running on the old model and start running on the new one.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={getInTheRoomHref}>Get In the Room</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black/10 h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={BROCHURE_HREF} download>
                  Download Platform Overview
                </a>
              </Button>
            </div>

            <p className="mt-10 text-sm md:text-base font-semibold text-black/80">
              Or call directly —{" "}
              <a href="tel:+18882778370" className="underline underline-offset-4 hover:text-black">
                888.277.8370
              </a>
              {"  ·  "}
              <a
                href="mailto:info@vivify-technology.com"
                className="underline underline-offset-4 hover:text-black"
              >
                info@vivify-technology.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
