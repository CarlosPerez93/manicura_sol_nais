import { Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import { SITE_INFO } from '../../../constants/siteInfo';
import './Footer.scss';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="main-footer">
      <div className="container main-footer__container">
        {/* Top Grid */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col footer-col--brand">
            <div className="footer-brand">
              <span className="footer-brand__name font-display">{SITE_INFO.name}</span>
              <span className="footer-brand__sparkle">✨</span>
            </div>
            <p className="footer-tagline">
              {SITE_INFO.tagline}
            </p>
            <p className="footer-desc">
              Especialista en manicura, esmaltado semipermanente y nail art exclusivo en Higuera la Real. Cada trabajo es una obra personalizada cuidando la salud de tus uñas.
            </p>
            <div className="footer-socials">
              <a
                href={SITE_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram de Soles Nails"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SITE_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-btn--wa"
                aria-label="WhatsApp de Soles Nails"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col__title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#sobre-soles">Sobre Soles Nails</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#estilos">Personalizador</a></li>
              <li><a href="#trabajos">Galería de Trabajos</a></li>
              <li><a href="#opiniones">Historias de Clientas</a></li>
              <li><a href="#contacto">Contacto & Cita</a></li>
            </ul>
          </div>

          {/* Services Quicklist */}
          <div className="footer-col">
            <h4 className="footer-col__title">Especialidades</h4>
            <ul className="footer-links">
              <li><a href="#servicios">Esmaltado Semipermanente</a></li>
              <li><a href="#servicios">Nail Art a Mano Alzada</a></li>
              <li><a href="#servicios">Nivelación & Kapping</a></li>
              <li><a href="#servicios">Manicura Combinada Rusa</a></li>
              <li><a href="#servicios">Cuidado & Retirada Segura</a></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="footer-col">
            <h4 className="footer-col__title">Contacto Directo</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="text-gold" aria-hidden="true" />
                <span>{SITE_INFO.location.city} ({SITE_INFO.location.province}), España</span>
              </li>
              <li>
                <Phone size={16} className="text-gold" aria-hidden="true" />
                <a href={SITE_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {SITE_INFO.contact.phoneFormatted}
                </a>
              </li>
              <li>
                <Instagram size={16} className="text-gold" aria-hidden="true" />
                <a href={SITE_INFO.contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {SITE_INFO.handle}
                </a>
              </li>
            </ul>
            <div className="footer-hours-note">
              <span>Atención bajo cita previa</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} {SITE_INFO.name}. Todos los derechos reservados.
          </p>
          <div className="footer-credits">
            <span>Uñas que hablan por ti ✨</span>
            <button
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Volver al inicio de la página"
            >
              <ArrowUp size={16} />
              <span>Subir</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
