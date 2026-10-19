import { useEffect } from "react";

/**
 * Port of the original js/script.js behaviours, scoped to React:
 * sticky nav shadow, scroll-reveal stagger, magnetic buttons,
 * subtle 3D tilt on feature cards and count-up stats.
 * Re-runs whenever the route changes (dep = location.key).
 */
export default function useSiteEffects(dep) {
  useEffect(() => {
    /* Sticky nav shadow on scroll */
    const siteNav = document.querySelector(".site-nav");
    const onScroll = () => siteNav?.classList.toggle("scrolled", window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Hero entrance animation (same requestAnimationFrame trigger as the original) */
    const hero = document.querySelector(".hero");
    const heroRaf = requestAnimationFrame(() => hero?.classList.add("hero-in"));

    /* Scroll-reveal animation for repeating content blocks */
    const revealSelectors = [
      ".project", ".work-card", ".service", ".org", ".timeline-row", ".stack-card", ".faq-item",
      ".stat", ".detail-block", ".meta", ".about-grid", ".quote", ".final-cta", ".contact-box",
    ];
    const revealEls = document.querySelectorAll(revealSelectors.join(","));
    let io = null;
    if ("IntersectionObserver" in window && revealEls.length) {
      revealEls.forEach((el, i) => {
        el.classList.add("reveal");
        el.style.transitionDelay = (i % 4) * 90 + "ms";
      });
      io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
      revealEls.forEach((el) => io.observe(el));
    }

    /* Feature project card: subtle 3D tilt that follows the cursor */
    const fine = matchMedia("(pointer:fine)").matches;
    const cleanups = [];
    const featureCard = document.querySelector(".work-card.feature");
    const featureVisual = featureCard?.querySelector(".work-card-visual");
    if (fine && featureCard && featureVisual) {
      const onMove = (e) => {
        const r = featureCard.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        featureVisual.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
      };
      const onLeave = () => { featureVisual.style.transform = "rotateY(0deg) rotateX(0deg)"; };
      featureCard.addEventListener("mousemove", onMove);
      featureCard.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        featureCard.removeEventListener("mousemove", onMove);
        featureCard.removeEventListener("mouseleave", onLeave);
      });
    }

    /* Magnetic hover for primary buttons */
    if (fine) {
      document.querySelectorAll(".btn,.work-cta").forEach((btn) => {
        const onMove = (e) => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.25;
          const y = (e.clientY - r.top - r.height / 2) * 0.35;
          btn.style.transform = `translate(${x}px,${y}px)`;
        };
        const onLeave = () => { btn.style.transform = ""; };
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          btn.removeEventListener("mousemove", onMove);
          btn.removeEventListener("mouseleave", onLeave);
        });
      });
    }

    /* Count-up animation for stat numbers */
    let statIo = null;
    const statEls = document.querySelectorAll(".stat strong");
    if ("IntersectionObserver" in window && statEls.length) {
      const animateCount = (el) => {
        const raw = el.textContent.trim();
        const match = raw.match(/^([\d.]+)(.*)$/);
        if (!match) return;
        const end = parseFloat(match[1]);
        const suffix = match[2];
        const decimals = (match[1].split(".")[1] || "").length;
        const duration = 1100;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = end * eased;
          el.textContent = (decimals ? value.toFixed(decimals) : Math.round(value)) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      statIo = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statIo.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      statEls.forEach((el) => statIo.observe(el));
    }

    return () => {
      cancelAnimationFrame(heroRaf);
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      statIo?.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, [dep]);
}
