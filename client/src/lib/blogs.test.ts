import { describe, expect, it } from "vitest";
import { getBlogPost, getNextBlogPublicationTime } from "./blogs";

describe("scheduled blog publication", () => {
  it("publishes the July 27 article at its configured instant", () => {
    const slug = "what-is-hydrogen-energy";
    const publishTime = Date.parse("2026-07-27T00:00:00-05:00");

    expect(getBlogPost(slug, publishTime - 1)).toBeUndefined();
    expect(getBlogPost(slug, publishTime)?.slug).toBe(slug);
  });

  it("packages the July 29 article without exposing it through site routes early", () => {
    const slug = "why-diesel-generators-fail-communities-after-a-hurricane";
    const beforePublish = Date.parse("2026-07-28T12:00:00-05:00");
    const publishTime = Date.parse("2026-07-29T00:00:00-05:00");

    expect(getBlogPost(slug, beforePublish)).toBeUndefined();
    expect(getNextBlogPublicationTime(beforePublish)).toBe(publishTime);
    expect(getBlogPost(slug, publishTime)?.slug).toBe(slug);
  });

  it("publishes the July 31 article immediately at midnight Central Time", () => {
    const slug = "how-data-centers-can-prepare-for-hurricane-season-without-losing-power";
    const publishTime = Date.parse("2026-07-31T00:00:00-05:00");

    expect(getBlogPost(slug, publishTime - 1)).toBeUndefined();
    expect(getBlogPost(slug, publishTime)?.slug).toBe(slug);
  });

  it("holds the August 3 article until Monday at midnight Central Time", () => {
    const slug = "how-hydrogen-is-made-from-water-electrolysis-explained";
    const publishTime = Date.parse("2026-08-03T00:00:00-05:00");

    expect(getBlogPost(slug, publishTime - 1)).toBeUndefined();
    expect(getNextBlogPublicationTime(publishTime - 1)).toBe(publishTime);
    expect(getBlogPost(slug, publishTime)?.slug).toBe(slug);
  });

  it("holds the August 5 article until Wednesday at midnight Central Time", () => {
    const slug = "hidden-cost-of-power-outages-florida-businesses-storm-season";
    const publishTime = Date.parse("2026-08-05T00:00:00-05:00");

    expect(getBlogPost(slug, publishTime - 1)).toBeUndefined();
    expect(getNextBlogPublicationTime(publishTime - 1)).toBe(publishTime);
    expect(getBlogPost(slug, publishTime)?.slug).toBe(slug);
  });

  it("holds the August 7 article until Friday at midnight Central Time", () => {
    const slug = "next-generation-engineering-talent-joins-vivify-technology";
    const publishTime = Date.parse("2026-08-07T00:00:00-05:00");

    expect(getBlogPost(slug, publishTime - 1)).toBeUndefined();
    expect(getNextBlogPublicationTime(publishTime - 1)).toBe(publishTime);
    expect(getBlogPost(slug, publishTime)?.slug).toBe(slug);
  });
});
