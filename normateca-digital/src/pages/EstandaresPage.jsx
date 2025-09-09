import { useState } from "react"
import { Shield, FileText, Settings, Database, Layers, X, ExternalLink } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/estandares.page.css"

const EstandaresPage = () => {
  const [selectedStandard, setSelectedStandard] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const standards = [
    {
      id: 1,
      title: "ISO 27001",
      subtitle: "Gestión de Seguridad de la Información",
      icon: Shield,
      color: "#2563eb",
      description: `<p><strong>ISO 27001</strong> es el estándar internacional líder para los sistemas de gestión de seguridad de la información (SGSI). Proporciona un marco sistemático para gestionar la información sensible de la empresa, incluida la información financiera, la propiedad intelectual, los datos de empleados y la información confiada por terceros.</p>`,
      purpose: `<p>ISO 27001 sirve para:</p>
                <ul>
                  <li><strong>Establecer un SGSI robusto:</strong> Crear un sistema integral que identifique, evalúe y trate los riesgos de seguridad de la información.</li>
                  <li><strong>Demostrar cumplimiento:</strong> Mostrar a clientes, socios y reguladores que la organización toma en serio la seguridad de la información.</li>
                  <li><strong>Mejorar la gestión de riesgos:</strong> Implementar un enfoque basado en riesgos para proteger la información crítica.</li>
                  <li><strong>Facilitar la continuidad del negocio:</strong> Asegurar que los procesos de información continúen funcionando durante interrupciones.</li>
                  <li><strong>Generar confianza:</strong> Crear confianza entre stakeholders sobre las prácticas de seguridad de la organización.</li>
                </ul>`,
      keyFeatures: [
        "Enfoque basado en procesos y gestión de riesgos",
        "Certificación independiente y reconocimiento global",
        "Mejora continua a través del ciclo PDCA",
        "Aplicable a organizaciones de cualquier tamaño y sector"
      ],
      officialLink: "https://www.iso.org/isoiec-27001-information-security.html"
    },
    {
      id: 2,
      title: "ISO 27002",
      subtitle: "Código de Práctica para Controles de Seguridad",
      icon: FileText,
      color: "#059669",
      description: `<p><strong>ISO 27002</strong> (anteriormente ISO 17799) proporciona directrices y principios generales para iniciar, implementar, mantener y mejorar la gestión de seguridad de la información en una organización. Complementa a ISO 27001 proporcionando controles específicos de seguridad.</p>`,
      purpose: `<p>ISO 27002 es útil para:</p>
                <ul>
                  <li><strong>Implementar controles específicos:</strong> Proporciona 114 controles de seguridad organizados en 14 categorías para proteger la información.</li>
                  <li><strong>Guiar la implementación:</strong> Ofrece orientación práctica sobre cómo implementar cada control de seguridad.</li>
                  <li><strong>Complementar ISO 27001:</strong> Actúa como una guía de implementación para los controles requeridos en ISO 27001.</li>
                  <li><strong>Estandarizar prácticas:</strong> Proporciona un lenguaje común y mejores prácticas reconocidas internacionalmente.</li>
                  <li><strong>Facilitar auditorías:</strong> Sirve como referencia para evaluaciones de seguridad y auditorías.</li>
                </ul>`,
      keyFeatures: [
        "114 controles de seguridad detallados",
        "Organizados en 14 categorías temáticas",
        "Orientación práctica de implementación",
        "Compatible con otros marcos de seguridad"
      ],
      officialLink: "https://www.iso.org/standard/75652.html"
    },
    {
      id: 3,
      title: "COBIT",
      subtitle: "Control Objectives for Information and Related Technologies",
      icon: Settings,
      color: "#dc2626",
      description: `<p><strong>COBIT</strong> es un marco de gobernanza y gestión de TI desarrollado por ISACA que ayuda a las empresas a crear valor óptimo desde la tecnología de la información manteniendo un equilibrio entre la realización de beneficios y la optimización de los niveles de riesgo y el uso de recursos.</p>`,
      purpose: `<p>COBIT es fundamental para:</p>
                <ul>
                  <li><strong>Gobernanza de TI:</strong> Establecer estructuras organizacionales y procesos que aseguren que TI sustente y extienda las estrategias y objetivos de la organización.</li>
                  <li><strong>Gestión de riesgos:</strong> Identificar, evaluar y mitigar riesgos relacionados con TI de manera sistemática.</li>
                  <li><strong>Alineación estratégica:</strong> Asegurar que las iniciativas de TI estén alineadas con los objetivos de negocio.</li>
                  <li><strong>Optimización de recursos:</strong> Maximizar el valor de las inversiones en TI mientras se minimizan los riesgos.</li>
                  <li><strong>Cumplimiento normativo:</strong> Facilitar el cumplimiento de regulaciones y estándares aplicables.</li>
                </ul>`,
      keyFeatures: [
        "Marco integral de gobernanza y gestión",
        "40 procesos de gobernanza y gestión",
        "Enfoque en la creación de valor empresarial",
        "Métricas y herramientas de evaluación incluidas"
      ],
      officialLink: "https://www.isaca.org/resources/cobit"
    },
    {
      id: 4,
      title: "NIST Framework",
      subtitle: "Cybersecurity Framework",
      icon: Database,
      color: "#7c3aed",
      description: `<p>El <strong>Marco de Ciberseguridad de NIST</strong> (National Institute of Standards and Technology) es una guía voluntaria desarrollada por el gobierno de Estados Unidos para ayudar a las organizaciones a gestionar y reducir el riesgo de ciberseguridad. Proporciona un lenguaje común para abordar y gestionar el riesgo de ciberseguridad.</p>`,
      purpose: `<p>El Framework de NIST sirve para:</p>
                <ul>
                  <li><strong>Mejorar la postura de ciberseguridad:</strong> Proporcionar un enfoque estructurado para identificar, proteger, detectar, responder y recuperarse de incidentes de ciberseguridad.</li>
                  <li><strong>Facilitar la comunicación:</strong> Crear un lenguaje común para discutir riesgos y controles de ciberseguridad entre diferentes stakeholders.</li>
                  <li><strong>Gestionar riesgos:</strong> Ayudar a las organizaciones a comprender, gestionar y expresar su riesgo de ciberseguridad.</li>
                  <li><strong>Flexibilidad de implementación:</strong> Adaptarse a diferentes sectores, tamaños de organización y niveles de riesgo.</li>
                  <li><strong>Mejora continua:</strong> Permitir que las organizaciones evalúen y mejoren continuamente su programa de ciberseguridad.</li>
                </ul>`,
      keyFeatures: [
        "Cinco funciones principales: Identificar, Proteger, Detectar, Responder, Recuperar",
        "Flexible y adaptable a cualquier organización",
        "Basado en estándares y mejores prácticas existentes",
        "Enfoque en la gestión de riesgos de ciberseguridad"
      ],
      officialLink: "https://www.nist.gov/cyberframework"
    },
    {
      id: 5,
      title: "ITIL",
      subtitle: "Information Technology Infrastructure Library",
      icon: Layers,
      color: "#f59e0b",
      description: `<p><strong>ITIL</strong> es un conjunto de prácticas detalladas para la gestión de servicios de TI (ITSM) que se enfoca en alinear los servicios de TI con las necesidades del negocio. ITIL describe procesos, procedimientos, tareas y listas de verificación que no son específicos de la organización sino que pueden ser aplicados por cualquier organización hacia la gestión de servicios.</p>`,
      purpose: `<p>ITIL es valioso para:</p>
                <ul>
                  <li><strong>Mejorar la calidad del servicio:</strong> Establecer procesos estandarizados que mejoren la consistencia y calidad de los servicios de TI.</li>
                  <li><strong>Optimizar costos:</strong> Reducir costos a través de la mejora de procesos y la eliminación de duplicaciones y desperdicios.</li>
                  <li><strong>Gestionar riesgos:</strong> Implementar controles y procesos que reduzcan la probabilidad e impacto de fallas de servicio.</li>
                  <li><strong>Alinear TI con el negocio:</strong> Asegurar que los servicios de TI soporten efectivamente los objetivos y procesos de negocio.</li>
                  <li><strong>Facilitar la mejora continua:</strong> Proporcionar un marco para la medición, monitoreo y mejora continua de servicios.</li>
                </ul>`,
      keyFeatures: [
        "34 prácticas de gestión organizadas en 4 dimensiones",
        "Enfoque en el valor para el cliente y stakeholders",
        "Cadena de valor del servicio (Service Value Chain)",
        "Principios rectores para toma de decisiones"
      ],
      officialLink: "https://www.axelos.com/best-practice-solutions/itil"
    }
  ]

  const openModal = (standard) => {
    setSelectedStandard(standard)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedStandard(null)
  }

  return (
    <div className="estandares-page">
      <Navbar />

      <main className="estandares-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg" alt="Estándares de Información" className="hero-image" />
            <div className="hero-overlay">
              <h1 className="hero-title">Estándares del Manejo de la Información</h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-container">
            <h2 className="intro-title">Marcos y Estándares Internacionales</h2>
            <p className="intro-text">
              Los estándares internacionales proporcionan marcos estructurados y mejores prácticas para la gestión 
              segura, eficiente y efectiva de la información. Estos estándares ayudan a las organizaciones a 
              establecer controles robustos, gestionar riesgos y asegurar la calidad en el manejo de sus activos 
              de información.
            </p>
          </div>
        </section>

        {/* Standards Cards */}
        <section className="standards-section">
          <div className="standards-container">
            <div className="standards-grid">
              {standards.map((standard) => {
                const IconComponent = standard.icon
                return (
                  <div key={standard.id} className="standard-card">
                    <div className="card-color-section" style={{ backgroundColor: standard.color }}>
                      <div className="floating-elements">
                        <Settings className="floating-icon settings-1" size={18} />
                        <Shield className="floating-icon shield-1" size={16} />
                        <Database className="floating-icon database-1" size={20} />
                        <FileText className="floating-icon file-1" size={14} />
                      </div>
                    </div>

                    <div className="icon-container">
                      <div className="icon-circle" style={{ borderColor: standard.color }}>
                        <IconComponent size={32} style={{ color: standard.color }} />
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="standard-title">{standard.title}</h3>
                      <p className="standard-subtitle">{standard.subtitle}</p>
                      <button
                        className="info-button"
                        onClick={() => openModal(standard)}
                        style={{ backgroundColor: standard.color }}
                      >
                        Ver Información
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {showModal && selectedStandard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ backgroundColor: selectedStandard.color }}>
              <div className="modal-icon">
                <selectedStandard.icon size={28} />
              </div>
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedStandard.title}</h2>
                <p className="modal-subtitle">{selectedStandard.subtitle}</p>
              </div>
              <button className="close-button" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="info-section">
                <div className="info-item">
                  <h4 className="info-title">¿Qué es?</h4>
                  <div className="info-text" dangerouslySetInnerHTML={{ __html: selectedStandard.description }} />
                </div>

                <div className="info-item">
                  <h4 className="info-title">¿Para qué sirve?</h4>
                  <div className="info-text" dangerouslySetInnerHTML={{ __html: selectedStandard.purpose }} />
                </div>

                <div className="info-item">
                  <h4 className="info-title">Características Principales</h4>
                  <div className="features-list">
                    {selectedStandard.keyFeatures.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-bullet" style={{ backgroundColor: selectedStandard.color }}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="info-item">
                  <h4 className="info-title">Información Oficial</h4>
                  <a
                    href={selectedStandard.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="official-link"
                    style={{ color: selectedStandard.color }}
                  >
                    <ExternalLink size={18} />
                    Visitar sitio oficial
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

export default EstandaresPage