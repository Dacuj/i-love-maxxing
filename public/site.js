(async function () {
  "use strict";

  var defaultsNode = document.getElementById("timeline-default-data");
  var scenes = [];
  var approvedAssetUpdates = {};

  try {
    var updatesNode = document.getElementById("approved-asset-updates");
    approvedAssetUpdates = JSON.parse(updatesNode ? updatesNode.textContent || "{}" : "{}");
  } catch {
    approvedAssetUpdates = {};
  }

  try {
    scenes = JSON.parse(defaultsNode ? defaultsNode.textContent || "[]" : "[]");
  } catch {
    scenes = [];
  }

  try {
    var response = await fetch("/api/timeline", { cache: "no-store" });
    if (response.ok) {
      var saved = await response.json();
      if (Array.isArray(saved.timeline) && saved.timeline.length) scenes = saved.timeline;
    }
  } catch {
    // Embedded defaults keep the essay usable when persistence is unavailable.
  }

  if (!scenes.length) return;

  function number(value, fallback, minimum) {
    var parsed = Number(value);
    return Number.isFinite(parsed) ? Math.max(minimum, parsed) : fallback;
  }

  function normaliseImage(image, index) {
    if (Array.isArray(image)) {
      return normaliseImage({
        id: "legacy-" + index,
        src: image[0] || "",
        alt: image[1] || "Timeline image",
        duration: 1,
        positionX: 50,
        positionY: 50
      }, index);
    }
    var source = image.src || "";
    var approvedAsset = approvedAssetUpdates[source];
    if (approvedAsset) {
      image = Object.assign({}, image, approvedAsset);
      source = image.src;
    }
    var legacyDataDetox = source.indexOf("a4-data-detox.png") !== -1;
    // Display the official artwork without rewriting the user's saved timeline.
    // IDs, text, durations, positions and scene order remain untouched.
    var legacyNapoli = source === "/collection-001/mockups/01-i-hate-napoli-acid-real-v2.png" || source === "/collection-001/mockups/01-i-hate-napoli-official-07-manichino.webp";
    return {
      id: image.id || "image-" + index,
      src: legacyDataDetox ? "/assets/meme-spiritually-advanced.webp" : (legacyNapoli ? "/collection-001/mockups/01-i-hate-napoli-official-08-sd15-manichino.webp" : source),
      alt: legacyDataDetox ? "Spirituality beginner versus spirituality advanced meme" : (legacyNapoli ? "I Hate Napoli official interlaced one-colour design, AI mannequin mockup" : (image.alt || "Timeline image")),
      duration: number(image.duration, 1, .1),
      positionX: Math.min(100, number(image.positionX, 50, 0)),
      positionY: Math.min(100, number(image.positionY, 50, 0))
    };
  }

  scenes = scenes.map(function (scene, sceneIndex) {
    return {
      id: scene.id || "scene-" + sceneIndex,
      enTitle: scene.enTitle || "",
      itTitle: scene.itTitle || "",
      en: scene.en || "",
      it: scene.it || "",
      caption: scene.caption || "",
      duration: number(scene.duration, 1, .5),
      images: Array.isArray(scene.images) ? scene.images.map(normaliseImage) : [],
      palette: Array.isArray(scene.palette) && scene.palette.length === 7
        ? scene.palette
        : ["#ff2100", "#00d638", "#050505", "#ff5ca8", "#00d638", "#1716ef", "#ff2100"],
      black: scene.black !== false
    };
  });

  var root = document.documentElement;
  var story = document.querySelector(".story");
  var triptych = document.querySelector(".triptych");
  var stepsContainer = document.getElementById("timeline-steps");
  var visualStack = document.getElementById("visual-stack");
  var caption = document.getElementById("story-caption");
  var chapterEn = document.getElementById("chapter-en");
  var chapterIt = document.getElementById("chapter-it");
  var copyEn = document.getElementById("copy-en");
  var copyIt = document.getElementById("copy-it");
  var active = -1;
  var activeImage = -1;

  if (!story || !triptych || !stepsContainer || !visualStack || !caption || !chapterEn || !chapterIt || !copyEn || !copyIt) return;

  function buildSteps() {
    stepsContainer.innerHTML = "";
    scenes.forEach(function (scene, index) {
      var step = document.createElement("div");
      step.className = "step";
      step.dataset.scene = String(index);
      step.style.minHeight = (scene.duration * 100) + "svh";
      stepsContainer.appendChild(step);
    });
  }

  function storyScrollUnit() {
    var firstStep = stepsContainer.firstElementChild;
    var firstDuration = scenes[0] ? scenes[0].duration : 1;
    if (firstStep && firstDuration > 0) {
      return firstStep.getBoundingClientRect().height / firstDuration;
    }
    return document.documentElement.clientHeight || window.innerHeight;
  }

  function mixHex(from, to, amount) {
    var a = String(from || "#000000").replace("#", "").padEnd(6, "0").slice(0, 6);
    var b = String(to || "#000000").replace("#", "").padEnd(6, "0").slice(0, 6);
    var ar = parseInt(a.slice(0, 2), 16);
    var ag = parseInt(a.slice(2, 4), 16);
    var ab = parseInt(a.slice(4, 6), 16);
    var br = parseInt(b.slice(0, 2), 16);
    var bg = parseInt(b.slice(2, 4), 16);
    var bb = parseInt(b.slice(4, 6), 16);
    function part(start, end) {
      return Math.round(start + (end - start) * amount).toString(16).padStart(2, "0");
    }
    return "#" + part(ar, br) + part(ag, bg) + part(ab, bb);
  }

  function applyPalette(index, progress) {
    var from = scenes[index].palette;
    var to = scenes[Math.min(index + 1, scenes.length - 1)].palette;
    var eased = progress * progress * (3 - 2 * progress);
    var properties = ["--left-bg", "--left-ink", "--center-bg", "--center-ink", "--right-bg", "--right-ink", "--image-tint"];
    properties.forEach(function (property, paletteIndex) {
      root.style.setProperty(property, mixHex(from[paletteIndex], to[paletteIndex], eased));
    });
  }

  function escapeText(value) {
    var span = document.createElement("span");
    span.textContent = value;
    return span.innerHTML;
  }

  function words(node, sentence) {
    node.innerHTML = String(sentence || "").split(/\s+/).filter(Boolean).map(function (word) {
      return '<span class="word">' + escapeText(word) + "</span>";
    }).join(" ");
  }

  function fitCopy(node) {
    var panel = node.closest(".copy-panel");
    if (!panel) return;
    var chapter = panel.querySelector(".chapter");
    var counter = panel.querySelector(".counter");
    var panelStyle = window.getComputedStyle(panel);
    var rowGap = parseFloat(panelStyle.rowGap) || 0;
    var available = panel.clientHeight
      - parseFloat(panelStyle.paddingTop)
      - parseFloat(panelStyle.paddingBottom)
      - chapter.offsetHeight
      - counter.offsetHeight
      - rowGap * 2;
    var compact = window.innerWidth <= 720;
    var minimum = compact ? 12 : 20;
    var maximum = compact ? 34 : 82;

    node.style.fontSize = maximum + "px";
    var size = maximum;
    while (node.scrollHeight > available && size > minimum) {
      size -= .5;
      node.style.fontSize = size + "px";
    }
  }

  function fitCopies() {
    fitCopy(copyEn);
    fitCopy(copyIt);
  }

  function renderImages(scene) {
    visualStack.innerHTML = "";
    scene.images.forEach(function (item, index) {
      if (!item.src) return;
      var img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = index === 0 ? "eager" : "lazy";
      img.style.objectPosition = item.positionX + "% " + item.positionY + "%";
      visualStack.appendChild(img);
    });
    activeImage = -1;
    setImage(0);
  }

  function setImage(index) {
    var images = visualStack.querySelectorAll("img");
    if (!images.length || index === activeImage) return;
    activeImage = Math.max(0, Math.min(images.length - 1, index));
    images.forEach(function (img, imageIndex) {
      img.classList.toggle("active", imageIndex === activeImage);
    });
  }

  function imageIndexAtProgress(scene, progress) {
    var visible = scene.images.filter(function (image) { return Boolean(image.src); });
    if (!visible.length) return 0;
    var total = visible.reduce(function (sum, image) { return sum + image.duration; }, 0);
    var cursor = Math.min(total - .0001, Math.max(0, progress) * total);
    var elapsed = 0;
    for (var index = 0; index < visible.length; index += 1) {
      elapsed += visible[index].duration;
      if (cursor < elapsed) return index;
    }
    return visible.length - 1;
  }

  function setScene(index) {
    if (index === active) return;
    active = index;
    var scene = scenes[index];
    triptych.classList.toggle("center-black", scene.black);
    chapterEn.textContent = scene.enTitle;
    chapterIt.textContent = scene.itTitle;
    words(copyEn, scene.en);
    words(copyIt, scene.it);
    caption.textContent = scene.caption;
    renderImages(scene);
    window.requestAnimationFrame(fitCopies);
  }

  function reveal(node, amount) {
    var spans = node.querySelectorAll(".word");
    var count = Math.ceil(spans.length * amount);
    spans.forEach(function (span, index) {
      span.classList.toggle("revealed", index < count);
    });
  }

  function sceneAtUnit(unit) {
    var elapsed = 0;
    for (var index = 0; index < scenes.length; index += 1) {
      var duration = scenes[index].duration;
      if (unit < elapsed + duration || index === scenes.length - 1) {
        return {
          index: index,
          progress: Math.max(0, Math.min(1, (unit - elapsed) / duration))
        };
      }
      elapsed += duration;
    }
    return { index: scenes.length - 1, progress: 1 };
  }

  function update() {
    var storyTop = story.getBoundingClientRect().top + window.pageYOffset;
    var scrolledInside = Math.max(0, window.pageYOffset - storyTop);
    var sceneHeight = storyScrollUnit();
    var location = sceneAtUnit(scrolledInside / Math.max(1, sceneHeight));

    setScene(location.index);
    applyPalette(location.index, location.progress);
    var readingProgress = Math.max(0, Math.min(1, (location.progress - .04) / .84));
    reveal(copyEn, readingProgress);
    reveal(copyIt, readingProgress);
    setImage(imageIndexAtProgress(scenes[location.index], location.progress));
  }

  var framePending = false;
  var lastViewportWidth = window.innerWidth;

  function storyIntersectsViewport() {
    var rect = story.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight;
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(function () {
      framePending = false;
      update();
    });
  }

  function resizeLayout() {
    var widthChanged = Math.abs(window.innerWidth - lastViewportWidth) > 1;
    lastViewportWidth = window.innerWidth;
    if (!widthChanged && !storyIntersectsViewport()) return;
    update();
    window.requestAnimationFrame(fitCopies);
  }

  buildSteps();
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", resizeLayout, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", resizeLayout, { passive: true });
  }
  setScene(0);
  update();
  window.requestAnimationFrame(fitCopies);
})();
