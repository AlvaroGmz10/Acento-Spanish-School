import "./Navbar.css";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  theme?: string;
  activeSection?: string;
}

export default function Navbar({
  theme = "dark",
  activeSection = "",
}: NavbarProps) {
  const location = useLocation();

  const safeTheme = theme || "dark";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const logo = safeTheme === "light" ? "/LogoBlack.webp" : "/Logo.webp";

  return (
    <nav
      className={`
        navbar
        navbar-expand-lg
        fixed-top
        custom-navbar
        ${safeTheme}
      `}
    >
      <div className="container-fluid">
        {/* LOGO */}
        <button
          className="navbar-brand btn-reset"
          onClick={() => scrollToSection("hero")}
        >
          <img src={logo} alt="Acento" className="navbar-logo" />
        </button>

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
            <button
              className={`nav-link ${
                activeSection === "methodology" ? "active" : ""
              }`}
              onClick={() => scrollToSection("methodology")}
            >
              Methodology
            </button>

            {/* TESTIMONIALS */}
            <button
              className={`nav-link ${
                activeSection === "testimonials" ? "active" : ""
              }`}
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </button>

            {/* PRICING */}
            <button
              className={`nav-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
              onClick={() => (window.location.href = "/pricing")}
            >
              Pricing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
