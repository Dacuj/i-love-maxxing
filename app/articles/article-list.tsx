import { articles } from "./article-data";

export function ArticleList({ homeCover = false }: { homeCover?: boolean }) {
  return (
    <ul className="article-catalogue" aria-label="Articles and interviews">
      {articles.map((article, index) => (
        <li className="article-catalogue-item" key={article.slug}>
          {index > 0 && <span className="article-separator" aria-hidden="true">°</span>}
          <a className="article-card" href={`/articles/${article.slug}`}>
            <div className={`article-card-cover${homeCover && article.slug === "jaccuse-jadore-napoli" ? " article-card-cover-real" : ""}`} aria-hidden="true">
              {homeCover && article.slug === "jaccuse-jadore-napoli" ? (
                <>
                  <span className="article-cover-top">J’ACCUSE</span>
                  <span className="article-cover-photo">
                    <img src="/landing/warhol-williams-1967.webp" alt="" loading="lazy" />
                  </span>
                  <span className="article-cover-bottom">J’ADORE<br />NAPOLI</span>
                </>
              ) : article.images.map((src) => <img key={src} src={src} alt="" loading="lazy" />)}
            </div>
            <span className="article-card-meta">{article.label}</span>
            <h3>{article.title}</h3>
          </a>
        </li>
      ))}
    </ul>
  );
}
