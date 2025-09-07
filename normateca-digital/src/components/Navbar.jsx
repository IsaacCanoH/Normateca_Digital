import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import '../styles/navbar.component.css'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <BookOpen className="navbar-icon" />
          <span>Normateca Digital</span>
        </div>

        <ul className="navbar-nav desktop-nav">
          <li>
            <a href="#aspectos" className="nav-link">
              Aspectos Éticos y Legales
            </a>
          </li>
          <li>
            <a href="#leyes" className="nav-link">
              Leyes Mexicanas
            </a>
          </li>
          <li>
            <a href="#estandares" className="nav-link">
              Estándares Manejo Información
            </a>
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav-open" : ""}`}>
        <a href="#leyes" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
          Leyes
        </a>
        <a href="#estandares" onClick={() => setIsMobileMenuOpen(false)} className="mobile-nav-link">
          Estándares
        </a>
      </div>
    </nav>
  );
};

export default Navbar;