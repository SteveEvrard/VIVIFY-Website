export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "Infrastructure" | "Energy" | "Technology";
  excerpt: string;
  featuredImage: string;
  featuredImageAlt: string;
  inlineImage: { after: string; src: string; alt: string };
  content: string[];
};

const IMAGE_ROOT = "/images/blog/engineering-without-an-agenda";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "engineering-without-an-agenda",
    title: "Engineering Without an Agenda: The Case for Neutral Infrastructure",
    date: "2026-07-20",
    category: "Infrastructure",
    excerpt: "Bipartisan energy security starts with infrastructure, not ideology. A practical case for modernizing the systems people already depend on.",
    featuredImage: IMAGE_ROOT + "/featured.png",
    featuredImageAlt: "VIVIFY infrastructure technology representing reliable, modern energy systems",
    inlineImage: {
      after: "It means useful infrastructure should be evaluated by what it can become, not only by what it was.",
      src: IMAGE_ROOT + "/clean-air-technology.png",
      alt: "VIVIFY Clean Air Technology modular energy system for emissions control and infrastructure modernization",
    },
    content: [
      "Energy has become one of the most politically loaded conversations in America. On one side is “energy dominance,” or the argument that fossil fuels built this country, and the people attacking them are attacking America. On the other side is “clean energy,” or the argument that fossil fuels are destroying the planet, and anyone defending them is on the wrong side of history. Both sides are certain. Neither one is building anything.",
      "The grid doesn't care which phrase wins. Power either reaches homes, hospitals, data centers, and manufacturing plants — or it doesn't. Bipartisan energy security has to start with infrastructure, not ideology. That is the position VIVIFY builds from.",
      "VIVIFY is not built around a political argument or a preferred fuel category. It is built around a practical question: how can existing infrastructure be made cleaner, more efficient, and more capable without weakening the systems people already depend on? That question has an engineering answer. We built it.",
      "## The Energy Debate Has Moved Faster Than the Grid",
      "The public conversation often treats energy as a binary choice: keep legacy infrastructure and accept emissions, or replace legacy infrastructure and accept reliability risk. That framing may work in speeches. It does not reflect how power systems operate.",
      "Electricity demand is rising, and the pressure is coming from real sources. The U.S. Department of Energy reported that data center load growth has tripled over the past decade and is projected to double or triple again by 2028. Berkeley Lab’s summary of the same report notes that data centers used about 4.4% of total U.S. electricity in 2023 and could use between 6.7–12% by 2028, depending on broader economic growth.",
      "That kind of growth changes the discussion. Artificial intelligence, advanced manufacturing, electrification, and always-on digital infrastructure need stable power. They do not pause for policy debates, and they do not run on aspiration.",
      "At the same time, utilities face mounting pressure to reduce emissions, manage costs, and make long-term infrastructure decisions within a compressed timeframe. Regulatory pressure on legacy infrastructure is accelerating, while compliance requirements are outpacing the capacity to build replacements.",
      "That is where neutral infrastructure becomes the most useful tool in the conversation.",
      "## What Neutral Infrastructure Means",
      "Neutral infrastructure does not mean infrastructure without standards. It means the standard is performance.",
      "A neutral approach asks what a system can actually deliver. Can it support baseload power? Can it reduce emissions? Can it integrate with assets already in service? Can it protect communities from avoidable disruption? Those questions matter more than whether a technology fits neatly into a political category.",
      "VIVIFY is industry-agnostic by design. Our work centers on energy sovereignty, infrastructure modernization, and national resilience because those are not short-term political goals — they are long-term operational needs. Energy policy changes from one administration to the next. Infrastructure has to keep working for decades.",
      "A neutral platform gives decision-makers room to act. Leaders focused on energy dominance can support domestic capacity and grid stability. Leaders focused on clean energy can support emissions reduction and modernization. Industrial operators can focus on uptime, cost, compliance, and output. The point is not to make everyone use the same language. The point is to give different stakeholders a workable path toward shared outcomes.",
      "## Energy Sovereignty Requires System Control",
      "Energy sovereignty often gets reduced to production: produce more fuel, build more capacity, reduce dependence on foreign supply. Those goals matter. But sovereignty also depends on the condition of the systems that move, convert, and deliver energy.",
      "A country can have fuel access and still face grid weakness. A region can have generation capacity and still struggle with transmission bottlenecks. A utility can own valuable assets and still face shutdown pressure if emissions compliance becomes too costly or technically infeasible.",
      "That is why energy sovereignty has to include modernization. VIVIFY's hydrogen energy and clean air technologies are designed to operate as standalone systems or integrate directly with existing infrastructure, giving operators multiple paths forward. That flexibility is central to the argument: improve what already exists where it makes sense, deploy new systems where they are needed, and stop forcing every energy decision into an all-or-nothing choice.",
      "Replacement is slow. Full rebuilds are expensive. Permitting, supply chains, labor, financing, and public acceptance can stretch timelines for years. Retrofit strategies operate within existing systems, giving utilities and governments more options as they plan for the future. That does not mean every asset stays online forever. It means useful infrastructure should be evaluated by what it can become, not only by what it was.",
      "## The Case for Infrastructure Modernization",
      "Modernization works best when it starts with the system in front of us. Power plants, grids, labor forces, permitting agencies, and communities already exist. Any serious energy strategy has to account for them.",
      "Legacy power infrastructure is more than a source of emissions. A power plant is also a physical asset, a workforce, a tax base, a grid connection, and a source of dependable output. When those assets are treated only as liabilities, the conversation skips over real value already built into the system.",
      "Infrastructure modernization asks a more useful set of questions. How can existing assets be improved before they are retired? Can emissions be reduced? Can efficiency increase? Can the system continue to produce power while its environmental profile improves?",
      "VIVIFY's Clean Air Technology™ is engineered around that kind of performance. CAT™ is a five-stage emissions control platform that removes over 99% of volatile organic compounds from exhaust streams while generating supplemental electricity — without increasing fuel input. VIVIFY's broader system testing has demonstrated the ability to remove over 99% of pollutants and greenhouse gases from exhaust emissions while generating electricity without increasing fuel consumption per watt. That is a claim built for an engineering conversation: testable, reviewable, and validated through deployment.",
      "## National Resilience Is a Shared Priority",
      "National resilience shows up in practical ways. It is the grid holding during peak demand, hospitals staying online, manufacturers avoiding shutdowns, and communities keeping their economic base instead of absorbing sudden collapse.",
      "Those outcomes cut across political lines. No administration wants blackouts. No utility wants stranded assets. No community wants to trade jobs for uncertainty. No business wants energy costs to become a planning risk it cannot manage.",
      "VIVIFY's relevance comes from infrastructure-critical outcomes: grid reliability, emissions compliance, and economic stability. Those needs do not disappear when political leadership changes or regulatory priorities shift. They remain essential across administrations, markets, and energy strategies — which makes them the most durable foundation for bipartisan energy security.",
      "This is where the middle path becomes more than a framing exercise. For clean energy advocates, the value is lower emissions and modernized infrastructure. For energy dominance advocates, the value is stronger domestic capacity and reduced dependence on fragile supply chains. For communities, the value is continuity. For operators, the value is performance.",
      "## Engineering Gives the Conversation a Better Center",
      "The energy system does not need another slogan. It needs technical pathways that can survive contact with reality.",
      "Neutral infrastructure starts with existing conditions and works from there. It respects demand growth, grid limits, labor realities, capital constraints, and emissions pressure. It does not ask decision-makers to ignore the future. It does not pretend the present can be replaced overnight.",
      "That is the practical case for VIVIFY. The engineering is done. The platforms are deployed. The question is not whether hydrogen energy works at an industrial scale. It does. The question is who moves first to put it to work.",
      "That question does not belong to one party. It belongs to anyone responsible for keeping power reliable, emissions lower, communities stable, and infrastructure ready for what comes next.",
      "## Learn More About VIVIFY",
      "To learn more about VIVIFY's hydrogen energy and clean air technologies, contact Ashley Stevenson, Director of Marketing, at ashley@vivify-technology.com.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
