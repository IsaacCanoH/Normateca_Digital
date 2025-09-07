import { useState } from "react"
import { X } from "lucide-react" 
import "../styles/footer.component.css"

const Footer = () => {
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

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
              <X size={20} />
            </button>
          </div>
          <div className="modal-body">
            <h4>Política de Privacidad - Normateca Digital</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
