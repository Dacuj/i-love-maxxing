/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element -- trial page preserves the existing home markup */
import type { Metadata } from "next";
import { ArticleList } from "../articles/article-list";
import { napoliCollageCover } from "../products/product-data";
import { PrologueVideo } from "./prologue-video";
import { PhosphorGrain } from "./phosphor-grain";
import styles from "./prologue-video.module.css";

export const metadata: Metadata = {
  title: "PROLOGUE — METADHONE AND METADATA",
  description: "A prologue for a disconnected youth. An alternative home opening with the silent film.",
  robots: { index: false, follow: false },
};

export default function VideoHome() {
  return (
    <>
      <header className={styles.navigation}>
        <a href="/" aria-label="GAGAGAGAGAGAGA home">GAGAGAGAGAGAGA</a>
        <nav aria-label="Primary navigation">
          <a href="/articles">ARTICLES /</a>
          <a href="#collection">COLLECTION /</a>
        </nav>
      </header>
      <main>
        <PrologueVideo />

        <section id="green-screen" className={styles.greenScreen} aria-label="Intertitle">
          <PhosphorGrain className={styles.screenGrain} />
          <div className={styles.screenReflection} aria-hidden="true" />
          <img
            className={styles.screenArtwork}
            src="/landing/prologue-intertitle.png"
            alt=""
            width={1182}
            height={709}
            decoding="async"
          />
        </section>

        <section className={`directory-choice ${styles.directoryContinuation}`} aria-labelledby="directory-title">
          <p className="directory-kicker">NO SCROLLING RITUAL REQUIRED / CHOOSE A SHORTCUT</p>
          <h1 id="directory-title">WHAT ARE<br />YOU HERE FOR?</h1>
          <div className="directory-gates">
            <a className="directory-gate directory-gate-shop" href="/shop">
              <span>01 / THINGS TO WEAR</span>
              <strong>SHOP</strong>
              <em>COLLECTION / 001</em>
            </a>
            <a className="directory-gate directory-gate-read" href="/articles">
              <span>02 / THINGS TO READ</span>
              <strong>READ</strong>
              <em>ARTICLES + INTERVIEWS /</em>
            </a>
          </div>
        </section>

        <section className={`collection ${styles.collectionPreview}`} id="collection" aria-labelledby="collection-title">
          <h2 className={styles.collectionTitle} id="collection-title">COLLECTION / 001</h2>

          <div className="products">
            <article className="product">
              <a href="/products/witches-saints-algorithms">
                <img src="/collection-001/mockups/07-witches-saints-algorithms-real.png" alt="Witches Saints Algorithms orange T-shirt worn by a model" />
                <span><b>07</b> WITCHES SAINTS ALGORITHMS</span>
                <span>PICK YOUR DEITY /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/i-hate-napoli-v2">
                <img {...napoliCollageCover} />
                <span><b>01 / V2</b> I HATE NAPOLI V2</span>
                <span>THE SOUVENIR, INTERRUPTED /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/i-love-my-feed">
                <img src="/landing/i-love-my-feed-photo-v3.webp" alt="Street model in sunglasses wearing a red T-shirt with green I &lt;/3 MY FEED serif lettering on one line" />
                <span><b>02</b> I LOVE MY FEED</span>
                <span>THE FEED AS LOVER /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/spleen-aholic">
                <img src="/landing/spleen-aholic-photo.webp" alt="Street model holding pizza and wearing a green T-shirt with blue SPLEEN AHOLIC serif lettering" />
                <span><b>09</b> SPLEEN AHOLIC</span>
                <span>MELANCHOLY AS A HABIT /</span>
              </a>
            </article>
          </div>

          <section className="editorial-index" id="editorial" aria-labelledby="editorial-title">
            <header className="editorial-index-head">
              <p>THE DESK / INTERVIEWS + ARTICLES</p>
              <h2 id="editorial-title">WORDS FROM<br />INSIDE THE<br />ARGUMENT.</h2>
            </header>

            <ArticleList homeCover />
            <a className="editorial-all" href="/articles">ALL ARTICLES + INTERVIEWS /</a>
          </section>

          <section className="web-banners" aria-labelledby="web-banners-title">
            <header className="web-banners-head">
              <p>RELATED SIGNAL / FULL-WIDTH INTERNET EPHEMERA</p>
              <h2 id="web-banners-title">ONE TAB<br />WE REFUSE<br />TO CLOSE.</h2>
            </header>

            <a className="web-banner banner-spleen" href="#story" aria-label="Spleen: the right to remain unproductive">
              <img
                className="web-poster-image"
                src="/assets/spleen-poster-sd15-v3-subtitle.jpg"
                alt="Stable Diffusion Spleen poster with the subtitle: ne pas perdre sa vie à la gagner."
              />
            </a>

            <a className="web-banner banner-algorithmic" href="#story" aria-label="Algorithmic resistance">
              <img
                className="web-poster-image"
                src="/assets/algorithmic-resistance-v11-abstract-1920.png"
                alt="Abstract generative poster about algorithmic resistance, built from imperfect machine-made letterforms."
              />
            </a>
          </section>

          <div className={styles.handwrittenBridge}>
            <img
              src="/assets/pas-de-chance-handwritten.png"
              alt="PAS DE CHANCE — original handwritten lettering"
              width="992"
              height="209"
            />
          </div>

          <footer className="study-note">
            <p>SECOND CUT / INTERNAL PROTOTYPE</p>
            <p>Historical, editorial and Pinterest imagery appears here as research material. Pinterest and editorial references are not cleared for commercial publication and must be replaced or licensed before launch.</p>
            <p>Public-domain/CC references: Hans Baldung Grien, <i>Witches&apos; Sabbath</i>, 1510; Francesco Rosaspina, <i>Christ presenting the Sacred Heart</i>, Wellcome Collection. I LOVE NY editorial image: Los Angeles Times, internal study only.</p>
          </footer>
        </section>
      </main>
    </>
  );
}
