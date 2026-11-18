import type { Metadata } from "next";
import { ArticleList } from "./article-list";
import { DirectoryNav } from "../directory-nav";

export const metadata: Metadata = {
  title: "ARTICLES — GAGAGAGAGAGAGA",
  description: "Articles and interviews from inside the argument. The GAGAGAGAGAGAGA reading index.",
};

export default function ArticlesPage() {
  return (
    <main className="directory reading-index">
      <DirectoryNav current="articles" />
      <section className="reading-archive" aria-labelledby="read-title">
        <header className="reading-archive-head">
          <p>THE DESK / ARTICLES + INTERVIEWS</p>
          <h1 id="read-title" className="signal-text">WORDS FROM<br />INSIDE THE ARGUMENT.</h1>
        </header>
        <ArticleList />
      </section>
      <footer className="directory-footer">
        <span>GAGAGAGAGAGAGA / 2026</span>
        <a href="/index">SHOP OR READ /</a>
      </footer>
    </main>
  );
}
