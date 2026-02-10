import { createServer } from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, "..");
const distDir = path.resolve(repoRoot, "dist", "public");
const indexPath = path.resolve(distDir, "index.html");

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".gif":
      return "image/gif";
    case ".pdf":
      return "application/pdf";
    case ".xml":
      return "application/xml; charset=utf-8";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".mp4":
      return "video/mp4";
    default:
      return "application/octet-stream";
  }
}

function serveStatic(req, res) {
  try {
    const url = new URL(req.url ?? "/", "http://localhost");
    const pathname = decodeURIComponent(url.pathname);

    // Prevent path traversal.
    const safePath = path
      .normalize(pathname)
      .replace(/^(\.\.(\/|\\|$))+/, "")
      .replace(/^\/+/, "");

    const filePath = path.resolve(distDir, safePath || "index.html");
    if (!filePath.startsWith(distDir)) {
      res.statusCode = 403;
      res.end("Forbidden");
      return;
    }

    let finalPath = filePath;
    if (fs.existsSync(finalPath) && fs.statSync(finalPath).isDirectory()) {
      finalPath = path.join(finalPath, "index.html");
    }

    if (!fs.existsSync(finalPath)) {
      // SPA fallback
      finalPath = indexPath;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", contentTypeFor(finalPath));
    fs.createReadStream(finalPath).pipe(res);
  } catch (err) {
    res.statusCode = 500;
    res.end(String(err));
  }
}

async function main() {
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Missing built index.html at ${indexPath}. Run \`vite build\` first.`);
  }

  const server = createServer(serveStatic);
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const port = server.address().port;

  // In some environments, Playwright may only have downloaded a different-arch Chromium build.
  // If the default executable path doesn't exist, fall back to a compatible one if present.
  const defaultExecPath = chromium.executablePath();
  let executablePath = defaultExecPath;
  if (executablePath && !fs.existsSync(executablePath)) {
    const candidates = [
      // mac (swap arm64 <-> x64)
      executablePath.replace("chrome-mac-arm64", "chrome-mac-x64"),
      executablePath.replace("chrome-mac-x64", "chrome-mac-arm64"),
      // linux (swap arm64 <-> x64)
      executablePath.replace("chrome-linux-arm64", "chrome-linux-x64"),
      executablePath.replace("chrome-linux-x64", "chrome-linux-arm64"),
      // windows
      executablePath,
    ];
    executablePath = candidates.find((p) => p && fs.existsSync(p));
  }

  const browser = await chromium.launch(executablePath ? { executablePath } : undefined);
  const page = await browser.newPage();

  // Avoid hanging on analytics placeholder requests.
  await page.route("**/*", async (route) => {
    const url = route.request().url();
    if (url.includes("%VITE_ANALYTICS_ENDPOINT%")) return route.abort();
    return route.continue();
  });

  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "domcontentloaded" });

  // Wait for the homepage H1 to exist in the DOM.
  await page.waitForSelector("#home-hero-title", { timeout: 30_000 });

  // Give effects (e.g. Seo) a moment to update <head>.
  await page.waitForTimeout(250);

  const html = await page.content();

  await browser.close();
  await new Promise((resolve) => server.close(resolve));

  // Ensure doctype is present (page.content() omits it).
  const finalHtml = html.toLowerCase().startsWith("<!doctype")
    ? html
    : "<!doctype html>\n" + html;

  fs.writeFileSync(indexPath, finalHtml, "utf8");
  // eslint-disable-next-line no-console
  console.log(`Prerendered homepage into ${indexPath}`);
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

