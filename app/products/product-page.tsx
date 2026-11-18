/* eslint-disable @next/next/no-html-link-for-pages -- full reload is intentional so the homepage timeline reinitialises */
import type { Product } from "./product-data";

export default function ProductPage({ product }: { product: Product }) {
  return (
    <main className="product-detail">
      <nav className="product-nav" aria-label="Product navigation">
        <a href="/">GAGAGAGAGAGAGA</a>
        <span className="product-nav-links">
          <a href="/articles">ARTICLES</a>
          <a href="/shop">SHOP / COLLECTION</a>
        </span>
      </nav>

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

      <figure className="product-main-figure">
        <img src={product.mainImage} alt={product.mainAlt} />
        <figcaption>{product.mainCaption ?? "CONCEPT MOCKUP / INTERNAL STUDY"}</figcaption>
      </figure>

      <section className="product-language-grid" aria-label="Bilingual product description">
        <article className="product-copy product-copy-it" lang="it">
          <span>IT / IL PRODOTTO</span>
          <h2>{product.itHeading}</h2>
          <p>{product.itProduct}</p>
          <span>IT / PERCHÉ ESISTE</span>
          <p>{product.itWhy}</p>
        </article>

        <article className="product-copy product-copy-en" lang="en">
          <span>EN / THE PRODUCT</span>
          <h2>{product.enHeading}</h2>
          <p>{product.enProduct}</p>
          <span>EN / WHY IT EXISTS</span>
          <p>{product.enWhy}</p>
        </article>
      </section>

      <dl className="product-specs">
        <div><dt>GARMENT</dt><dd>{product.garment}</dd></div>
        <div><dt>INK</dt><dd>{product.ink}</dd></div>
        <div><dt>PROCESS</dt><dd>{product.print}</dd></div>
        <div className="product-size"><dt>MISURE / SIZE</dt><dd>{product.printSize}<small className="product-size-note">Larghezza × altezza / Width × height<br />{product.printSizeNote}</small></dd></div>
        <div><dt>STATUS</dt><dd>DESIGN CONFIRMED / PRODUCTION TEST PENDING</dd></div>
      </dl>

      <section className="product-gallery" aria-label="Product process gallery">
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
