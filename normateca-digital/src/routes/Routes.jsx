import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormatecaPage from "../pages/NormatecaPage";
import LeyesPage from "../pages/LeyesPage";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<NormatecaPage />} />
        <Route path="/leyes" element={<LeyesPage />} />
      </Routes>
    </BrowserRouter>
  );
}