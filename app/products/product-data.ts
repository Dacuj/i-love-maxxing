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
    itHeading: "Un souvenir che guasta il souvenir.",
    itProduct: "Johnny Rotten aveva scritto «I HATE» a pennarello su una maglia dei Pink Floyd. Qui l’idea era fare la stessa cosa con Napoli, ma con una I enorme da libro antico. Le lettere sono uscite un po’ storte da Stable Diffusion e sono rimaste così.",
    itWhy: "La cosa è che a Napoli ci appartieni pure quando ti fa incazzare. La maglia viene da lì, e dal fastidio per quella Napoli che sembra fatta apposta per il weekend di qualcun altro.",
    enHeading: "A souvenir that spoils the souvenir.",
    enProduct: "Johnny Rotten wrote ‘I HATE’ in marker on a Pink Floyd shirt. The idea was to do the same thing with Naples, with a huge I out of an old book. The letters came out a bit wonky in Stable Diffusion and stayed that way.",
    enWhy: "You still belong to Naples when it pisses you off. That’s where the shirt came from, along with being tired of a Naples that seems made for somebody else’s weekend.",
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
    garment: "BLUE / CREW-NECK T-SHIRT",
    ink: "RED / ONE INK",
    print: "ONE-COLOUR SCREENPRINT",
    itHeading: "Una cartolina con «I HATE» sopra.",
    itProduct: "La Madonna, i delfini, la città. Tutto fa subito Napoli, come una cartolina. Sopra c’è «I HATE», buttato lì come sulla maglia dei Pink Floyd di Johnny Rotten. Nella variante rossa su blu è rimasta solo la scritta, tutta legata come un logo.",
    itWhy: "È una frecciata a «J’Adore Napoli» e all’idea che per sentirti parte della città ti basti metterti il suo marchio addosso. Poi la frecciata vale anche per questa maglia, che alla fine è un altro souvenir di Napoli.",
    enHeading: "A postcard with ‘I HATE’ written on it.",
    enProduct: "The Madonna, the dolphins, the city. It all says Naples straight away, like a postcard. ‘I HATE’ is scrawled over it, like on Johnny Rotten’s Pink Floyd shirt. The red-on-blue version leaves just the words, joined up like a logo.",
    enWhy: "It’s a dig at ‘J’Adore Napoli’ and the idea that you can feel part of the city by wearing its brand. The dig applies to this shirt too, which is another Naples souvenir in the end.",
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
    itHeading: "Al feed, con amore.",
    itProduct: "Parte dalle magliette «I ♥ NY». Al posto della città c’è il feed e al posto del cuore c’è </3, quello spezzato che scrivi in chat. Il verde sul rosso viene dalle scritte del video.",
    itWhy: "Sul feed trovi gente che parla come te, fa le tue stesse battute, ha i tuoi stessi problemi. A un certo punto sembra un posto a cui appartieni. In mezzo c’è un algoritmo che sta contando quanto ti fermi a guardare.",
    enHeading: "To the feed, with love.",
    enProduct: "It starts with the ‘I ♥ NY’ shirt. The city becomes the feed and the heart becomes </3, the broken one you type in a chat. The green on red comes from the words in the video.",
    enWhy: "On the feed you find people who talk like you, make the same jokes and have the same problems. After a while it feels like somewhere you belong. In the middle of it all, an algorithm is counting how long you stop to look.",
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
    itHeading: "Scegli la tua divinità.",
    itProduct: "L’idea era fare una specie di santino inventato. Ci sono una processione, delle capre e una ruota per scegliere. I riferimenti vengono dalle immagini del Sacro Cuore, dalle incisioni sui sabba e dagli affreschi di paese.",
    itWhy: "Misticismo e tecnologia finiscono nello stesso menu. «Pick your deity» suona come una scelta da fare sul telefono. Fa un po’ ridere mettere l’algoritmo accanto ai santi, anche perché ogni giorno apriamo il feed per vedere cosa ha deciso di farci vedere.",
    enHeading: "Pick your deity.",
    enProduct: "The idea was to make a sort of made-up devotional card. There’s a procession, some goats and a wheel for choosing. The references are images of the Sacred Heart, prints of witches’ sabbaths and village frescoes.",
    enWhy: "Mysticism and technology end up in the same menu. ‘Pick your deity’ sounds like a choice you make on your phone. Putting the algorithm next to the saints is funny, partly because we open our feeds every day to see what it’s decided to show us.",
    gallery: [
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
    itHeading: "Pure la malinconia ha la sua nicchia.",
    itProduct: "Lo spleen viene da Baudelaire, da Lo spleen di Parigi. Su una delle prime grafiche c’era proprio la sua faccia. Qui è rimasta la parola con «aholic» appiccicato alla fine, come se fosse una dipendenza da mettere in bio.",
    itWhy: "La battuta è che pure quando ti annoi e non hai niente da dire puoi farci una nicchia su TikTok. Dai un nome alla cosa, trovi gli altri che stanno uguale e a un certo punto è diventata la tua personalità.",
    enHeading: "Even melancholy has its own niche.",
    enProduct: "The spleen comes from Baudelaire’s Paris Spleen. One of the early designs had his face right there. This one keeps the word with ‘aholic’ stuck on the end, like an addiction you’d put in your bio.",
    enWhy: "The joke is that even when you’re bored and have nothing to say, you can make a TikTok niche out of it. Give it a name, find people who feel the same, and at some point it’s become your personality.",
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
