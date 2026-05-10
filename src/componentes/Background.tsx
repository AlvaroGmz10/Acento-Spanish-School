import { useEffect, useState } from "react";
import "./Background.css";

const sections = [
  {
    id: "hero",
    desktopImage: "/imagenes/Hero.webp",
    mobileImage: "/imagenes/HeroMobile.webp",
    theme: "dark",
  },
  {
    id: "methodology",
    desktopImage: "/imagenes/Fondo.webp",
    mobileImage: "/imagenes/FondoMobile.webp",
    theme: "dark",
  },
  {
    id: "testimonios",
    desktopImage: null, // No background image for testimonials
    mobileImage: null,
    theme: "light",
  },
];

export default function Background({ setTheme }: any) {
  const isMobile = window.innerWidth <= 768;

  const getImage = (section: any) =>
    isMobile ? section.mobileImage : section.desktopImage;

  const [current, setCurrent] = useState({
    ...sections[0],
    image: getImage(sections[0]),
  });

  const [next, setNext] = useState({
    ...sections[0],
    image: getImage(sections[0]),
  });

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

      const activeWithImage = {
        ...active,
        image: getImage(active),
      };

      if (active.id !== current.id) {
        setNext(activeWithImage);
        setAnimate(true);

        setTimeout(() => {
          setCurrent(activeWithImage);
          setTheme(active.theme);
          setAnimate(false);
        }, 600);
      }
    };

    const handleResize = () => {
      const updatedCurrent = {
        ...current,
        image: getImage(current),
      };

      setCurrent(updatedCurrent);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [current, setTheme]);

  return (
    <div className="bg-container">
      <div
        className="bg-layer current"
        style={{
          backgroundImage: current.image ? `url(${current.image})` : 'none',
        }}
      />

      <div
        className={`bg-layer next ${animate ? "slide" : ""}`}
        style={{
          backgroundImage: next.image ? `url(${next.image})` : 'none',
        }}
      />
    </div>
  );
}
