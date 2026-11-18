export type TimelineImage = {
  id: string;
  src: string;
  alt: string;
  duration: number;
  positionX: number;
  positionY: number;
};

export type TimelineScene = {
  id: string;
  enTitle: string;
  itTitle: string;
  en: string;
  it: string;
  caption: string;
  duration: number;
  images: TimelineImage[];
  palette: [string, string, string, string, string, string, string];
  black: boolean;
};

export const DEFAULT_TIMELINE: TimelineScene[] = [
  {
    id: "love-logo",
    enTitle: "01 / LOVE AS A LOGO",
    itTitle: "01 / L'AMORE COME LOGO",
    en: "Love became a logo before it became a button. A city, a heart and a souvenir reduced belonging to a form that could travel without us.",
    it: "L'amore è diventato un logo prima di diventare un pulsante. Una città, un cuore e un souvenir hanno ridotto l'appartenenza a una forma capace di viaggiare senza di noi.",
    caption: "CASE STUDY / FROM CIVIC LOVE TO REPRODUCIBLE SIGN",
    duration: 1,
    images: [
      { id: "love-logo-1", src: "/assets/milton-glaser-iloveny.jpg", alt: "Milton Glaser presenting the I Love New York shirt", duration: 1, positionX: 50, positionY: 50 },
      { id: "love-logo-2", src: "/img/hatejadore.jpeg", alt: "A handmade J'adore shirt altered with a red strike", duration: 1, positionX: 62, positionY: 45 },
      { id: "love-logo-3", src: "/collection-001/research-assets/n1-johnny-rotten-shirt.jpg", alt: "Johnny Rotten wearing a modified Pink Floyd shirt", duration: 1, positionX: 42, positionY: 58 },
    ],
    palette: ["#00ed36", "#151cff", "#050505", "#80ff00", "#151cff", "#ff3210", "#00ed36"],
    black: false,
  },
  {
    id: "love-hate",
    enTitle: "02 / LOVE WRITTEN AS HATE",
    itTitle: "02 / L'AMORE SCRITTO COME ODIO",
    en: "Johnny Rotten did not design a new image. He interrupted an existing one. The marker made affection unstable, local and impossible to sell as passive admiration.",
    it: "Johnny Rotten non ha disegnato una nuova immagine. Ne ha interrotta una esistente. Il pennarello ha reso l'affetto instabile, locale e impossibile da vendere come ammirazione passiva.",
    caption: "DESIGN DECISION / INTERRUPTION OVER ADORATION",
    duration: 1,
    images: [
      { id: "love-hate-1", src: "/collection-001/research-assets/n1-johnny-rotten-shirt.jpg", alt: "Johnny Rotten wearing an I Hate Pink Floyd modification", duration: 1, positionX: 50, positionY: 50 },
      { id: "love-hate-2", src: "/collection-001/research-assets/p2-ear-scribble.jpg", alt: "A found photograph obscured by bright digital marks", duration: 1, positionX: 62, positionY: 45 },
    ],
    palette: ["#ff2100", "#00d638", "#111111", "#ff5ca8", "#00d638", "#1716ef", "#ff2100"],
    black: true,
  },
  {
    id: "city-product",
    enTitle: "03 / A CITY BECOMES A PRODUCT",
    itTitle: "03 / UNA CITTÀ DIVENTA PRODOTTO",
    en: "I HATE NAPOLI is not a rejection of the city. It is a local demand to love Naples without turning daily life into scenery, accommodation or a souvenir for someone else's weekend.",
    it: "I HATE NAPOLI non rifiuta la città. È la richiesta locale di amare Napoli senza trasformare la vita quotidiana in scenografia, alloggio o souvenir per il weekend di qualcun altro.",
    caption: "LOCAL POSITION / LOVE WITHOUT IDEALISATION",
    duration: 1,
    images: [
      { id: "city-product-1", src: "/collection-001/research-assets/n2-naples-airbnb-map.jpg", alt: "Research map of tourism-driven displacement in Naples", duration: 1, positionX: 50, positionY: 50 },
      { id: "city-product-2", src: "/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp", alt: "I Hate Napoli official one-colour design, AI mannequin mockup", duration: 1, positionX: 50, positionY: 44 },
      { id: "city-product-3", src: "/collection-001/research-assets/p5-fern-concrete-crack.jpg", alt: "Fern emerging through a concrete crack", duration: 1, positionX: 42, positionY: 58 },
    ],
    palette: ["#ff6a00", "#3f16ff", "#2b00ff", "#ffef00", "#ffef00", "#df1700", "#ff6a00"],
    black: false,
  },
  {
    id: "feed-loves-back",
    enTitle: "04 / THE FEED LOVES BACK",
    itTitle: "04 / IL FEED RICAMBIA",
    en: "The feed remembers what we touch, how long we look and when we leave. Prediction begins to resemble intimacy. Being understood becomes difficult to distinguish from being measured.",
    it: "Il feed ricorda cosa tocchiamo, quanto guardiamo e quando usciamo. La previsione comincia a somigliare all'intimità. Essere compresi diventa difficile da distinguere dall'essere misurati.",
    caption: "ALGORITHMIC LOVE / PREDICTION IS NOT UNDERSTANDING",
    duration: 1,
    images: [
      { id: "feed-loves-back-1", src: "/collection-001/research-assets/a2-demetricator.png", alt: "Facebook interface altered by Demetricator", duration: 1, positionX: 50, positionY: 50 },
      { id: "feed-loves-back-2", src: "/assets/meme-spiritually-advanced.webp", alt: "Spirituality beginner versus spirituality advanced meme", duration: 1, positionX: 50, positionY: 50 },
      { id: "feed-loves-back-3", src: "/collection-001/mockups/02-i-love-my-feed-real.png", alt: "Black I love my feed T-shirt with dotted pixel artwork", duration: 1, positionX: 42, positionY: 58 },
    ],
    palette: ["#ff2b97", "#001cff", "#00c8ff", "#ff2200", "#b8ff00", "#4224ff", "#ff2b97"],
    black: false,
  },
  {
    id: "liquid-bonds",
    enTitle: "05 / LIQUID BONDS, INFINITE ALTERNATIVES",
    itTitle: "05 / LEGAMI LIQUIDI, ALTERNATIVE INFINITE",
    en: "What if we kissed before selection ends? Ehm and like are human delays inside a sentence ruled by ranking. Hesitation becomes a refusal to optimise desire.",
    it: "E se ci baciassimo prima che finisca la selezione? Ehm e like sono ritardi umani dentro una frase governata dal ranking. L'esitazione diventa un rifiuto di ottimizzare il desiderio.",
    caption: "DISCARDED CERTAINTY / THE HUMAN STUTTER REMAINS",
    duration: 1,
    images: [
      { id: "liquid-bonds-1", src: "/collection-001/research-assets/a1-liquid-love-cover.jpg", alt: "Zygmunt Bauman Liquid Love book cover", duration: 1, positionX: 50, positionY: 50 },
      { id: "liquid-bonds-2", src: "/collection-001/research-assets/w1-tiat-meme.png", alt: "What if we kissed meme used as a case study", duration: 1, positionX: 62, positionY: 45 },
      { id: "liquid-bonds-3", src: "/collection-001/mockups/07-a-confirmed-fitted.jpg", alt: "What if we kissed ehm shirt concept mockup", duration: 1, positionX: 42, positionY: 58 },
    ],
    palette: ["#7b2cff", "#ffef00", "#050505", "#ff3f9e", "#ff6b00", "#1024ff", "#7b2cff"],
    black: false,
  },
  {
    id: "meme-screen",
    enTitle: "06 / THE MEME LEAVES THE SCREEN",
    itTitle: "06 / IL MEME ESCE DALLO SCHERMO",
    en: "Touch grass is an insult, advice and contradiction. A physical command circulated mainly by people who are still online. Screenprinting gives the poor image a body without making it respectable.",
    it: "Touch grass è insulto, consiglio e contraddizione. Un comando fisico diffuso soprattutto da persone ancora online. La serigrafia dà un corpo all'immagine povera senza renderla rispettabile.",
    caption: "MEMESTETICA / FROM SCREENSHOT TO SCREENPRINT",
    duration: 1,
    images: [
      { id: "meme-screen-1", src: "/collection-001/research-assets/t2-touch-grass-meme.png", alt: "The Touch Grass meme used as conceptual reference", duration: 1, positionX: 50, positionY: 50 },
      { id: "meme-screen-2", src: "/collection-001/research-assets/t1-memestetica.jpg", alt: "Memestetica by Valentina Tanni", duration: 1, positionX: 62, positionY: 45 },
      { id: "meme-screen-3", src: "/touchgrass/touch-grass-nero-trasparente-1400.jpg", alt: "Official one-colour Touch Grass artwork", duration: 1, positionX: 42, positionY: 58 },
      { id: "meme-screen-4", src: "/collection-001/mockups/08-a-official-mockup.jpg", alt: "Official Touch Grass shirt mockup", duration: 1, positionX: 50, positionY: 50 },
    ],
    palette: ["#a8ff00", "#1524ff", "#ff2100", "#00ff65", "#1524ff", "#ff5ab1", "#a8ff00"],
    black: false,
  },
  {
    id: "spiral-refresh",
    enTitle: "07 / THE SPIRAL DOES NOT REFRESH",
    itTitle: "07 / LA SPIRALE NON FA REFRESH",
    en: "A feed replaces. A spiral returns. A plant needs only one crack in the stone. Boredom is not failed productivity; it is attention escaping the shortest route.",
    it: "Un feed sostituisce. Una spirale ritorna. A una pianta basta una crepa nella pietra. La noia non è produttività fallita; è l'attenzione che sfugge al percorso più breve.",
    caption: "THE STOLEN PAUSE / A CRACK IS ENOUGH",
    duration: 1,
    images: [
      { id: "spiral-refresh-1", src: "/collection-001/research-assets/p3-fiddlehead-double-spiral.jpg", alt: "Double fiddlehead fern forming a spiral", duration: 1, positionX: 50, positionY: 50 },
      { id: "spiral-refresh-2", src: "/collection-001/research-assets/p4-fiddlehead-green-spiral.jpg", alt: "Green fiddlehead fern spiral", duration: 1, positionX: 62, positionY: 45 },
      { id: "spiral-refresh-3", src: "/collection-001/research-assets/p5-fern-concrete-crack.jpg", alt: "Fern emerging from cracked concrete", duration: 1, positionX: 42, positionY: 58 },
      { id: "spiral-refresh-4", src: "/collection-001/research-assets/p6-plant-stone-crack.jpg", alt: "Small plant growing from a seam in stone", duration: 1, positionX: 50, positionY: 50 },
    ],
    palette: ["#050505", "#9cff00", "#050505", "#ff3100", "#101dff", "#ffef00", "#9cff00"],
    black: true,
  },
  {
    id: "sacred-technical",
    enTitle: "08 / SACRED IMAGE, TECHNICAL IMAGE",
    itTitle: "08 / IMMAGINE SACRA, IMMAGINE TECNICA",
    en: "Witches, saints and algorithms all organise invisible forces into images. The difference is not belief versus technology, but who controls the ritual, the interface and the consequences.",
    it: "Streghe, santi e algoritmi organizzano forze invisibili dentro immagini. La differenza non è fede contro tecnologia, ma chi controlla il rituale, l'interfaccia e le conseguenze.",
    caption: "JESUS AND TECHNOLOGY / WHO OWNS THE RITUAL?",
    duration: 1,
    images: [
      { id: "sacred-technical-1", src: "/assets/witches-sabbath.jpg", alt: "Hans Baldung Grien Witches' Sabbath woodcut, 1510", duration: 1, positionX: 50, positionY: 50 },
      { id: "sacred-technical-2", src: "/assets/sacred-heart-engraving.jpg", alt: "Christ presenting the Sacred Heart engraving", duration: 1, positionX: 62, positionY: 45 },
      { id: "sacred-technical-3", src: "/assets/fiera-malvagia.jpg", alt: "A hybrid beast in the style of a popular historical print", duration: 1, positionX: 42, positionY: 58 },
    ],
    palette: ["#ff1900", "#00d540", "#00d540", "#151cff", "#151cff", "#ff401e", "#ff1900"],
    black: false,
  },
  {
    id: "no-index",
    enTitle: "09 / NO INDEX",
    itTitle: "09 / NESSUN INDICE",
    en: "The collection does not solve the systems it criticises. It puts their language on the body, where metrics become awkward, local and visible to whoever happens to pass nearby.",
    it: "La collezione non risolve i sistemi che critica. Porta il loro linguaggio sul corpo, dove le metriche diventano scomode, locali e visibili a chi capita di passare vicino.",
    caption: "FINAL OUTCOME / FOUR ONE-COLOUR ARGUMENTS",
    duration: 1,
    images: [
      { id: "no-index-1", src: "/collection-001/research-assets/p1-sketchbook-spiral.jpg", alt: "Sheep collage marked by a blue spiral from the user's sketchbook board", duration: 1, positionX: 50, positionY: 50 },
      { id: "no-index-2", src: "/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp", alt: "I Hate Napoli official one-colour design, AI mannequin mockup", duration: 1, positionX: 50, positionY: 44 },
      { id: "no-index-3", src: "/collection-001/mockups/08-a-official-mockup.jpg", alt: "Touch Grass official mockup", duration: 1, positionX: 42, positionY: 58 },
    ],
    palette: ["#050505", "#ffef00", "#050505", "#9cff00", "#050505", "#ff355e", "#050505"],
    black: true,
  },
];
