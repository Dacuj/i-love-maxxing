import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Export without redirects; build-pages writes directory index documents.
  trailingSlash: false,
  // All navigation is by full-page links. Keep the router root-relative for
  // Vinext's prerenderer; the Pages build prefixes authored links and media.
  assetPrefix: process.env.PAGES_ASSET_PREFIX || "",
  images: { unoptimized: true },
};

export default nextConfig;
