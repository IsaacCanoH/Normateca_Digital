import { useState, useEffect } from "react";
import { Scale, Shield, BookOpen, ArrowRight, Download, Users, Award, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/normateca.page.css";

const NormatecaPage = () => {
const navigate = useNavigate();
const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
{
id: 1,
title: "SISTEMA INTEGRAL DE GESTIÓN NORMATIVA DIGITAL",
subtitle: "Descubre, consulta y aplica las principales normativas, leyes y estándares nacionales e internacionales que rigen el manejo responsable de la información con herramientas avanzadas de búsqueda y análisis.",
primaryAction: "Explorar Leyes",
showDiagram: true
},
{
id: 2,
title: "PROTECCIÓN AVANZADA DE DATOS PERSONALES",
subtitle: "Accede a marcos legales especializados y mejores prácticas para garantizar el cumplimiento normativo en protección de datos, privacidad digital y derechos fundamentales de información.",
primaryAction: "Ver Protección de Datos",
backgroundImage: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
showDiagram: false
},
{
id: 3,
title: "ESTÁNDARES INTERNACIONALES DE SEGURIDAD",
subtitle: "Implementa frameworks de clase mundial como ISO 27001, NIST y COBIT para establecer controles robustos de seguridad de la información y gestión de riesgos empresariales.",
primaryAction: "Consultar Estándares",
backgroundImage: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg",
showDiagram: false
}
];

useEffect(() => {
const interval = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % slides.length);
}, 10000); // Cambiado a 10 segundos


return () => clearInterval(interval);
}, [slides.length]);

