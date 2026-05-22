import "./Hero.css";

export default function Hero() {
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
            View Experiences
          </a>

          <a href="#about" className="btn btn-outline-light">
            Discover More
          </a>
        </div>
      </div>
    </section>
  );
}
