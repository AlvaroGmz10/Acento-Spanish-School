import Home from "./componentes/Home";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <Home />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
