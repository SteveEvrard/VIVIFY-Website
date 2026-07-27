import fs from "node:fs/promises";
import path from "node:path";

export const BLOG_CATEGORIES = ["Infrastructure", "Energy", "Technology"] as const;

type BlogLink = {
  text: string;
  href: string;
};

type BlogSourceBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
      variant?: "contact";
      links?: BlogLink[];
    }
  | {
      type: "list";
      items: string[];
    };

export type BlogSource = {
  slug: string;
  title: string;
  publishAt: string;
  category: (typeof BLOG_CATEGORIES)[number];
  targetKeyword?: string;
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  inlineImages?: Array<{
    after: string;
    source: string;
    alt: string;
  }>;
  content: BlogSourceBlock[];
};

export type LoadedBlogSource = {
  directory: string;
  source: BlogSource;
};

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TIMEZONE_PATTERN = /(?:Z|[+-]\d{2}:\d{2})$/;

function requireString(value: unknown, label: string) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`${label} must be a non-empty string.`);
  }
}

async function assertAssetExists(directory: string, relativePath: string, label: string) {
  if (path.isAbsolute(relativePath) || relativePath.includes("..")) {
    throw new Error(`${label} must stay inside its post directory.`);
  }

  const assetPath = path.resolve(directory, relativePath);
  const relative = path.relative(directory, assetPath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`${label} escaped its post directory.`);
  }

  const stat = await fs.stat(assetPath).catch(() => null);
  if (!stat?.isFile()) {
    throw new Error(`${label} does not exist: ${assetPath}`);
  }
}

async function validateSource(source: BlogSource, directory: string) {
  requireString(source.slug, "slug");
  if (!SLUG_PATTERN.test(source.slug)) {
    throw new Error(`Invalid blog slug: ${source.slug}`);
  }
  if (path.basename(directory) !== source.slug) {
    throw new Error(`Post directory must match its slug: ${source.slug}`);
  }

  requireString(source.title, `${source.slug}.title`);
  requireString(source.publishAt, `${source.slug}.publishAt`);
  if (!TIMEZONE_PATTERN.test(source.publishAt) || Number.isNaN(Date.parse(source.publishAt))) {
    throw new Error(`${source.slug}.publishAt must be an ISO timestamp with a timezone.`);
  }
  if (!BLOG_CATEGORIES.includes(source.category)) {
    throw new Error(`${source.slug}.category is not supported.`);
  }
  requireString(source.excerpt, `${source.slug}.excerpt`);
  requireString(source.featuredImage, `${source.slug}.featuredImage`);
  requireString(source.featuredImageAlt, `${source.slug}.featuredImageAlt`);
  await assertAssetExists(directory, source.featuredImage, `${source.slug}.featuredImage`);

  if (!Array.isArray(source.content) || source.content.length === 0) {
    throw new Error(`${source.slug}.content must contain at least one block.`);
  }

  for (const [index, block] of source.content.entries()) {
    if (block.type === "list") {
      if (!Array.isArray(block.items) || block.items.length === 0) {
        throw new Error(`${source.slug}.content[${index}] must contain list items.`);
      }
      block.items.forEach((item, itemIndex) =>
        requireString(item, `${source.slug}.content[${index}].items[${itemIndex}]`),
      );
      continue;
    }

    requireString(block.text, `${source.slug}.content[${index}].text`);
    if (block.type === "paragraph" && block.links) {
      for (const [linkIndex, link] of block.links.entries()) {
        requireString(link.text, `${source.slug}.content[${index}].links[${linkIndex}].text`);
        requireString(link.href, `${source.slug}.content[${index}].links[${linkIndex}].href`);
        if (!block.text.includes(link.text)) {
          throw new Error(
            `${source.slug}.content[${index}] does not contain linked text "${link.text}".`,
          );
        }
        if (!/^(?:\/|mailto:|https:\/\/)/.test(link.href)) {
          throw new Error(`${source.slug}.content[${index}] contains an unsafe link.`);
        }
      }
    }
  }

  for (const [index, image] of (source.inlineImages ?? []).entries()) {
    requireString(image.after, `${source.slug}.inlineImages[${index}].after`);
    requireString(image.source, `${source.slug}.inlineImages[${index}].source`);
    requireString(image.alt, `${source.slug}.inlineImages[${index}].alt`);
    await assertAssetExists(directory, image.source, `${source.slug}.inlineImages[${index}].source`);
  }
}

export async function loadBlogSources(repositoryRoot = process.cwd()) {
  const contentRoot = path.resolve(repositoryRoot, "content", "blogs");
  const entries = await fs.readdir(contentRoot, { withFileTypes: true });
  const posts: LoadedBlogSource[] = [];

  for (const entry of entries.filter((candidate) => candidate.isDirectory())) {
    const directory = path.join(contentRoot, entry.name);
    const sourcePath = path.join(directory, "post.json");
    const raw = await fs.readFile(sourcePath, "utf8");
    const source = JSON.parse(raw) as BlogSource;
    await validateSource(source, directory);
    posts.push({ directory, source });
  }

  posts.sort((a, b) => a.source.publishAt.localeCompare(b.source.publishAt));

  const slugs = new Set<string>();
  for (const { source } of posts) {
    if (slugs.has(source.slug)) {
      throw new Error(`Duplicate blog slug: ${source.slug}`);
    }
    slugs.add(source.slug);
  }

  return posts;
}
