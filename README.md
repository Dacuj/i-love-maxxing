# I LOVE MAXXING / GAGAGAGA

Collection, visual prologue and editorial archive.

- Website: https://dacuj.github.io/i-love-maxxing/
- Repository: https://github.com/Dacuj/i-love-maxxing

This is the GitHub Pages edition of the site, including its images, designs,
responsive silent videos, synchronized captions, and the green optical intertitle.

## Development

Use Node.js 22.13 or later.

```sh
npm ci
npm run dev
```

## Publishing

Every push to `main` builds, verifies, and deploys the site through GitHub Actions.
The repository's Pages publishing source is **GitHub Actions**.

```sh
npm test
```

The static artifact is `dist/client/`. `scripts/build-pages.mjs` builds an isolated
copy in `.pages-work/` and prefixes authored links and media for `/i-love-maxxing/`.
The source remains root-relative for local development. Use `PAGES_BASE_PATH=''`
for a domain-root export. Navigate using full-page anchors; this static hosting
does not provide a server for React Server Component navigation requests.

## Server-dependent editor

The public home, collection, articles, products and archive are static. The
internal timeline editor still runs at the original hosted site and the Pages
editor route links there. `server-reference/` preserves the Cloudflare API,
database, authentication and editor source for a future server deployment; it is
excluded from the Pages build. No credentials or runtime database are included.

The archive uses its embedded default timeline without calling a missing API.
The legacy product route `what-if-we-kissed-ehm` renders its successor's product.

Original source snapshot: `3257d01a7c5854189d5f0ad20dea6721d05c6b87`.
