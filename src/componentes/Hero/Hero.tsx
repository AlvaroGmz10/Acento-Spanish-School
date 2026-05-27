import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay" />

      <div className="hero-content container">
        <span className="hero-badge">Authentic Cartagena Experiences</span>

        <h1>
          Speak Spanish from day one <br></br>
          in Cartagena
        </h1>

        <p>
          Private, dynamic Spanish lessons designed for travelers who want real
          cultural immersion — not just classroom theory.
        </p>

        <div className="hero-buttons">
          <a href="#experiences" className="btn btn-warning">
            Why Us?
          </a>
          <button
            className="btn btn-outline-light"
            onClick={() => navigate("/pricing")}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
}
