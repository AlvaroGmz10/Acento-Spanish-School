import "./Methodology.css";

const Methodology = () => {
  return (
    <section id="methodology" className="methodology-section">
      <div className="container">
        <div className="methodology-wrapper">
          {/* LEFT CONTENT */}
          <div className="methodology-content">
            <span className="method-subtitle">OUR METHODOLOGY</span>

            <h2>
              Learn Spanish Through
              <span> Real Experiences</span>
            </h2>

            <p>
              At Acento Spanish School, we focus on practical communication,
              cultural immersion, and personalized learning experiences that
              help students speak confidently in real situations.
            </p>

            <div className="method-list">
              <div className="method-item">
                <h4>Personalized Lessons</h4>
                <p>Classes adapted to your level and learning goals.</p>
              </div>

              <div className="method-item">
                <h4>Conversation First</h4>
                <p>Speak Spanish from your very first lesson.</p>
              </div>

              <div className="method-item">
                <h4>Cultural Immersion</h4>
                <p>Learn while exploring Cartagena and Colombian culture.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLLAGE */}
          <div className="methodology-images-card">
            <div className="img img-main">
              <img src="/imagenes/Meto2.jpg" alt="Spanish class" />
            </div>

            <div className="img img-top">
              <img src="/imagenes/Meto3.png" alt="Students learning Spanish" />
            </div>

            <div className="img img-bottom">
              <img src="/imagenes/Meto1.jpg" alt="Spanish immersion activity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
