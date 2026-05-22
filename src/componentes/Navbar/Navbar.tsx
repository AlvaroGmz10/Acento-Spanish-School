import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  theme?: string;
  activeSection?: string;
}

export default function Navbar({
  theme = "dark",
  activeSection = "",
}: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const safeTheme = theme || "dark";
  const currentSection = activeSection || "";

  const logo = safeTheme === "light" ? "/LogoBlack.webp" : "/Logo.webp";

  const scrollToSection = (id: string) => {
    // Si NO estamos en home, primero navegamos y luego hacemos scroll
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.getElementById(id);

        el?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);

      return;
    }

    // Si ya estamos en home, scroll directo
    const el = document.getElementById(id);

    el?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const goToPricing = () => {
    navigate("/pricing");
  };

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
                currentSection === "methodology" ? "active" : ""
              }`}
              onClick={() => scrollToSection("methodology")}
            >
              Methodology
            </button>

            {/* TESTIMONIALS */}
            <button
              className={`nav-link ${
                currentSection === "testimonios" ? "active" : ""
              }`}
              onClick={() => scrollToSection("testimonios")}
            >
              Testimonials
            </button>

            {/* PRICING */}
            <button
              className={`nav-link ${
                location.pathname === "/pricing" ? "active" : ""
              }`}
              onClick={goToPricing}
            >
              Pricing
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
