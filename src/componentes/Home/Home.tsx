import { useEffect, useState } from "react";

import Navbar from "../Navbar";
import Hero from "../Hero";
import WhatsappChat from "../WhatsappChat";
import Background from "../Background";
import Methodology from "../Methodology";
import Testimonios from "../Testimonios";

const sections = ["hero", "methodology", "testimonios"];

export default function Home() {
  // =========================
  // THEME
  // =========================

  const [theme, setTheme] = useState("dark");

  // =========================
  // ACTIVE SECTION
  // =========================

  const [activeSection, setActiveSection] = useState("hero");

  // =========================
  // ACTIVE SECTION DETECTION
  // =========================

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          const rect = element.getBoundingClientRect();

          const trigger = window.innerHeight * 0.3;

          if (rect.top <= trigger && rect.bottom >= trigger) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // initial detection
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // HASH SCROLL
  // =========================

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace("#", "");

      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, []);

  // =========================
  // RENDER
  // =========================

  return (
    <>
      <Background setTheme={setTheme} />

      <Navbar theme={theme} activeSection={activeSection} />

      <Hero />

      <Methodology />

      <Testimonios />

      <WhatsappChat />
    </>
  );
}
