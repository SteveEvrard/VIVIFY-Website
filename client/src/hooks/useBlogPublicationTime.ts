import { getNextBlogPublicationTime } from "@/lib/blogs";
import { useEffect, useState } from "react";

const MAX_TIMEOUT_MS = 2_147_483_647;

/**
 * Keeps an already-open blog page synchronized with the publication schedule.
 * A newly due post appears without a deployment or a page refresh.
 */
export function useBlogPublicationTime() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const nextPublicationTime = getNextBlogPublicationTime(now);
    if (nextPublicationTime === undefined) return;

    const delay = Math.min(Math.max(nextPublicationTime - Date.now(), 0) + 100, MAX_TIMEOUT_MS);
    const timer = window.setTimeout(() => setNow(Date.now()), delay);
    return () => window.clearTimeout(timer);
  }, [now]);

  return now;
}
