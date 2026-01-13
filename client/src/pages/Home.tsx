/* VIVIFY Home Page: Grey Parrot-inspired template with diagonal dividers, icon grids, and modern layout */

import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { Link } from "wouter";
import { Zap, Leaf, Wind, Users, TrendingUp, Shield, Flame, Droplets } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="Clean Energy Technology"
        description="VIVIFY develops Clean Air Technology™ and related clean energy solutions that enable reliable, near-zero emissions power from existing infrastructure."
        path="/"
      />
      {/* Hero Section with video background */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35 saturate-50"
        >
          <source src="https://d2t61k482lx79u.cloudfront.net/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay gradient for text readability */}
        {/* Neutral brand-gray wash (avoid navy/blue cast) */}
        <div className="absolute inset-0 bg-[#75787B]/30"></div>
        {/* Small neutral dark layer for legibility */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 pt-10 pb-20 md:pt-12 md:pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-primary/20 border border-primary px-4 py-2 rounded-full">
              <span className="text-primary font-semibold text-sm">Energy Innovation</span>
            </div>
            
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
              Revolutionary <span className="text-primary">Clean</span> Energy Solutions
            </h1>
            
            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Transform coal-fired power plants into near-zero emission facilities. VIVIFY's Clean Air Technology™ enables baseload power generation that's both reliable and environmentally responsible.
            </p>
            
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link href="/technology">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold">
                  Explore Technology
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'
        }}></div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <p className="text-center text-muted-foreground font-semibold mb-8">
            Trusted by leading energy providers and utilities worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-60">
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-semibold">Utility Co.</div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-semibold">Power Gen</div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-semibold">Energy Corp</div>
            <div className="h-12 bg-gray-200 rounded flex items-center justify-center text-gray-400 font-semibold">Grid Systems</div>
          </div>
        </div>
      </section>

      {/* Value Chain / Solutions Grid */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              VIVIFY addresses the complete energy value chain with innovative technologies for emissions control, efficiency, and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Flame, title: "Coal Plant Retrofits", desc: "Clean Air Technology for existing facilities" },
              { icon: Zap, title: "Hydrogen Generation", desc: "On-demand Pulsar™ hydrogen production" },
              { icon: Leaf, title: "Emissions Control", desc: "99%+ pollutant removal from exhaust" },
              { icon: Wind, title: "Grid Reliability", desc: "Baseload power generation solutions" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border-2 border-dashed border-primary hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold">
                View All Solutions
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Split Layout */}
      <section className="relative bg-primary md:bg-transparent py-16 md:py-28 overflow-hidden">
        {/* Diagonal background shape */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-1/2 bg-primary" style={{
          clipPath: 'polygon(0 0, 100% 10%, 100% 90%, 0 100%)'
        }}></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.35)]">
                How VIVIFY Works
              </h2>
              
              <div className="space-y-6">
                {[
                  { num: "1", title: "Analyze", desc: "Assess your facility's current emissions profile" },
                  { num: "2", title: "Integrate", desc: "Install Clean Air Technology™ system" },
                  { num: "3", title: "Monitor", desc: "Real-time dashboard tracking and reporting" },
                  { num: "4", title: "Optimize", desc: "Continuous improvement and compliance" }
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border-2 border-white">
                      <span className="text-white font-bold text-lg">{step.num}</span>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-lg sm:text-xl mb-1 text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 border border-white/20 md:border-transparent md:bg-gray-300 rounded-lg h-80 md:h-96 overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="https://d2t61k482lx79u.cloudfront.net/CAT.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="bg-white py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Impact of Clean Air Technology™
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "99%+", label: "Pollutant Removal", desc: "From power plant exhaust" },
              { stat: "0%", label: "Parasitic Load", desc: "On plant efficiency" },
              { stat: "420K", label: "Jobs Preserved", desc: "In coal industry" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                <p className="text-6xl md:text-7xl font-bold text-primary mb-4">{item.stat}</p>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.label}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Featured Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the innovations powering the future of clean energy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Clean Air Technology™", icon: Leaf, desc: "Five-stage emissions control system" },
              { title: "Pulsar™ Generator", icon: Zap, desc: "On-demand hydrogen production" },
              { title: "Cold CAT", icon: Droplets, desc: "Cryogenic CO₂ separation" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground mb-6">{product.desc}</p>
                <a href="/products" className="text-primary font-semibold hover:underline">Learn more →</a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/products">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-bold">
                Explore All Products
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-black py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Facility?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Join leading utilities and energy providers in adopting clean energy solutions that work today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-black text-black hover:bg-black/10"
              asChild
            >
              <a href="/VIVIFY-Brochure.pdf" download>
                Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
