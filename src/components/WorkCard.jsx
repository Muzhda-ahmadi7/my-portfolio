import { Link } from "react-router-dom";

/* Homepage project card (two-column "side-project" layout from the original). */
export default function WorkCard({ project }) {
  const { home, bg, image, slug } = project;
  return (
    <article className="work-card side-project">
      <Link to={`/projects/${slug}`}>
        <div className="work-card-visual">
          {home.plainImage ? (
            <img alt={home.imageAlt} src={image} loading="lazy" decoding="async" />
          ) : (
            <div className={`project-visual ${bg}`}>
              <img alt={home.imageAlt} src={image} loading="lazy" decoding="async" />
            </div>
          )}
        </div>
        <div className="work-card-body">
          <span className="label"> {home.label} </span>
          <h3>{home.title}</h3>
          <p>{home.text}</p>
          <div className="work-tags">
            {home.tags.map((tag) => (
              <span className="work-tag" key={tag}> {tag} </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
