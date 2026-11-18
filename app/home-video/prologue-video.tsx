"use client";

import { useEffect, useRef } from "react";
import styles from "./prologue-video.module.css";

export function PrologueVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const portrait = window.matchMedia("(orientation: portrait)");
    let visible = false;
    let disposed = false;
    let resumeAt = 0;
    const showCaptions = () => {
      const captions = video.textTracks[0];
      if (captions) captions.mode = "showing";
    };
    const allowed = () => !disposed && visible && !document.hidden && !motion.matches;
    const syncPlayback = () => {
      if (!allowed()) { video.pause(); return; }
      void video.play().then(() => {
        if (!allowed()) video.pause();
      }).catch(() => { /* The poster remains if the browser blocks autoplay. */ });
    };
    const selectFormat = () => {
      resumeAt = Number.isFinite(video.currentTime) ? video.currentTime : 0;
      const format = portrait.matches ? "mobile" : "desktop";
      video.poster = `/media/prologue/poster-v16-${format}.png`;
      video.src = `/media/prologue/metadhone-metadata-v16-${format}-silent.mp4`;
      video.load();
    };
    const ready = () => {
      showCaptions();
      if (resumeAt > 0 && Number.isFinite(video.duration)) {
        video.currentTime = resumeAt % video.duration;
      }
      syncPlayback();
    };
    video.addEventListener("loadedmetadata", ready);
    showCaptions();
    selectFormat();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    motion.addEventListener("change", syncPlayback);
    portrait.addEventListener("change", selectFormat);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", syncPlayback);
      motion.removeEventListener("change", syncPlayback);
      portrait.removeEventListener("change", selectFormat);
      video.removeEventListener("loadedmetadata", ready);
      video.pause();
    };
  }, []);

  return (
    <section id="story" className={styles.stage} aria-label="Metadhone and Metadata film">
      <video
        ref={videoRef}
        className={styles.video}
        poster="/media/prologue/poster-v16-desktop.png"
        preload="auto"
        loop
        playsInline
        muted
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        aria-label="Metadhone and Metadata: a silent film with flashing images"
      >
        <track kind="captions" src="/media/prologue/prologue-v16-en.vtt" srcLang="en" label="English" default />
      </video>
    </section>
  );
}
