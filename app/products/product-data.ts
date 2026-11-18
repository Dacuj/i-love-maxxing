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
  coverFirst?: boolean;
  compareWith?: { slug: string; title: string };
  relatedArticle?: { href: string; title: string };
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

export const napoliCollageCover = {
  src: "/collection-001/mockups/01-i-hate-napoli-v2-raglan-stars-cover.png",
  alt: "Cream I Hate Napoli shirt with blue star sleeves and a black postcard collage",
};

const napoliArticle = {
  href: "/articles/jaccuse-jadore-napoli",
  title: "J’accuse J’Adore Napoli",
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
    relatedArticle: napoliArticle,
    garment: "BLACK / REGULAR FIT T-SHIRT",
    ink: "IVORY / ONE INK",
    print: "ONE-COLOUR SCREENPRINT",
    itHeading: "Come sulla maglia dei Pink Floyd.",
    itProduct: "Johnny Rotten scrisse «I HATE» a pennarello sulla maglia dei Pink Floyd. Qui riprendiamo quel gesto con Napoli.",
    itWhy: "È una risposta a «J’Adore Napoli» e al modo in cui il marchio, anche attraverso gli artisti con cui collabora, racconta la città.",
    enHeading: "Like on the Pink Floyd shirt.",
    enProduct: "Johnny Rotten wrote ‘I HATE’ in marker on a Pink Floyd shirt. Here we’re doing the same thing with Naples.",
    enWhy: "It’s a response to ‘J’Adore Napoli’ and the way the brand tells the story of the city, including through the artists it works with.",
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
    mainImage: napoliCollageCover.src,
    mainAlt: napoliCollageCover.alt,
    mainCaption: "POSTCARD COLLAGE / MOCKUP",
    coverFirst: true,
    compareWith: { slug: "i-hate-napoli", title: "I HATE NAPOLI V1" },
    relatedArticle: napoliArticle,
    garment: "BLUE / CREW-NECK T-SHIRT",
    ink: "RED / ONE INK",
    print: "ONE-COLOUR SCREENPRINT",
    itHeading: "Una cartolina con «I HATE» sopra.",
    itProduct: "Johnny Rotten scrisse «I HATE» a pennarello sulla maglia dei Pink Floyd. Qui lo scriviamo sopra una cartolina di Napoli.",
    itWhy: "È una risposta a «J’Adore Napoli» e al modo in cui il marchio, anche attraverso gli artisti con cui collabora, racconta la città.",
    enHeading: "A postcard with ‘I HATE’ written on it.",
    enProduct: "Johnny Rotten wrote ‘I HATE’ in marker on a Pink Floyd shirt. Here we write it across a postcard from Naples.",
    enWhy: "It’s a response to ‘J’Adore Napoli’ and the way the brand tells the story of the city, including through the artists it works with.",
    gallery: [
      { src: "/collection-001/designs/01-i-hate-napoli-v2-cartolina-artwork.png", alt: "Napoli collage with a crowned Madonna, dolphins and city architecture", label: "THE POSTCARD COLLAGE" },
      { src: "/collection-001/mockups/01-i-hate-napoli-red-on-blue-20261004.jpg", alt: "I Hate Napoli mockup with red lettering on a blue shirt", label: "LETTERING VARIANT / RED ON BLUE" },
      { src: "/collection-001/designs/01-i-hate-napoli-red-on-blue-20261004.svg", alt: "Red I hate napoli lettering", label: "THE LETTERING" },
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
    itHeading: "Una maglietta da turista.",
    itProduct: "Una presa in giro delle classiche magliette turistiche «I LOVE NY». Al posto della città c’è il feed, col cuore spezzato scritto come in chat.",
    itWhy: "L’idea è ironizzare su quanto siamo attaccati ai nostri profili digitali e su quanto, a loro volta, influenzano quello che guardiamo e come ci vediamo.",
    enHeading: "A tourist T-shirt.",
    enProduct: "A take on the classic ‘I LOVE NY’ tourist shirts. The feed takes the city’s place, with the broken heart you’d type in a chat.",
    enWhy: "It pokes fun at how attached we are to our digital profiles and how much they shape what we look at and how we see ourselves.",
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
    mainCaption: "WITCHES, SAINTS, ALGORITHMS",
    garment: "ORANGE / REGULAR FIT / REAL PROTOTYPE",
    ink: "CHARCOAL BLACK / ONE INK",
    print: "SD1.5 FAILED OCR + SCREENPRINT",
    itHeading: "Dio, i tarocchi o il nostro computer?",
    itProduct: "Non sappiamo più a cosa affidarci quando dobbiamo credere. «Pick your deity» parte da lì, da questo incrocio tra misticismo e tecnologia.",
    itWhy: "I riferimenti sono Mark Fisher con Realismo capitalista, per l’idea che il sistema in cui viviamo ci sembri l’unico possibile, e Valentina Tanni con Memestetica, per le immagini e i meme che ci passiamo in rete.",
    enHeading: "God, tarot cards or our computer?",
    enProduct: "We don’t know what to turn to anymore when we need something to believe in. ‘Pick your deity’ starts there, where mysticism and technology cross.",
    enWhy: "The references are Mark Fisher’s Capitalist Realism, for the idea that the system we live in can seem like the only one possible, and Valentina Tanni’s Memestetica, for the images and memes we pass around online.",
    gallery: [
      { src: "/collection-001/research-assets/t1-memestetica.jpg", alt: "Cover of Memestetica by Valentina Tanni", label: "VALENTINA TANNI / MEMESTETICA · NERO EDITIONS" },
      { src: "/landing/realismo-capitalista-nero.jpg", alt: "Cover of the Italian edition of Realismo capitalista by Mark Fisher", label: "MARK FISHER / REALISMO CAPITALISTA · NERO EDITIONS" },
      { src: "/collection-001/mockups/07-witches-saints-algorithms-artwork.png", alt: "Witches Saints Algorithms artwork with two scenes around the lettering", label: "THE DEVOTIONAL CARD" },
      { src: "/collection-001/mockups/07-witches-saints-algorithms-process.png", alt: "Invented rural procession fresco from the upper part of the design", label: "THE PROCESSION" },
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
    itHeading: "Stacca un attimo.",
    itProduct: "«Touch grass» è quello che scrivi a qualcuno che sta troppo su internet. Qui il consiglio è preso proprio alla lettera. C’è una mano nell’erba, la foto nel riquadro e la scritta sotto, come in un meme.",
    itWhy: "Il riferimento è Memestetica di Valentina Tanni, e il modo in cui i meme cambiano passando di mano in mano. Qui la battuta finisce addosso a qualcuno per strada. Fa ridere perché per dire agli altri di staccare ci ritroviamo ancora lì a commentare.",
    enHeading: "Log off for a minute.",
    enProduct: "‘Touch grass’ is what you type at someone who spends too much time online. Here the advice is taken literally. There’s a hand in the grass, a photo in a box and the words underneath, like a meme.",
    enWhy: "The reference is Valentina Tanni’s Memesthetics and the way memes change as they pass from person to person. Here the joke ends up on someone walking down the street. It’s funny that we’re still in the comments telling everyone else to log off.",
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
    itHeading: "Fuori dal riquadro.",
    itProduct: "Si parte ancora dalla foto della mano nell’erba. Via il riquadro, la scritta va sopra e sotto resta un groviglio fucsia. Per quei contorni quasi incisi il riferimento è la copertina di Who Can Afford to Be Critical?, disegnata da Afonso Matos.",
    itWhy: "Così si vede di più il gesto. Resta la parte assurda della battuta. Ci voleva una frase letta nei commenti per ricordarci una cosa scema come mettere le mani nell’erba.",
    enHeading: "Out of the frame.",
    enProduct: "It starts with the photo of a hand in the grass again. The frame goes, the words move up and there’s a fuchsia tangle underneath. The etched-looking lines come from the cover of Who Can Afford to Be Critical?, designed by Afonso Matos.",
    enWhy: "You see more of the gesture this way. The odd part of the joke is still there. It took a line from the comments to remind us to do something as simple as putting our hands in the grass.",
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
    itHeading: "Lo spleen ai tempi dei computer.",
    itProduct: "Riprende la battuta di internet in cui appiccichi «-holic» a qualunque cosa, tipo «Cocacola-holic». Qui ci finisce lo spleen di Baudelaire.",
    itWhy: "Quella specie di noia e malinconia torna attuale come non mai adesso che passiamo così tanto tempo davanti a un computer.",
    enHeading: "Spleen in the age of computers.",
    enProduct: "It borrows that internet joke where you stick ‘-holic’ on anything, like ‘Cocacola-holic’. Here it’s Baudelaire’s spleen.",
    enWhy: "That mix of boredom and melancholy feels more familiar than ever now that we spend so much time in front of a computer.",
    gallery: [
      { src: "/landing/cocacola-holic.jpg", alt: "Cocacola-holic meme showing someone drinking from a large bottle of cola", label: "COCACOLA-HOLIC / MEME" },
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
