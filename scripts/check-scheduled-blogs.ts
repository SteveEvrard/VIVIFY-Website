import fs from "node:fs/promises";
import { isDue, loadBlogSources } from "./blog-content";

type PublicationManifest = {
  publishedBlogSlugs?: string[];
};

function argumentValue(name: string) {
  const index = process.argv.indexOf(name);
  return index === -1 ? undefined : process.argv[index + 1];
}

async function readRemoteManifest(url: string): Promise<PublicationManifest> {
  const separator = url.includes("?") ? "&" : "?";
  const response = await fetch(`${url}${separator}checkedAt=${Date.now()}`, {
    headers: { "cache-control": "no-cache" },
  });
  if (!response.ok) {
    throw new Error(`Publication manifest returned HTTP ${response.status}.`);
  }
  return (await response.json()) as PublicationManifest;
}

async function main() {
  const repositoryRoot = process.cwd();
  const remoteUrl =
    argumentValue("--remote-url") ??
    "https://vivify-technology.com/blog-publication-manifest.json";
  const nowArgument = argumentValue("--as-of");
  const now = nowArgument ? new Date(nowArgument) : new Date();
  if (Number.isNaN(now.getTime())) {
    throw new Error("--as-of requires a valid ISO timestamp.");
  }

  const sources = await loadBlogSources(repositoryRoot);
  let manifest: PublicationManifest = {};
  try {
    manifest = await readRemoteManifest(remoteUrl);
  } catch (error) {
    console.warn(`Could not read the deployed publication manifest: ${String(error)}`);
  }

  const deployed = new Set(manifest.publishedBlogSlugs ?? []);
  const pending = sources
    .filter(({ source }) => isDue(source, now) && !deployed.has(source.slug))
    .map(({ source }) => source.slug);
  const shouldPublish = pending.length > 0;
  const outputPath = process.env.GITHUB_OUTPUT;

  if (outputPath) {
    await fs.appendFile(outputPath, `should_publish=${shouldPublish}\n`, "utf8");
    await fs.appendFile(outputPath, `pending_slugs=${pending.join(",")}\n`, "utf8");
  }

  console.log(
    shouldPublish
      ? `A deployment is due for: ${pending.join(", ")}`
      : "No scheduled blog deployment is due.",
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
