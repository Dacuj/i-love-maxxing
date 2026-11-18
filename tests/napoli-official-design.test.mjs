import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import vm from "node:vm";
import { products } from "../app/products/product-data.ts";
import { DEFAULT_TIMELINE } from "../app/timeline-data.ts";

const officialMockup = "/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp";
const oldMockup = "/collection-001/mockups/01-i-hate-napoli-acid-real-v2.png";

test("official product uses the one-ink mockup and labels it honestly", async () => {
  const product = products["i-hate-napoli"];
  assert.equal(product.mainImage, officialMockup);
  assert.match(product.mainCaption, /MOCKUP/);
  assert.match(product.mainCaption, /NOT A PHYSICAL PROTOTYPE/);
  assert.equal(product.ink, "IVORY / ONE INK");
  assert.match(product.print, /200 MM/);
  assert.equal(product.gallery.length, 3);
  assert.equal(product.gallery[2].src, "/collection-001/research-assets/n1-pink-floyd-shirt-user-closeup.png");
  assert.doesNotMatch(product.itProduct + product.enProduct, /Helvetica|cobalt|fuchsia|Enter the Void|twin tracks|binari doppi/i);
  assert.match(product.itProduct, /prima variante/);
  for (const src of [product.mainImage, ...product.gallery.map(image => image.src)]) {
    assert.ok((await stat(new URL("../public" + src, import.meta.url))).size > 0);
  }
  const home = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.ok(home.includes(officialMockup));
  assert.ok(!home.includes(oldMockup));
});

test("published artwork is a one-ink vector, not a retyped or rasterised image", async () => {
  const svg = await readFile(new URL("../public/collection-001/designs/01-i-hate-napoli-official-08-monochrome.svg", import.meta.url), "utf8");
  assert.doesNotMatch(svg, /<(text|image|filter|linearGradient|radialGradient)\b/);
  assert.equal((svg.match(/<path\b/g) || []).length, 1);
  assert.match(svg, /id="UNICO-INCHIOSTRO"/);
  assert.match(svg, /fill="#ead7bd"/);
  const positive = await readFile(new URL("../public/collection-001/designs/01-i-hate-napoli-official-08-positivo-nero-200mm.svg", import.meta.url), "utf8");
  assert.doesNotMatch(positive, /<(text|image|filter|linearGradient|radialGradient)\b/);
  assert.match(positive, /width="200mm"/);
  assert.match(positive, /fill="#000000"/);
  assert.equal(positive.match(/ d="([^"]+)"/)[1], svg.match(/ d="([^"]+)"/)[1]);
});

test("saved timeline alias changes only the old product image, not timing or positioning", async () => {
  const js = await readFile(new URL("../public/site.js", import.meta.url), "utf8");
  const helpers = js.slice(js.indexOf("  function number("), js.indexOf("  scenes = scenes.map("));
  const context = vm.createContext({ approvedAssetUpdates: {} });
  vm.runInContext(helpers + "\nglobalThis.normalize = normaliseImage;", context);
  const input = { id: "user-edited-photo", src: oldMockup, alt: "Old photo", duration: 7.3, positionX: 27, positionY: 83 };
  const before = structuredClone(input);
  const result = JSON.parse(JSON.stringify(context.normalize(input, 0)));
  assert.deepEqual(input, before);
  assert.equal(result.src, officialMockup);
  for (const key of ["id", "duration", "positionX", "positionY"]) assert.equal(result[key], input[key]);
  const custom = { ...input, src: "/api/timeline/assets/user-chosen-image" };
  assert.equal(context.normalize(custom, 0).src, custom.src);
  const legacy = context.normalize([oldMockup, "Legacy"], 4);
  assert.equal(legacy.src, officialMockup);
  assert.equal(legacy.duration, 1);
  assert.equal(legacy.id, "legacy-4");
  const previousOfficial = context.normalize({ ...input, src: "/collection-001/mockups/01-i-hate-napoli-official-07-manichino.webp" }, 0);
  assert.equal(previousOfficial.src, officialMockup);
  for (const key of ["id", "duration", "positionX", "positionY"]) assert.equal(previousOfficial[key], input[key]);
});

test("default timeline keeps existing image slots and positions", () => {
  for (const [sceneId, imageId] of [["city-product", "city-product-2"], ["no-index", "no-index-2"]]) {
    const scene = DEFAULT_TIMELINE.find(item => item.id === sceneId);
    const image = scene?.images.find(item => item.id === imageId);
    assert.ok(image);
    assert.equal(image.src, officialMockup);
    assert.equal(image.duration, 1);
    assert.equal(image.positionX, 50);
    assert.equal(image.positionY, 44);
  }
});
