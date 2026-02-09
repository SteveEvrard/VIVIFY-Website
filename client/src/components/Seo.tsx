import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  /** Path like "/products". Defaults to current window.location.pathname. */
  path?: string;
  /** If true, format title as "VIVIFY | Page" instead of "Page | VIVIFY". */
  brandFirst?: boolean;
  /** Set true for pages you don't want indexed (e.g. 404). */
  noIndex?: boolean;
  /** Absolute URL to an image for link previews. */
  ogImage?: string;
};

const SITE_NAME = "VIVIFY";
const SITE_URL = "https://vivify-technology.com";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({ title, description, path, brandFirst, noIndex, ogImage }: SeoProps) {
  useEffect(() => {
    const finalTitle = title.includes(SITE_NAME)
      ? title
      : brandFirst
        ? `${SITE_NAME} | ${title}`
        : `${title} | ${SITE_NAME}`;
    document.title = finalTitle;

    const pathname = path ?? window.location.pathname ?? "/";
    const canonical = `${SITE_URL}${pathname}`;

    upsertMeta("name", "description", description);
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", finalTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", ogImage ?? `${SITE_URL}/vivify-logo.webp`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", finalTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage ?? `${SITE_URL}/vivify-logo.webp`);

    if (noIndex) {
      upsertMeta("name", "robots", "noindex,nofollow");
    } else {
      // Ensure we don't accidentally keep noindex from a previous route.
      const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
      if (robots) robots.remove();
    }
  }, [title, description, path, brandFirst, noIndex, ogImage]);

  return null;
}


