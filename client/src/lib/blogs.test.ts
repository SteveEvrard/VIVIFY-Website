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
});
