/* VIVIFY Home Page: Manifesto-driven layout introducing HOG, CAT, and Flying Pig as the platform arsenal. */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildContactMailto } from "@/lib/contactMailto";
import { tm } from "@/lib/tm";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

type PlatformSpec = { label: string; value: string };
type PlatformComponent = { title: string; desc: string };

type Platform = {
  id: string;
  number: string;
  category: string;
  status?: string;
  title: string;
  titleLines?: string[];
  subtitle: string;
  paragraphs: string[];
  specs: PlatformSpec[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  imageClassName?: string;
  nativeAspect?: boolean;
  ctaHref: string;
  ctaLabel: string;
  mediaOnLeft: boolean;
  components?: PlatformComponent[];
};

export default function Home() {
  const hogImageUrl = "/images/vivify-hog.jpg";
  const catImageUrl = "/cat-system.png";
  const flyingPigImageUrl = "/images/vivify-flying-pig-shipping-case.jpg";
  const brochureHref = "/VIVIFY-Brochure.pdf";

  const getInTheRoomHref = buildContactMailto({
    subject: "VIVIFY — Get In the Room",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'd like to get in the room and discuss VIVIFY's platform — HOG™, CAT™, and Flying Pig™ — for an upcoming project.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Project type (industrial / remote site / behind-the-meter / mixed-use / other):",
      "Location:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  const platforms: Platform[] = [
    {
      id: "platform-hog",
      number: "01",
      category: "Hydrogen Energy",
      title: "HOG™",
      subtitle: "Hydrogen Oxygen Generator",
      paragraphs: [
        "The HOG™ is not a prototype. It is a fully realized, self-supporting hydrogen energy system — powered by water, producing zero pollutants, and scaling on demand. While the industry was busy defending its oil contracts, we built a hydrogen generator that doesn't need them.",
        "Built for behind-the-meter deployment, HOG™ integrates Pulsar™ for on-demand hydrogen creation and system revitalization, multi-stage turbines, multi-functioning transformers, an H₂O input generator, and combustion chambers for power and heat distribution. The result is a 99% emission-free energy source that answers to no grid and no monopoly.",
      ],
      specs: [
        { label: "Fuel Source", value: "H₂O (Water)" },
        { label: "Emissions Profile", value: "99% Pollutant-Free" },
        { label: "Architecture", value: "Self-Supporting, Behind-the-Meter" },
        { label: "Scalability", value: "Site to District" },
        { label: "Key Integration", value: "Pulsar™ On-Demand Revitalization" },
      ],
      imageSrc: hogImageUrl,
      imageAlt: "HOG Hydrogen Oxygen Generator system rendering",
      imageCaption: "HOG™ System — Integrated Energy-Generation Architecture",
      nativeAspect: true,
      ctaHref: "/technology#hog",
      ctaLabel: "Full HOG™ Specifications",
      mediaOnLeft: false,
    },
    {
      id: "platform-cat",
      number: "02",
      category: "Emissions Control",
      title: "CAT™",
      subtitle: "Clean Air Technology",
      paragraphs: [
        "Legacy industrial infrastructure is not going away overnight. CAT™ is the answer to that reality — a five-stage emissions control system that removes virtually every pollutant from exhaust streams without forcing operators to shut down and start over.",
        "Built as a retrofit-friendly platform, CAT™ reduces parasitic load, improves plant efficiency, and delivers a cost-effective path to near-zero output across both legacy and modern environments. The industry has been managing pollution for decades. VIVIFY built a system to eliminate it.",
      ],
      specs: [
        { label: "Architecture", value: "Five-Stage Filtration System" },
        { label: "Deployment", value: "Retrofit-Ready, No Teardown Required" },
        { label: "Parasitic Load", value: "Significantly Reduced" },
        { label: "Targets", value: "Legacy & Modern Industrial" },
        { label: "Process", value: "Filtration, Separation, Incineration" },
      ],
      imageSrc: catImageUrl,
      imageAlt: "CAT Clean Air Technology system rendering",
      imageCaption: "CAT™ System — Five-Stage Emissions-Control Architecture",
      imageClassName: "object-[50%_60%]",
      ctaHref: "/technology#cat",
      ctaLabel: "Full CAT™ Specifications",
      mediaOnLeft: true,
    },
    {
      id: "platform-flying-pig",
      number: "03",
      category: "Containerized Power",
      title: "Flying Pig™",
      titleLines: ["Flying Pig™"],
      subtitle: "1MW Scalable Containerized Solution",
      paragraphs: [
        "They said it couldn't be done in a box. The Flying Pig™ is HOG™'s most formidable offspring — all the power of our flagship hydrogen platform, distilled into a single deployable container ready to generate 1MW the moment it arrives on site.",
        "Micro hydro turbines, Pulsar™ technology, water handling, thermal exchange, transformers, and quick-connect infrastructure — all inside self-contained housing built for remote locations, rapid assembly, and zero tolerance for diesel dependence. Scale by adding modules. The grid can't follow you where the Flying Pig™ will go.",
      ],
      specs: [
        { label: "Output", value: "1MW Per Unit, Infinitely Scalable" },
        { label: "Fuel Source", value: "Water-Based Input" },
        { label: "5-Year Savings vs. Diesel", value: "$9.8M Projected (@ $4.00/gal)" },
        { label: "Maintenance", value: "Yearly Carbon Service · ~5% Annual Water Loss" },
        { label: "Deployment", value: "Remote Sites · Industrial · Behind-the-Meter" },
      ],
      imageSrc: flyingPigImageUrl,
      imageAlt: "VIVIFY Flying Pig 1MW containerized power system rendering",
      imageCaption: "Flying Pig™ — 1MW Containerized Power Architecture",
      imageClassName: "object-[50%_55%]",
      nativeAspect: true,
      ctaHref: "/technology#flying-pig",
      ctaLabel: "Full Flying Pig™ Specifications",
      mediaOnLeft: false,
      components: [
        {
          title: "Micro Hydro Turbine",
          desc: "One hydro generation stage inside the containerized power-generation core.",
        },
        {
          title: "Micro Steam Turbine",
          desc: "Compact steam turbine stage for maximum usable output inside the 1MW module.",
        },
        {
          title: "Pulsar™ Array",
          desc: "Eight Pulsar™ units tying the container directly into VIVIFY's hydrogen power architecture.",
        },
        {
          title: "Water Storage & Filtration",
          desc: "500-gallon tank with integrated filtration — cleaned water portable for secondary use.",
        },
        {
          title: "Primary Transformers",
          desc: "Two primary transformers for power distribution and closed-loop source integration.",
        },
        {
          title: "Coupling System",
          desc: "Pre-installed sensors and quick-connect points. Field assembly measured in hours, not weeks.",
        },
      ],
    },
  ];

  const arsenalCards = [
    { number: "01", title: "HOG™", subtitle: "Hydrogen Energy", anchor: "#platform-hog" },
    { number: "02", title: "CAT™", subtitle: "Emissions Control", anchor: "#platform-cat" },
    { number: "03", title: "Flying Pig™", subtitle: "Coming Soon", anchor: "#platform-flying-pig" },
  ];

  const arsenalStats = [
    { value: "99%", label: "Emission-Free Output" },
    { value: "3", label: "Breakthrough Platforms" },
    { value: "∞", label: "Scalability" },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="The Energy Empire Ends Here"
        description="VIVIFY is making America energy independent with three breakthrough platforms — HOG™ hydrogen energy, CAT™ emissions control, and Flying Pig™ containerized 1MW power. Cleaner energy, built in America, controlled by the people who use it."
        path="/"
        brandFirst
      />

      {/* Hero — The Energy Empire Ends Here */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="home-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1
              id="home-hero-title"
              className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">The Energy</span>
              <span className="block">Empire</span>
              <span className="block text-primary">Ends Here.</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              The big energy companies have had a century to get it right. They didn't. VIVIFY did. We are making America energy independent — not by asking permission, but by making the old model irrelevant.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-black font-bold"
                asChild
              >
                <a href="#arsenal">See Our Technology</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/technology">
                  Full Platform <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-black"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Our Mission — Manifesto */}
      <section
        className="relative bg-black text-white py-20 md:py-32 overflow-hidden"
        aria-labelledby="home-mission-title"
      >
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Our Mission
              </p>
              <h2
                id="home-mission-title"
                className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white"
              >
                <span className="block">Take out the big</span>
                <span className="block">energy companies.</span>
                <span className="block text-primary">Make America</span>
                <span className="block text-primary">independent.</span>
                <span className="block">Change the world.</span>
              </h2>
            </div>

            <div className="grid gap-6 text-base md:text-lg text-white/80 leading-relaxed">
              <p>
                That is not a tagline. That is the plan. The century-long stranglehold of fossil fuel monopolies ends with a simple, undeniable equation:{" "}
                <strong className="font-bold text-white">
                  cleaner energy, built in America, controlled by no one but the people who use it.
                </strong>
              </p>
              <p>
                We did not build VIVIFY to compete inside a broken system. We built it to make that system obsolete. The technologies exist. The engineering is done. What changes now is the world's access to it.
              </p>
              <p>
                This is not environmentalism. This is not politics. This is physics, chemistry, and engineering — executed at a level the incumbent industry is not equipped to answer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Arsenal — Three Technologies. One Outcome. */}
      <section
        id="arsenal"
        className="relative bg-white py-20 md:py-28 overflow-hidden scroll-mt-24"
        aria-labelledby="home-arsenal-title"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              The Arsenal
            </p>
            <h2
              id="home-arsenal-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground"
            >
              Three Technologies. <span className="text-primary">One Outcome.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              The energy grid as you know it was designed for dependence. VIVIFY's technologies were designed for the opposite. Each system stands alone. Together, they form the infrastructure of an independent America.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {arsenalStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-gray-50 p-8 text-center shadow-sm"
              >
                <p className="text-5xl md:text-6xl font-extrabold text-primary leading-none">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {arsenalCards.map((card) => (
              <a
                key={card.number}
                href={card.anchor}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-b from-white via-white to-gray-50 p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-gradient-to-r from-primary/70 via-primary to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity"></div>

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {card.number}
                </p>
                <p className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                  {tm(card.title)}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  {card.subtitle}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Deep-Dives — HOG, CAT, Flying Pig */}
      {platforms.map((platform, index) => {
        const isDark = index % 2 === 0;
        const sectionBg = isDark ? "bg-black text-white" : "bg-gray-50 text-foreground";
        const eyebrowColor = isDark ? "text-primary" : "text-primary";
        const headingColor = isDark ? "text-white" : "text-foreground";
        const bodyColor = isDark ? "text-white/85" : "text-muted-foreground";
        const specLabelColor = isDark ? "text-white/55" : "text-muted-foreground";
        const specValueColor = isDark ? "text-white" : "text-foreground";
        const specDividerColor = isDark ? "border-white/10" : "border-gray-200";

        return (
          <section
            key={platform.id}
            id={platform.id}
            className={`relative overflow-hidden py-20 md:py-28 scroll-mt-24 ${sectionBg}`}
            aria-labelledby={`${platform.id}-title`}
          >
            {isDark && (
              <>
                <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
              </>
            )}

            <div className="container relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Text Column */}
                <div className={platform.mediaOnLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <p className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] ${eyebrowColor}`}>
                    Platform {platform.number} — {platform.category}
                  </p>

                  <h2
                    id={`${platform.id}-title`}
                    className={`mt-5 text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.92] ${headingColor}`}
                  >
                    {platform.titleLines ? (
                      platform.titleLines.map((line) => (
                        <span key={line} className="block">
                          {tm(line)}
                        </span>
                      ))
                    ) : (
                      tm(platform.title)
                    )}
                  </h2>

                  <p className={`mt-4 text-xl md:text-2xl font-semibold tracking-tight ${isDark ? "text-white/90" : "text-foreground/85"}`}>
                    {platform.subtitle}
                  </p>

                  <div className={`mt-8 space-y-5 text-base md:text-lg leading-relaxed ${bodyColor}`}>
                    {platform.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{tm(paragraph)}</p>
                    ))}
                  </div>

                  {/* Specs */}
                  <dl className={`mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t ${specDividerColor}`}>
                    {platform.specs.map((spec) => (
                      <div key={spec.label} className={`border-b ${specDividerColor} py-4`}>
                        <dt className={`text-xs font-semibold uppercase tracking-[0.18em] ${specLabelColor}`}>
                          {spec.label}
                        </dt>
                        <dd className={`mt-2 text-base md:text-lg font-semibold ${specValueColor}`}>
                          {tm(spec.value)}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-10">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-black font-bold"
                      asChild
                    >
                      <Link href={platform.ctaHref}>
                        {tm(platform.ctaLabel)} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Media Column */}
                <div
                  className={`order-1 ${platform.mediaOnLeft ? "lg:order-1" : "lg:order-2"} lg:sticky lg:top-24`}
                >
                  <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-xl">
                    <div className="bg-black">
                      <img
                        src={platform.imageSrc}
                        alt={platform.imageAlt}
                        className={
                          platform.nativeAspect
                            ? "w-full h-auto"
                            : `w-full aspect-[4/3] object-cover ${platform.imageClassName ?? ""}`
                        }
                        loading="lazy"
                      />
                    </div>
                    <div className="px-6 py-5 bg-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Platform {platform.number}
                      </p>
                      <p className="mt-2 text-base font-semibold text-foreground leading-snug">
                        {tm(platform.imageCaption)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core System Elements (Flying Pig only) */}
              {platform.components && (
                <div className="mt-20">
                  <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight text-center ${headingColor}`}>
                    Core System Elements
                  </h3>
                  <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {platform.components.map((component) => (
                      <div
                        key={component.title}
                        className={`rounded-2xl border p-6 ${
                          isDark
                            ? "border-white/10 bg-white/5 backdrop-blur-sm"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <h4 className={`text-lg font-bold ${headingColor}`}>{tm(component.title)}</h4>
                        <p className={`mt-3 text-sm leading-relaxed ${bodyColor}`}>
                          {tm(component.desc)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* The Decision — Final CTA */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="home-decision-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              The Decision
            </p>
            <h2
              id="home-decision-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">America Doesn't</span>
              <span className="block">Need Permission</span>
              <span className="block">Anymore.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              Energy independence is not a campaign promise. It is an engineering problem. We solved it. The century-long grip of the energy establishment ends the moment you choose to operate outside it. That moment is now.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-black/90 text-primary font-bold h-auto py-3 sm:h-10 sm:py-0 whitespace-normal text-center leading-tight"
                asChild
              >
                <a href={getInTheRoomHref}>Get In the Room</a>
              </Button>
            </div>

            <p className="mt-10 text-sm md:text-base font-semibold text-black/80">
              Or call us directly —{" "}
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
