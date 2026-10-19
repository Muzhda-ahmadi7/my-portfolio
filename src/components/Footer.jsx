import { Link } from "react-router-dom";
import { social } from "../data/projects";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="footer-brand" to="/"> [Muzhda Ahmadi] </Link>
          <p>Frontend Developer &amp; Web Development Student</p>
        </div>
        <Link className="btn lime" to="/contact"> Let&apos;s Talk &rarr; </Link>
      </div>
      <div className="footer-bottom">
        <span> &copy; 2026 Muzhda Ahmadi </span>
        <nav className="social" aria-label="Social links">
          <a href={social.github} rel="noopener noreferrer" target="_blank"> GitHub </a>
          <a href={social.linkedin} rel="noopener noreferrer" target="_blank"> LinkedIn </a>
          <a href={social.email}> Email </a>
        </nav>
      </div>
    </footer>
  );
}
