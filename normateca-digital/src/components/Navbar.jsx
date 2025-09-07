import { useState } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.component.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-brand"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
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
            <span
              onClick={() => navigate("/leyes")}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Leyes Mexicanas
            </span>
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

      <div
        className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav-open" : ""}`}
      >
        <a
          href="#leyes"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mobile-nav-link"
        >
          Leyes
        </a>
        <a
          href="#estandares"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mobile-nav-link"
        >
          Estándares
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
