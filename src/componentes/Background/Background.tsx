import { useEffect, useRef, useState } from "react";

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
    desktopImage: null,
    mobileImage: null,
    theme: "dark",
  },
];

/* =====================================
   ANIMATION CONTROL
===================================== */

const TRANSITION_DURATION = 650;

/* =====================================
   OVERLAY PRE-DELAY
   Tiempo que se oscurece la pantalla
   antes de cambiar la imagen
===================================== */

const OVERLAY_PRE_DELAY = 400;

export default function Background({ setTheme }: any) {
  const getImage = (section: any) => {
    const isMobile = window.innerWidth <= 768;

    return isMobile ? section.mobileImage : section.desktopImage;
  };

  const [current, setCurrent] = useState({
    ...sections[0],
    image: getImage(sections[0]),
  });

  const [next, setNext] = useState<any>(null);

  const [animate, setAnimate] = useState(false);

  const [overlayActive, setOverlayActive] = useState(false);

  const currentSectionRef = useRef(sections[0].id);

  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      let active = sections[0];

      if (window.scrollY < 120) {
        active = sections[0];
      } else {
        sections.forEach((section) => {
          const el = document.getElementById(section.id);

          if (!el) return;

          const rect = el.getBoundingClientRect();

          const trigger = window.innerHeight * 0.35;

          if (rect.top <= trigger && rect.bottom >= trigger) {
            active = section;
          }
        });
      }

      if (active.id === currentSectionRef.current) {
        return;
      }

      currentSectionRef.current = active.id;

      const activeWithImage = {
        ...active,
        image: getImage(active),
      };

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      /* =========================
         STEP 1
         ACTIVAR OVERLAY
      ========================= */

      setOverlayActive(true);

      /* =========================
         STEP 2
         ESPERAR UN MOMENTO
      ========================= */

      timeoutRef.current = window.setTimeout(() => {
        /* =========================
           STEP 3
           CAMBIO DE IMAGEN
        ========================= */

        setNext(activeWithImage);

        requestAnimationFrame(() => {
          setAnimate(true);
        });

        /* =========================
           STEP 4
           FINALIZAR
        ========================= */

        window.setTimeout(() => {
          setCurrent(activeWithImage);

          setTheme(active.theme);

          setNext(null);

          setAnimate(false);

          setOverlayActive(false);
        }, TRANSITION_DURATION);
      }, OVERLAY_PRE_DELAY);
    };

    const handleResize = () => {
      const activeSection = sections.find(
        (s) => s.id === currentSectionRef.current,
      );

      if (!activeSection) return;

      setCurrent({
        ...activeSection,
        image: getImage(activeSection),
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      window.removeEventListener("resize", handleResize);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [setTheme]);

  return (
    <div className="bg-container">
      <div
        className={`bg-layer current ${animate ? "fade-out" : ""}`}
        style={{
          backgroundImage: current.image ? `url(${current.image})` : "none",
        }}
      />

      {next && (
        <div
          className={`bg-layer next ${animate ? "fade-in" : ""}`}
          style={{
            backgroundImage: next.image ? `url(${next.image})` : "none",
          }}
        />
      )}

      <div className={`overlay-global ${overlayActive ? "active" : ""}`} />
    </div>
  );
}
