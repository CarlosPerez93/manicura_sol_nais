import React from 'react';
import { MessageCircle, Sparkles, MapPin, ShieldCheck, Heart, Calendar, ArrowRight } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import { Button } from '../../common/Button/Button';
import { Badge } from '../../common/Badge/Badge';
import { SITE_INFO } from '../../../constants/siteInfo';
import { whatsappService } from '../../../services/whatsappService';
import './Hero.scss';

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      {/* Decorative ambient background glows */}
      <div className="hero-glow hero-glow--left" aria-hidden="true" />
      <div className="hero-glow hero-glow--right" aria-hidden="true" />

      <div className="container hero-section__container">
        <div className="hero-content">
          {/* Location / Status Badge */}
          <div className="hero-badge-wrap anim-fade-in-up">
            <Badge variant="gold" icon={Sparkles}>
              {SITE_INFO.location.flag} {SITE_INFO.location.city} ({SITE_INFO.location.province})
            </Badge>
          </div>

          {/* Main Title & Slogan */}
          <h1 className="hero-title anim-fade-in-up">
            <span className="hero-title__brand font-display">{SITE_INFO.name}</span>
            <span className="hero-title__tagline">
              Uñas que <span className="highlight-text">hablan por ti</span>
              <span className="sparkle-icon anim-sparkle">✨</span>
            </span>
          </h1>

          <p className="hero-description anim-fade-in-up">
            Manicura profesional, esmaltados semipermanentes de larga duración y nail art exclusivo a mano alzada. Cuidamos cada detalle de la salud y estética de tus uñas en un espacio de atención 100% personalizada.
          </p>

          {/* CTA Buttons */}
          <div className="hero-ctas anim-fade-in-up">
            <Button
              variant="whatsapp"
              size="lg"
              icon={MessageCircle}
              onClick={() => whatsappService.openDirectChat()}
              ariaLabel="Pedir cita directamente por WhatsApp al 690 618 009"
            >
              Agenda Cita ({SITE_INFO.contact.phone})
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href="#trabajos"
              icon={ArrowRight}
              iconPosition="right"
            >
              Ver Trabajos
            </Button>
          </div>

          {/* Quick Trust Highlights */}
          <div className="hero-trust-row anim-fade-in-up">
            <div className="trust-item">
              <ShieldCheck className="trust-item__icon text-gold" size={18} />
              <span>Productos de alta fijación</span>
            </div>
            <div className="trust-item">
              <Heart className="trust-item__icon text-terracotta" size={18} />
              <span>Cero daño a uña natural</span>
            </div>
            <div className="trust-item">
              <Calendar className="trust-item__icon text-gold" size={18} />
              <span>Cita previa personalizada</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visual Showcase */}
        <div className="hero-visual anim-scale-in">
          <div className="visual-card">
            {/* Top Gloss Refraction Bar */}
            <div className="visual-card__sheen" aria-hidden="true" />

            <div className="visual-card__header">
              <div className="visual-card__user">
                <div className="avatar-circle">
                  <span>✨</span>
                </div>
                <div>
                  <h3 className="user-title font-display">{SITE_INFO.name}</h3>
                  <a
                    href={SITE_INFO.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-handle"
                  >
                    <Instagram size={12} /> {SITE_INFO.handle}
                  </a>
                </div>
              </div>
              <span className="live-badge">
                <span className="pulse-dot" /> Agenda Abierta
              </span>
            </div>

            {/* Simulated Art Canvas */}
            <div className="nail-canvas-preview">
              <div className="canvas-gradient-bg">
                <div className="hero-real-nail-row">
                  <div className="real-nail-thumb">
                    <img src="/images/nails/work-1.jpg" alt="Trabajo real Soles Nails" />
                    <span className="thumb-sheen" />
                  </div>
                  <div className="real-nail-thumb">
                    <img src="/images/nails/work-2.jpg" alt="Trabajo real Soles Nails" />
                    <span className="thumb-sheen" />
                  </div>
                  <div className="real-nail-thumb">
                    <img src="/images/nails/work-3.jpg" alt="Trabajo real Soles Nails" />
                    <span className="thumb-sheen" />
                  </div>
                </div>

                <div className="nail-featured-quote">
                  <p className="quote-text font-display">
                    "La elegancia está en la precisión de cada trazo."
                  </p>
                  <span className="quote-author">— Soles Nails Studio • Higuera la Real</span>
                </div>
              </div>
            </div>

            {/* Bottom floating micro stat pill */}
            <div className="floating-stat-pill anim-float">
              <div className="stat-icon">💅</div>
              <div className="stat-info">
                <span className="stat-label">Especialidad</span>
                <span className="stat-val">Semipermanente & Nail Art</span>
              </div>
            </div>

            <div className="floating-contact-pill">
              <a
                href={SITE_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill-link"
              >
                <MessageCircle size={16} />
                <span>WhatsApp: {SITE_INFO.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
