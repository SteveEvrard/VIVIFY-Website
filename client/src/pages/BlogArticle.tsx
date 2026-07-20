import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { getBlogPost } from "@/lib/blogs";
import NotFound from "@/pages/NotFound";
import { ArrowLeft } from "lucide-react";
import { Fragment } from "react";
import { Link } from "wouter";

type Props = { params?: { slug?: string } };

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogArticle({ params }: Props) {
  const post = getBlogPost(params?.slug ?? "");
  if (!post) return <NotFound />;
  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} ogImage={`https://vivify-technology.com${post.featuredImage}`} />
      <article className="bg-white pb-20 md:pb-28" aria-labelledby="blog-article-title">
        <header className="container max-w-4xl pt-10 md:pt-14">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild><Link href="/blogs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blogs</Link></Button>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"><span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time></div>
          <h1 id="blog-article-title" className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{post.excerpt}</p>
          <figure className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm"><img src={post.featuredImage} alt={post.featuredImageAlt} className="aspect-[3/2] w-full object-cover" /></figure>
        </header>
        <div className="container max-w-4xl vivify-article mt-12 md:mt-16">
          <div className="space-y-6">
            {post.content.map((text, index) => {
              if (text.startsWith("## ")) return <h2 key={index} className="pt-8 text-3xl font-bold leading-tight text-foreground">{text.slice(3)}</h2>;
              const isContact = text.includes("ashley@vivify-technology.com");
              const paragraph = isContact ? <p className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-base leading-relaxed text-muted-foreground md:text-lg">{text.replace("ashley@vivify-technology.com.", "")}<a className="font-semibold text-primary underline-offset-4 hover:underline" href="mailto:ashley@vivify-technology.com">ashley@vivify-technology.com</a>.</p> : <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9">{text}</p>;
              const showImage = text.endsWith(post.inlineImage.after);
              return <Fragment key={index}>{paragraph}{showImage && <figure className="py-6"><div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"><img src={post.inlineImage.src} alt={post.inlineImage.alt} className="h-auto w-full" loading="lazy" /></div></figure>}</Fragment>;
            })}
          </div>
        </div>
      </article>
    </div>
  );
}
