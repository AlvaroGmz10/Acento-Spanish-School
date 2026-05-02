import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import About from "../componentes/About";
import WhatsappChat from "./WhatsappChat";
import Background from "../componentes/Background";
import Methodology from "./Methodology";

import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Background setTheme={setTheme} />

      <div className="overlay-global" />

      <Navbar theme={theme} />

      <Hero />

      <Methodology />

      <About />

      <WhatsappChat />
    </>
  );
}
