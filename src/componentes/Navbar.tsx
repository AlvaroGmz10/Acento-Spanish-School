import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export default function Navbar({ theme }: { theme: string }) {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = ["hero", "methodology", "about", "testimonios"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* cerrar al hacer click fuera */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const navbar = navRef.current;
      const collapse = document.getElementById("mainNavbar");

      if (
        navbar &&
        !navbar.contains(e.target as Node) &&
        collapse?.classList.contains("show")
      ) {
        collapse.classList.remove("show");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  /* cerrar al hacer click en link */
  const handleLinkClick = () => {
    const collapse = document.getElementById("mainNavbar");
    collapse?.classList.remove("show");
  };

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-lg fixed-top custom-navbar ${theme} ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero">
          <img src="/Logo.webp" alt="Acento" className="navbar-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto">
            <a
              className={`nav-link ${active === "methodology" ? "active" : ""}`}
              href="#methodology"
              onClick={handleLinkClick}
            >
              Methodology
            </a>

            <a
              className={`nav-link ${active === "about" ? "active" : ""}`}
              href="#about"
              onClick={handleLinkClick}
            >
              About Us
            </a>

            <a
              className={`nav-link ${active === "testimonios" ? "active" : ""}`}
              href="#testimonios"
              onClick={handleLinkClick}
            >
              Testimonios
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
