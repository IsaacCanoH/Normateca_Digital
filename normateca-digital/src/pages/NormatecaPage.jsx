import { useState, useEffect } from "react";
import { Scale, Shield, BookOpen, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/normateca.page.css";

const NormatecaPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
      alt: "Documentos legales y libros de ética",
    },
    {
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      alt: "Biblioteca digital con libros de derecho",
    },
    {
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      alt: "Reunión profesional sobre ética de la información",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="carousel-container">
        <div
          className="carousel"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.image} alt={slide.alt} />
              <div className="carousel-overlay">
                <h1 className="carousel-title">NORMATECA DIGITAL</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="main-content">
        <div className="info-card">
          <h2 className="info-title">Bienvenido a la Normateca Digital</h2>
          <div className="info-content text-center">
            <p className="info-paragraph text-lg leading-relaxed max-w-4xl mx-auto">
              Este portal es tu punto de acceso centralizado a las principales
              normativas, leyes y estándares nacionales e internacionales que
              rigen el manejo de información, la protección de datos personales,
              la propiedad intelectual y la ciberseguridad. Encuentra aquí, de
              forma ordenada y con explicaciones sencillas, todo lo que
              necesitas para informarte y cumplir
            </p>
          </div>
        </div>

        <div className="consultation-section">
          <h3 className="consultation-title">¿Qué necesitas consultar hoy?</h3>
          <div className="cards-container">
            <div className="consultation-card">
              <div className="card-icon-section ethical-aspects">
                <div className="icon-wrapper">
                  <BookOpen className="card-icon" size={40} />
                </div>
                <div className="card-pattern"></div>
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Aspectos Éticos y Legales del Manejo de la Información
                </h4>
                <p className="card-description">
                  Comprende los principios éticos y marcos legales que guían el
                  uso responsable de la información.
                </p>
                <button
                  className="card-button"
                  onClick={() => navigate("/etica")}
                >
                  <span>Conocer más</span>
                  <ArrowRight className="button-icon" size={16} />
                </button>
              </div>
            </div>

            <div className="consultation-card">
              <div className="card-icon-section mexican-laws">
                <div className="icon-wrapper">
                  <Scale className="card-icon" size={40} />
                </div>
                <div className="card-pattern"></div>
              </div>
              <div className="card-content">
                <h4 className="card-title">Leyes Mexicanas</h4>
                <p className="card-description">
                  Consulta las principales leyes y normativas mexicanas
                  relacionadas con el manejo de información.
                </p>
                <button
                  className="card-button"
                  onClick={() => navigate("/leyes")}
                >
                  <span>Conocer más</span>
                  <ArrowRight className="button-icon" size={16} />
                </button>
              </div>
            </div>

            <div className="consultation-card">
              <div className="card-icon-section info-standards">
                <div className="icon-wrapper">
                  <Shield className="card-icon" size={40} />
                </div>
                <div className="card-pattern"></div>
              </div>
              <div className="card-content">
                <h4 className="card-title">
                  Estándares del Manejo de la Información
                </h4>
                <p className="card-description">
                  Explora los estándares internacionales para el manejo seguro y
                  eficiente de la información.
                </p>
                <button 
                  className="card-button"
                  onClick={() => navigate("/estandares")}
                >
                  <span>Conocer más</span>
                  <ArrowRight className="button-icon" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NormatecaPage;