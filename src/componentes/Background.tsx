import { useEffect, useState } from "react";
import "./Background.css";

const sections = [
  { id: "hero", image: "/imagenes/Hero1.webp", theme: "dark" },
  { id: "about", image: "/imagenes/Fondo.jpeg", theme: "dark" },
  { id: "experiences", image: "/imagenes/hero.jpg", theme: "dark" },
];

export default function Background({ setTheme }: any) {
  const [current, setCurrent] = useState(sections[0]);
  const [next, setNext] = useState(sections[0]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let active = sections[0];

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            active = section;
          }
        }
      });

      if (active.id !== current.id) {
        setNext(active);
        setAnimate(true);

        setTimeout(() => {
          setCurrent(active);
          setTheme(active.theme);
          setAnimate(false);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [current]);

  return (
    <div className="bg-container">
      <div
        className="bg-layer current"
        style={{ backgroundImage: `url(${current.image})` }}
      />

      <div
        className={`bg-layer next ${animate ? "slide" : ""}`}
        style={{ backgroundImage: `url(${next.image})` }}
      />
    </div>
  );
}
