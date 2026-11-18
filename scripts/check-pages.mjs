import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist/client");
const origin = "https://pages-check.invalid";
const routes = [
  "/", "/index/", "/home-video/", "/home-archive/", "/shop/",
  "/articles/", "/articles/jaccuse-jadore-napoli/", "/timeline-editor/",
  ...[
    "i-hate-napoli", "i-hate-napoli-v2", "i-love-my-feed", "spleen-aholic",
    "touch-grass", "touch-grass-v2", "what-if-we-kissed-ehm", "witches-saints-algorithms",
  ].map((slug) => `/products/${slug}/`),
];
const errors = new Set();
const seen = new Set();
const counts = { html: 0, css: 0, modules: 0, references: 0, moduleDependencies: 0 };
const fail = (message) => errors.add(message);
const read = (file) => readFile(join(output, file), "utf8");

async function filesUnder(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(file));
    else if (entry.isFile()) files.push(file);
  }
  return files;
}

function decodeHtml(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#39|#(\d+)|#x([\da-f]+));/gi, (entity, decimal, hex) => {
    if (decimal || hex) return String.fromCodePoint(Number.parseInt(decimal || hex, hex ? 16 : 10));
    return { "&amp;": "&", "&quot;": '"', "&apos;": "'", "&#39;": "'", "&lt;": "<", "&gt;": ">" }[entity.toLowerCase()];
  });
}

