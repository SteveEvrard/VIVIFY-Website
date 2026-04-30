/* VIVIFY Leadership Page */

import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { buildContactMailto } from "@/lib/contactMailto";

export default function Leadership() {
  const getInTouchHref = buildContactMailto({
    subject: "Vivify — Leadership Inquiry",
    bodyLines: [
      "Hi Vivify team,",
      "",
      "I'd like to connect with your leadership team regarding Vivify’s clean energy technology.",
      "",
      "Name:",
      "Company / Organization:",
      "Role:",
      "Subject of Interest:",
      "Best way to reach me:",
      "",
      "Thanks,",
      "",
    ],
  });

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Leadership"
        description="Meet the visionary leaders at VIVIFY driving innovation in clean energy and transforming global energy infrastructure."
        path="/leadership"
      />

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="leadership-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 id="leadership-hero-title" className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-primary">Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Visionary leaders driving innovation in clean energy and building the bridge to a sustainable energy future.
            </p>
          </div>
        </div>

        {/* Diagonal divider */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white"
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
              <div className="bg-gray-300 rounded-lg h-[32rem] md:h-[40rem] overflow-hidden">
                <img
                  src="/images/jason/Jason-Stairs.jpg"
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
                  Jason founded VIVIFY to eliminate the false choice between clean energy and reliable power. He
                  believes the fastest path to meaningful
                  decarbonization is transforming the grid-connected systems we already have—without breaking
                  communities, budgets, or stability.
                </p>

                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-6">
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
                  His mission is straightforward: keep the grid stable, keep electricity affordable, and make the air
                  cleaner—at speed and at scale.
                </p>
              </div>
            </div>

            {/* Chief Engineer */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="grid md:grid-cols-[1fr_320px] gap-12 items-center">
                <div className="order-2 md:order-1">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                    Chief Engineer
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Buddy Paul
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    VIVIFY&apos;s Chief Engineer leads the engineering execution of our Clean Air Technology™ platform—from
                    plant integration and reliability to
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

                <div className="order-1 md:order-2">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                    <img
                      src="/images/team/buddy-paul.jpg"
                      alt="Chief Engineer"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Leadership Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Monica Victoria", title: "Director of Operations", img: "/images/team/monica-victoria.jpg" },
                {
                  name: "Steve Evrard",
                  title: "Vice President of Business Development",
                  img: "/images/team/steve-evrard.jpg",
                },
                {
                  name: "Prajwal Nagaraj",
                  title: "Director of AI Deployment",
                  img: "/images/team/prajwal-nagaraj.jpg",
                },
                {
                  name: "Zac DelVecchio",
                  title: "Director of Innovations and Solutions",
                  img: "/images/team/zac-delvecchio.jpg",
                },
                { name: "Ashley Stevenson", title: "Director of Marketing", img: "/images/team/ashley-stevenson.jpg" },
                { name: "Monica Pineiro", title: "Chief of Staff", img: "/images/team/monica-pineiro.jpg" },
                {
                  name: "Melanie A. Tacher",
                  title: "Director of Government Affairs & Strategic Communications",
                  img: "/images/team/melanie-tacher.jpg",
                },
                { name: "Denise Starrantino", title: "Office Assistant", img: "/images/team/denise-starrantino.jpg" },
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

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24" aria-labelledby="leadership-cta-title">
        <div className="container text-center">
          <h2 id="leadership-cta-title" className="text-5xl md:text-6xl font-bold mb-6">
            Connect with Our Team
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in learning more about our leadership's vision for the future of clean energy?
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
