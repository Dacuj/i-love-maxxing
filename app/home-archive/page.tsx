"use client";

import { useEffect } from "react";
import { DEFAULT_TIMELINE } from "../timeline-data";
import { ArticleList } from "../articles/article-list";
import { TOUCH_GRASS_ASSETS, TOUCH_GRASS_ASSET_UPDATES } from "../touch-grass-assets";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/site.js";
    script.async = false;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <>
      <script id="approved-asset-updates" type="application/json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(TOUCH_GRASS_ASSET_UPDATES).replace(/</g, "\\u003c"),
      }} />
      <script
        id="timeline-default-data"
        type="application/json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(DEFAULT_TIMELINE).replace(/</g, "\\u003c"),
        }}
      />
      <header className="project-bar">
        <a href="/" aria-label="GAGAGAGAGAGAGA home">GAGAGAGAGAGAGA</a>
        <span>second cut</span>
        <nav className="project-bar-links" aria-label="Primary navigation">
          <a href="/articles">articles</a>
          <a href="/shop">shop / collection</a>
        </nav>
      </header>

      <main>
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">an internal web study / 2026</p>
          <h1 id="intro-title">METADHONE<br />AND METADATA</h1>
          <p className="intro-it" lang="en">us them and the future</p>
          <div className="intro-routes" aria-label="Choose how to enter the site">
            <a className="enter-index" href="/index">bypass the argument / shop or read /</a>
            <a className="enter-story" href="#story">scroll to interrupt /</a>
          </div>
        </section>

        <section className="story" id="story" aria-label="GAGAGAGAGAGAGA visual essay">
          <div className="triptych" aria-live="polite">
            <article className="panel copy-panel copy-it" lang="it">
              <p className="chapter" id="chapter-it">{DEFAULT_TIMELINE[0].itTitle}</p>
              <p className="copy" id="copy-it">{DEFAULT_TIMELINE[0].it}</p>
              <p className="counter" aria-hidden="true">IT</p>
            </article>

            <figure className="panel visual-panel">
              <div className="visual-frame" id="visual-frame">
                <div className="visual-stack" id="visual-stack">
                  <img src={DEFAULT_TIMELINE[0].images[0].src} alt={DEFAULT_TIMELINE[0].images[0].alt} />
                </div>
                <span className="visual-noise" aria-hidden="true" />
              </div>
              <figcaption id="story-caption">{DEFAULT_TIMELINE[0].caption}</figcaption>
            </figure>

            <article className="panel copy-panel copy-en" lang="en">
              <p className="chapter" id="chapter-en">{DEFAULT_TIMELINE[0].enTitle}</p>
              <p className="copy" id="copy-en">{DEFAULT_TIMELINE[0].en}</p>
              <p className="counter" aria-hidden="true">EN</p>
            </article>
          </div>

          <div className="steps" id="timeline-steps" aria-hidden="true">
            {DEFAULT_TIMELINE.map((scene, index) => (
              <div className="step" data-scene={index} key={scene.id} style={{ minHeight: `${Math.max(.5, scene.duration) * 100}svh` }} />
            ))}
          </div>
        </section>

        <section className="collection" id="collection" aria-labelledby="collection-title">
          <header className="collection-head">
            <p>DROP 001 / SEVEN PROPOSALS / I HATE NAPOLI + TOUCH GRASS V1 / V2</p>
            <h2 className="signal-text" id="collection-title">THE COLLECTION<br />ARRIVES AFTER<br />THE ARGUMENT.</h2>
          </header>

          <div className="products">
            <article className="product">
              <a href="/products/i-hate-napoli">
                <img src="/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp" alt="Black I Hate Napoli T-shirt with ivory interlaced initial and Gothic lettering, AI mannequin mockup" />
                <span><b>01 / V1</b> I HATE NAPOLI V1</span>
                <span>LOVE WRITTEN AS HATE /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/i-hate-napoli-v2">
                <img src="/collection-001/mockups/01-i-hate-napoli-red-on-blue-20261004.jpg" alt="I Hate Napoli blue T-shirt with red lettering on two lines" />
                <span><b>01 / V2</b> I HATE NAPOLI V2</span>
                <span>THE SOUVENIR, INTERRUPTED /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/i-love-my-feed">
                <img src="/collection-001/mockups/ILOVEMYFEEDFINALE.png" alt="Forest-green I love my feed T-shirt with simple red lettering" />
                <span><b>02</b> I &lt;3 MY FEED</span>
                <span>THE FEED AS LOVER /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/witches-saints-algorithms">
                <img src="/collection-001/mockups/07-witches-saints-algorithms-real.png" alt="Witches Saints Algorithms orange T-shirt worn by a model" />
                <span><b>07</b> WITCHES SAINTS ALGORITHMS</span>
                <span>PICK YOUR DEITY /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/touch-grass">
                <img src="/collection-001/mockups/08-touch-grass-v1-cover.jpg" alt="Touch Grass V1 with the original pink rectangular photograph and title underneath" />
                <span><b>08 / V1</b> TOUCH GRASS V1</span>
                <span>THE ORIGINAL IMAGE /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/touch-grass-v2">
                <img src={TOUCH_GRASS_ASSETS.cover} alt="Photo-based mockup of the purple Touch Grass shirt with the new fuchsia print" />
                <span><b>08 / V2</b> TOUCH GRASS V2</span>
                <span>THE MEME LEAVES THE SCREEN /</span>
              </a>
            </article>
            <article className="product">
              <a href="/products/spleen-aholic">
                <img src="/collection-001/mockups/09-spleen-aholic-mockup.png" alt="Spleen Aholic acid-lime T-shirt mockup with the official Baudelaire artwork, photographed at night" />
                <span><b>09</b> SPLEEN AHOLIC</span>
                <span>MELANCHOLY AS A HABIT /</span>
              </a>
            </article>
          </div>

          <section className="editorial-index" id="editorial" aria-labelledby="editorial-title">
            <header className="editorial-index-head">
              <p>THE DESK / INTERVIEWS + ARTICLES</p>
              <h2 className="signal-text" id="editorial-title">WORDS FROM<br />INSIDE THE<br />ARGUMENT.</h2>
            </header>

            <ArticleList />
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
