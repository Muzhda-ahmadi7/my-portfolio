import { Link } from "react-router-dom";

/* Large project row used on the Work page. */
export default function ProjectRow({ project }) {
  const { list, bg, image, slug } = project;
  return (
    <article className="project">
      <Link to={`/projects/${slug}`}>
        <div className={`project-visual ${bg}`}>
          <img alt={list.imageAlt} src={image} loading="lazy" decoding="async" />
        </div>
        <div className="project-info">
          <div>
            <small> {list.label} </small>
            <h2>{list.title}</h2>
            {list.sub ? <small> {list.sub} </small> : null}
          </div>
          <p>{list.text}</p>
        </div>
      </Link>
    </article>
  );
}
