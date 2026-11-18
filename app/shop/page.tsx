import type { Metadata } from "next";
import { products } from "../products/product-data";
import { DirectoryNav } from "../directory-nav";

export const metadata: Metadata = {
  title: "SHOP / METADHONE AND METADATA — GAGAGAGAGAGAGA",
  description: "Browse METADHONE AND METADATA, including I Hate Napoli and Touch Grass V1 and V2.",
};

const productOrder = ["i-hate-napoli", "i-hate-napoli-v2", "i-love-my-feed", "witches-saints-algorithms", "touch-grass", "touch-grass-v2", "spleen-aholic"] as const;

export default function ShopPage() {
  return (
    <main className="directory shop-index">
      <DirectoryNav current="shop" />
      <section className="directory-section directory-shop" aria-labelledby="shop-title">
        <header className="directory-section-head">
          <p>SHOP / METADHONE AND METADATA / DROP 001</p>
          <h1 id="shop-title">WEAR THE<br />ARGUMENT.</h1>
        </header>
        <div className="directory-list directory-product-list">
          {productOrder.map((slug) => {
            const product = products[slug];
            return (
              <a className="directory-row directory-product-row" href={`/products/${product.slug}`} key={product.slug}>
                <span>{product.number}</span>
                <strong>{product.title}</strong>
                <em>{product.tagline}</em>
                <img src={product.mainImage} alt={product.mainAlt} loading="lazy" />
              </a>
            );
          })}
        </div>
      </section>
      <footer className="directory-footer">
        <span>GAGAGAGAGAGAGA / 2026</span>
        <a href="/index">SHOP OR READ /</a>
      </footer>
    </main>
  );
}
