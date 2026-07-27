import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useBlogPublicationTime } from "@/hooks/useBlogPublicationTime";
import { getBlogPost, type BlogLink } from "@/lib/blogs";
import NotFound from "@/pages/NotFound";
import { ArrowLeft } from "lucide-react";
import { Fragment, type ReactNode } from "react";
import { Link } from "wouter";

type Props = { params?: { slug?: string } };

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return Number.isNaN(date.getTime()) ? iso : date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function linkedText(text: string, links: BlogLink[] = []): ReactNode {
  if (links.length === 0) return text;

  const nodes: ReactNode[] = [];
  let cursor = 0;
  links.forEach((link, index) => {
    const linkStart = text.indexOf(link.text, cursor);
    if (linkStart === -1) return;
    if (linkStart > cursor) nodes.push(text.slice(cursor, linkStart));

    const className = "font-semibold text-primary underline-offset-4 hover:underline";
    if (link.href.startsWith("/")) {
      nodes.push(<Link key={`${link.href}-${index}`} href={link.href} className={className}>{link.text}</Link>);
    } else {
      const external = link.href.startsWith("https://");
      nodes.push(<a key={`${link.href}-${index}`} href={link.href} className={className} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{link.text}</a>);
    }
    cursor = linkStart + link.text.length;
  });
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function legacyParagraph(text: string) {
  const email = "ashley@vivify-technology.com";
  const index = text.indexOf(email);
  if (index === -1) {
    return <p className="text-base leading-8 text-muted-foreground md:text-lg md:leading-9">{text}</p>;
  }

  return (
    <p className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-base leading-relaxed text-muted-foreground md:text-lg">
      {text.slice(0, index)}
      <a className="font-semibold text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}>{email}</a>
      {text.slice(index + email.length)}
    </p>
  );
}

export default function BlogArticle({ params }: Props) {
  const now = useBlogPublicationTime();
  const post = getBlogPost(params?.slug ?? "", now);
  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen flex flex-col pt-16 md:pt-20">
      <Seo title={post.title} description={post.excerpt} path={`/blogs/${post.slug}`} ogImage={`https://vivify-technology.com${post.featuredImage}`} />
      <article className="bg-white pb-20 md:pb-28" aria-labelledby="blog-article-title">
        <header className="container max-w-4xl pt-10 md:pt-14">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild><Link href="/blogs"><ArrowLeft className="mr-2 h-4 w-4" />Back to Blogs</Link></Button>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"><span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span><time dateTime={post.publishAt}>{formatDate(post.date)}</time></div>
          <h1 id="blog-article-title" className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{post.excerpt}</p>
          <figure className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm"><img src={post.featuredImage} alt={post.featuredImageAlt} className="aspect-[3/2] w-full object-cover" /></figure>
        </header>
        <div className="container max-w-4xl vivify-article mt-12 md:mt-16">
          <div className="space-y-6">
            {post.content.map((block, index) => {
              if (typeof block === "string") {
                if (block.startsWith("## ")) return <h2 key={index} className="pt-8 text-3xl font-bold leading-tight text-foreground">{block.slice(3)}</h2>;
                const inlineImages = post.inlineImages.filter((image) => block.endsWith(image.after));
                return <Fragment key={index}>{legacyParagraph(block)}{inlineImages.map((image) => <figure key={image.src} className="py-6"><div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"><img src={image.src} alt={image.alt} className="h-auto w-full" loading="lazy" /></div></figure>)}</Fragment>;
              }

              if (block.type === "heading") {
                return <h2 key={index} className="pt-8 text-3xl font-bold leading-tight text-foreground">{block.text}</h2>;
              }
              if (block.type === "list") {
                return <ul key={index} className="ml-6 list-disc space-y-3 text-base leading-8 text-muted-foreground marker:text-primary md:text-lg md:leading-9">{block.items.map((item) => <li key={item} className="pl-2">{item}</li>)}</ul>;
              }

              const inlineImages = post.inlineImages.filter((image) => block.text.endsWith(image.after));
              const paragraphClass = block.variant === "contact"
                ? "rounded-2xl border border-primary/20 bg-primary/5 p-6 text-base leading-relaxed text-muted-foreground md:text-lg"
                : "text-base leading-8 text-muted-foreground md:text-lg md:leading-9";
              return <Fragment key={index}><p className={paragraphClass}>{linkedText(block.text, block.links)}</p>{inlineImages.map((image) => <figure key={image.src} className="py-6"><div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100"><img src={image.src} alt={image.alt} className="h-auto w-full" loading="lazy" /></div></figure>)}</Fragment>;
            })}
          </div>
        </div>
      </article>
    </div>
  );
}
