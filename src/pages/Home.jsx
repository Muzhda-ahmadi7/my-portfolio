import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import WorkCard from "../components/WorkCard";
import { homeProjects, images } from "../data/projects";

const FAQ = [
  {
    question: "What technologies do I work with?",
    answer: "I currently work with HTML, CSS, JavaScript, Git, GitHub, Figma, and VS Code.",
  },
  {
    question: "What am I currently learning?",
    answer:
      "I'm currently continuing my Web Development journey through the Netlinks training program, where I'm developing practical frontend skills through exercises and collaborative projects.",
  },
  {
    question: "What kind of projects do I work on?",
    answer:
      "I work on frontend development exercises, website recreations, UI-focused projects, team bootcamp projects, and personal practice builds.",
  },
  {
    question: "Are all my projects live?",
    answer:
      "Not yet. Many of my current projects are educational exercises or team assignments, so some are presented through screenshots, GitHub repositories, or project case studies.",
  },
  {
    question: "What are my main interests?",
    answer:
      "My main interests include frontend development, UI/UX, software development, technology, creativity, and practical innovation.",
  },
];

const SERVICES = [
  {
    num: "01",
    title: "Frontend Development",
    text: "Building responsive and practical websites using HTML and CSS while continuing to develop my JavaScript skills.",
  },
  {
    num: "02",
    title: "Web Design",
    text: "Creating clean and purposeful website layouts with a focus on structure, usability, and visual clarity.",
  },
  {
    num: "03",
    title: "UI Design",
    text: "Designing interfaces and layouts using Figma and exploring how design ideas can be translated into code.",
  },
  {
    num: "04",
    title: "Collaborative Development",
    text: "Contributing to team projects through ideation, coding, problem solving, and collaboration.",
  },
];

const ORGS = [
  { name: "Netlinks", role: "Web Development Training", period: "2026 – Present" },
  { name: "Learn Afghan Zarghona Ana", role: "Online Secondary Education", period: "2024 – 2026" },
  { name: "War Child Canada", role: "Computer Skills Training", period: "6-month program" },
  { name: "NSDE", role: "English, Mathematics & Writing Learning", period: "Learning Program" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">
            <span className="line hero-line-a">
              Frontend
              <span className="portrait">
                <img alt="Muzhda" src={images.portrait} />
              </span>
              Developer
            </span>
            <span className="line hero-line-b">
              building my path through technology.
            </span>
          </h1>
          <p className="hero-subtitle">[AVAILABLE FOR OPPORTUNITIES]</p>
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Selected Work]</div>
        <div className="work-grid">
          {homeProjects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
        <Link className="work-cta" to="/work">
          View All Work
          <span className="icon"> &rarr; </span>
        </Link>
      </section>

      <section className="container">
        <div className="section-label">[About Me]</div>
        <div className="about-grid">
          <div className="about-image">
            <div className="about-dashes" aria-hidden="true">
              <span> </span>
              <span> </span>
              <span> </span>
              <span> </span>
            </div>
            <img alt="Muzhda Ahmadi" src={images.portrait} loading="lazy" decoding="async" />
          </div>
          <div className="about-copy">
            <small> Hello! I&rsquo;m Muzhda. </small>
            <h2>
              I&rsquo;m a student and aspiring Frontend Developer from
              Afghanistan.
            </h2>
            <p>
              I completed my secondary education online in 2026 and began my Web
              Development journey at Netlinks in June 2026.
            </p>
            <p>
              I enjoy learning through practice, working on real and
              collaborative projects, experimenting with new ideas, and solving
              problems when things do not work as expected.
            </p>
            <p>
              I&rsquo;m especially interested in frontend development, UI/UX,
              technology, creativity, and practical digital experiences.
            </p>
            <Link className="btn lime" to="/about"> More About Me &rarr; </Link>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-label">[What I Do]</div>
        <div className="services">
          {SERVICES.map((s) => (
            <div className="service" key={s.num}>
              <span className="service-num"> {s.num} </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Learning / Organizations]</div>
        <div className="orgs">
          {ORGS.map((o) => (
            <div className="org" key={o.name}>
              <h3>{o.name}</h3>
              <p>{o.role}</p>
              <span> {o.period} </span>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="quote">
          <blockquote>
            &ldquo;I believe the best way to learn technology is by building,
            experimenting, solving problems, and continuing to improve.&rdquo;
          </blockquote>
          <cite>
            Muzhda Ahmadi
            <span> Frontend Developer &amp; Web Development Student </span>
          </cite>
        </div>
      </section>

      <section className="container">
        <div className="section-label">[FAQ]</div>
        <Faq items={FAQ} />
      </section>

      <section className="container">
        <div className="final-cta">
          <small>
            Open to learning opportunities, collaborations, internships, and
            projects
          </small>
          <h2>Let&rsquo;s build something meaningful.</h2>
          <Link className="btn lime" to="/contact"> Let&rsquo;s Talk &rarr; </Link>
        </div>
      </section>
    </>
  );
}
