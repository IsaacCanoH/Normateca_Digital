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
            <span
              onClick={() => navigate("/etica")}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Aspectos Éticos y Legales
            </span>
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
            <span
              onClick={() => navigate("/estandares")}
              className="nav-link"
              style={{ cursor: "pointer" }}
            >
              Estándares Manejo Información
            </span>
          </li>
        </ul>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`mobile-nav ${isMobileMenuOpen ? "mobile-nav-open" : ""}`}
      >
        <span
          onClick={() => {
            navigate("/etica");
            setIsMobileMenuOpen(false);
          }}
          className="mobile-nav-link"
          style={{ cursor: "pointer" }}
        >
          Aspectos Éticos
        </span>
        <span
          onClick={() => {
            navigate("/leyes");
            setIsMobileMenuOpen(false);
          }}
          className="mobile-nav-link"
          style={{ cursor: "pointer" }}
        >
          Leyes Mexicanas
        </span>
        <span
          onClick={() => {
            navigate("/estandares");
            setIsMobileMenuOpen(false);
          }}
          className="mobile-nav-link"
          style={{ cursor: "pointer" }}
        >
          Estándares
        </span>
      </div>
    </nav>
  );
};

export default Navbar;