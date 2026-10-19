const TIMELINE = [
  {
    num: "01",
    title: "Learn Afghan Zarghona Ana",
    role: "Online Secondary Education · 2024 – 2026",
    note: (
      <>
        Completed my secondary education through an online school program.
        <br />
        <br />
        <strong>Final Score: 97.94%</strong>
      </>
    ),
  },
  {
    num: "02",
    title: "War Child Canada",
    role: "Computer Skills Training · 6 months",
    note: "Completed training covering Windows, Microsoft Word, PowerPoint, and Excel.",
  },
  {
    num: "03",
    title: "Netlinks",
    role: "Web Development Training · June 2026 – Present",
    note: "Currently developing practical skills in HTML, CSS, JavaScript, Git, GitHub, Figma, VS Code, and frontend development through hands-on training and projects.",
  },
  {
    num: "04",
    title: "NSDE",
    role: "English & Mathematics",
    note: "Participated in English and mathematics learning programs and completed writing-related training.",
  },
];

const ADDITIONAL = [
  {
    name: "Writing",
    note: "Writing course and publication of one of my short stories through NSDE.",
  },
  {
    name: "Entrepreneurship",
    note: "Participated in an entrepreneurship seminar organized through the Ministry of Economy.",
  },
  {
    name: "Management",
    note: "Completed a two-month course related to healthy management skills.",
  },
  {
    name: "Poetry & Recitation",
    note: "Completed poetry and recitation training.",
  },
];

export default function Education() {
  return (
    <>
      <section className="page-hero">
        <div className="kicker">EDUCATION &amp; LEARNING</div>
        <h1>My education has been a journey of learning, adapting, and building.</h1>
        <p>
          My learning journey combines formal education, technical training,
          leadership experiences, and continuous self-learning.
        </p>
      </section>

      <section className="container">
        <div className="section-label">[Education Timeline]</div>
        <div className="timeline">
          {TIMELINE.map((row) => (
            <div className="timeline-row" key={row.num}>
              <span className="num"> {row.num} </span>
              <div>
                <h3>{row.title}</h3>
                <h4> {row.role} </h4>
              </div>
              <p>{row.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="section-label">[Additional Education]</div>
        <div className="stack">
          {ADDITIONAL.map((item) => (
            <div className="stack-card" key={item.name}>
              <h3>{item.name}</h3>
              <p> {item.note} </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
