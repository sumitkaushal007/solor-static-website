import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.resolve("out");
const publicDir = path.resolve("public");

// Cloudflare Pages uses _routes.json to serve exported assets directly and
// reserve Worker execution for explicitly configured functions, if any.
await mkdir(outputDir, { recursive: true });
const routesPath = path.join(outputDir, "_routes.json");
await writeFile(
  routesPath,
  `${JSON.stringify({ version: 1, include: ["/*"], exclude: [] }, null, 2)}\n`,
);

// Preserve Pages-specific headers, which Next static export does not copy.
try {
  const headers = await readFile(path.join(publicDir, "_headers"));
  await writeFile(path.join(outputDir, "_headers"), headers);
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

// Cloudflare Pages resolves trailing-slash routes from directory index files.
// Verify the expected exported homepage exists before the deployment proceeds.
const homepagePath = path.join(outputDir, "index.html");
await readFile(homepagePath);
console.log(`Cloudflare Pages static output ready: ${outputDir}`);
