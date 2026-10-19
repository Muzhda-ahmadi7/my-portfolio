import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) document.title = `${project.pageTitle} — Muzhda Ahmadi`;
  }, [project]);

  if (!project) return <NotFound />;

  return (
    <>
      <section className="detail-hero">
        <div className="kicker"> {project.kicker} </div>
        <h1>{project.title}</h1>
        <p>{project.intro}</p>
        <div className="detail-meta">
          {project.meta.map((m) => (
            <div className="meta" key={m.label}>
              <small> {m.label} </small>
              <strong> {m.value} </strong>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className={`project-visual ${project.bg} detail-visual`}>
          <img alt={project.imageAlt} src={project.image} />
        </div>
        <div className="detail-content">
          <div>
            <h2>
              Project
              <br />
              Details.
            </h2>
          </div>
          <div>
            {project.blocks.map((block) => (
              <div className="detail-block" key={block.title}>
                <h3>{block.title}</h3>
                {block.tags ? (
                  <p>
                    {block.tags.map((tag) => (
                      <span className="tag" key={tag}> {tag} </span>
                    ))}
                  </p>
                ) : block.link ? (
                  <p>
                    <a
                      className="btn lime"
                      href={block.link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {block.link.label} &rarr;
                    </a>
                  </p>
                ) : (
                  <p>{block.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
