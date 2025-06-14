import React from 'react';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/isoinver.png';
import carretera from '../../assets/streetfooter.png'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Líneas diagonales de la derecha - azul, blanco, rojo */}
      <div className="footer-diagonal-lines">
                   <img src={carretera} alt="Logo" className="footer-diagonal-img" />
      </div>
      
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Sección de Logo y Redes Sociales */}
          <div className="footer-section footer-logo-section">
            <div className="footer-logo">
              {/* Aquí va tu logo desde assets */}
              <img src={logo} alt="Logo" className="footer-logo-img" />
            </div>
            <h3 className="footer-title">Encuéntranos en:</h3>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="footer-social-link">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>

          {/* Sección Explorar */}
          <div className="footer-section">
            <h3 className="footer-title">Explorar</h3>
            <ul className="footer-nav">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Proyectos</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Perfil</a></li>
            </ul>
          </div>

          {/* Sección Contacto */}
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <FaMapMarkerAlt size={14} />
                <span>Boulevard Los Héroes, San Salvador - El Salvador</span>
              </div>
              <div className="footer-contact-item">
                <FaPhone size={14} />
                <span>+503 2345</span>
              </div>
              <div className="footer-contact-item">
                <FaEnvelope size={14} />
                <span>ejemplo@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Sección Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-text">
              Suscríbete para recibir notificaciones de nuevos casos y noticias
            </p>
            <div className="footer-newsletter-form">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="footer-newsletter-input"
              />
              <button className="footer-newsletter-button">
                Suscribirme
              </button>
            </div>
          </div>
        </div>

        {/* Línea divisoria y footer bottom */}
        <div className="footer-divider">
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Inversiones. Todos los derechos reservados.
            </p>
            <div className="footer-links">
              <a href="#">Términos y Condiciones</a>
              <a href="#">Política de privacidad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;