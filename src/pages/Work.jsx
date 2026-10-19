import ProjectRow from "../components/ProjectRow";
import { projects } from "../data/projects";

export default function Work() {
  return (
    <>
      <section className="page-hero">
        <div className="kicker">WORK / PROJECTS</div>
        <h1>
          Selected
          <br />
          Work.
        </h1>
        <p>
          Projects created through Netlinks training, team bootcamps, personal
          practice, Figma exploration, and web development exercises.
        </p>
      </section>
      <section className="container">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </section>
    </>
  );
}
