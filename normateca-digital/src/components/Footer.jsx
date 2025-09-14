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
             Aviso de Privacidad
           </span>
         </p>
        <div className="creators">
          <p>Desarrollado por:</p>
          <p><strong>Cano Hernández Isaac</strong> y <strong>González Avalos César Fernando</strong></p>
        </div>
       </footer>

       {/* Modal */}
       <div className={`modal ${showModal ? "show" : ""}`} onClick={closeModal}>
         <div className="modal-content" onClick={(e) => e.stopPropagation()}>
           <div className="modal-header">
             <h3 className="modal-title">Aviso de Privacidad</h3>
             <button className="close-button" onClick={closeModal}>
               <X size={20} />
             </button>
           </div>
           <div className="modal-body">
           <h4>Política de Privacidad - Normateca Digital</h4>
            <div className="privacy-content">
              <h4>AVISO DE PRIVACIDAD</h4>
              
              <p>
                <strong>Cano Hernández Isaac / González Avalos César Fernando</strong>, comercialmente conocido como 
                <strong> NORMATECA DIGITAL</strong>, con domicilio en Educación Tecnológica 34, Fracc. Universidad, 
                37800 Dolores Hidalgo Cuna de la Independencia Nacional, Gto., es el responsable del uso y protección 
                de sus datos personales.
              </p>

              <h5>FINALIDADES PRIMARIAS</h5>
              <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
              <ul>
                <li>Brindar acceso a la información normativa y regulatoria.</li>
                <li>Orientar al usuario en aspectos éticos y legales del manejo de información.</li>
                <li>Difusión educativa e informativa.</li>
              </ul>

              <h5>DATOS PERSONALES RECABADOS</h5>
              <p>
                En Normateca Digital no se recaban datos de identificación ni de contacto, ni datos sensibles como 
                laborales, académicos, patrimoniales, financieros, biométricos o de pasatiempos.
              </p>

              <h5>DATOS RECABADOS POR EL SITIO WEB</h5>
              <p>De manera automática y con fines estadísticos y de mejora del sitio, nuestro portal únicamente obtiene:</p>
              <ul>
                <li>Tipo de navegador del usuario.</li>
                <li>Tipo de sistema operativo del usuario.</li>
                <li>Fecha y hora del inicio y final de una sesión de un usuario.</li>
                <li>Páginas web visitadas dentro del portal.</li>
              </ul>
              <p>Estos datos son de carácter técnico y no permiten identificar directamente al usuario.</p>

              <h5>DERECHOS ARCO</h5>
              <p>
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las 
                condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su 
                información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); 
                que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo 
                utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines 
                específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p>
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva 
                al siguiente correo electrónico: <strong>normatecadigitalutng@gmail.com</strong>. La respuesta a su 
                solicitud será atendida en un plazo máximo de 10 días hábiles.
              </p>

              <h5>CONTACTO</h5>
              <p>Para más información sobre este aviso de privacidad, puede contactarnos en:</p>
              <ul>
                <li>Correo electrónico: <strong>normatecadigitalutng@gmail.com</strong></li>
                <li>Sitio web: <strong>http://172.16.16.129</strong></li>
              </ul>
              
              <div className="last-update">
                <p><em>Última actualización: 13/09/2025</em></p>
              </div>
            </div>
           </div>
         </div>
       </div>
     </>
   )
 }

 export default Footer