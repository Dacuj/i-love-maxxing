export const TOUCH_GRASS_ASSETS = {
  cover: "/collection-001/mockups/08-touch-grass-affinity-cover.webp",
  hanger: "/collection-001/mockups/08-touch-grass-affinity-hanger.webp",
  artwork: "/collection-001/designs/08-touch-grass-affinity-artwork.png",
} as const;

// Exact legacy paths only: uploaded/replaced images and timing stay untouched.
// Explicit -v1- assets belong to the comparison product and must never remap.
export const TOUCH_GRASS_ASSET_UPDATES: Record<string, { src: string; alt: string }> = {
  "/collection-001/mockups/08-touch-grass-cover-real.jpg": {
    src: TOUCH_GRASS_ASSETS.cover,
    alt: "Photo-based mockup of the purple Touch Grass shirt with the new fuchsia print",
  },
  "/collection-001/mockups/08-a-official-mockup.jpg": {
    src: TOUCH_GRASS_ASSETS.hanger,
    alt: "Photo-based mockup of the black Touch Grass shirt with fuchsia hand and grass contours",
  },
  "/touchgrass/touch-grass-nero-trasparente-1400.jpg": {
    src: TOUCH_GRASS_ASSETS.artwork,
    alt: "Touch Grass artwork developed in Affinity from a photograph, with fuchsia etched contours",
  },
};
