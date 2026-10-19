import { social } from "../data/projects";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="kicker">CONTACT</div>
        <h1> Let&rsquo;s work together. </h1>
        <p>
          Have an opportunity, collaboration, project, or learning opportunity
          you&rsquo;d like to discuss? I&rsquo;d love to hear from you.
        </p>
      </section>

      <section className="container">
        <div className="contact-box">
          <h2> Let&rsquo;s build something meaningful. </h2>
          <p>
            I&rsquo;m open to learning opportunities, collaborations,
            internships, and projects that help me grow through real-world
            experience.
          </p>
          <a className="email" href={social.email}> {social.emailText} </a>
          <div
            style={{
              marginTop: "35px",
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a className="btn lime" href={social.email}> Email Me &rarr; </a>
            <a className="btn" href={social.github} rel="noopener noreferrer" target="_blank"> GitHub </a>
            <a className="btn" href={social.linkedin} rel="noopener noreferrer" target="_blank"> LinkedIn </a>
          </div>
        </div>
      </section>
    </>
  );
}
