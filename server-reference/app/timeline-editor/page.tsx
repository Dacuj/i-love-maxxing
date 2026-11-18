"use client";

import { ChangeEvent, DragEvent, useEffect, useMemo, useRef, useState } from "react";
import { DEFAULT_TIMELINE, TimelineImage, TimelineScene } from "../timeline-data";
import { TOUCH_GRASS_ASSET_UPDATES } from "../touch-grass-assets";
import "./timeline-editor.css";

const cloneDefaults = () => migrateLegacyAssets(JSON.parse(JSON.stringify(DEFAULT_TIMELINE)) as TimelineScene[]);

function migrateLegacyAssets(timeline: TimelineScene[]) {
  return timeline.map((scene) => ({
    ...scene,
    images: scene.images.map((image) => image.src.includes("a4-data-detox.png") ? {
      ...image,
      src: "/assets/meme-spiritually-advanced.webp",
      alt: "Spirituality beginner versus spirituality advanced meme",
    } : TOUCH_GRASS_ASSET_UPDATES[image.src] ? { ...image, ...TOUCH_GRASS_ASSET_UPDATES[image.src] } : image),
  }));
}

function uid(prefix: string) {
  return `${prefix}-${crypto.randomUUID()}`;
}

function words(value: string, progress: number) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  const visible = Math.ceil(parts.length * progress);
  return parts.map((word, index) => (
    <span className={index < visible ? "is-visible" : ""} key={`${word}-${index}`}>{word} </span>
  ));
}

function imageAtProgress(images: TimelineImage[], progress: number) {
  if (!images.length) return null;
  const total = images.reduce((sum, image) => sum + Math.max(.1, image.duration), 0);
  const cursor = Math.min(total - .0001, Math.max(0, progress) * total);
  let elapsed = 0;
  for (const image of images) {
    elapsed += Math.max(.1, image.duration);
    if (cursor < elapsed) return image;
  }
  return images[images.length - 1];
}

