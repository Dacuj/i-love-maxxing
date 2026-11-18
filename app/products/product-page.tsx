/* eslint-disable @next/next/no-html-link-for-pages -- full reload is intentional so the homepage timeline reinitialises */
import type { Product } from "./product-data";

export default function ProductPage({ product }: { product: Product }) {
  const cover = (
    <figure className="product-main-figure">
      <img src={product.mainImage} alt={product.mainAlt} fetchPriority={product.coverFirst ? "high" : undefined} />
      <figcaption>{product.mainCaption ?? "CONCEPT MOCKUP / INTERNAL STUDY"}</figcaption>
    </figure>
  );

  return (
    <main className={product.coverFirst ? "product-detail product-detail-cover-first" : "product-detail"}>
      <nav className="product-nav" aria-label="Product navigation">
        <a href="/">GAGAGAGAGAGAGA</a>
        <span className="product-nav-links">
          <a href="/articles">ARTICLES</a>
          <a href="/shop">SHOP / COLLECTION</a>
        </span>
      </nav>

      {product.coverFirst && cover}

      <header className="product-detail-head">
        <p>DROP 001 / {product.number}</p>
        <h1>{product.title}</h1>
        <p>{product.tagline}</p>
      </header>

      {product.compareWith && (
        <a className="product-version-link" href={`/products/${product.compareWith.slug}`}>
          COMPARE WITH {product.compareWith.title} /
        </a>
      )}

      {!product.coverFirst && cover}

      <section className="product-language-grid" aria-label="The idea behind the graphic / L’idea dietro la grafica">
        <article className="product-copy product-copy-it" lang="it">
          <span>IT / LA GRAFICA</span>
          <h2>{product.itHeading}</h2>
          <p>{product.itProduct}</p>
          <p>{product.itWhy}</p>
          {product.relatedArticle && (
            <p><a href={product.relatedArticle.href}>Leggi l’articolo «{product.relatedArticle.title}»</a></p>
          )}
        </article>

        <article className="product-copy product-copy-en" lang="en">
          <span>EN / THE GRAPHIC</span>
          <h2>{product.enHeading}</h2>
          <p>{product.enProduct}</p>
          <p>{product.enWhy}</p>
          {product.relatedArticle && (
            <p><a href={product.relatedArticle.href}>Read the article ‘{product.relatedArticle.title}’</a></p>
          )}
        </article>
      </section>

      <section className="product-gallery" aria-label="Artwork and references">
        {product.gallery.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </section>

      <footer className="product-next">
        <span>NEXT ARGUMENT</span>
        <a className="signal-text" href={`/products/${product.nextSlug}`}>{product.nextTitle} /</a>
      </footer>
    </main>
  );
}
