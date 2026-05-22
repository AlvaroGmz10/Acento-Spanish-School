import "./Testimonios.css";

const testimonios = [
  {
    type: "video",
    src: "/videos/Gaby Trumble.mp4",
    poster: "/imagenes/Gaby Trumble preview.webp",
    quote: "¡Una experiencia increíble aprendiendo español en Cartagena!",
    author: "Gaby Trumble",
  },

  {
    type: "text",
    quote:
      "Excellent place to learn spanish, I really enjoy and improve my skills. Really want to go back to practice. Thanks a lot and completely recommended!!!! Luis Carrillo is a great professor, thanks for teaching me everything about the lenguage and the caribbean and Cartagena culture!!!",
    author: "David Cueto",
    rating: 5,
    googleUrl:
      "https://www.google.com/search?q=Acento+Spanish+School+Cartagena#mpd=~16546020079512263596/customers/reviews",
  },
  {
    type: "video",
    src: "/videos/Karin Hangarment.mp4",
    poster: "/imagenes/Hero.webp",
    quote:
      "Clases cortas, precisas y con mucha práctica real. Ideal si quieres avanzar rápido.",
    author: "Karin Hangarment",
  },
  {
    type: "text",
    quote:
      "I can’t recommend Luis enough! I only had three lessons because I didn’t have much time in Cartagena but I learnt so much! Super helpful and soo informative. Really took the time to go through each step with me. Mucho gracias Luis, gracias por su ayuda",
    author: "Izzy Considine",
    rating: 5,
    googleUrl:
      "https://www.google.com/search?q=Acento+Spanish+School+Cartagena#mpd=~16546020079512263596/customers/reviews",
  },
  {
    type: "image",
    src: "/imagenes/Fleur Kentie.webp",
    quote:
      "Fijne Spaanse school! Luis is een goeie leraar, neemt de tijd voor je maar leert je ook heel veel in een korte tijd. Zeker een aanrader!",
    author: "Fleur Kentie",
  },
  {
    type: "text",
    quote:
      "J'ai fait une semaine de cours avec professeur Louis afin d'ameliorer mon espagnol. Cela m'a donné les ressources nessaires a passer a un niveau supérieur! Louis est tres attentif et pratiquera votre prononciation !! Je vous recomande",
    author: "Vincent Gallaguer-Duguay",
    rating: 5,
    googleUrl:
      "https://www.google.com/search?q=Acento+Spanish+School+Cartagena#mpd=~16546020079512263596/customers/reviews",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="testimonios">
      <div className="container">
        <div className="testimonios-wrapper">
          <span className="testimonios-eyebrow">TESTIMONIALS</span>

          <h2 className="testimonios-title">WHAT OUR STUDENTS SAY</h2>

          <p className="testimonios-lead">
            Real experiences from those who have learned Spanish with us.
          </p>

          <div className="testimonios-grid">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="testimonio-card">
                {testimonio.type === "video" && (
                  <div className="testimonio-media">
                    <video controls poster={testimonio.poster}>
                      <source src={testimonio.src} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>
                )}
                {testimonio.type === "image" && (
                  <div className="testimonio-media">
                    <img src={testimonio.src} alt={testimonio.author} />
                  </div>
                )}
                <div className="testimonio-content">
                  <p>"{testimonio.quote}"</p>
                  <cite>- {testimonio.author}</cite>
                  {testimonio.rating && (
                    <div className="stars">{"★".repeat(testimonio.rating)}</div>
                  )}
                  {testimonio.googleUrl && (
                    <a
                      href={testimonio.googleUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="google-badge"
                    >
                      <span className="google-icon" aria-hidden="true">
                        <svg viewBox="0 0 46 46" width="20" height="20">
                          <path
                            fill="#4285F4"
                            d="M23 9.5c3.9 0 7.2 1.5 9.5 4l7.1-7.1C36.1 2.9 29.9 0 23 0 14.7 0 7.7 3.9 3.4 9.8l8.3 6.5C13.9 13.2 18.1 9.5 23 9.5z"
                          />
                          <path
                            fill="#34A853"
                            d="M44.5 23c0-1.5-.1-2.9-.4-4.3H23v8.1h11.6c-.5 2.6-2 4.8-4.3 6.3l6.9 5.3C41.5 35.8 44.5 29.9 44.5 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M10.2 27.1c-.9-2.6-.9-5.3 0-7.9L1.9 12.7C-.4 16.9-.4 21.2 1.9 25.3l8.3-6.1z"
                          />
                          <path
                            fill="#EA4335"
                            d="M23 45.5c6.7 0 12.4-2.2 16.5-6l-7.9-6.1c-2.2 1.5-5 2.4-8.6 2.4-4.6 0-8.5-2.8-9.9-6.7l-8.3 6.5C7.7 41.6 14.7 45.5 23 45.5z"
                          />
                        </svg>
                      </span>
                      Ver reseña en Google
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
