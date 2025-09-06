import { useState, useEffect } from "react"
import "../styles/normateca.page.css"

export default function NormatecaDigital() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showModal, setShowModal] = useState(false)

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

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="navbar-brand">
          Normateca Digital
        </a>
        <ul className="navbar-nav">
          <li>
            <a href="#leyes">Leyes</a>
          </li>
          <li>
            <a href="#estandares">Estándares</a>
          </li>
        </ul>
      </nav>

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <img src={slide.image || "/placeholder.svg"} alt={slide.alt} />
              <div className="carousel-overlay">
                <h1 className="carousel-title">Aspectos éticos y legales del manejo de la información</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="info-card">
          <h2>¿Qué son los Aspectos éticos y legales del manejo de la información?</h2>
          <p>
            Los aspectos éticos y legales del manejo de la información constituyen un conjunto fundamental de
            principios, normas y regulaciones que rigen la recolección, procesamiento, almacenamiento, uso y
            distribución de datos e información en el ámbito digital y físico.
          </p>
          <p>
            Estos aspectos incluyen la protección de la privacidad, el consentimiento informado, la transparencia en el
            uso de datos, la seguridad de la información, el cumplimiento de marcos regulatorios como el GDPR, y la
            responsabilidad en el manejo de información sensible o personal.
          </p>
          <p>
            En el contexto de la Normateca Digital, estos principios aseguran que toda información sea manejada con
            integridad, respetando los derechos de los individuos y cumpliendo con las normativas legales vigentes,
            promoviendo así un entorno digital confiable y ético.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2025     Normateca Digital. Todos los derechos reservados. |{" "}
          <span className="footer-link" onClick={openModal}>
            Avisos de Privacidad
          </span>
        </p>
      </footer>

      {/* Modal */}
      <div className={`modal ${showModal ? "show" : ""}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h3 className="modal-title">Avisos de Privacidad</h3>
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
          </div>
          <div className="modal-body">
            <h4>Política de Privacidad - Normateca Digital</h4>
            <p>
              <strong>1. Recopilación de Información:</strong> Recopilamos información que usted nos proporciona
              directamente, como cuando se registra en nuestros servicios, utiliza nuestras herramientas digitales o se
              comunica con nosotros.
            </p>
            <p>
              <strong>2. Uso de la Información:</strong> Utilizamos su información para proporcionar, mantener y mejorar
              nuestros servicios, comunicarnos con usted y cumplir con nuestras obligaciones legales.
            </p>
            <p>
              <strong>3. Protección de Datos:</strong> Implementamos medidas de seguridad técnicas y organizativas
              apropiadas para proteger su información personal contra el acceso no autorizado, alteración, divulgación o
              destrucción.
            </p>
            <p>
              <strong>4. Derechos del Usuario:</strong> Usted tiene derecho a acceder, rectificar, cancelar u oponerse
              al tratamiento de sus datos personales, así como a la portabilidad de los mismos, conforme a la
              legislación aplicable.
            </p>
            <p>
              <strong>5. Contacto:</strong> Para ejercer sus derechos o realizar consultas sobre esta política, puede
              contactarnos a través de nuestros canales oficiales de comunicación.
            </p>
            <p>
              <em>Última actualización: Enero 2024</em>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
