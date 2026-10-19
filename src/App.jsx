import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import useSiteEffects from "./hooks/useSiteEffects";

const TITLES = {
  "/": "Muzhda Ahmadi — Frontend Developer",
  "/work": "Work — Muzhda Ahmadi",
  "/about": "About — Muzhda Ahmadi",
  "/education": "Education — Muzhda Ahmadi",
  "/contact": "Contact — Muzhda Ahmadi",
};

/* Keeps the old static-site URLs (/work.html, /projects/fig.html, ...) working. */
function ProjectRedirect() {
  const splat = useParams()["*"] || "";
  const slug = decodeURIComponent(splat).replace(/\.html$/i, "");
  return <Navigate to={`/projects/${slug}`} replace />;
}

export default function App() {
  const location = useLocation();

  useSiteEffects(location.key);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    if (TITLES[location.pathname]) {
      document.title = TITLES[location.pathname];
    } else if (location.pathname.startsWith("/projects/")) {
      document.title = "Project — Muzhda Ahmadi";
    } else {
      document.title = "Page Not Found — Muzhda Ahmadi";
    }
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <div className="page-fade" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />

            {/* Legacy static URLs -> new routes */}
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/work.html" element={<Navigate to="/work" replace />} />
            <Route path="/about.html" element={<Navigate to="/about" replace />} />
            <Route path="/education.html" element={<Navigate to="/education" replace />} />
            <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
            <Route path="/projects/dreamhome.html" element={<Navigate to="/projects/dreamhome" replace />} />
            <Route path="/projects/ecommerce.html" element={<Navigate to="/projects/ecommerce" replace />} />
            <Route path="/projects/form.html" element={<Navigate to="/projects/form" replace />} />
            <Route path="/projects/fig.html" element={<Navigate to="/projects/fig" replace />} />
            <Route path="/projects/card-design.html" element={<Navigate to="/projects/card-design" replace />} />
            <Route path="/projects/*" element={<ProjectRedirect />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
