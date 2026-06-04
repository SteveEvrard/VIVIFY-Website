import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MEDIA_COVERAGE } from "@/lib/mediaCoverage";
import { ExternalLink } from "lucide-react";

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function MediaCoverage() {
  const items = [...MEDIA_COVERAGE].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo
        title="Media Coverage"
        description="Independent news and industry coverage of VIVIFY Technology."
        path="/media-coverage"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden pt-16 pb-28 md:pt-20 md:pb-36"
        aria-labelledby="media-coverage-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Newsroom
            </p>
            <h1 id="media-coverage-hero-title" className="mt-6 text-6xl md:text-7xl font-bold mb-6 text-white">
              <span className="text-primary">VIVIFY</span> in the Press
            </h1>
            <p className="mt-8 text-base sm:text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              Independent reporting and industry coverage of VIVIFY Technology, our leadership, and the systems we build.
            </p>
          </div>
        </div>
        <div
          className="absolute -bottom-px left-0 right-0 h-24 md:h-32 bg-white z-20"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Tiles */}
      <section className="bg-white pt-8 pb-20 md:pt-12 md:pb-28" aria-labelledby="media-coverage-list-title">
        <div className="container">
          <h2 id="media-coverage-list-title" className="sr-only">
            Media coverage articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <a
                key={item.slug}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
                        {item.publication}
                      </span>
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <CardTitle className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </CardTitle>
                    {item.author && (
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        By {item.author}
                      </p>
                    )}
                    <CardDescription className="mt-2 text-base">
                      {item.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-primary font-semibold inline-flex items-center gap-2">
                      Read article
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center text-muted-foreground">
              No coverage published yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
