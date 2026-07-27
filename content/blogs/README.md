# Scheduled blog content

Each scheduled article lives in its own directory:

```text
content/blogs/<slug>/
  post.json
  featured.png
```

`publishAt` must be an ISO timestamp with an explicit timezone. VIVIFY's date-only
publishing convention is midnight in America/Chicago, using `-05:00` during
daylight saving time and `-06:00` during standard time.

Before every development session, type check, or production build,
`scripts/generate-blog-content.ts` validates all post data and copies all queued
posts and their assets into the browser-facing application. The blog list and
article routes compare `publishAt` with the current time, so each article becomes
visible on schedule without another build, a GitHub workflow, or a server cron
job. An already-open blog page also updates when a publication time arrives.

Because future content must be present in a static deployment for this to work,
article text and images can be recovered by someone inspecting the JavaScript or
public assets before `publishAt`. Do not use this mechanism for confidential or
legally embargoed content.

To queue another batch:

1. Add each source document and its images.
2. Convert its title, description, headings, paragraphs, links, and images into a
   new `post.json`.
3. Set `publishAt`, including the Central Time UTC offset.
4. Run `npm run check` and `npm run build`.
5. Upload the contents of `dist/public/` to the production web root with
   FileZilla. One upload can contain any number of future scheduled posts.

The website needs no GitHub publishing integration. `blog-rss.xml`, `sitemap.xml`,
and `blog-publication-manifest.json` are static build snapshots and include posts
that are due when `npm run build` runs. The browser-facing blog schedule continues
to release future posts after that upload; rebuild and upload later if those
metadata files also need to list a newly released post.
