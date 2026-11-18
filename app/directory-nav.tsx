/* eslint-disable @next/next/no-html-link-for-pages -- full reload keeps the homepage timeline isolated */
export function DirectoryNav({ current }: { current?: "shop" | "articles" }) {
  return (
    <nav className="directory-nav" aria-label="Primary navigation">
      <a href="/">GAGAGAGAGAGAGA</a>
      <span>THE INDEX</span>
      <div className="directory-links">
        <a href="/articles" aria-current={current === "articles" ? "page" : undefined}>ARTICLES</a>
        <a href="/shop" aria-current={current === "shop" ? "page" : undefined}>SHOP / COLLECTION</a>
      </div>
    </nav>
  );
}
