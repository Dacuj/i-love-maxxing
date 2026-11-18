import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { startTypeClock, SIGNAL_TICK_MS } from "../app/type-signal-clock.ts";
import { articles } from "../app/articles/article-data.ts";

const source = (file) => readFile(new URL("../" + file, import.meta.url), "utf8");

function environment(hidden = false) {
  const document = new EventTarget();
  document.hidden = hidden;
  document.documentElement = { dataset: {} };
  const timers = new Map();
  let lastId = 0;
  return {
    document, timers,
    setInterval(callback, delay) { assert.equal(delay, SIGNAL_TICK_MS); timers.set(++lastId, callback); return lastId; },
    clearInterval(id) { timers.delete(id); },
    tick() { for (const callback of timers.values()) callback(); },
  };
}

test("one clock drives all signals at a bounded rate and cleans up completely", () => {
  const env = environment();
  const stop = startTypeClock(env);
  assert.equal(1000 / (SIGNAL_TICK_MS * 2), 2.5);
  assert.equal(env.timers.size, 1);
  env.tick();
  assert.equal(env.document.documentElement.dataset.typeBeat, "dim");
  env.tick();
  assert.equal(env.document.documentElement.dataset.typeBeat, "bright");
  stop();
  assert.equal(env.timers.size, 0);
  assert.equal(env.document.documentElement.dataset.typeBeat, undefined);
  env.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(env.timers.size, 0);
});

test("hidden pages stop the clock and resume without accumulating timers", () => {
  const env = environment(true);
  const stop = startTypeClock(env);
  assert.equal(env.timers.size, 0);
  env.document.hidden = false;
  env.document.dispatchEvent(new Event("visibilitychange"));
  env.document.dispatchEvent(new Event("visibilitychange"));
  assert.equal(env.timers.size, 1);
  env.tick();
  env.document.hidden = true;
  env.document.dispatchEvent(new Event("visibilitychange"));
  env.tick();
  assert.equal(env.timers.size, 0);
  assert.equal(env.document.documentElement.dataset.typeBeat, undefined);
  stop();
});

test("motion starts only after preferences resolve; pause is persistent and reduced motion wins", async () => {
  const signals = await source("app/type-signals.tsx");
  assert.match(signals, /mode !== "running"/);
  assert.match(signals, /useSyncExternalStore/);
  assert.match(signals, /localStorage\.getItem/);
  assert.match(signals, /localStorage\.setItem/);
  assert.match(signals, /prefers-reduced-motion: reduce/);
  assert.match(signals, /preference\.addEventListener\("change"/);
  assert.match(signals, /preference\.removeEventListener\("change"/);
  assert.doesNotMatch(signals, /aria-live/);
  assert.doesNotMatch(signals, /<button|type-control/);
  const css = await source("public/desk.css");
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /a\.signal-text:focus-visible \{ opacity: 1; \}/);
});

test("green introduction is static, lowercase and outside all type signals", async () => {
  const home = await source("app/page.tsx");
  assert.match(home, /<p className="intro-it" lang="en">us them and the future<\/p>/);
  assert.match(await source("public/desk.css"), /\.intro-it \{ text-transform: none; \}/);
  assert.doesNotMatch(home, /NonsenseSubtitle|intro-signal/);
  const signals = await source("app/type-signals.tsx");
  assert.doesNotMatch(signals, /xdxdxd|lmaooo|comments\[|NonsenseSubtitle|setFrame/);
});

test("public navigation uses direct index pages and marks all product-next links as signals", async () => {
  for (const file of ["app/page.tsx", "app/products/product-page.tsx", "app/articles/jaccuse-jadore-napoli/page.tsx", "app/directory-nav.tsx"]) {
    const body = await source(file);
    assert.match(body, /href="\/articles"/);
    assert.match(body, /href="\/shop"/);
    assert.doesNotMatch(body, /href="\/?#(?:collection|editorial)"/);
  }
  const product = await source("app/products/product-page.tsx");
  assert.match(product, /className="signal-text" href=\{`\/products\/\$\{product.nextSlug\}`\}/);
});

test("compact article archive uses existing assets, with separators only between articles", async () => {
  assert.equal(new Set(articles.map(article => article.slug)).size, articles.length);
  for (const article of articles) {
    await stat(new URL(`../app/articles/${article.slug}/page.tsx`, import.meta.url));
    for (const image of article.images) assert.ok((await stat(new URL("../public" + image, import.meta.url))).size > 0);
  }
  const list = await source("app/articles/article-list.tsx");
  assert.match(list, /index > 0/);
  assert.match(list, /aria-hidden="true">°/);
  assert.match(list, /<h3>\{article.title\}<\/h3>/);
  const css = await source("public/desk.css");
  assert.match(css, /\.article-card-cover \{[^}]*aspect-ratio: 1;/);
  assert.match(css, /\.directory-read \{ color: #f2eee5; background: #050505; \}/);
});
