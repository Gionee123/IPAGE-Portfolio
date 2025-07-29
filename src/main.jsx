import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import PortfolioTemplate from "./pages/PortfolioTemplate.jsx";
import Details from "./components/details.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<PortfolioTemplate />} />
        <Route path="/trainer/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
