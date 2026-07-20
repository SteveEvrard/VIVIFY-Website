import Seo from "@/components/Seo";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blogs";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function Blogs() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo title="Blogs" description="Ideas and perspectives from VIVIFY on energy, infrastructure, and technology." path="/blogs" />
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 pt-16 pb-28 text-white md:pt-20 md:pb-36" aria-labelledby="blogs-hero-title">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#75787B]/18 via-[#75787B]/12 to-[#75787B]/10" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">Newsroom</p>
            <h1 id="blogs-hero-title" className="mt-6 text-6xl font-bold text-white md:text-7xl">Ideas that move <span className="text-primary">infrastructure</span> forward</h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">Perspectives from VIVIFY on the engineering, energy, and systems shaping what comes next.</p>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 h-24 bg-white md:h-32" style={{ clipPath: "polygon(0 50%, 100% 0, 100% 100%, 0 100%)" }} />
      </section>
      <section className="bg-white pt-8 pb-20 md:pt-12 md:pb-28" aria-labelledby="blog-list-title">
        <div className="container">
          <h2 id="blog-list-title" className="sr-only">Latest blog posts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-gray-200 bg-gray-50 p-0 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <div className="aspect-[3/2] overflow-hidden bg-gray-100"><img src={post.featuredImage} alt={post.featuredImageAlt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /></div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground"><span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div>
                    <h3 className="mt-4 text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
