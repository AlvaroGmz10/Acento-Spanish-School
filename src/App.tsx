import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { HomePage, PricingPage } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/pricing" element={<PricingPage />} />
      </Routes>

      <Analytics />

      <SpeedInsights />
    </BrowserRouter>
  );
}

export default App;