export default function TimelineEditorPage() {
  const [scenes, setScenes] = useState<TimelineScene[]>(cloneDefaults);
  const [selectedId, setSelectedId] = useState(DEFAULT_TIMELINE[0].id);
  const [previewProgress, setPreviewProgress] = useState(0);
  const [status, setStatus] = useState("loading timeline…");
  const [dirty, setDirty] = useState(false);
  const [uploading, setUploading] = useState<string | null>(null);
  const [draggedScene, setDraggedScene] = useState<string | null>(null);
  const importRef = useRef<HTMLInputElement>(null);

  const selectedIndex = Math.max(0, scenes.findIndex((scene) => scene.id === selectedId));
  const selected = scenes[selectedIndex] ?? scenes[0];
  const activePreviewImage = useMemo(
    () => selected ? imageAtProgress(selected.images, previewProgress) : null,
    [selected, previewProgress]
  );

  useEffect(() => {
    let alive = true;
    fetch("/api/timeline", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load the saved timeline.");
        return response.json() as Promise<{ timeline: TimelineScene[] | null; updatedAt: string | null }>;
      })
      .then((data) => {
        if (!alive) return;
        const timeline = migrateLegacyAssets(Array.isArray(data.timeline) && data.timeline.length ? data.timeline : cloneDefaults());
        setScenes(timeline);
        setSelectedId(timeline[0].id);
        setStatus(data.updatedAt ? `saved ${new Date(data.updatedAt).toLocaleString("it-IT")}` : "using current default sequence");
        setDirty(false);
      })
      .catch((error: Error) => {
        if (!alive) return;
        setStatus(error.message);
      });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    const warn = (event: BeforeUnloadEvent) => {
      if (!dirty) return;
      event.preventDefault();
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  function commit(next: TimelineScene[]) {
    setScenes(next);
    setDirty(true);
    setStatus("unsaved changes");
  }

  function updateScene(patch: Partial<TimelineScene>) {
    commit(scenes.map((scene) => scene.id === selected.id ? { ...scene, ...patch } : scene));
  }

  function updateImage(imageId: string, patch: Partial<TimelineImage>) {
    updateScene({ images: selected.images.map((image) => image.id === imageId ? { ...image, ...patch } : image) });
  }

  function moveScene(fromId: string, toId: string) {
    if (fromId === toId) return;
    const from = scenes.findIndex((scene) => scene.id === fromId);
    const to = scenes.findIndex((scene) => scene.id === toId);
    if (from < 0 || to < 0) return;
    const next = [...scenes];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    commit(next);
  }

  function nudgeScene(direction: -1 | 1) {
    const target = selectedIndex + direction;
    if (target < 0 || target >= scenes.length) return;
    const next = [...scenes];
    [next[selectedIndex], next[target]] = [next[target], next[selectedIndex]];
    commit(next);
  }

  function duplicateScene() {
    const copy: TimelineScene = {
      ...selected,
      id: uid("scene"),
      enTitle: `${selected.enTitle} / COPY`,
      itTitle: `${selected.itTitle} / COPIA`,
      images: selected.images.map((image) => ({ ...image, id: uid("image") })),
    };
    const next = [...scenes];
    next.splice(selectedIndex + 1, 0, copy);
    commit(next);
    setSelectedId(copy.id);
  }

  function addScene() {
    const scene: TimelineScene = {
      id: uid("scene"),
      enTitle: `${String(scenes.length + 1).padStart(2, "0")} / NEW SCENE`,
      itTitle: `${String(scenes.length + 1).padStart(2, "0")} / NUOVA SCENA`,
      en: "Write the English text here.",
      it: "Scrivi qui il testo italiano.",
      caption: "NEW SEQUENCE / INTERNAL DRAFT",
      duration: 1,
      images: [],
      palette: ["#ff2100", "#00d638", "#050505", "#ff5ca8", "#00d638", "#1716ef", "#ff2100"],
      black: true,
    };
    commit([...scenes, scene]);
    setSelectedId(scene.id);
  }

  function removeScene() {
    if (scenes.length === 1 || !window.confirm("Delete this scene from the timeline?")) return;
    const next = scenes.filter((scene) => scene.id !== selected.id);
    commit(next);
    setSelectedId(next[Math.min(selectedIndex, next.length - 1)].id);
  }

  function addImage() {
    const image: TimelineImage = {
      id: uid("image"),
      src: "",
      alt: "New timeline image",
      duration: 1,
      positionX: 50,
      positionY: 50,
    };
    updateScene({ images: [...selected.images, image] });
  }

  function nudgeImage(imageId: string, direction: -1 | 1) {
    const index = selected.images.findIndex((image) => image.id === imageId);
    const target = index + direction;
    if (index < 0 || target < 0 || target >= selected.images.length) return;
    const images = [...selected.images];
    [images[index], images[target]] = [images[target], images[index]];
    updateScene({ images });
  }

  function removeImage(imageId: string) {
    updateScene({ images: selected.images.filter((image) => image.id !== imageId) });
  }

  async function uploadImage(imageId: string, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(imageId);
    setStatus(`uploading ${file.name}…`);
    try {
      const form = new FormData();
      form.append("file", file);
      const response = await fetch("/api/timeline/upload", { method: "POST", body: form });
      const data = await response.json() as { src?: string; error?: string };
      if (!response.ok || !data.src) throw new Error(data.error || "Upload failed.");
      updateImage(imageId, { src: data.src, alt: file.name.replace(/\.[^.]+$/, "") });
      setStatus("image uploaded — publish timeline to apply it");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setUploading(null);
      event.target.value = "";
    }
  }

  async function publishTimeline() {
    setStatus("publishing timeline…");
    const response = await fetch("/api/timeline", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ timeline: scenes }),
    });
    const data = await response.json() as { error?: string; updatedAt?: string };
    if (!response.ok) {
      setStatus(data.error || "Could not publish the timeline.");
      return;
    }
    setDirty(false);
    setStatus(`published ${new Date(data.updatedAt || Date.now()).toLocaleString("it-IT")}`);
  }

  async function resetTimeline() {
    if (!window.confirm("Reset every scene to the original website timeline?")) return;
    const response = await fetch("/api/timeline", { method: "DELETE" });
    if (!response.ok) {
      setStatus("Could not reset the timeline.");
      return;
    }
    const defaults = cloneDefaults();
    setScenes(defaults);
    setSelectedId(defaults[0].id);
    setDirty(false);
    setStatus("timeline reset to original");
  }

  function exportTimeline() {
    const blob = new Blob([JSON.stringify({ version: 1, timeline: scenes }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `gagagagagagaga-timeline-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  async function importTimeline(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const data = JSON.parse(await file.text()) as { timeline?: TimelineScene[] } | TimelineScene[];
      const timeline = Array.isArray(data) ? data : data.timeline;
      if (!Array.isArray(timeline) || !timeline.length) throw new Error("The JSON file has no timeline.");
      const migrated = migrateLegacyAssets(timeline);
      commit(migrated);
      setSelectedId(migrated[0].id);
      setStatus("timeline imported — review and publish it");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Invalid timeline file.");
    } finally {
      event.target.value = "";
    }
  }

  if (!selected) return null;

  return (
    <main className="timeline-editor-shell">
      <header className="timeline-editor-header">
        <div>
          <p>INTERNAL TOOL / NOT LINKED FROM THE SITE</p>
          <h1>SCROLL<br />TIMELINE</h1>
        </div>
        <div className="timeline-header-actions">
          <span className={dirty ? "timeline-status is-dirty" : "timeline-status"}>{status}</span>
          <button className="button-secondary" onClick={exportTimeline}>export JSON</button>
          <button className="button-secondary" onClick={() => importRef.current?.click()}>import JSON</button>
          <input hidden ref={importRef} type="file" accept="application/json" onChange={importTimeline} />
          <a className="button-secondary" href="/" target="_blank">view site /</a>
          <button className="button-primary" disabled={!dirty} onClick={publishTimeline}>publish timeline</button>
        </div>
      </header>

      <section className="timeline-overview" aria-label="Scene timeline">
        <div className="timeline-ruler">
          {scenes.map((scene, index) => (
            <button
              className={scene.id === selected.id ? "timeline-segment is-selected" : "timeline-segment"}
              draggable
              key={scene.id}
              onClick={() => { setSelectedId(scene.id); setPreviewProgress(0); }}
              onDragStart={() => setDraggedScene(scene.id)}
              onDragOver={(event: DragEvent) => event.preventDefault()}
              onDrop={() => { if (draggedScene) moveScene(draggedScene, scene.id); setDraggedScene(null); }}
              style={{ flexGrow: Math.max(.5, scene.duration), background: scene.palette[0], color: scene.palette[1] }}
            >
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{scene.enTitle.replace(/^\d+\s*\/\s*/, "")}</span>
              <small>{scene.duration.toFixed(2)}×</small>
            </button>
          ))}
          <button className="timeline-add" onClick={addScene} aria-label="Add scene">＋</button>
        </div>
      </section>

      <div className="timeline-workspace">
        <aside className="timeline-sidebar">
          <div className="timeline-sidebar-head">
            <span>SCENES / {scenes.length}</span>
            <div><button onClick={() => nudgeScene(-1)}>UP</button><button onClick={() => nudgeScene(1)}>DOWN</button></div>
          </div>
          <ol>
            {scenes.map((scene, index) => (
              <li key={scene.id}>
                <button className={scene.id === selected.id ? "is-selected" : ""} onClick={() => setSelectedId(scene.id)}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <span>{scene.itTitle.replace(/^\d+\s*\/\s*/, "")}</span>
                  <small>{scene.images.length} img / {Math.round(scene.duration * 100)}vh</small>
                </button>
              </li>
            ))}
          </ol>
          <div className="timeline-sidebar-actions">
            <button onClick={duplicateScene}>duplicate</button>
            <button onClick={removeScene}>delete</button>
            <button onClick={resetTimeline}>reset all</button>
          </div>
        </aside>

        <section className="timeline-form">
          <div className="editor-section scene-settings">
            <div className="editor-section-title">
              <p>SCENE {String(selectedIndex + 1).padStart(2, "0")}</p>
              <label>
                scroll duration <b>{Math.round(selected.duration * 100)}vh</b>
                <input type="range" min="0.5" max="4" step="0.25" value={selected.duration} onChange={(event) => updateScene({ duration: Number(event.target.value) })} />
              </label>
            </div>

            <div className="language-fields">
              <div className="language-block language-it">
                <span>IT / LEFT PANEL</span>
                <label>chapter<input value={selected.itTitle} onChange={(event) => updateScene({ itTitle: event.target.value })} /></label>
                <label>testo<textarea rows={8} value={selected.it} onChange={(event) => updateScene({ it: event.target.value })} /></label>
              </div>
              <div className="language-block language-en">
                <span>EN / RIGHT PANEL</span>
                <label>chapter<input value={selected.enTitle} onChange={(event) => updateScene({ enTitle: event.target.value })} /></label>
                <label>text<textarea rows={8} value={selected.en} onChange={(event) => updateScene({ en: event.target.value })} /></label>
              </div>
            </div>

            <label className="wide-label">center caption<input value={selected.caption} onChange={(event) => updateScene({ caption: event.target.value })} /></label>

            <details className="palette-editor">
              <summary>acid palette / advanced</summary>
              <div>
                {["IT bg", "IT ink", "center bg", "center ink", "EN bg", "EN ink", "image tint"].map((label, index) => (
                  <label key={label}>{label}
                    <input type="color" value={selected.palette[index]} onChange={(event) => {
                      const palette = [...selected.palette] as TimelineScene["palette"];
                      palette[index] = event.target.value;
                      updateScene({ palette });
                    }} />
                  </label>
                ))}
              </div>
            </details>
          </div>

          <div className="editor-section image-settings">
            <div className="editor-section-title">
              <p>IMAGE TRACK</p>
              <button onClick={addImage}>＋ add image</button>
            </div>

            {selected.images.length > 0 && (
              <div className="image-duration-track">
                {selected.images.map((image, index) => (
                  <div key={image.id} style={{ flexGrow: Math.max(.1, image.duration) }}>
                    <img src={image.src} alt="" />
                    <span>{index + 1} / {image.duration.toFixed(2)}×</span>
                  </div>
                ))}
              </div>
            )}

            <div className="image-cards">
              {selected.images.map((image, index) => (
                <article className="image-card" key={image.id}>
                  <div className="image-card-preview">
                    {image.src ? <img src={image.src} alt={image.alt} style={{ objectPosition: `${image.positionX}% ${image.positionY}%` }} /> : <span>NO IMAGE</span>}
                    <b>{String(index + 1).padStart(2, "0")}</b>
                  </div>
                  <div className="image-card-fields">
                    <label>image URL<input value={image.src} onChange={(event) => updateImage(image.id, { src: event.target.value })} /></label>
                    <label>alt / internal note<input value={image.alt} onChange={(event) => updateImage(image.id, { alt: event.target.value })} /></label>
                    <label className="upload-button">
                      {uploading === image.id ? "uploading…" : "replace with file"}
                      <input hidden disabled={uploading === image.id} type="file" accept="image/*" onChange={(event) => uploadImage(image.id, event)} />
                    </label>
                    <label>duration <b>{image.duration.toFixed(2)}×</b><input type="range" min="0.25" max="4" step="0.25" value={image.duration} onChange={(event) => updateImage(image.id, { duration: Number(event.target.value) })} /></label>
                    <label>horizontal position <b>{image.positionX}%</b><input type="range" min="0" max="100" value={image.positionX} onChange={(event) => updateImage(image.id, { positionX: Number(event.target.value) })} /></label>
                    <label>vertical position <b>{image.positionY}%</b><input type="range" min="0" max="100" value={image.positionY} onChange={(event) => updateImage(image.id, { positionY: Number(event.target.value) })} /></label>
                  </div>
                  <footer>
                    <button onClick={() => nudgeImage(image.id, -1)}>earlier</button>
                    <button onClick={() => nudgeImage(image.id, 1)}>later</button>
                    <button onClick={() => removeImage(image.id)}>remove</button>
                  </footer>
                </article>
              ))}
              {!selected.images.length && <button className="empty-images" onClick={addImage}>This scene has no images. Add the first one.</button>}
            </div>
          </div>
        </section>

        <aside className="timeline-preview-column">
          <div className="timeline-preview-sticky">
            <div className="preview-head"><span>LIVE SCENE PREVIEW</span><b>{Math.round(previewProgress * 100)}%</b></div>
            <div className="triptych-preview">
              <article style={{ background: selected.palette[0], color: selected.palette[1] }}>
                <small>{selected.itTitle}</small>
                <p>{words(selected.it, previewProgress)}</p>
                <i>IT</i>
              </article>
              <figure style={{ background: "#000", color: selected.palette[6] }}>
                <div>
                  {activePreviewImage?.src && <img src={activePreviewImage.src} alt={activePreviewImage.alt} style={{ objectPosition: `${activePreviewImage.positionX}% ${activePreviewImage.positionY}%` }} />}
                  <span style={{ background: selected.palette[6] }} />
                </div>
                <figcaption>{selected.caption}</figcaption>
              </figure>
              <article style={{ background: selected.palette[4], color: selected.palette[5] }}>
                <small>{selected.enTitle}</small>
                <p>{words(selected.en, previewProgress)}</p>
                <i>EN</i>
              </article>
            </div>
            <label className="preview-scrubber">scrub scene<input type="range" min="0" max="1" step="0.001" value={previewProgress} onChange={(event) => setPreviewProgress(Number(event.target.value))} /></label>
            <p className="preview-note">Image timing uses relative weights. Scene duration controls how much scrolling space the scene occupies.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
