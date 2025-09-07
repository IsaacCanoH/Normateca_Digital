import { useState } from "react"
import { Scale, Book, FileText, ExternalLink, X } from "lucide-react"
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
      description: `<p>La <strong>Ley General de Protección de Datos Personales (LGPDP)</strong> es la legislación nacional que reconoce y regula el derecho fundamental que tienen todas las personas a la protección de sus datos personales. Establece las reglas, principios y obligaciones que deben seguir las empresas, instituciones gubernamentales y cualquier organización (denominadas <strong>"Sujetos Obligados"</strong>) cuando recaban, almacenan, utilizan o divulgan la información personal de los individuos.</p>`,
      purpose: `<p>El propósito central de esta ley es <strong>empoderarte y darte control</strong> sobre tu información personal. Sirve para:</p>
                <ul>
                  <li><strong>Protegerte:</strong> Evitar el uso malintencionado, la divulgación no autorizada o el robo de tu información personal (como tu nombre, dirección, teléfono, CURP, etc.).</li>
                  <li><strong>Obligar a las organizaciones:</strong> Exigirles que te informen de manera clara y sencilla para qué van a usar tus datos a través de un Aviso de Privacidad.</li>
                  <li><strong>Darte derechos (Derechos ARCO):</strong> Garantizarte la posibilidad de Acceder a tus datos, Rectificarlos si son incorrectos, Cancelarlos cuando ya no quieras que los sigan usando y Oponerte a ciertos usos de los mismos.</li>
                  <li><strong>Establecer sanciones:</strong> Aplicar multas a aquellas organizaciones que no cumplan con las disposiciones de la ley.</li>
                </ul>`,
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf",
    },
    {
      id: 2,
      title: "Ley de Propiedad Industrial",
      color: "#dc2626",
      description: `<p>La <strong>Ley de la Propiedad Industrial</strong> es la norma legal en México que protege las creaciones intelectuales de aplicación industrial o comercial, así como los signos distintivos que utilizan las empresas y los productores. Su objetivo es fomentar la actividad inventiva, la inversión y la competencia leal, otorgando <strong>derechos exclusivos temporales</strong> a los creadores y titulares sobre sus activos intangibles.</p>`,
      purpose: `<p>Esta ley es fundamental para el ecosistema de innovación y negocios porque:</p>
                <ul>
                  <li><strong>Protege las invenciones:</strong> Otorga patentes para invenciones nuevas y modelos de utilidad para mejoras a herramientas o procesos, dándole al inventor el derecho exclusivo de explotarlos comercialmente por un tiempo determinado.</li>
                  <li><strong>Resguarda los signos distintivos:</strong> Protege marcas (nombres, logos, eslóganes), nombres comerciales y avisos comerciales, impidiendo que terceros los usen sin autorización y generando confianza en los consumidores.</li>
                  <li><strong>Establece figuras de protección única:</strong> Regula los secretos industriales (información confidencial de valor comercial) y los diseños industriales (apariencia estética de un producto).</li>
                  <li><strong>Evita la competencia desleal:</strong> Sanciona actos que busquen confundir al público o aprovecharse indebidamente de la reputación de un competidor.</li>
                </ul>`,
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPPI.pdf",
    },
    {
      id: 3,
      title: "Ley Federal de Derechos de Autor",
      color: "#059669",
      description: `<p>La <strong>Ley Federal del Derecho de Autor (LFDA)</strong> es la legislación mexicana que protege los derechos de los creadores sobre sus obras literarias y artísticas. A diferencia de la propiedad industrial, esta ley se enfoca en la protección de la <strong>expresión original de ideas</strong>, no de las ideas en sí mismas, desde el momento en que se fijan en un soporte tangible. El <strong>Instituto Nacional del Derecho de Autor (INDAUTOR)</strong> es la autoridad encargada de su aplicación.</p>`,
      purpose: `<p>Esta ley es fundamental para garantizar que los artistas, escritores, músicos, programadores y demás creadores puedan <strong>beneficiarse de su trabajo y controlar su uso</strong>. Sus funciones principales son:</p>
                <ul>
                  <li><strong>Derechos Morales:</strong> Permanentes, irrenunciables e inalienables. Incluyen el derecho a ser reconocido como autor y a oponerse a modificaciones que dañen su reputación.</li>
                  <li><strong>Derechos Patrimoniales:</strong> Permiten al autor explotar económicamente su obra (reproducción, distribución, venta, exhibición pública) y pueden transferirse a terceros.</li>
                  <li><strong>Proteger obras:</strong> Ampara una amplia gama de creaciones, desde libros, música y pinturas, hasta software, coreografías, mapas y bases de datos.</li>
                  <li><strong>Regular el uso justo:</strong> Define las limitaciones a estos derechos, como la cita textual o la reproducción con fines educativos, para equilibrar la protección del autor con el interés público.</li>
                  <li><strong>Registrar obras:</strong> Ofrece un sistema de registro público que sirve como prueba del reconocimiento de la autoría y la fecha de creación.</li>
                </ul>`,
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LFDA.pdf",
    },
    {
      id: 4,
      title: "Código Penal Federal",
      color: "#7c3aed",
      description: `<p>El <strong>Código Penal Federal (CPF)</strong> es el conjunto de leyes que define los delitos considerados graves a nivel nacional en México y establece las sanciones correspondientes (penas de prisión y multas). Para los fines de esta normateca, nos enfocamos en los <strong>delitos contra la privacidad, la propiedad intelectual y en el ámbito digital</strong> que están tipificados en este código. No es una ley especializada en un tema, sino la ley general que castiga las conductas ilícitas más graves.</p>`,
      purpose: `<p>En el contexto del manejo de información, propiedad intelectual y ética digital, el CPF sirve para:</p>
                <ul>
                  <li><strong>Proveer herramientas legales de disuasión y sanción:</strong> Establece consecuencias penales para quienes cometan delitos informáticos y violaciones graves a la privacidad y la propiedad intelectual.</li>
                  <li><strong>Tipificar delitos específicos:</strong> Define y castiga conductas como:
                    <ul>
                      <li><strong>Violación a la privacidad:</strong> Acceder, aprovechar o divulgar información personal de manera ilícita (Art. 211 bis).</li>
                      <li><strong>Delitos contra la propiedad intelectual:</strong> Reproducir, plagiar o distribuir obras protegidas (como software, música, libros) sin autorización para obtener un beneficio económico (Art. 424 y ss.).</li>
                      <li><strong>Delitos informáticos:</strong> Dañar, alterar o destruir sistemas o información electrónica (Art. 211 ter).</li>
                    </ul>
                  </li>
                  <li><strong>Complementar otras leyes:</strong> Mientras leyes como la LGPDP o la LFDA establecen las reglas y sanciones administrativas (multas), el CPF entra en acción cuando la gravedad de la conducta merece una sanción penal (cárcel).</li>
                </ul>`,
      officialLink: "https://www.diputados.gob.mx/LeyesBiblio/pdf/CPF.pdf",
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
            <img src="/imagen4.jpg" alt="Leyes Mexicanas" className="hero-image" />
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
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="info-section">
                <div className="info-item">
                  <h4 className="info-title">¿Qué es?</h4>
                  <div className="info-text" dangerouslySetInnerHTML={{ __html: selectedLaw.description }} />
                </div>

                <div className="info-item">
                  <h4 className="info-title">¿Para qué sirve?</h4>
                  <div className="info-text" dangerouslySetInnerHTML={{ __html: selectedLaw.purpose }} />
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
