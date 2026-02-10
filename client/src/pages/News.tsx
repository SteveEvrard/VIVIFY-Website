import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NEWS_POSTS } from "@/lib/news";
import { Link } from "wouter";

function formatDate(iso: string) {
  const d = new Date(iso);
  // Fallback if date parsing fails
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function News() {
  const posts = [...NEWS_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title="News"
        description="Press releases and company updates from VIVIFY."
        path="/news"
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="news-hero-title"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 id="news-hero-title" className="text-6xl md:text-7xl font-bold mb-6">
              Company <span className="text-primary">News</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-0">
              Press releases and updates from VIVIFY.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-white"
          style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Tiles */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="news-list-title">
        <div className="container">
          <h2 id="news-list-title" className="sr-only">
            News articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/news/${post.slug}`} className="group">
                <Card className="h-full border border-gray-200 bg-gray-50 hover:bg-white transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
                        {post.category}
                      </span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <CardTitle className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-primary font-semibold">
                      Read more →
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center text-muted-foreground">
              No updates published yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

