/* eslint-disable @next/next/no-html-link-for-pages -- full reload is intentional so the homepage timeline reinitialises */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J’accuse J’Adore Napoli — GAGAGAGAGAGAGA",
  description: "A bilingual essay on touristification, fetishised folklore and the right to refuse a postcard version of Naples.",
  openGraph: { title: "J’accuse J’Adore Napoli", description: "A bilingual GAGAGAGAGAGAGA essay.", images: [] },
  twitter: { title: "J’accuse J’Adore Napoli", description: "A bilingual GAGAGAGAGAGAGA essay.", images: [] },
};

export default function JaccuseJadoreNapoliPage() {
  return (
    <main className="editorial-article">
      <nav className="article-nav" aria-label="Article navigation">
        <a href="/">GAGAGAGAGAGAGA</a>
        <div className="product-nav-links">
          <a href="/articles">ARTICLES</a>
          <a href="/shop">SHOP / COLLECTION</a>
        </div>
      </nav>

      <header className="article-hero">
        <div>
          <p>ARTICLE 001 / NAPOLI / IT + EN</p>
          <p>TOURISTIFICATION / IDENTITY / THE CITY AS PRODUCT</p>
        </div>
        <h1>J’ACCUSE<br /><i>J’ADORE</i><br />NAPOLI</h1>
        <p className="article-deck">La città venduta a chi la attraversa, sottratta a chi la abita. / A city sold to those passing through it, taken from those who live there.</p>
      </header>

      <figure className="article-image article-image-crowd">
        <img src="/assets/editorial/jaccuse-jadore-napoli/napoli-crowded-street.jpg" alt="A densely crowded street in Naples" />
        <figcaption>
          PINTEREST RESEARCH IMAGE / SOURCE NOT CLEARED FOR COMMERCIAL USE / <a href="https://it.pinterest.com/pin/415105290681047089/">SOURCE /</a>
        </figcaption>
      </figure>

      <section className="article-pair">
        <article lang="it" className="article-copy article-copy-it">
          <span>01 / IT</span>
          <p>Il centro storico napoletano è ormai un luogo infestato dal proprio passato, come un’antica rovina che contiene dentro sé tutto ciò che era, ciò che resta e ciò che non sarà mai più.</p>
        </article>
        <article lang="en" className="article-copy article-copy-en">
          <span>01 / EN</span>
          <p>Naples’ historic centre is now a place haunted by its own past, like an ancient ruin holding within itself everything that was, everything that remains and everything that will never be again.</p>
        </article>
      </section>

      <section className="article-pair article-pair-wide">
        <article lang="it" className="article-copy article-copy-it">
          <span>02 / IT</span>
          <p>Giammai percorreremo quelle strade senza fantasmi muniti di reflex e di Birkenstock con calzini di spugna, giammai gusteremo una pizza fritta senza almeno 20 minuti di fila e i pizzaioli grondanti sudore per essere la nuova servitù della gleba. Giammai vivremo la tanto decantata <i>vita lenta</i>, ormai anche i parcheggiatori abusivi vanno di fretta. C’è un colpevole per ciò che abbiamo perso?</p>
        </article>
        <article lang="en" className="article-copy article-copy-en">
          <span>02 / EN</span>
          <p>Never again will we walk those streets without ghosts armed with DSLRs and Birkenstocks worn over sports socks. Never again will we eat a fried pizza without at least a twenty-minute queue, while sweating pizzaioli become the new serfs. Never again will we live the much-advertised <i>slow life</i>: even the unofficial parking attendants are in a hurry now. Is there someone to blame for what we have lost?</p>
        </article>
      </section>

      <figure className="article-image article-image-market">
        <img src="/assets/editorial/jaccuse-jadore-napoli/napoli-vicolo-laundry.jpg" alt="A lived-in alley in Naples with laundry hanging above the street" />
        <figcaption>
          THE CITY AS LIVED SPACE / PINTEREST RESEARCH IMAGE / <a href="https://it.pinterest.com/pin/52354414387796140/">SOURCE /</a>
        </figcaption>
      </figure>

      <section className="article-pair article-pair-accuse">
        <article lang="it" className="article-copy article-copy-it">
          <span>03 / IT</span>
          <p><b>J’accuse <i>J’Adore Napoli</i> e tutto ciò che rappresenta.</b></p>
          <p>Avevamo bisogno di qualcuno che narrasse la nostra storia, ma non credevo si trattasse di un <i>brand</i> costruito a tavolino, fatto di magliette ceruleo con <i>Bukkin</i> e grafiche dei Looney Tunes.</p>
        </article>
        <article lang="en" className="article-copy article-copy-en">
          <span>03 / EN</span>
          <p><b>J’accuse <i>J’Adore Napoli</i> and everything it represents.</b></p>
          <p>We needed someone to tell our story. I did not expect it to be a <i>brand</i> engineered around a table, made of cerulean T-shirts reading <i>Bukkin</i> and Looney Tunes graphics.</p>
        </article>
      </section>

      <section className="article-refusals" aria-label="Je refuse statements">
        <header>
          <p>THIS IS NOT WHAT WE WANT.<br />IT IS EVERYTHING WE DENY.</p>
          <p>NON È QUELLO CHE VOGLIAMO.<br />È TUTTO CIÒ CHE NEGHIAMO.</p>
        </header>
        <div className="article-pair">
          <article lang="it" className="article-copy article-copy-it">
            <span>04 / IT</span>
            <p><i>Je refuse</i> la mercificazione dell’identità partenopea.</p>
            <p><i>Je refuse</i> una Napoli da cartolina, commercializzata, vendibile ed invivibile.</p>
            <p><i>Je refuse</i> la bellezza che non narra la complessità.</p>
          </article>
          <article lang="en" className="article-copy article-copy-en">
            <span>04 / EN</span>
            <p><i>Je refuse</i> the commodification of Neapolitan identity.</p>
            <p><i>Je refuse</i> a postcard Naples: commercialised, marketable and unliveable.</p>
            <p><i>Je refuse</i> beauty that refuses to tell complexity.</p>
          </article>
        </div>
        <div className="article-pair">
          <article lang="it" className="article-copy article-copy-it">
            <span>05 / IT</span>
            <p><i>Je refuse</i> trattare la città come un prodotto da consumare modellato sulle aspettative del turista.</p>
            <p><i>Je refuse</i> essere turista della mia città se questo significa essere un parassita.</p>
            <p><i>Je refuse</i> la feticizzazione del folklore.</p>
          </article>
          <article lang="en" className="article-copy article-copy-en">
            <span>05 / EN</span>
            <p><i>Je refuse</i> treating the city as a consumable product moulded around the tourist’s expectations.</p>
            <p><i>Je refuse</i> being a tourist in my own city if that means becoming a parasite.</p>
            <p><i>Je refuse</i> the fetishisation of folklore.</p>
          </article>
        </div>
      </section>

      <figure className="article-image article-image-souvenir">
        <img src="/assets/editorial/jaccuse-jadore-napoli/napoli-souvenir-wall.jpg" alt="Rows of mass-produced souvenirs sold in Naples" />
        <figcaption>
          IDENTITY REPRODUCED BY THE PIECE / PINTEREST RESEARCH IMAGE / <a href="https://it.pinterest.com/pin/607563806005875347/">SOURCE /</a>
        </figcaption>
      </figure>

      <section className="article-pair article-pair-sacrifice">
        <article lang="it" className="article-copy article-copy-it">
          <span>06 / IT</span>
          <p><i>J’Adore Napoli</i> non è raccontare la città a chi non la conosce, ma è offrirla come Ifigenia in Aulide: la vittima è pronta al sacrificio sull’altare del consumo turistico. La tradizione è svenduta come ornamento, non c’è niente di sacro o di eroico in questa operazione.</p>
        </article>
        <article lang="en" className="article-copy article-copy-en">
          <span>06 / EN</span>
          <p><i>J’Adore Napoli</i> is not telling the city to those who do not know it. It is offering Naples up like Iphigenia at Aulis: the victim prepared for sacrifice on the altar of tourist consumption. Tradition is sold off as decoration. There is nothing sacred or heroic in the operation.</p>
        </article>
      </section>

      <figure className="article-image article-image-iphigenia">
        <img src="/assets/editorial/jaccuse-jadore-napoli/iphigenia-sacrifice.gif" alt="Historical illustration of the sacrifice of Iphigenia" />
        <figcaption>
          THE SACRIFICE OF IPHIGENIA / PINTEREST CASE-STUDY IMAGE / <a href="https://it.pinterest.com/pin/130182245473206320/">SOURCE /</a>
        </figcaption>
      </figure>

      <section className="article-pair">
        <article lang="it" className="article-copy article-copy-it">
          <span>07 / IT</span>
          <p>C’è piuttosto un sistema che lucra sulla propria autodistruzione, e lo fa con una lucidità spietata, rivestendola però di un’estetica impeccabile presa in prestito da Dior.</p>
        </article>
        <article lang="en" className="article-copy article-copy-en">
          <span>07 / EN</span>
          <p>What exists instead is a system that profits from its own self-destruction. It does so with ruthless clarity, then dresses the process in an impeccable aesthetic borrowed from Dior.</p>
        </article>
      </section>

      <figure className="article-image article-image-dior">
        <img src="/assets/editorial/jaccuse-jadore-napoli/jadore-dior-user-reference.jpg" alt="J’Adore Dior top photographed by the author" />
        <figcaption>
          J’ADORE DIOR / AUTHOR-SUPPLIED REFERENCE / THE AESTHETIC BEING QUOTED /
        </figcaption>
      </figure>

      <section className="article-pair article-pair-final">
        <article lang="it" className="article-copy article-copy-it">
          <span>08 / IT</span>
          <p>Intanto, tra tarallucci e vino, assistiamo all’ennesimo atto di adorazione, o per meglio dire, di feticizzazione.</p>
          <p>Si venera la bellezza di un panorama svuotato del suo significato, si adora la forma dopo averne consumato l’essenza. Napoli così diviene innocua e perfetta, non più città viva, contraddittoria, popolare, dolorosa e stratificata, bensì il perfetto spot per una compagnia di tour operator alle prime armi.</p>
        </article>
        <article lang="en" className="article-copy article-copy-en">
          <span>08 / EN</span>
          <p>Meanwhile, over tarallucci and wine, we witness yet another act of worship—or, more accurately, fetishisation.</p>
          <p>The beauty of a landscape emptied of meaning is revered; form is adored after its substance has been consumed. Naples becomes harmless and perfect: no longer a living, contradictory, popular, painful and layered city, but the ideal advert for an amateur tour operator.</p>
        </article>
      </section>

      <footer className="article-footer">
        <p>EDITORIAL DRAFT / FIRST WEB VERSION</p>
        <p>The text is part of the GAGAGAGAGAGAGA design study. Pinterest images are temporary visual references, credited above and not cleared for commercial publication. They must be licensed or replaced before a public editorial launch.</p>
        <a href="/shop">RETURN TO THE COLLECTION /</a>
      </footer>
    </main>
  );
}
