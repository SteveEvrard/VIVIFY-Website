import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { getNewsPost } from "@/lib/news";
import NotFound from "@/pages/NotFound";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

type Props = {
  params?: {
    slug?: string;
  };
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function isReleaseLabel(text: string) {
  const t = text.trim().toUpperCase();
  return t === "FOR IMMEDIATE RELEASE" || t === "IMMEDIATE RELEASE";
}

function isSectionHeading(text: string) {
  const t = text.trim();
  if (t === "About MOBIA Industries") return true;
  if (t === "About VIVIFY Technology") return true;
  if (t === "Media Contact:" || t === "Media Contact") return true;
  return false;
}

function isMultimediaPlaceholder(text: string) {
  return text.trim().toLowerCase().startsWith(
    "view the videos and multimedia assets associated with this announcement"
  );
}

export default function NewsArticle(props: Props) {
  const slug = props.params?.slug ?? "";
  const post = getNewsPost(slug);

  if (!post) return <NotFound />;

  const paragraphs = post.content
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/news/${post.slug}`}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container max-w-4xl">
          <div className="mb-8">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/news">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            {post.excerpt}
          </p>

          <article className="mt-10 space-y-5">
            {(() => {
              const nodes: JSX.Element[] = [];

              for (let i = 0; i < paragraphs.length; i++) {
                const para = paragraphs[i]!;

                if (isReleaseLabel(para)) {
                  nodes.push(
                    <div
                      key={`release-${i}`}
                      className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2"
                    >
                      <span className="text-xs md:text-sm font-extrabold tracking-[0.22em] text-primary uppercase">
                        {para}
                      </span>
                    </div>
                  );
                  continue;
                }

                if (isSectionHeading(para)) {
                  const heading = para.replace(/:$/, "");
                  nodes.push(
                    <h2
                      key={`h2-${i}`}
                      className="pt-6 text-xl md:text-2xl font-bold text-foreground tracking-tight"
                    >
                      {heading}
                    </h2>
                  );

                  // Render media contact details as a compact block (no paragraph gaps).
                  if (heading.toLowerCase() === "media contact") {
                    const lines: string[] = [];
                    for (let j = i + 1; j < paragraphs.length; j++) {
                      const next = paragraphs[j]!;
                      if (isSectionHeading(next) || isReleaseLabel(next)) break;
                      lines.push(next);
                      i = j;
                    }

                    if (lines.length) {
                      nodes.push(
                        <div
                          key={`media-${i}`}
                          className="rounded-xl border border-gray-200 bg-gray-50 p-6"
                        >
                          <div className="space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
                            {lines.map((line, idx) => (
                              <div key={idx}>{line}</div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                  }

                  continue;
                }

                if (isMultimediaPlaceholder(para)) {
                  nodes.push(
                    <div
                      key={`video-${i}`}
                      className="rounded-xl border border-gray-200 overflow-hidden bg-black"
                    >
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        className="w-full aspect-video"
                      >
                        <source src="https://d2t61k482lx79u.cloudfront.net/news/Press-Release-020926.mov" type="video/mp4" />
                      </video>
                    </div>
                  );
                  continue;
                }

                nodes.push(
                  <p key={`p-${i}`} className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                );
              }

              return nodes;
            })()}
          </article>
        </div>
      </section>
    </div>
  );
}

