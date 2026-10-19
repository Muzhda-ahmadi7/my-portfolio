import { images } from "../data/projects";

const STATS = [
  { value: "97.94%", label: "Final School Score" },
  { value: "4th", label: "Mathematics Competition" },
  { value: "20+", label: "Practice Builds" },
  { value: "2026", label: "Web Development Journey" },
];

const STACK = [
  { name: "HTML", note: "Web Structure" },
  { name: "CSS", note: "Web Styling" },
  { name: "JavaScript", note: "Currently Learning" },
  { name: "Git", note: "Version Control" },
  { name: "GitHub", note: "Code & Projects" },
  { name: "Figma", note: "UI & Visual Design" },
  { name: "VS Code", note: "Development Environment" },
];

const EXPERIENCE = [
  {
    num: "01",
    title: "Netlinks",
    role: "Web Development Student · June 2026 – Present",
    text: "Currently developing practical skills in frontend development through structured training, exercises, collaborative projects, and hands-on practice.",
  },
  {
    num: "02",
    title: "Amrkhail Al-Hayat Educational Center",
    role: "Teaching Assistant · 2025 – Early 2026",
    text: "Assisted with mathematics classes for approximately 60 students with different skill levels. Taught classes when the main teacher was unavailable, managed attendance and homework, and helped students with classroom and learning difficulties.",
  },
  {
    num: "03",
    title: "Roblox Animation Project",
    role: "Roblox Animation Creator · 2025 · 5 months",
    text: "Worked with my sister on creating animations for advertising using Roblox and a computer. We were selected by a company employee to participate in an international competition and received payment for the work. The project later ended after team support was discontinued.",
  },
  {
    num: "04",
    title: "Class Representative",
    role: "Grade 10 – Grade 11",
    text: "Coordinated between students and teachers, managed homework lists and attendance, shared learning materials, helped resolve student problems, created assessment questions, and supported online class coordination.",
  },
  {
    num: "05",
    title: "Arts Committee",
    role: "2025 · 6 months",
    text: "Worked with the school's arts section, helping publish challenges and review student artwork.",
  },
];

const ACHIEVEMENTS = [
  {
    num: "01",
    title: "Student of the Year",
    role: "2025",
    text: "Received recognition and a certificate for being selected as Student of the Year.",
  },
  {
    num: "02",
    title: "Mathematics Competition",
    role: "2024",
    text: "4th place among approximately 150 students. Certificate available.",
  },
  {
    num: "03",
    title: "Netlinks Bootcamp",
    role: "2026",
    text: "Team project with five members. First place within our class. Cash prize received. AI use was permitted during the project.",
  },
];

const CERTIFICATES = [
  "Student of the Year",
  "Mathematics Competition",
  "Writing",
  "English Courses",
  "Entrepreneurship Seminar",
  "Healthy Management Skills",
  "Toxic People Seminar",
  "School Completion",
  "Poetry / Recitation",
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="kicker">HELLO! I&rsquo;M MUZHDA</div>
        <h1>
          I&rsquo;m a Frontend Developer building my path through technology,
          creativity, and continuous learning.
        </h1>
      </section>

      <section className="container">
        <div className="about-grid">
          <div className="about-image">
            <img alt="Muzhda Ahmadi" src={images.portrait} />
          </div>
          <div className="about-copy">
            <small> About Me </small>
            <h2> Learning by building, experimenting, and solving problems. </h2>
            <p>
              I&rsquo;m Muzhda Ahmadi, a student and aspiring Frontend Developer
              currently developing my skills through practical Web Development
              training.
            </p>
            <p>
              I completed my secondary education in 2026 through Learn Afghan
              Zarghona Ana and began my Web Development journey at Netlinks in
              June 2026.
            </p>
            <p>
              I enjoy learning by building, experimenting with ideas,
              collaborating with others, and solving problems through practice.
            </p>
            <p>
              My interests include frontend development, UI/UX, software
              development, technology, creativity, and practical innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Selected Stats]</div>
        <div className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <strong>{s.value}</strong>
              <span> {s.label} </span>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Stack]</div>
        <div className="stack">
          {STACK.map((s) => (
            <div className="stack-card" key={s.name}>
              <h3>{s.name}</h3>
              <p> {s.note} </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Experience]</div>
        <div className="timeline">
          {EXPERIENCE.map((row) => (
            <div className="timeline-row" key={row.num}>
              <span className="num"> {row.num} </span>
              <div>
                <h3>{row.title}</h3>
                <h4> {row.role} </h4>
              </div>
              <p>{row.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Achievements]</div>
        <div className="timeline">
          {ACHIEVEMENTS.map((row) => (
            <div className="timeline-row" key={row.num}>
              <span className="num"> {row.num} </span>
              <div>
                <h3>{row.title}</h3>
                <h4> {row.role} </h4>
              </div>
              <p>{row.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Certificates]</div>
        <div className="stack">
          {CERTIFICATES.map((name) => (
            <div className="stack-card" key={name}>
              <h3>{name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