async function main() {
  const { basePath } = JSON.parse(await readFile(join(root, "dist/pages-build.json"), "utf8"));
  if (typeof basePath !== "string" || (basePath !== "" && !/^\/[A-Za-z0-9._-]+$/.test(basePath))) {
    throw new Error("dist/pages-build.json must contain an empty or single-repository basePath.");
  }
  const allFiles = await filesUnder(output);
  const publicEntries = await readdir(join(root, "public"), { withFileTypes: true });
  const publicDirectories = publicEntries.filter((e) => e.isDirectory()).map((e) => `/${e.name}/`);
  const publicFiles = new Set(publicEntries.filter((e) => e.isFile()).map((e) => `/${e.name}`));
  publicDirectories.push("/_next/");

  const documentUrl = (file) => {
    const path = file === "index.html" ? "" : file.replace(/(?:^|\/)index\.html$/, "/");
    return `${origin}${basePath}/${path.replace(/^\//, "")}`;
  };

  async function verifyReference(value, owner, kind) {
    value = decodeHtml(value).trim();
    // Unresolved templates are checked separately for both actual film formats.
    if (!value || value.startsWith("#") || value.includes("${") || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;
    const key = `${owner}\0${value}`;
    if (seen.has(key)) return;
    seen.add(key);
    counts.references++;
    let url;
    try { url = new URL(value, documentUrl(owner)); }
    catch { fail(`${owner}: invalid ${kind} URL ${JSON.stringify(value)}`); return; }
    if (url.origin !== origin) return;
    if (basePath && url.pathname !== basePath && !url.pathname.startsWith(`${basePath}/`)) {
      fail(`${owner}: ${kind} escapes ${basePath}/: ${value}`);
      return;
    }
    let path;
    try { path = decodeURIComponent(url.pathname.slice(basePath.length)).replace(/^\/+/, ""); }
    catch { fail(`${owner}: invalid URL encoding: ${value}`); return; }
    const file = resolve(output, path);
    if (file !== output && !file.startsWith(output + sep)) {
      fail(`${owner}: path leaves export: ${value}`);
      return;
    }
    try {
      const info = await stat(file);
      if (info.isDirectory()) {
        const index = await stat(join(file, "index.html"));
        if (!index.isFile() || index.size === 0) throw new Error("no directory index");
      } else if (!info.isFile() || info.size === 0) throw new Error("empty or non-file target");
    } catch {
      fail(`${owner}: missing ${kind} target ${value}`);
    }
  }

  async function verifyCss(text, owner) {
    const pattern = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s'"\)]+))\s*\)|@import\s+(?:"([^"]+)"|'([^']+)')/gi;
    for (const match of text.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(pattern)) {
      await verifyReference(match.slice(1).find((value) => value !== undefined) ?? "", owner, "CSS");
    }
  }

  for (const route of routes) {
    const file = route === "/" ? "index.html" : `${route.slice(1)}index.html`;
    try {
      const html = await read(file);
      if (!/^<!doctype html>/i.test(html.trim()) || !/<html\b/i.test(html) || !/<body\b/i.test(html)) {
        fail(`${route}: export is not an HTML document`);
      }
    } catch { fail(`${route}: missing directory index ${file}`); }
  }

  const home = await read("index.html");
  if (!/<video\b/i.test(home) || !/id=["']story["']/i.test(home) || !home.includes("poster-v16-desktop.png")) {
    fail("/: index.html must be the film homepage, not the SHOP OR READ directory.");
  }
  if (!/<track\b[^>]*\bkind=["']captions["'][^>]*\bdefault(?:\s|=|\/?>)/i.test(home)) {
    fail("/: the film must retain its default captions track.");
  }
  const directory = await read("index/index.html");
  if (/<video\b/i.test(directory) || !/SHOP OR READ/.test(directory)) {
    fail("/index/: the directory must remain distinct from the film homepage.");
  }
  for (const file of [".nojekyll", "404.html"]) {
    try { if (!(await stat(join(output, file))).isFile()) throw new Error("not a file"); }
    catch { fail(`Missing GitHub Pages file: ${file}`); }
  }

  for (const absolute of allFiles) {
    const file = relative(output, absolute).split(sep).join("/");
    if (file.endsWith(".html")) {
      counts.html++;
      const html = await read(file);
      // Keep script opening tags, but do not mistake inline RSC strings for HTML attributes.
      const markup = html.replace(/(<script\b[^>]*>)[\s\S]*?<\/script\s*>/gi, "$1</script>");
      for (const tag of markup.matchAll(/<[a-z][\w:-]*\b[^>]*>/gi)) {
        for (const attribute of tag[0].matchAll(/(?:^|\s)(src|href|poster|data-rsc-css-href)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
          await verifyReference(attribute[2] ?? attribute[3] ?? attribute[4], file, attribute[1]);
        }
        for (const style of tag[0].matchAll(/\sstyle\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
          await verifyCss(decodeHtml(style[1] ?? style[2]), file);
        }
      }
      for (const style of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi)) await verifyCss(style[1], file);
    } else if (file.endsWith(".css")) {
      counts.css++;
      await verifyCss(await read(file), file);
    } else if (file.endsWith(".js")) {
      if (file.startsWith("_next/")) counts.modules++;
      const source = await read(file);
      const dependencyPatterns = [
        /\b(?:import|export)\s*(?:[^;"'`\n]*?\bfrom\s*)?(["'])([^"'`\n]+)\1/g,
        /\bimport\s*\(\s*(["'`])([^"'`\n]+)\1\s*\)/g,
      ];
      for (const pattern of dependencyPatterns) for (const match of source.matchAll(pattern)) {
        const dependency = match[2];
        if (!/^(?:\.{1,2}\/|\/|[a-z][a-z\d+.-]*:)/i.test(dependency)) {
          fail(`${file}: unbundled module import ${dependency}`);
          continue;
        }
        counts.moduleDependencies++;
        await verifyReference(dependency, file, "module");
      }
      // Also inspect Vite preload tables and static URLs inside client effects.
      // Framework route manifests contain intentional unprefixed route identifiers;
      // only actual prefixed URLs or public-asset paths are resource references here.
      for (const match of source.matchAll(/(["'`])((?:\/|\.{1,2}\/)[^"'`\r\n]{1,600}?)\1/g)) {
        const value = match[2];
        if (value.includes("${")) continue;
        const resourcePath = value.split(/[?#]/, 1)[0];
        if ((basePath && (value === basePath || value.startsWith(`${basePath}/`))) ||
            publicDirectories.some((prefix) => value.startsWith(prefix)) || publicFiles.has(resourcePath)) {
          await verifyReference(value, file, "client asset");
        }
      }
    }
  }

  const prologueFiles = [
    "metadhone-metadata-v16-desktop-silent.mp4", "metadhone-metadata-v16-mobile-silent.mp4",
    "poster-v16-desktop.png", "poster-v16-mobile.png", "prologue-v16-en.vtt",
  ];
  for (const file of prologueFiles) {
    await verifyReference(`${basePath}/media/prologue/${file}`, "index.html", "responsive film");
    const size = (await stat(join(output, "media/prologue", file)).catch(() => null))?.size ?? 0;
    if (/\.mp4$/.test(file) && size < 100_000) fail(`Film asset is unexpectedly small: ${file}`);
  }
  const captions = await read("media/prologue/prologue-v16-en.vtt");
  const timings = [...captions.matchAll(/(\d{2}):(\d{2}):(\d{2}\.\d{3})\s+-->\s+(\d{2}):(\d{2}):(\d{2}\.\d{3})/g)];
  if (!captions.startsWith("WEBVTT") || timings.length === 0) fail("The captions asset is not a timed WebVTT file.");
  let previousEnd = 0;
  for (const timing of timings) {
    const seconds = (offset) => Number(timing[offset]) * 3600 + Number(timing[offset + 1]) * 60 + Number(timing[offset + 2]);
    const start = seconds(1), end = seconds(4);
    if (start < previousEnd || end <= start) fail("Caption cues overlap or have invalid timing.");
    previousEnd = end;
  }
  if (counts.modules === 0 || counts.moduleDependencies === 0) fail("No compiled client modules/dependencies were checked.");

  if (errors.size) {
    console.error(`GitHub Pages check failed (${errors.size}):`);
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
  } else {
    console.log(`GitHub Pages check passed: ${routes.length} routes, ${counts.html} HTML files, ${counts.css} stylesheets, ${counts.modules} client modules, ${counts.moduleDependencies} module dependencies, ${counts.references} local references.`);
    console.log(`Film homepage and /index/ are distinct; both responsive videos, both posters and ${timings.length} caption cues are present. Base path: ${basePath || "/"}.`);
  }
}

main().catch((error) => {
  console.error(`GitHub Pages check failed: ${error.message}`);
  process.exitCode = 1;
});