return (
<div className="min-h-screen bg-black">
<Navbar />

  <div className="carousel-container">
    <div className="carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className="carousel-slide"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${slide.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="carousel-overlay">
            <div className="hero-content">
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <button 
                className="hero-button"
                onClick={() => {
                  if (index === 0) navigate("/leyes");
                  if (index === 1) navigate("/etica");
                  if (index === 2) navigate("/estandares");
                }}
              >
                {slide.primaryAction}
              </button>
            </div>
            
  
            {slide.showDiagram && (
              <div className="hero-diagram">
                <div className="diagram-container">
       
                  <div className="central-node">
                    <div className="central-text">
                      Normativas,<br />
                      Leyes y<br />
                      Estándares
                    </div>
                  </div>
                  
           
                  <div className="orbit-node node-1">
                    <div className="orbit-text">
                      Aspectos Éticos<br />
                      y Legales
                    </div>
                  </div>
                  
                  <div className="orbit-node node-2">
                    <div className="orbit-text">
                      Protección<br />
                      de Datos
                    </div>
                  </div>
                  
                  <div className="orbit-node node-3">
                    <div className="orbit-text">
                      Estándares<br />
                      ISO/NIST
                    </div>
                  </div>
                  
                  <div className="orbit-node node-4">
                    <div className="orbit-text">
                      Leyes<br />
                      Mexicanas
                    </div>
                  </div>
                  
                  <div className="orbit-node node-5">
                    <div className="orbit-text">
                      Cumplimiento<br />
                      Normativo
                    </div>
                  </div>
                  
                  <div className="orbit-node node-6">
                    <div className="orbit-text">
                      Gestión de<br />
                      Riesgos
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>

  <main className="main-content">
 
    <div className="forrester-section">
      <div className="forrester-content">
        <div className="forrester-visual">
          <div className="tech-diagram-new">
            <div className="laptop-element">
              <div className="laptop-screen">
                <div className="hacker-icon">
                    
                  <div className="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <div className="laptop-base"></div>
            </div>
          
          </div>
        </div>
        
        <div className="forrester-text-new">
          <h2 className="forrester-title-new">Normateca Digital</h2>
          <div className="forrester-description">
            <p>
              Este portal es tu punto de acceso centralizado a las principales
              normativas, leyes y estándares nacionales e internacionales que
              rigen el manejo de información, la protección de datos personales,
              la propiedad intelectual y la ciberseguridad. Encuentra aquí, de
              forma ordenada y con explicaciones sencillas, todo lo que
              necesitas para informarte y cumplir.
            </p>
          </div>
          
          <div className="customer-feedback-new">
            <h3 className="feedback-title-new">Opinión de los desarrolladores:</h3>
            <div className="quote-container-new">
              <div className="quote-mark-new">"</div>
              <p className="customer-quote-new">
                Normateca es el lugar ideal para acceder a toda la información sobre normativas, con herramientas únicas que facilitan la consulta y ofrecen protección sin necesidad de modificar las aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="consultation-section">
  <h3 className="consultation-title">¿Qué necesitas consultar hoy?</h3>
  <div className="cards-container">
    

    <div className="consultation-card ethical-aspects">
      <div className="card-link">
        <div className="card-bg"></div>
        <div className="card-expand">Explorar</div>
        <div className="card-icon-section">
          <div className="icon-wrapper">
            <BookOpen className="card-icon" size={48} />
          </div>
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
    </div>


    <div className="consultation-card mexican-laws">
      <div className="card-link">
        <div className="card-bg"></div>
        <div className="card-expand">Consultar</div>
        <div className="card-icon-section">
          <div className="icon-wrapper">
            <Scale className="card-icon" size={48} />
          </div>
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
    </div>


    <div className="consultation-card info-standards">
      <div className="card-link">
        <div className="card-bg"></div>
        <div className="card-expand">Implementar</div>
        <div className="card-icon-section">
          <div className="icon-wrapper">
            <Shield className="card-icon" size={48} />
          </div>
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
</div>
  <div className="avocado-section">
    <div className="avocado-overlay">
      <div className="avocado-content">
        <h2 className="avocado-title">Normateca Digital</h2>
        <p className="avocado-subtitle">
          Plataforma integral de consulta normativa impulsada por políticas de cumplimiento y segmentación inteligente.
        </p>
        <p className="avocado-description">
          Diseñada para simplicidad y seguridad a gran escala.
        </p>
      </div>
    </div>
  </div>
<div className="team-section">
    <h2 className="team-title">Equipo de Trabajo</h2>
    <div className="team-cards-container">
      <div className="team-card">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          <Users className="avatar-icon" size={60} />
        </div>
        <div className="name">
          <a href="#" target="_blank">Isaac Cano Hernández</a>
          <h6 title="Proyectos"><i className="fas fa-code"></i> <span className="followers">12</span></h6>
        </div>
        <div className="button">
          <a href="#" className="btn">Contactar <i className="fas fa-envelope"></i></a>
        </div>
        <div className="ds-info">
          <div className="ds pens">
            <h6 title="Años de experiencia">Grupo <i className="fas fa-calendar"></i></h6>
            <p>GIDS6073</p>
          </div>
          <div className="ds projects">
            <h6 title="Proyectos completados">Materia <i className="fas fa-project-diagram"></i></h6>
            <p>Seguridad Informática</p>
          </div>
          <div className="ds posts">
            <h6 title="Universidad">UTNG <i className="fas fa-graduation-cap"></i></h6>
            <p>2025</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>Skills <i className="fa fa-code" aria-hidden="true"></i></h6>
          <div className="skill html">
            <h6><i className="fab fa-react"></i> React </h6>
            <div className="bar bar-react">
              <p>95%</p>
            </div>
          </div>
          <div className="skill css">
            <h6><i className="fab fa-js"></i> JavaScript </h6>
            <div className="bar bar-js">
              <p>85%</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-node-js"></i> Node.js </h6>
            <div className="bar bar-node">
              <p>85%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="team-card">
        <div className="ds-top"></div>
        <div className="avatar-holder">
          <Users className="avatar-icon" size={60} />
        </div>
        <div className="name">
          <a href="#" target="_blank">César Fernando González Avalos</a>
          <h6 title="Proyectos"><i className="fas fa-code"></i> <span className="followers">18</span></h6>
        </div>
        <div className="button">
          <a href="#" className="btn">Contactar <i className="fas fa-envelope"></i></a>
        </div>
        <div className="ds-info">
          <div className="ds pens">
            <h6 title="Años de experiencia">Grupo <i className="fas fa-calendar"></i></h6>
            <p>GIDS6073</p>
          </div>
          <div className="ds projects">
            <h6 title="Proyectos completados">Materia <i className="fas fa-project-diagram"></i></h6>
            <p>Seguridad Informática</p>
          </div>
          <div className="ds posts">
            <h6 title="Universidad">UTNG <i className="fas fa-graduation-cap"></i></h6>
            <p>2025</p>
          </div>
        </div>
        <div className="ds-skill">
          <h6>Skills <i className="fa fa-code" aria-hidden="true"></i></h6>
          <div className="skill html">
            <h6><i className="fab fa-react"></i> React </h6>
            <div className="bar bar-python">
              <p>92%</p>
            </div>
          </div>
          <div className="skill css">
            <h6><i className="fab fa-js"></i> JavaScript </h6>
            <div className="bar bar-db">
              <p>88%</p>
            </div>
          </div>
          <div className="skill javascript">
            <h6><i className="fab fa-node-js"></i> Node.js</h6>
            <div className="bar bar-java">
              <p>82%</p>
            </div>
          </div>
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