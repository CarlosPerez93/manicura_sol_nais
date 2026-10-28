import { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Menu, X, Phone, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import { Button } from '../../common/Button/Button';
import { SITE_INFO } from '../../../constants/siteInfo';
import { whatsappService } from '../../../services/whatsappService';
import './Navbar.scss';

interface NavbarProps {
  readonly activeSection: string;
}

export const Navbar = ({ activeSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', href: '#inicio' },
    { id: 'sobre-soles', label: 'Sobre Soles', href: '#sobre-soles' },
    { id: 'servicios', label: 'Servicios', href: '#servicios' },
    { id: 'estilos', label: 'Personalizador', href: '#estilos' },
    { id: 'trabajos', label: 'Galería', href: '#trabajos' },
    { id: 'opiniones', label: 'Clientas', href: '#opiniones' },
    { id: 'contacto', label: 'Contacto & Citas', href: '#contacto' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="top-announcement">
        <div className="container top-announcement__content">
          <span className="top-announcement__item">
            <MapPin size={13} aria-hidden="true" />
            <span>{SITE_INFO.location.city} ({SITE_INFO.location.province}), España</span>
          </span>
          <span className="top-announcement__divider" aria-hidden="true">•</span>
          <span className="top-announcement__item">
            <Sparkles size={13} className="text-gold anim-sparkle" aria-hidden="true" />
            <span>{SITE_INFO.tagline}</span>
          </span>
          <span className="top-announcement__divider" aria-hidden="true">•</span>
          <a
            href={SITE_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="top-announcement__item top-announcement__link"
          >
            <Phone size={13} aria-hidden="true" />
            <span>Citas: {SITE_INFO.contact.phoneFormatted}</span>
          </a>
        </div>
      </div>

      <header className={`main-navbar ${isScrolled ? 'main-navbar--scrolled' : ''}`}>
        <div className="container main-navbar__container">
          {/* Brand Logo */}
          <a href="#inicio" className="brand-logo" aria-label="Soles Nails Inicio">
            <div className="brand-logo__symbol" aria-hidden="true">
              <span className="brand-logo__sparkle">✨</span>
            </div>
            <div className="brand-logo__text">
              <span className="brand-logo__name font-display">{SITE_INFO.name}</span>
              <span className="brand-logo__location">{SITE_INFO.location.city}</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Navegación principal">
            <ul className="desktop-nav__list">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id} className="desktop-nav__item">
                    <a
                      href={link.href}
                      className={`desktop-nav__link ${isActive ? 'desktop-nav__link--active' : ''}`}
                    >
                      {link.label}
                      {isActive && <span className="active-dot" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="navbar-actions">
            <a
              href={SITE_INFO.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Perfil de Instagram de Soles Nails"
              title="Instagram @soles.nailshigueralareal"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>

            <Button
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
              onClick={() => whatsappService.openDirectChat()}
              ariaLabel="Pedir cita por WhatsApp"
            >
              Pedir Cita
            </Button>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`mobile-nav-drawer ${isMobileMenuOpen ? 'mobile-nav-drawer--open' : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <nav className="mobile-nav" aria-label="Navegación móvil">
            <ul className="mobile-nav__list">
              {navLinks.map((link) => (
                <li key={link.id} className="mobile-nav__item">
                  <a
                    href={link.href}
                    className={`mobile-nav__link ${activeSection === link.id ? 'mobile-nav__link--active' : ''}`}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-nav__footer">
              <Button
                variant="whatsapp"
                fullWidth
                size="md"
                icon={MessageCircle}
                onClick={() => {
                  whatsappService.openDirectChat();
                  setIsMobileMenuOpen(false);
                }}
              >
                WhatsApp ({SITE_INFO.contact.phone})
              </Button>
              <div className="mobile-nav__socials">
                <a
                  href={SITE_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link"
                >
                  <Instagram size={18} />
                  <span>{SITE_INFO.handle}</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
