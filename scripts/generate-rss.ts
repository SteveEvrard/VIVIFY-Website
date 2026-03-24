import { Feed } from "feed";
import fs from "fs";
// Adjust this import path based on where you put this script!
import { NEWS_POSTS } from "../client/src/lib/news";

const feed = new Feed({
  title: "VIVIFY Technology News",
  description: "Press releases and company updates from VIVIFY.",
  id: "https://vivify-technology.com/",
  link: "https://vivify-technology.com/",
  language: "en",
  copyright: "All rights reserved 2026, VIVIFY Technology",
});

// Sort posts by date, just like your component
const sortedPosts = [...NEWS_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

sortedPosts.forEach((post) => {
  feed.addItem({
    title: post.title,
    id: `https://vivify-technology.com/news/${post.slug}`,
    link: `https://vivify-technology.com/news/${post.slug}`,
    description: post.excerpt,
    // Note: If your content has raw HTML/Markdown, feed readers will usually render it!
    content: post.content,
    date: new Date(post.date),
  });
});

// Add this line to create the folder safely
fs.mkdirSync("./dist/public", { recursive: true });

// Write the file to your Vite public directory
fs.writeFileSync("./dist/public/rss.xml", feed.rss2());
console.log("RSS feed generated successfully!");