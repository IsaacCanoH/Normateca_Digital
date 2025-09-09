import { useState } from "react"
import { Shield, Users, Eye, CheckCircle, Lock, Scale, X, ExternalLink } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/etica.page.css"

const EticaPage = () => {
  const [selectedAspect, setSelectedAspect] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const ethicalAspects = [
    {
      id: 1,
      title: "Privacidad y Protección de Datos",
      icon: Lock,
      color: "#dc2626",
      description: `<p>La <strong>privacidad y protección de datos</strong> es un derecho fundamental que garantiza que las personas tengan control sobre su información personal. Este principio ético establece que toda organización debe respetar la privacidad individual y proteger los datos personales contra el acceso no autorizado, uso indebido o divulgación.</p>`,
      purpose: `<p>Este aspecto ético es fundamental porque:</p>
                <ul>
                  <li><strong>Respeta la dignidad humana:</strong> Reconoce que las personas tienen derecho a mantener cierta información en privado y a controlar cómo se usa su información personal.</li>
                  <li><strong>Genera confianza:</strong> Las organizaciones que respetan la privacidad construyen relaciones de confianza con sus usuarios y clientes.</li>
                  <li><strong>Previene discriminación:</strong> Protege contra el uso de información personal para discriminar o tomar decisiones injustas contra las personas.</li>
                  <li><strong>Empodera a los individuos:</strong> Les da a las personas control sobre su información y les permite tomar decisiones informadas sobre compartirla.</li>
                  <li><strong>Cumple con marcos legales:</strong> Se alinea con leyes como la LGPDP en México y el GDPR en Europa.</li>
                </ul>`,
      principles: [
        "Minimización de datos: Solo recopilar información necesaria",
        "Consentimiento informado: Obtener permiso explícito",
        "Propósito limitado: Usar datos solo para fines declarados", 
        "Retención limitada: Conservar datos solo el tiempo necesario"
      ]
    },
    {
      id: 2,
      title: "Transparencia y Rendición de Cuentas",
      icon: Eye,
      color: "#2563eb",
      description: `<p>La <strong>transparencia y rendición de cuentas</strong> son principios éticos que requieren que las organizaciones sean claras, honestas y responsables sobre cómo manejan la información. Implica comunicar de manera comprensible qué información se recopila, cómo se usa, quién tiene acceso a ella y qué medidas de protección se implementan.</p>`,
      purpose: `<p>Estos principios son esenciales para:</p>
                <ul>
                  <li><strong>Construir confianza pública:</strong> Cuando las organizaciones son transparentes sobre sus prácticas, generan mayor confianza en la sociedad.</li>
                  <li><strong>Facilitar la toma de decisiones informadas:</strong> Las personas pueden decidir mejor si confiar o no su información cuando entienden cómo será usada.</li>
                  <li><strong>Permitir el control ciudadano:</strong> La transparencia permite que la sociedad civil, reguladores y usuarios supervisen las prácticas organizacionales.</li>
                  <li><strong>Mejorar la calidad:</strong> Cuando las organizaciones saben que serán evaluadas, tienden a mejorar sus procesos y estándares.</li>
                  <li><strong>Cumplir con obligaciones legales:</strong> Muchas leyes requieren avisos de privacidad claros y accesibles.</li>
                </ul>`,
      principles: [
        "Avisos de privacidad claros y comprensibles",
        "Comunicación proactiva sobre cambios en políticas",
        "Reportes regulares sobre prácticas de manejo de datos",
        "Canales accesibles para consultas y reclamos"
      ]
    },
    {
      id: 3,
      title: "Consentimiento Informado",
      icon: CheckCircle,
      color: "#059669",
      description: `<p>El <strong>consentimiento informado</strong> es un principio ético fundamental que establece que las personas deben tener suficiente información para tomar decisiones conscientes sobre el uso de su información personal. No basta con obtener un "sí"; las personas deben entender realmente qué están aceptando.</p>`,
      purpose: `<p>El consentimiento informado es crucial porque:</p>
                <ul>
                  <li><strong>Respeta la autonomía personal:</strong> Reconoce el derecho de cada individuo a tomar decisiones sobre su propia información.</li>
                  <li><strong>Previene el engaño:</strong> Evita que las organizaciones obtengan datos mediante información confusa o incompleta.</li>
                  <li><strong>Promueve relaciones éticas:</strong> Establece una base honesta y transparente entre organizaciones e individuos.</li>
                  <li><strong>Mejora la calidad del consentimiento:</strong> Cuando las personas entienden realmente lo que aceptan, su consentimiento es más válido y duradero.</li>
                  <li><strong>Reduce riesgos legales:</strong> Un consentimiento verdaderamente informado protege tanto a la organización como al individuo.</li>
                </ul>`,
      principles: [
        "Información clara sobre el propósito del procesamiento",
        "Explicación de los riesgos y beneficios",
        "Derecho a retirar el consentimiento en cualquier momento",
        "Lenguaje sencillo y accesible para todos los usuarios"
      ]
    },
    {
      id: 4,
      title: "Responsabilidad y Integridad",
      icon: Shield,
      color: "#7c3aed",
      description: `<p>La <strong>responsabilidad e integridad</strong> en el manejo de información implica que las organizaciones deben actuar de manera ética, honesta y responsable en todos los aspectos relacionados con la información que manejan. Esto incluye implementar medidas de seguridad adecuadas, mantener la exactitud de los datos y asumir las consecuencias de sus acciones.</p>`,
      purpose: `<p>Estos principios son fundamentales para:</p>
                <ul>
                  <li><strong>Garantizar la calidad de la información:</strong> Mantener datos exactos, completos y actualizados para tomar decisiones correctas.</li>
                  <li><strong>Proteger a todas las partes involucradas:</strong> Implementar medidas que protejan tanto a la organización como a los individuos cuyos datos se manejan.</li>
                  <li><strong>Mantener la credibilidad institucional:</strong> Organizaciones responsables e íntegras mantienen su reputación y legitimidad social.</li>
                  <li><strong>Prevenir daños:</strong> La responsabilidad proactiva ayuda a evitar violaciones de seguridad, pérdida de datos o uso indebido de información.</li>
                  <li><strong>Fomentar la innovación ética:</strong> Permite el desarrollo de tecnologías y procesos que beneficien a la sociedad sin comprometer valores éticos.</li>
                </ul>`,
      principles: [
        "Implementación de controles de seguridad robustos",
        "Auditorías regulares de prácticas y sistemas",
        "Capacitación continua del personal",
        "Respuesta rápida y efectiva ante incidentes"
      ]
    },
    {
      id: 5,
      title: "Equidad y No Discriminación",
      icon: Scale,
      color: "#dc2626",
      description: `<p>La <strong>equidad y no discriminación</strong> en el manejo de información establece que todas las personas deben ser tratadas de manera justa e igualitaria, sin importar su origen, género, edad, condición socioeconómica o cualquier otra característica personal. Este principio prohíbe el uso de información personal para discriminar o crear ventajas o desventajas injustas.</p>`,
      purpose: `<p>Este principio ético es esencial porque:</p>
                <ul>
                  <li><strong>Promueve la justicia social:</strong> Garantiza que la tecnología y el manejo de datos contribuyan a una sociedad más justa y equitativa.</li>
                  <li><strong>Previene sesgos algorítmicos:</strong> Evita que los sistemas automatizados perpetúen o amplifiquen discriminación existente.</li>
                  <li><strong>Protege grupos vulnerables:</strong> Asegura que personas en situaciones de vulnerabilidad no sean perjudicadas por el uso de sus datos.</li>
                  <li><strong>Fomenta la inclusión:</strong> Garantiza que todas las personas tengan acceso equitativo a servicios y oportunidades.</li>
                  <li><strong>Cumple con derechos humanos:</strong> Se alinea con principios fundamentales de derechos humanos y constitucionales.</li>
                </ul>`,
      principles: [
        "Análisis regular de sesgos en algoritmos y procesos",
        "Diversidad en equipos de desarrollo y toma de decisiones",
        "Accesibilidad universal en sistemas y servicios",
        "Monitoreo continuo de impactos diferenciales"
      ]
    },
    {
      id: 6,
      title: "Beneficio Social y Bien Común",
      icon: Users,
      color: "#059669",
      description: `<p>El principio del <strong>beneficio social y bien común</strong> establece que el manejo de información debe contribuir positivamente al bienestar de la sociedad. Las organizaciones deben considerar no solo sus intereses comerciales, sino también el impacto social de sus prácticas de manejo de información.</p>`,
      purpose: `<p>Este principio es fundamental porque:</p>
                <ul>
                  <li><strong>Orienta hacia el beneficio colectivo:</strong> Asegura que la tecnología y los datos sirvan para mejorar la vida de las personas y comunidades.</li>
                  <li><strong>Equilibra intereses:</strong> Busca un balance entre beneficios empresariales y bienestar social.</li>
                  <li><strong>Promueve la innovación responsable:</strong> Impulsa el desarrollo de soluciones que resuelvan problemas sociales reales.</li>
                  <li><strong>Construye legitimidad social:</strong> Las organizaciones que contribuyen al bien común obtienen mayor aceptación y apoyo social.</li>
                  <li><strong>Previene daños sociales:</strong> Considera los posibles impactos negativos en la sociedad antes de implementar nuevas tecnologías o prácticas.</li>
                </ul>`,
      principles: [
        "Evaluación de impacto social en nuevos proyectos",
        "Participación de stakeholders en decisiones importantes",
        "Contribución a objetivos de desarrollo sostenible",
        "Transparencia sobre beneficios y riesgos sociales"
      ]
    }
  ]

  const openModal = (aspect) => {
    setSelectedAspect(aspect)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedAspect(null)
  }

  return (
    <div className="etica-page">
      <Navbar />

      <main className="etica-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-image-container">
            <img src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg" alt="Aspectos Éticos" className="hero-image" />
            <div className="hero-overlay">
              <h1 className="hero-title">Aspectos Éticos y Legales del Manejo de la Información</h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="intro-section">
          <div className="intro-container">
            <h2 className="intro-title">Principios Fundamentales de la Ética de la Información</h2>
            <p className="intro-text">
              El manejo ético de la información requiere el cumplimiento de principios fundamentales que garanticen 
              el respeto por los derechos de las personas, la transparencia en los procesos y el beneficio social. 
              Estos aspectos no solo son obligaciones legales, sino imperativos morales que guían las buenas prácticas 
              en la era digital.
            </p>
          </div>
        </section>

        {/* Ethical Aspects Cards */}
        <section className="aspects-section">
          <div className="aspects-container">
            <div className="aspects-grid">
              {ethicalAspects.map((aspect) => {
                const IconComponent = aspect.icon
                return (
                  <div key={aspect.id} className="aspect-card">
                    <div className="card-color-section" style={{ backgroundColor: aspect.color }}>
                      <div className="floating-elements">
                        <Shield className="floating-icon shield-1" size={18} />
                        <Lock className="floating-icon lock-1" size={16} />
                        <Eye className="floating-icon eye-1" size={20} />
                        <CheckCircle className="floating-icon check-1" size={14} />
                      </div>
                    </div>

                    <div className="icon-container">
                      <div className="icon-circle" style={{ borderColor: aspect.color }}>
                        <IconComponent size={28} style={{ color: aspect.color }} />
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="aspect-title">{aspect.title}</h3>
                      <button
                        className="info-button"
                        onClick={() => openModal(aspect)}
                        style={{ backgroundColor: aspect.color }}
                      >
                        Ver Detalles
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
      {showModal && selectedAspect && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header" style={{ backgroundColor: selectedAspect.color }}>
              <div className="modal-icon">
                <selectedAspect.icon size={24} />
              </div>
              <h2 className="modal-title">{selectedAspect.title}</h2>
              <button className="close-button" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="info-section">
                <div className="info-item">
                  <h4 className="info-title">¿Qué es?</h4>
                  <div className="info-text" dangerouslySetInnerHTML={{ __html: selectedAspect.description }} />
                </div>

                <div className="info-item">
                  <h4 className="info-title">¿Por qué es importante?</h4>
                  <div className="info-text" dangerouslySetInnerHTML={{ __html: selectedAspect.purpose }} />
                </div>

                <div className="info-item">
                  <h4 className="info-title">Principios Clave</h4>
                  <div className="principles-list">
                    {selectedAspect.principles.map((principle, index) => (
                      <div key={index} className="principle-item">
                        <CheckCircle size={16} style={{ color: selectedAspect.color }} />
                        <span>{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EticaPage