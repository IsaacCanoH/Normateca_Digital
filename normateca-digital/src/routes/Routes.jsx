import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormatecaPage from "../pages/NormatecaPage";
import LeyesPage from "../pages/LeyesPage";
import EticaPage from "../pages/EticaPage";
import EstandaresPage from "../pages/EstandaresPage";
import ScrollToTop from "../components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<NormatecaPage />} />
        <Route path="/leyes" element={<LeyesPage />} />
        <Route path="/etica" element={<EticaPage />} />
        <Route path="/estandares" element={<EstandaresPage />} />
      </Routes>
    </BrowserRouter>
  );
}