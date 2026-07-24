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
`scripts/generate-blog-content.ts` validates the post data and copies only posts
whose publication time has arrived into the browser-facing application. Future
article text and images therefore remain outside the generated JavaScript,
article routes, sitemap, RSS feed, and public asset directory.

To queue another batch:

1. Add each source document and its images.
2. Convert its title, description, headings, paragraphs, links, and images into a
   new `post.json`.
3. Set `publishAt`, including the Central Time UTC offset.
4. Run `npm run check` and `npm run build`.
5. Commit the source content. The scheduled publisher will request a fresh
   Amplify build when each release becomes due.

The GitHub repository needs one secret named `AMPLIFY_BUILD_HOOK_URL`. Create a
build webhook for the production branch in AWS Amplify, then save that webhook
URL as the repository secret. The workflow checks every 15 minutes and only
calls the hook when a due blog slug is missing from the deployed publication
manifest.
