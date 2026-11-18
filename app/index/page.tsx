/* eslint-disable @next/next/no-html-link-for-pages -- full reload keeps the homepage timeline isolated */
import type { Metadata } from "next";
import { products } from "../products/product-data";
import { ArticleList } from "../articles/article-list";
import { DirectoryNav } from "../directory-nav";

export const metadata: Metadata = {
  title: "SHOP OR READ — GAGAGAGAGAGAGA",
  description: "Choose the short route into the METADHONE AND METADATA collection or the GAGAGAGAGAGAGA editorial archive.",
  openGraph: { title: "SHOP OR READ", description: "The direct index to METADHONE AND METADATA and the editorial archive.", images: [] },
  twitter: { title: "SHOP OR READ", description: "The direct index to METADHONE AND METADATA and the editorial archive.", images: [] },
};

const productOrder = [
  "i-hate-napoli", "i-hate-napoli-v2",
  "i-love-my-feed",
  "witches-saints-algorithms",
  "touch-grass",
  "touch-grass-v2",
  "spleen-aholic",
] as const;

export default function IndexPage() {
  const orderedProducts = productOrder.map((slug) => products[slug]);

  return (
    <main className="directory">
      <DirectoryNav />

      <header className="directory-choice" aria-labelledby="directory-title">
        <p className="directory-kicker">NO SCROLLING RITUAL REQUIRED / CHOOSE A SHORTCUT</p>
        <h1 id="directory-title">WHAT ARE<br />YOU HERE FOR?</h1>
        <div className="directory-gates">
          <a className="directory-gate directory-gate-shop" href="/shop">
            <span>01 / THINGS TO WEAR</span>
            <strong>SHOP</strong>
            <em>SEVEN PROPOSALS / I HATE NAPOLI + TOUCH GRASS V1 / V2 /</em>
          </a>
          <a className="directory-gate directory-gate-read" href="/articles">
            <span>02 / THINGS TO READ</span>
            <strong>READ</strong>
            <em>ARTICLES + INTERVIEWS /</em>
          </a>
        </div>
      </header>

      <section className="directory-section directory-shop" id="shop" aria-labelledby="shop-title">
        <header className="directory-section-head">
          <p>SHOP / METADHONE AND METADATA / DROP 001</p>
          <h2 id="shop-title">WEAR THE<br />ARGUMENT.</h2>
        </header>
        <div className="directory-list directory-product-list">
          {orderedProducts.map((product) => (
            <a className="directory-row directory-product-row" href={`/products/${product.slug}`} key={product.slug}>
              <span>{product.number}</span>
              <strong>{product.title}</strong>
              <em>{product.tagline}</em>
              <img src={product.mainImage} alt={product.mainAlt} />
            </a>
          ))}
        </div>
      </section>

      <section className="directory-section directory-read" id="read" aria-labelledby="read-title">
        <header className="directory-section-head">
          <p>READ / ARTICLES + INTERVIEWS</p>
          <h2 id="read-title">WORDS THAT<br />REFUSE TO<br />BE CAPTIONS.</h2>
        </header>
        <ArticleList />
      </section>

      <footer className="directory-footer">
        <span>GAGAGAGAGAGAGA / 2026</span>
        <a href="/">BACK TO THE PROLOGUE /</a>
      </footer>
    </main>
  );
}
