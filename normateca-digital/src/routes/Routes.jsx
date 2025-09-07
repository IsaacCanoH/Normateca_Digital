import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormatecaPage from "../pages/NormatecaPage";
import LeyesPage from "../pages/LeyesPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormatecaPage />} />
        <Route path="/leyes" element={<LeyesPage />} />
      </Routes>
    </BrowserRouter>
  );
}