import { useState, useEffect } from "react"
import { Scale, Shield, BookOpen } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/normateca.page.css"

export default function NormatecaDigital() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "imagen1.jpg",
      alt: "Documentos legales y libros de ética",
    },
    {
      image: "imagen2.jpg",
      alt: "Biblioteca digital con libros de derecho",
    },
    {
      image: "imagen3.jpg",
      alt: "Reunión profesional sobre ética de la información",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={
                  slide.image || "/placeholder.svg?height=500&width=1200&query=professional legal documents and books"
                }
                alt={slide.alt}
              />
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
              Este portal es tu punto de acceso centralizado a las principales normativas, leyes y estándares nacionales
              e internacionales que rigen el manejo de información, la protección de datos personales, la propiedad
              intelectual y la ciberseguridad. Encuentra aquí, de forma ordenada y con explicaciones sencillas, todo lo
              que necesitas para informarte y cumplir
            </p>
          </div>
        </div>

        <div className="consultation-section">
          <h3 className="consultation-title">¿Qué necesitas consultar hoy?</h3>
          <div className="cards-container">
            <div className="consultation-card">
              <div className="card-icon-section mexican-laws">
                <Scale className="card-icon" size={32} />
              </div>
              <div className="card-content">
                <h4 className="card-title">Leyes Mexicanas</h4>
                <button className="card-link">Conocer más...</button>
              </div>
            </div>

            <div className="consultation-card">
              <div className="card-icon-section info-standards">
                <Shield className="card-icon" size={32} />
              </div>
              <div className="card-content">
                <h4 className="card-title">Estándares del Manejo de la Información</h4>
                <button className="card-link">Conocer más...</button>
              </div>
            </div>

            <div className="consultation-card">
              <div className="card-icon-section ethical-aspects">
                <BookOpen className="card-icon" size={32} />
              </div>
              <div className="card-content">
                <h4 className="card-title">Aspectos Éticos y Legales del Manejo de la Información</h4>
                <button className="card-link">Conocer más...</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
