import "./Navbar.css";

import { useLocation } from "react-router-dom";

interface NavbarProps {
  theme: string;
  activeSection: string;
}

export default function Navbar({ theme, activeSection }: NavbarProps) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav
      className={`
        navbar
        navbar-expand-lg
        fixed-top
        custom-navbar
        ${theme}
      `}
    >
      <div className="container-fluid">
        {/* LOGO */}

        <a className="navbar-brand" href={isHome ? "#hero" : "/#hero"}>
          <img src="/Logo.webp" alt="Acento" className="navbar-logo" />
        </a>

        {/* TOGGLER */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS */}

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            {/* METHODOLOGY */}

            <a
              className={`nav-link ${
                activeSection === "methodology" ? "active" : ""
              }`}
              href={isHome ? "#methodology" : "/#methodology"}
            >
              Methodology
            </a>

            {/* TESTIMONIALS */}

            <a
              className={`nav-link ${
                activeSection === "testimonios" ? "active" : ""
              }`}
              href={isHome ? "#testimonios" : "/#testimonios"}
            >
              Testimonials
            </a>

            {/* PRICING */}

            <a
              className={`nav-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
              href="/pricing"
            >
              Pricing
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
