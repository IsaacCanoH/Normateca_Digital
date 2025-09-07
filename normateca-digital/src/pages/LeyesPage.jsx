import { useState } from "react"
import { Scale, Book, FileText, ExternalLink } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/leyes.page.css"

const LeyesPage = () => {
  const [selectedLaw, setSelectedLaw] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const laws = [
    {
      id: 1,
      title: "Ley General de Protección de Datos Personales de México",
      color: "#2563eb",
      description: "Regula el tratamiento de datos personales en posesión de particulares",
      purpose: `El propósito central de esta ley es empoderarte y darte control sobre tu información personal. Sirve para:

                • Protegerte: Evitar el uso malintencionado, la divulgación no autorizada o el robo de tu información personal (como tu nombre, dirección, teléfono, CURP, etc.).

                • Obligar a las organizaciones: Exigirles que te informen de manera clara y sencilla para qué van a usar tus datos a través de un Aviso de Privacidad.

                • Darte derechos (Derechos ARCO): Garantizarte la posibilidad de Acceder a tus datos, Rectificarlos si son incorrectos, Cancelarlos cuando ya no quieras que los sigan usando y Oponerte a ciertos usos de los mismos.

                • Establecer sanciones: Aplicar multas a aquellas organizaciones que no cumplan con las disposiciones de la ley.`,
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
    },
    {
      id: 2,
      title: "Ley de Propiedad Industrial",
      color: "#dc2626",
      description: "Protege los derechos de propiedad industrial como patentes, marcas y diseños",
      purpose: "Fomentar la innovación y proteger los derechos de los inventores y creadores",
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/50.pdf",
    },
    {
      id: 3,
      title: "Ley Federal de Derechos de Autor",
      color: "#059669",
      description: "Protege los derechos morales y patrimoniales de los autores",
      purpose: "Salvaguardar los derechos de los creadores de obras literarias y artísticas",
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/122_010720.pdf",
    },
    {
      id: 4,
      title: "Código Penal Federal",
      color: "#7c3aed",
      description: "Define los delitos y las penas aplicables en el ámbito federal",
      purpose: "Establecer el marco jurídico para la persecución de delitos federales",
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/9_010720.pdf",
    },
  ]

  const openModal = (law) => {
    setSelectedLaw(law)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedLaw(null)
  }

  return (
    <div className="leyes-page">
      <Navbar />

      <main className="leyes-main">
        {/* Hero Section with Image */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img
              src="/imagen4.jpg"
              alt="Leyes Mexicanas"
              className="hero-image"
            />
            <div className="hero-overlay">
              <h1 className="hero-title">Leyes Mexicanas</h1>
            </div>
          </div>
        </section>

        {/* Laws Cards Section */}
        <section className="laws-section">
          <div className="laws-container">
            <div className="laws-grid">
              {laws.map((law) => (
                <div key={law.id} className="law-card">
                  <div className="card-color-section" style={{ backgroundColor: law.color }}>
                    <Book className="floating-icon book-1" size={20} />
                    <FileText className="floating-icon file-1" size={18} />
                    <Book className="floating-icon book-2" size={16} />
                    <FileText className="floating-icon file-2" size={22} />
                  </div>

                  <div className="scale-icon-container">
                    <div className="scale-circle" style={{ borderColor: law.color }}>
                      <Scale size={24} style={{ color: law.color }} />
                    </div>
                  </div>

                  <div className="card-content">
                    <h3 className="law-title">{law.title}</h3>
                    <button
                      className="info-button"
                      onClick={() => openModal(law)}
                      style={{ backgroundColor: law.color }}
                    >
                      Ver Información
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {showModal && selectedLaw && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ backgroundColor: selectedLaw.color }}>
              <h2 className="modal-title">{selectedLaw.title}</h2>
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
            </div>

            <div className="modal-body">
              <div className="info-section">
                <div className="info-item">
                  <h4 className="info-title">¿Qué es?</h4>
                  <p className="info-text">{selectedLaw.description}</p>
                </div>

                <div className="info-item">
                  <h4 className="info-title">¿Para qué sirve?</h4>
                  <div className="info-text" style={{ whiteSpace: "pre-line" }}>
                    {selectedLaw.purpose}
                  </div>
                </div>

                <div className="info-item">
                  <h4 className="info-title">Consulta la ley completa</h4>
                  <a
                    href={selectedLaw.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="official-link"
                    style={{ color: selectedLaw.color }}
                  >
                    <ExternalLink size={18} />
                    Abrir enlace
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeyesPage
