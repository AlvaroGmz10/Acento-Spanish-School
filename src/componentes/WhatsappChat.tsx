import { useState } from "react";
import "./WhatsappChat.css";

const PHONE = "573218948720";

const messages = [
  "Hello",
  "Quiero conocer precios",
  "¿Qué fechas tienen disponibles?",
  "Quiero reservar una experiencia",
];

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const send = (text: string) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={`wa-box ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* HEADER */}
      <div className="wa-header">
        <div className="wa-avatar">💬</div>
        <div>
          <strong>WhatsApp</strong>
          <span>Respuestas rápidas</span>
        </div>
      </div>

      {/* MENSAJES */}
      <div className="wa-body">
        {messages.map((msg, i) => (
          <button key={i} onClick={() => send(msg)}>
            {msg}
          </button>
        ))}
      </div>

      {/* BOTON */}
      <div className="wa-fab">
        <i className="bi bi-whatsapp"></i>
      </div>
    </div>
  );
}
