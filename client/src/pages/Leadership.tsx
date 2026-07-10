/* VIVIFY Leadership Page */

import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { buildContactMailto } from "@/lib/contactMailto";
import { TM } from "@/lib/tm";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Leadership() {
  const getInTheRoomHref = buildContactMailto({
    subject: "VIVIFY — Work With Us (Leadership)",
    bodyLines: [
      "Hi VIVIFY team,",
      "",
      "I'm ready to talk about moving on energy independence. Here's where I'm coming from:",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "What you want to deploy or discuss:",
      "Timeline:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Leadership — The People Who Actually Mean It"
        description="VIVIFY was built by people who spent a decade engineering the alternative instead of announcing it. Meet the team executing on American energy independence."
        path="/leadership"
      />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="leadership-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Leadership
            </p>
            <h1
              id="leadership-hero-title"
              className="mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.55)]"
            >
              <span className="block">The People</span>
              <span className="block">Who Actually</span>
              <span className="block text-primary">Mean It.</span>
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Talk is the cheapest thing the energy industry produces. VIVIFY was built by people who spent a decade engineering the alternative instead of announcing it. This is who they are.
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-24 md:h-32 bg-white"
          style={{
            clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)",
          }}
        ></div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="leadership-title">
        <div className="container">
          <div className="space-y-16">
            {/* CEO & Founder */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-300 rounded-lg aspect-[10/11] overflow-hidden">
                <img
                  src="/images/jason/Jason-Stairs.jpg"
                  alt="Jason Herring"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Founder &amp; CEO
                </p>
                <h3 className="text-4xl font-bold text-foreground mb-4">
                  Jason Herring
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Jason Herring founded VIVIFY with one objective: dismantle the grip of the big energy companies, make America energy independent, and change the world. More than a decade of self-funded development later, the technology exists. The mission is now deployment at scale.
                </p>

                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
                  <p className="text-foreground font-semibold mb-2">Areas of Focus</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Hydrogen energy platform development and closed-loop power architecture</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>American energy independence and Florida-first infrastructure strategy</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Strategic leadership at the intersection of energy policy and engineering execution</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Chief Engineer */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-[1fr_320px] gap-12 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    Distinguished Engineer & Chief Systems Architect
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Buddy Paul
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    VIVIFY&apos;s Distinguished Engineer & Chief Systems Architect leads the engineering execution of our Clean Air Technology<TM /> platform — from plant integration and reliability to monitoring, controls, and long-term performance in real-world operations.
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

                <div className="order-1 md:order-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <img
                      src="/images/team/buddy-paul.jpg"
                      alt="Distinguished Engineer & Chief Systems Architect"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Leadership Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Monica Pineiro", title: "Chief of Staff to Jason Herring, Chief Executive Officer & Founder", img: "/images/team/monica-pineiro.jpg" },
                {
                  name: "Lisa Hill",
                  title: "Chief of Staff",
                  img: "/images/team/lisa-hill.jpg",
                },
                {
                  name: "Melanie A. Tacher",
                  title: "Director of Government Affairs & Strategic Communications",
                  img: "/images/team/melanie-tacher.jpg",
                },
                { name: "Guy Fronstin, ESQ", title: "Lead Director & Chief Legal Officer", img: "/images/team/guy-fronstin.jpg" },
                {
                  name: "Wes Persall",
                  title: "Chief Engineer",
                  img: "/images/team/wes-persall.jpg",
                },
                {
                  name: "Zac DelVecchio",
                  title: "Director of Innovations and Solutions",
                  img: "/images/team/zac-delvecchio.jpg",
                },
                {
                  name: "Steve Evrard",
                  title: "Director of Business Development",
                  img: "/images/team/steve-evrard.jpg",
                },
                { name: "Arthur L. Bernstein", title: "Director of Strategic Relations", img: "/images/team/arthur-bernstein.jpg" },
                // { name: "Ashley Stevenson", title: "Director of Marketing", img: "/images/team/ashley-stevenson.jpg" },
                { name: "Anastasia Voll", title: "Director of Content Strategy", img: "/images/team/anastasia-voll.jpg" },
                { name: "Chris Duncan", title: "Director of Creative Content", img: "/images/team/chris-duncan.jpg" },
                { name: "Josh Baker", title: "Web Developer", img: "/images/team/josh-baker.jpg" },
                { name: "Ross Cohen", title: "Co-Director of Talent Acquisition", img: "/images/team/brett-nortman.jpg" },
                { name: "Brett Nortman", title: "Co-Director of Talent Acquisition", img: "/images/team/ross-cohen.jpg" },
                { name: "Anthony Hernandez", title: "Director of Security", img: "/images/team/anthony-hernandez.jpg" },
                { name: "Denise Starrantino", title: "Front Office Coordinator", img: "/images/team/denise-starrantino.jpg" }
              ].map((member, idx) => (
                <div key={idx}
                     className="relative aspect-[4/5] overflow-hidden rounded-xl group border border-gray-200">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle gradient shadow underneath text */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-xl font-bold text-white leading-tight">
                      {member.name}
                    </h4>
                    <p className="text-sm text-white/80 font-medium mt-1">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="relative bg-primary text-black py-20 md:py-28 overflow-hidden"
        aria-labelledby="leadership-cta-title"
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black/70">
              Work With Us
            </p>
            <h2
              id="leadership-cta-title"
              className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-black"
            >
              <span className="block">This Team</span>
              <span className="block">Doesn't Wait</span>
              <span className="block">for Consensus.</span>
            </h2>

            <p className="mt-8 text-base md:text-lg text-black/85 leading-relaxed max-w-2xl mx-auto">
              If you are ready to move on energy independence — not study it, not committee it, not schedule it for next quarter — the conversation starts now.
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
                <Link href="/technology">
                  See the Technology <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
