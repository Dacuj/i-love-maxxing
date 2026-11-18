import { access, stat } from "node:fs/promises";
import { constants } from "node:fs";

const requiredAssets = [
  "public/collection-001/mockups/01-i-hate-napoli-red-on-blue-20261004.jpg",
  "public/collection-001/designs/01-i-hate-napoli-red-on-blue-20261004.svg",
  "public/collection-001/mockups/ILOVEMYFEEDFINALE.png",
  "public/collection-001/designs/I-LOVE-MY-FEED-FINALE.svg",
  "public/collection-001/mockups/01-i-hate-napoli-v2-raglan-stars-cover.png",
  "public/collection-001/mockups/01-i-hate-napoli-v2-cartolina-a3-25x30.png",
  "public/collection-001/designs/01-i-hate-napoli-v2-cartolina-artwork.png",
  "public/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp",
  "public/collection-001/designs/01-i-hate-napoli-official-08-monochrome.svg",
  "public/collection-001/designs/01-i-hate-napoli-official-08-positivo-nero-200mm.svg",
  "public/collection-001/research-assets/n1-pink-floyd-shirt-user-closeup.png",
  "public/collection-001/mockups/02-i-love-my-feed-real.png",
  "public/collection-001/designs/02-i-love-my-feed-pixel-artwork.png",
  "public/collection-001/mockups/07-witches-saints-algorithms-real.png",
  "public/collection-001/mockups/07-witches-saints-algorithms-artwork.png",
  "public/collection-001/mockups/07-witches-saints-algorithms-process.png",
  "public/collection-001/mockups/08-touch-grass-affinity-cover.webp",
  "public/collection-001/mockups/08-touch-grass-cover-real.jpg",
  "public/collection-001/mockups/08-a-official-mockup.jpg",
  "public/collection-001/mockups/08-touch-grass-v1-cover.jpg",
  "public/collection-001/mockups/08-touch-grass-v1-hanger.jpg",
  "public/collection-001/mockups/08-touch-grass-affinity-hanger.webp",
  "public/collection-001/designs/08-touch-grass-affinity-artwork.png",
  "public/collection-001/mockups/09-spleen-aholic-mockup.png",
  "public/collection-001/designs/09-spleen-aholic-acid-preview.png",
  "public/assets/lo-spleen-di-parigi-book.jpg",
];

const missing = [];

for (const path of requiredAssets) {
  try {
    await access(path, constants.R_OK);
    const file = await stat(path);
    if (!file.isFile() || file.size === 0) missing.push(path);
  } catch {
    missing.push(path);
  }
}

if (missing.length > 0) {
  console.error("Missing required product assets:");
  for (const path of missing) console.error(`- ${path}`);
  process.exit(1);
}

console.log("Required product assets verified.");
