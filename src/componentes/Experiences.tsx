import { useReveal } from "./useReveal";
import "./Experiences.css";

export default function Experiences() {
  const { ref, visible } = useReveal();
  const phone = "573001234567";

  return (
    <section id="experiences" className="section">
      <div ref={ref} className={`content left ${visible ? "show" : ""}`}>
        <h2>Experiencias</h2>

        <div className="cards">
          <div className="card">
            <div className="card-overlay">
              <h3>Cocina</h3>
              <a href={`https://wa.me/${phone}`} target="_blank">
                Reservar
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-overlay">
              <h3>Baile</h3>
              <a href={`https://wa.me/${phone}`} target="_blank">
                Reservar
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-overlay">
              <h3>Historia</h3>
              <a href={`https://wa.me/${phone}`} target="_blank">
                Reservar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
