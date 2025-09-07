import { useEffect } from "react";
import "../styles/animated-background.component.css";

const AnimatedBackground = () => {
  useEffect(() => {
    const createBinaryRain = () => {
      const matrix = document.getElementById('matrix');
      if (!matrix) return;
      
      const binaryChars = '01';
      
      for (let i = 0; i < 50; i++) {
        const rain = document.createElement('div');
        rain.className = 'binary-rain';
        rain.style.left = Math.random() * 100 + '%';
        rain.style.animationDuration = (Math.random() * 3 + 2) + 's';
        rain.style.animationDelay = Math.random() * 2 + 's';
        
        let binaryString = '';
        for (let j = 0; j < 20; j++) {
          binaryString += binaryChars[Math.floor(Math.random() * 2)] + '<br>';
        }
        rain.innerHTML = binaryString;
        
        matrix.appendChild(rain);
      }
    };

    const createParticles = () => {
      const particles = document.getElementById('particles');
      if (!particles) return;
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 4 + 2) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        
        particles.appendChild(particle);
      }
    };

    const createSecurityIcons = () => {
      const container = document.getElementById('securityIcons');
      if (!container) return;
      
      const iconTypes = ['lock-icon', 'shield-icon', 'scale-icon', 'document-icon'];
      
      for (let i = 0; i < 20; i++) {
        const icon = document.createElement('div');
        icon.className = 'icon ' + iconTypes[Math.floor(Math.random() * iconTypes.length)];
        icon.style.left = Math.random() * 100 + '%';
        icon.style.top = Math.random() * 100 + '%';
        icon.style.animationDelay = Math.random() * 4 + 's';
        icon.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        container.appendChild(icon);
      }
    };

    const createConnectionLines = () => {
      const container = document.getElementById('connectionLines');
      if (!container) return;
      
      for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        line.style.top = Math.random() * 100 + '%';
        line.style.width = '100%';
        line.style.animationDelay = Math.random() * 3 + 's';
        line.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        container.appendChild(line);
      }
    };

    const createHexagonPattern = () => {
      const container = document.getElementById('hexagonPattern');
      if (!container) return;
      
      for (let i = 0; i < 15; i++) {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        hexagon.style.left = Math.random() * 100 + '%';
        hexagon.style.top = Math.random() * 100 + '%';
        hexagon.style.animationDelay = Math.random() * 20 + 's';
        hexagon.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        container.appendChild(hexagon);
      }
    };

    createBinaryRain();
    createParticles();
    createSecurityIcons();
    createConnectionLines();
    createHexagonPattern();
  }, []);

  return (
    <div className="animated-background">
      <div className="hexagon-pattern" id="hexagonPattern"></div>

      <div className="matrix" id="matrix"></div>

      <div className="connection-lines" id="connectionLines"></div>

      <div className="particles" id="particles"></div>

      <div className="security-icons" id="securityIcons"></div>
    </div>
  );
};

export default AnimatedBackground;