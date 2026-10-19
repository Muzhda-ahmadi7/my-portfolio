import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="kicker">404</div>
        <h1> Page not found. </h1>
        <p>The page you are looking for does not exist or has been moved.</p>
      </section>
      <section className="container">
        <Link className="btn lime" to="/"> Back to Home &rarr; </Link>
      </section>
    </>
  );
}
