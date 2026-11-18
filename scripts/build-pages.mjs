import { cp, mkdir, readFile, readdir, rename, rm, symlink, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stage = join(root, ".pages-work");
const basePath = (process.env.PAGES_BASE_PATH ?? "/i-love-maxxing").replace(/\/$/, "");
if (basePath && !/^\/[A-Za-z0-9._-]+$/.test(basePath)) {
  throw new Error("PAGES_BASE_PATH must be empty or a single /repository-name.");
}

// Keep the editable source and local development root-relative. Only the
// isolated Pages build receives the repository prefix, including plain HTML
// links and media URLs that Next's basePath does not rewrite.
function prefixUrls(text) {
  if (!basePath) return text;
  return text
    .replace(/(["'`])\/(?!\/)(?=[A-Za-z0-9_?#]|["'`])/g, `$1${basePath}/`)
    .replace(/url\(\/(?!\/)/g, `url(${basePath}/`);
}

async function rewriteTree(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await rewriteTree(path);
    else if (/\.(tsx?|jsx?|css|svg|html|json)$/.test(entry.name)) {
      const original = await readFile(path, "utf8");
      const next = prefixUrls(original);
      if (next !== original) await writeFile(path, next);
    }
  }
}

const assets = spawnSync(process.execPath, ["scripts/verify-required-assets.mjs"], { cwd: root, stdio: "inherit" });
if (assets.status !== 0) process.exit(assets.status ?? 1);
await rm(stage, { recursive: true, force: true });
await mkdir(stage, { recursive: true });
for (const name of ["app", "public", "package.json", "tsconfig.json", "next-env.d.ts", "next.config.ts", "vite.config.ts", "postcss.config.mjs"]) {
  await cp(join(root, name), join(stage, name), { recursive: true });
}
await symlink(join(root, "node_modules"), join(stage, "node_modules"), "dir");
await rewriteTree(join(stage, "app"));
await rewriteTree(join(stage, "public"));
// Native extension-based export maps both / and /index to index.html.
// Give the directory route a temporary name until directory indexes are made.
await rename(join(stage, "app/index"), join(stage, "app/pages-directory"));

// The archive is a snapshot of the embedded timeline; Pages has no API server.
const legacyScript = join(stage, "public/site.js");
const legacy = await readFile(legacyScript, "utf8");
await writeFile(legacyScript, legacy.replace(/  try \{\n    var response = await fetch\([\s\S]*?\n  \}\n\n  if \(!scenes.length\)/, "  if (!scenes.length)"));

const build = spawnSync(process.execPath, [join(root, "node_modules/vinext/dist/cli.js"), "build"], {
  cwd: stage,
  env: { ...process.env, PAGES_BASE_PATH: basePath, PAGES_ASSET_PREFIX: basePath ? `https://dacuj.github.io${basePath}` : "" },
  stdio: "inherit",
});
if (build.status !== 0) process.exit(build.status ?? 1);

const output = join(root, "dist/client");
await rm(join(root, "dist"), { recursive: true, force: true });
await cp(join(stage, "dist/client"), output, { recursive: true });

async function finishExport(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await finishExport(path);
    else if (/\.(html|rsc|js|css|json)$/.test(entry.name)) {
      const text = await readFile(path, "utf8");
      // Absolute assetPrefix avoids Vinext nesting bundle files beneath the
      // repository name; same-origin URLs also allow exact local Pages previews.
      await writeFile(path, text.replaceAll("https://dacuj.github.io", ""));
      if (entry.name.endsWith(".html") && !["index.html", "404.html"].includes(entry.name)) {
        const slug = entry.name.slice(0, -5) === "pages-directory" ? "index" : entry.name.slice(0, -5);
        const target = join(directory, slug);
        await mkdir(target, { recursive: true });
        await rename(path, join(target, "index.html"));
      }
    }
  }
}
await finishExport(output);
await writeFile(join(output, ".nojekyll"), "");
await writeFile(join(root, "dist/pages-build.json"), JSON.stringify({ basePath }, null, 2) + "\n");
console.log(`GitHub Pages export: ${output} (base path: ${basePath || "/"})`);
