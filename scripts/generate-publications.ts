import fs from "node:fs/promises";
import path from "node:path";
import { Feed } from "feed";
import { getPublishedBlogPosts } from "../client/src/lib/blogs";
import { NEWS_POSTS } from "../client/src/lib/news";

const SITE_URL = "https://vivify-technology.com";

function absoluteUrl(route: string) {
  return `${SITE_URL}${route === "/" ? "/" : route}`;
}

async function main() {
  const outputDirectory = path.resolve(process.cwd(), "dist", "public");
  const blogPosts = getPublishedBlogPosts().sort((a, b) => b.publishAt.localeCompare(a.publishAt));
  const newsPosts = [...NEWS_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  const newsFeed = new Feed({
    title: "VIVIFY Technology News",
    description: "Press releases and company updates from VIVIFY.",
    id: `${SITE_URL}/`,
    link: `${SITE_URL}/`,
    language: "en",
    copyright: "All rights reserved 2026, VIVIFY Technology",
  });
  for (const post of newsPosts) {
    newsFeed.addItem({
      title: post.title,
      id: `${SITE_URL}/news/${post.slug}`,
      link: `${SITE_URL}/news/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      date: new Date(post.date),
    });
  }

  const blogFeed = new Feed({
    title: "VIVIFY Technology Blog",
    description: "Ideas and perspectives from VIVIFY on energy, infrastructure, and technology.",
    id: `${SITE_URL}/blogs`,
    link: `${SITE_URL}/blogs`,
    language: "en",
    copyright: "All rights reserved 2026, VIVIFY Technology",
  });
  for (const post of blogPosts) {
    blogFeed.addItem({
      title: post.title,
      id: `${SITE_URL}/blogs/${post.slug}`,
      link: `${SITE_URL}/blogs/${post.slug}`,
      description: post.excerpt,
      date: new Date(post.publishAt),
    });
  }

  const staticRoutes = [
    "/",
    "/technology",
    "/about",
    "/leadership",
    "/leadership/buddy-paul",
    "/applications",
    "/safety",
    "/faq",
    "/news",
    "/media-coverage",
    "/blogs",
    "/privacy",
    "/terms",
    "/cookies",
  ];
  const routes = [
    ...staticRoutes,
    ...newsPosts.map((post) => `/news/${post.slug}`),
    ...blogPosts.map((post) => `/blogs/${post.slug}`),
  ];
  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => `  <url><loc>${absoluteUrl(route)}</loc></url>`),
    "</urlset>",
    "",
  ].join("\n");

  await fs.mkdir(outputDirectory, { recursive: true });
  await Promise.all([
    fs.writeFile(path.join(outputDirectory, "rss.xml"), newsFeed.rss2(), "utf8"),
    fs.writeFile(path.join(outputDirectory, "blog-rss.xml"), blogFeed.rss2(), "utf8"),
    fs.writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap, "utf8"),
    fs.writeFile(
      path.join(outputDirectory, "blog-publication-manifest.json"),
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          publishedBlogSlugs: blogPosts.map((post) => post.slug),
        },
        null,
        2,
      ),
      "utf8",
    ),
  ]);

  console.log(
    `Generated publication metadata for ${blogPosts.length} blog post(s) and ${newsPosts.length} news post(s).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
