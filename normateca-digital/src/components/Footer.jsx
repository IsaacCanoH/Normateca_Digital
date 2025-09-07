import { useState } from "react";
import '../styles/footer.component.css'

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <footer className="footer">
        <p>
          © 2025 Normateca Digital. Todos los derechos reservados. |{" "}
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
    </>
  );
};

export default Footer;