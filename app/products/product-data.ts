import type { Metadata } from "next";
import { TOUCH_GRASS_ASSETS } from "../touch-grass-assets";

export type Product = {
  number: string;
  slug: string;
  title: string;
  tagline: string;
  mainImage: string;
  mainAlt: string;
  mainCaption?: string;
  compareWith?: { slug: string; title: string };
  garment: string;
  ink: string;
  print: string;
  printSize: string;
  printSizeNote: string;
  itHeading: string;
  itProduct: string;
  itWhy: string;
  enHeading: string;
  enProduct: string;
  enWhy: string;
  gallery: Array<{ src: string; alt: string; label: string }>;
  nextSlug: string;
  nextTitle: string;
};

export const products: Record<string, Product> = {
  "i-hate-napoli": {
    number: "01 / V1",
    slug: "i-hate-napoli",
    printSize: "20 × 21,1 cm",
    printSizeNote: "Misura del file di stampa / Artwork size",
    title: "I HATE NAPOLI V1",
    tagline: "LOVE WRITTEN AS HATE",
    mainImage: "/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp",
    mainAlt: "Black I Hate Napoli T-shirt on a mannequin, with an ivory interlaced initial and irregular Gothic lettering",
    mainCaption: "AI MOCKUP / OFFICIAL DESIGN / NOT A PHYSICAL PROTOTYPE",
    compareWith: { slug: "i-hate-napoli-v2", title: "I HATE NAPOLI V2" },
    garment: "BLACK / REGULAR FIT T-SHIRT",
    ink: "IVORY / ONE INK",
    print: "ONE-COLOUR SCREENPRINT",
    itHeading: "Amare Napoli senza trasformarla in un souvenir.",
    itProduct: "T-shirt nera con stampa avorio a un solo colore. Una I intrecciata dentro una cornice antica apre la frase; hate Napoli prosegue in lettere gotiche irregolari, con un fregio annodato sotto. Il passaggio in Stable Diffusion 1.5 deforma lettere e intrecci. La prima variante è diventata il disegno ufficiale, convertito in tracciati per la serigrafia senza riscrivere le lettere. Il mockup mostra l’applicazione prevista; la prova fisica è ancora da realizzare.",
    itWhy: "Il punto di partenza è la maglia dei Pink Floyd interrotta a pennarello da Johnny Rotten: non un nuovo logo, ma un’immagine esistente resa instabile. Qui il gesto parla della turistificazione di Napoli e del diritto locale di amare una città senza doverla idealizzare o venderla come scenografia.",
    enHeading: "Love Naples without turning it into a souvenir.",
    enProduct: "A black T-shirt with a single ivory print. An interlaced I inside an antique frame opens the phrase; hate Napoli follows in irregular Gothic letters, above a knotted flourish. A pass through Stable Diffusion 1.5 distorts the letters and interlacing. The first variant became the official design, traced for screenprinting without retyping the lettering. The mockup shows the intended application; the physical print test is still to come.",
    enWhy: "The starting point is Johnny Rotten interrupting a Pink Floyd shirt with a marker: not a new logo, but an existing image made unstable. Here the gesture addresses the touristification of Naples and a local right to love a city without idealising or packaging it as scenery.",
    gallery: [
      { src: "/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp", alt: "AI mannequin mockup with the approved ivory I Hate Napoli interlaced design", label: "OFFICIAL DESIGN / AI MOCKUP" },
      { src: "/collection-001/designs/01-i-hate-napoli-official-08-monochrome.svg", alt: "Approved I Hate Napoli SD1.5 lettering with an interlaced initial and knotted frame, in one ink", label: "OFFICIAL ARTWORK / ONE INK" },
      { src: "/collection-001/research-assets/n1-pink-floyd-shirt-user-closeup.png", alt: "Close-up of a worn Pink Floyd shirt with I HATE handwritten above the print", label: "CASE STUDY / DIY INTERRUPTION" },
    ],
    nextSlug: "i-hate-napoli-v2",
    nextTitle: "I HATE NAPOLI V2",
  },
  "i-hate-napoli-v2": {
    number: "01 / V2",
    slug: "i-hate-napoli-v2",
    printSize: "28 × 15,34 cm",
    printSizeNote: "Misura proposta del nuovo ricalco / Proposed size of the new trace",
    title: "I HATE NAPOLI V2",
    tagline: "THE SOUVENIR, INTERRUPTED",
    mainImage: "/collection-001/mockups/01-i-hate-napoli-red-on-blue-20261004.jpg",
    mainAlt: "I Hate Napoli blue crew-neck T-shirt with red lettering on two lines",
    mainCaption: "V2 / RED ON BLUE / CONCEPT MOCKUP",
    compareWith: { slug: "i-hate-napoli", title: "I HATE NAPOLI V1" },
    garment: "BLUE / CREW-NECK T-SHIRT",
    ink: "RED / ONE INK",
    print: "ONE-COLOUR SCREENPRINT",
    itHeading: "L’amore per una città, scritto come un rifiuto.",
    itProduct: "La nuova V2 è una maglia blu con lettering rosso su due righe: i hate sopra, napoli sotto. Le lettere si allungano e si intrecciano, senza il collage della versione precedente. Il mockup fornito mostra la nuova direzione. La misura proposta per la stampa è 28 × 15,34 cm; la prova fisica è ancora da realizzare.",
    itWhy: "Il riferimento resta il gesto di Johnny Rotten sulla maglia dei Pink Floyd: dichiarare un rifiuto dentro un’immagine d’appartenenza. Qui amare Napoli significa anche opporsi alla sua riduzione a souvenir e scenografia. La versione rossa su blu porta questa contraddizione direttamente nelle parole.",
    enHeading: "Love for a city, written as refusal.",
    enProduct: "The new V2 is a blue T-shirt with red lettering on two lines: i hate above, napoli below. The letters stretch and interlace, replacing the previous collage. The supplied mockup shows the new direction. The proposed print size is 28 × 15.34 cm; a physical print test is still to come.",
    enWhy: "The reference remains Johnny Rotten’s gesture on a Pink Floyd shirt: declaring refusal within an image of belonging. Here loving Naples also means opposing its reduction to a souvenir or backdrop. The red-on-blue version puts that contradiction directly into the words.",
    gallery: [
      { src: "/collection-001/mockups/01-i-hate-napoli-red-on-blue-20261004.jpg", alt: "Supplied I Hate Napoli mockup, red lettering on a blue shirt", label: "CURRENT VERSION / RED ON BLUE" },
      { src: "/collection-001/designs/01-i-hate-napoli-red-on-blue-20261004.svg", alt: "Red I hate napoli lettering traced from the supplied mockup", label: "CURRENT LETTERING / ONE INK" },
      { src: "/collection-001/mockups/01-i-hate-napoli-v2-raglan-stars-cover.png", alt: "Previous cream raglan T-shirt with blue star sleeves and the black Napoli collage", label: "PREVIOUS VERSION / COLLAGE" },
      { src: "/collection-001/designs/01-i-hate-napoli-v2-cartolina-artwork.png", alt: "Previous Napoli collage with a crowned Madonna, dolphins and city architecture", label: "PREVIOUS ARTWORK / COLLAGE" },
      { src: "/collection-001/research-assets/n1-pink-floyd-shirt-user-closeup.png", alt: "Pink Floyd T-shirt with I HATE handwritten above the original print", label: "REFERENCE / THE HANDWRITTEN INTERRUPTION" },
    ],
    nextSlug: "i-love-my-feed",
    nextTitle: "I LOVE MY FEED",
  },
  "i-love-my-feed": {
    number: "02",
    slug: "i-love-my-feed",
    printSize: "Da definire",
    printSizeNote: "Nuova proposta tipografica / New typographic concept",
    title: "I LOVE MY FEED",
    tagline: "THE FEED AS LOVER",
    mainImage: "/landing/i-love-my-feed-photo-v3.webp",
    mainAlt: "Street model in sunglasses wearing a red T-shirt with green I </3 MY FEED serif lettering on one line",
    mainCaption: "PHOTOREALISTIC CONCEPT MOCKUP / GREEN ON RED",
    garment: "RED / CREW-NECK T-SHIRT",
    ink: "GREEN / ONE INK",
    print: "SINGLE-COLOUR LETTERING / SCREENPRINT",
    itHeading: "Una relazione intima con qualcosa che ci misura.",
    itProduct: "Nuova proposta: maglia rossa e scritta verde I </3 MY FEED in maiuscole serif, su un’unica riga. Il contrasto riprende la schermata rossa e verde del prologo; il mockup fotografico mostra la direzione grafica.",
    itWhy: "Il feed ricorda cosa tocchiamo, quanto restiamo e quando usciamo. La previsione può sembrare comprensione, ma l’intimità diventa difficile da distinguere dalla misurazione. I LOVE MY FEED usa il linguaggio di una dichiarazione d’amore per raccontare questa relazione.",
    enHeading: "An intimate relationship with something that measures us.",
    enProduct: "New concept: a red T-shirt with green I </3 MY FEED serif capitals on one line. The colour pairing comes from the red and green prologue frame; this photographic mockup shows the graphic direction.",
    enWhy: "The feed remembers what we touch, how long we stay and when we leave. Prediction can resemble understanding, until intimacy becomes difficult to distinguish from measurement. I LOVE MY FEED uses the language of a love declaration to describe this relationship.",
    gallery: [
      { src: "/landing/i-love-my-feed-photo-v3.webp", alt: "Street model in sunglasses wearing the new red I </3 My Feed shirt", label: "NEW SHIRT / PHOTOGRAPHIC MOCKUP" },
      { src: "/landing/i-love-my-feed-noe.svg", alt: "Green serif I </3 MY FEED lettering on a red T-shirt", label: "NEW CONCEPT / GREEN ON RED" },
      { src: "/collection-001/mockups/ILOVEMYFEEDFINALE.png", alt: "Previous green shirt with red i <3 my feed lettering", label: "PREVIOUS VERSION / RED ON GREEN" },
      { src: "/collection-001/designs/02-i-love-my-feed-pixel-artwork.png", alt: "Standalone dotted clown artwork from the previous I love my feed version", label: "PREVIOUS ARTWORK / DOTTED CLOWN" },
      { src: "/assets/meme-spiritually-advanced.webp", alt: "Spirituality beginner versus spirituality advanced meme", label: "MEME STUDY / THE INTERFACE BECOMES A RITUAL" },
    ],
    nextSlug: "witches-saints-algorithms",
    nextTitle: "WITCHES SAINTS ALGORITHMS",
  },
  "witches-saints-algorithms": {
    number: "07",
    slug: "witches-saints-algorithms",
    printSize: "28 × 37,3 cm",
    printSizeNote: "Misura proposta A3 · file attuale 18 × 24 cm / Proposed A3 size",
    title: "WITCHES SAINTS ALGORITHMS",
    tagline: "PICK YOUR DEITY",
    mainImage: "/collection-001/mockups/07-witches-saints-algorithms-real.png",
    mainAlt: "A real orange Witches Saints Algorithms T-shirt worn outdoors",
    mainCaption: "REAL PROTOTYPE / ONE-COLOUR PRINT TEST",
    garment: "ORANGE / REGULAR FIT / REAL PROTOTYPE",
    ink: "CHARCOAL BLACK / ONE INK",
    print: "SD1.5 FAILED OCR + SCREENPRINT",
    itHeading: "Scegli la divinità a cui affidare la prossima decisione.",
    itProduct: "T-shirt arancione a un colore costruita come un santino impossibile. La frase occupa il centro; due affreschi rurali raccontano sopra e sotto la stessa mitologia inventata. Streghe, santi, capre e una ruota di selezione vengono ridotti a masse nere abbondanti, pensate per la serigrafia e già verificate su un prototipo fisico.",
    itWhy: "Magia, religione e tecnologia promettono tutte di organizzare forze che non vediamo. Cambiano il rituale e l’interfaccia, ma resta la voglia di consegnare a qualcosa di esterno la scelta successiva. PICK YOUR DEITY trasforma questa equivalenza in un comando da meme: non stabilisce quale sistema sia vero, chiede soltanto quale abbiamo deciso di venerare.",
    enHeading: "Choose the deity trusted with your next decision.",
    enProduct: "A one-colour orange T-shirt built like an impossible devotional card. The phrase occupies the centre while two rural frescoes narrate the same invented mythology above and below it. Witches, saints, goats and a selection wheel are reduced to dense black deposits designed for screenprinting and already tested on a physical prototype.",
    enWhy: "Magic, religion and technology all promise to organise forces we cannot see. The ritual and interface change, while the desire to outsource the next choice remains. PICK YOUR DEITY turns that equivalence into a meme command: it does not decide which system is true, only asks which one we have agreed to worship.",
    gallery: [
      { src: "/collection-001/mockups/07-witches-saints-algorithms-real.png", alt: "Real orange Witches Saints Algorithms shirt", label: "REAL PROTOTYPE / WORN APPLICATION" },
      { src: "/collection-001/mockups/07-witches-saints-algorithms-artwork.png", alt: "Selected one-colour Witches Saints Algorithms artwork", label: "SELECTED ONE-COLOUR SEPARATION" },
      { src: "/collection-001/mockups/07-witches-saints-algorithms-process.png", alt: "Original rural procession fresco developed for the upper register", label: "PROCESS / INVENTED RURAL FRESCO" },
    ],
    nextSlug: "touch-grass",
    nextTitle: "TOUCH GRASS V1",
  },
  "touch-grass": {
    number: "08 / V1",
    slug: "touch-grass",
    printSize: "18 × 18 cm",
    printSizeNote: "Misura del file di stampa / Artwork size",
    title: "TOUCH GRASS V1",
    tagline: "THE ORIGINAL IMAGE",
    mainImage: "/collection-001/mockups/08-touch-grass-v1-cover.jpg",
    mainAlt: "Touch Grass V1 purple shirt with a rectangular pink hand photograph and title underneath",
    mainCaption: "V1 / ORIGINAL ARTWORK / WORN APPLICATION",
    compareWith: { slug: "touch-grass-v2", title: "TOUCH GRASS V2" },
    garment: "PURPLE OR BLACK / REGULAR FIT",
    ink: "PINK OR OFF-WHITE / ONE INK",
    print: "PHOTO HALFTONE / SCREENPRINT STUDY",
    itHeading: "Un comando digitale che chiede un gesto fisico.",
    itProduct: "La prima versione di TOUCH GRASS: una mano nell’erba, dentro un riquadro fotografico, con la scritta sotto. Il retino conserva il contrasto e la povertà dell’immagine originale. Questa proposta resta disponibile accanto alla V2 per confrontare le due direzioni prima della scelta definitiva.",
    itWhy: "Touch grass è insieme insulto, consiglio e contraddizione: circola online per dirci di uscire da online. Attraverso la memestetica di Valentina Tanni, l’immagine degradata riceve un corpo e torna nello spazio fisico senza perdere l’immediatezza collettiva del meme.",
    enHeading: "A digital command asking for a physical gesture.",
    enProduct: "The first TOUCH GRASS version: a hand in grass, inside a photographic rectangle, with the title underneath. The halftone keeps the contrast and roughness of the original image. This proposal remains alongside V2 so both directions can be compared before the final choice.",
    enWhy: "Touch grass is insult, advice and contradiction at once: it circulates online to tell us to leave online. Through Valentina Tanni’s memestetica, the degraded image receives a body and returns to physical space without losing the meme’s collective immediacy.",
    gallery: [
      { src: "/collection-001/mockups/08-touch-grass-v1-hanger.jpg", alt: "Touch Grass V1 black shirt with the original white rectangular photograph and title underneath", label: "V1 / ORIGINAL GARMENT MOCKUP" },
      { src: "/collection-001/mockups/08-touch-grass-meme-below.jpg", alt: "Touch Grass print applied to a seated person’s back against a green background", label: "MEME APPLICATION / THE IMAGE LEAVES THE SHIRT" },
      { src: "/collection-001/research-assets/t1-memestetica.jpg", alt: "Memestetica by Valentina Tanni", label: "REFERENCE / MEMESTETICA" },
    ],
    nextSlug: "touch-grass-v2",
    nextTitle: "TOUCH GRASS V2",
  },
  "touch-grass-v2": {
    number: "08 / V2",
    slug: "touch-grass-v2",
    printSize: "25 × 26,6 cm circa",
    printSizeNote: "Misura proposta · da confermare prima della stampa / Proposed size",
    title: "TOUCH GRASS V2",
    tagline: "THE MEME LEAVES THE SCREEN",
    mainImage: TOUCH_GRASS_ASSETS.cover,
    mainAlt: "Photo-based mockup of the purple Touch Grass shirt with the new fuchsia print",
    mainCaption: "V2 / PHOTO-BASED MOCKUP / NOT A PHYSICAL PROTOTYPE",
    compareWith: { slug: "touch-grass", title: "TOUCH GRASS V1" },
    garment: "PURPLE OR BLACK / REGULAR FIT",
    ink: "FUCHSIA / ONE INK",
    print: "PHOTO-BASED ARTWORK / SCREENPRINT STUDY",
    itHeading: "Un comando digitale che chiede un gesto fisico.",
    itProduct: "Una fotografia vera di una mano nell’erba, lavorata in Affinity fino a diventare un intreccio di contorni fucsia. TOUCH GRASS sta sopra; sotto, il gesto perde il suo riquadro e resta una traccia ruvida sul tessuto. Una sola tinta, senza sfumature. Le immagini mostrano mockup della nuova grafica: la prova fisica di serigrafia è ancora da realizzare.",
    itWhy: "Touch grass è insieme insulto, consiglio e contraddizione: circola online per dirci di uscire da online. Attraverso la memestetica di Valentina Tanni, l’immagine degradata non viene nobilitata. Riceve un corpo, conserva l’immediatezza collettiva del meme e torna nello spazio fisico.",
    enHeading: "A digital command asking for a physical gesture.",
    enProduct: "A real photograph of a hand in grass, processed in Affinity into a tangle of fuchsia contours. TOUCH GRASS sits above; below, the gesture loses its rectangular frame and becomes a rough trace on fabric. One ink, no gradients. The images are mockups of the new artwork; the physical screenprint test is still to come.",
    enWhy: "Touch grass is insult, advice and contradiction at once: it circulates online to tell us to leave online. Through Valentina Tanni’s memestetica, the degraded image is not elevated into respectability. It receives a body, keeps the meme’s collective immediacy and returns to physical space.",
    gallery: [
      { src: TOUCH_GRASS_ASSETS.hanger, alt: "Photo-based mockup of the black Touch Grass shirt with the new fuchsia print", label: "NEW ARTWORK / PHOTO-BASED MOCKUP" },
      { src: "/collection-001/mockups/08-touch-grass-meme-below.jpg", alt: "Touch Grass print applied to a seated person’s back against a green background", label: "MEME APPLICATION / THE IMAGE LEAVES THE SHIRT" },
      { src: "/collection-001/research-assets/t1-memestetica.jpg", alt: "Memestetica by Valentina Tanni", label: "REFERENCE / MEMESTETICA" },
    ],
    nextSlug: "spleen-aholic",
    nextTitle: "SPLEEN AHOLIC",
  },
  "spleen-aholic": {
    number: "09",
    slug: "spleen-aholic",
    printSize: "Da definire",
    printSizeNote: "Nuova proposta tipografica / New typographic concept",
    title: "SPLEEN AHOLIC",
    tagline: "MELANCHOLY AS A HABIT",
    mainImage: "/landing/spleen-aholic-photo.webp",
    mainAlt: "Street model holding pizza and wearing a green T-shirt with blue SPLEEN AHOLIC serif lettering",
    mainCaption: "PHOTOREALISTIC CONCEPT MOCKUP / BLUE ON GREEN",
    garment: "GREEN CREW-NECK / GREY LONG-SLEEVE LAYER",
    ink: "BLUE / ONE INK",
    print: "SCREENPRINT / ONE INK",
    itHeading: "La tua noia esistenziale ha finalmente un nome.",
    itProduct: "Nuova proposta: maglia verde e scritta blu SPLEEN AHOLIC in maiuscole serif, su due righe. Il contrasto riprende la schermata verde e blu del prologo; il mockup fotografico generato mostra la direzione grafica.",
    itWhy: "Forse, in fondo, tutto questo è ormai diventato una parte importante del tuo carattere e hai soltanto bisogno di dargli un nuovo nome, così da poter iniziare anche tu a postare TikTok sulla tua nuova nicchia. Eccoti: alcolizzato dello spleen. Sei uno SPLEEN-AHOLIC.",
    enHeading: "Your existential boredom finally has a name.",
    enProduct: "New concept: a green T-shirt with blue SPLEEN AHOLIC serif capitals on two lines. The colour pairing comes from the green and blue prologue frame; this generated photographic mockup shows the graphic direction.",
    enWhy: "Perhaps all of this has already become an important part of your personality and you only need to give it a new name, so you too can start posting TikToks about your new niche. Here you are: spleen-drunk and fully addicted. You are a SPLEEN-AHOLIC.",
    gallery: [
      { src: "/landing/spleen-aholic-photo.webp", alt: "Supplied street model holding pizza and wearing the new green Spleen Aholic shirt", label: "NEW SHIRT / PHOTOGRAPHIC MOCKUP" },
      { src: "/landing/spleen-aholic-noe.svg", alt: "New blue serif SPLEEN AHOLIC lettering on a green T-shirt", label: "NEW CONCEPT / BLUE ON GREEN" },
      { src: "/collection-001/mockups/09-spleen-aholic-mockup.png", alt: "Previous acid-lime Spleen Aholic shirt with Baudelaire artwork", label: "PREVIOUS VERSION / BAUDELAIRE" },
      { src: "/collection-001/designs/09-spleen-aholic-b-baudelaire-preview.png", alt: "Official Spleen Aholic B artwork with the Baudelaire portrait and open highlights", label: "OFFICIAL ARTWORK B / BAUDELAIRE" },
      { src: "/assets/lo-spleen-di-parigi-book.jpg", alt: "Vintage cover of Charles Baudelaire’s Le Spleen de Paris", label: "REFERENCE / CHARLES BAUDELAIRE, LE SPLEEN DE PARIS / INTERNAL MOODBOARD" },
    ],
    nextSlug: "i-hate-napoli",
    nextTitle: "I HATE NAPOLI",
  },
};

export function productMetadata(product: Product): Metadata {
  const description = product.enHeading + " " + product.enProduct;
  return {
    title: `${product.title} — GAGAGAGAGAGAGA`,
    description,
    openGraph: { title: product.title, description, images: [] },
    twitter: { title: product.title, description, images: [] },
  };
}
