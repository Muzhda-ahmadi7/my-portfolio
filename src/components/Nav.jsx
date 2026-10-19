import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const btnRef = useRef(null);

  /* Close the menu when the route changes. */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  /* Escape closes the menu and returns focus to the button. */
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-nav">
      <Link className="brand" to="/"> [Muzhda Ahmadi] </Link>
      <button
        ref={btnRef}
        type="button"
        className={`menu-toggle${open ? " open" : ""}`}
        aria-expanded={open}
        aria-controls="nav-menu"
        onClick={() => setOpen((v) => !v)}
      >
        Menu
        <span className="hamb" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
      <nav id="nav-menu" className={`nav-menu${open ? " open" : ""}`} aria-label="Main">
        {LINKS.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
