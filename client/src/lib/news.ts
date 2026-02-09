export type NewsPost = {
  slug: string;
  title: string;
  /** ISO date string (YYYY-MM-DD) */
  date: string;
  category: "Press Release" | "Company Update";
  excerpt: string;
  content: string;
};

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "mobia-selects-vivify-saudi-mobility-projects",
    title:
      "MOBIA Selects VIVIFY as Sole Provider of Power, Energy and Advanced Technology for Saudi Arabia Mobility Projects and Confidential U.S. Initiative",
    date: "2026-02-10",
    category: "Press Release",
    excerpt:
      "MOBIA Industries selected VIVIFY Technology as the sole provider of power, energy and advanced technology across five smart-city mobility infrastructure development projects in Saudi Arabia, plus an additional confidential U.S. initiative.",
    content: [
      "IMMEDIATE RELEASE",
      "",
      "DELRAY BEACH, Fla., Feb. 10, 2026 — MOBIA Industries today announced it has selected VIVIFY Technology as the sole provider of power, energy and advanced technology across five contracted smart-city mobility infrastructure development projects in the Kingdom of Saudi Arabia, as well as an additional undisclosed and confidential advanced-technology initiative in the United States.",
      "View the videos and multimedia assets associated with this announcement here.",
      "The projects are part of a broader multi-continent mobility and infrastructure development program expected to represent more than $1 trillion in planned investment over the next five years, spanning Saudi Arabia, North America and additional global regions as MOBIA advances its Living Mobility Ecosystem internationally.",
      "Aligned with Saudi Arabia’s Vision 2030 transformation agenda, MOBIA’s work in the Kingdom focuses on next-generation mobility infrastructure integrating autonomous systems, intelligent digital platforms and human-centered design to improve how people and goods move through cities and destinations.",
      "Through this partnership, VIVIFY will serve as the foundational technology and energy partner supporting the digital infrastructure, systems execution and operational backbone required to bring MOBIA’s Living Mobility Ecosystem to life across these programs.",
      "“We are excited to partner with VIVIFY on these landmark initiatives,” said Christopher Kirwan, CEO, MOBIA Industries. “Their ability to deliver the power, technology and systems integration required for projects of this scale strengthens our capacity to implement intelligent mobility solutions across Saudi Arabia and beyond.”",
      "VIVIFY’s role includes providing the advanced power solutions, digital infrastructure coordination and high-level technology execution necessary to support MOBIA’s deployment across multiple regions of the Kingdom, with expansion anticipated into additional international markets as projects progress.",
      "“Being selected by MOBIA as the sole provider of power, energy and advanced technology for these initiatives speaks to the type of transformational work VIVIFY was built for,” said Jason Herring, CEO of VIVIFY. “MOBIA’s vision for intelligent mobility aligns perfectly with our expertise in executing complex, forward-looking infrastructure and technology programs at scale. We are proud to support these projects in Saudi Arabia and a confidential U.S. initiative as part of this larger global development effort.”",
      "",
      "About MOBIA Industries",
      "MOBIA Industries is pioneering a unified mobility ecosystem where autonomous networks, real-time digital interfaces and advanced intelligence work together to create sustainable, efficient movement across cities and destinations. Learn more at https://mobia.ai/.",
      "",
      "About VIVIFY Technology",
      "VIVIFY is a technology, power and systems integration partner specializing in the execution of complex, high-impact infrastructure and digital initiatives. The company supports visionary organizations through advanced energy solutions, systems coordination and implementation at scale. Learn more at www.vivify-technology.com.",
      "",
      "Media Contact:",
      "Lynn Aronberg",
      "Lynn Aronberg Public Relations",
      "lynn@lynnaronberg.com",
      "310-299-6143",
    ].join("\n\n"),
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((p) => p.slug === slug);
}

