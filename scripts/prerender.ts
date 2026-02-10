import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

async function prerenderHome() {
  const repoRoot = process.cwd();
  const distIndexHtml = path.resolve(repoRoot, "dist", "public", "index.html");

  let html = await fs.readFile(distIndexHtml, "utf-8");

  const vite = await createServer({
    // Load the repo-level Vite config (which sets root to ./client and defines aliases).
    configFile: path.resolve(repoRoot, "vite.config.ts"),
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "error",
  });

  try {
    const mod = await vite.ssrLoadModule("/src/entry-server.tsx");
    const appHtml: string = await mod.render("/");

    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    await fs.writeFile(distIndexHtml, html, "utf-8");
  } finally {
    await vite.close();
  }
}

prerenderHome().catch((err) => {
  console.error(err);
  process.exit(1);
});

