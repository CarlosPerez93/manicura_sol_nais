import { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, X } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import { SITE_INFO } from '../../../constants/siteInfo';
import { whatsappService } from '../../../services/whatsappService';
import './FloatingActions.scss';

export const FloatingActions = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Auto-hide tooltip after 12s if not interacted
      setShowTooltip(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside className="floating-actions" aria-label="Accesos rápidos de contacto">
      {/* Floating WhatsApp Bubble & Tooltip */}
      {showTooltip && (
        <div className="floating-tooltip anim-fade-in-up" role="status">
          <div className="floating-tooltip__header">
            <span className="tooltip-title">
              <Sparkles size={12} className="text-gold" /> ¿Quieres agendar cita?
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="tooltip-close"
              aria-label="Cerrar sugerencia"
            >
              <X size={12} />
            </button>
          </div>
          <p className="tooltip-text">
            Escríbeme por WhatsApp y coordinamos tu momento de cuidado en Higuera la Real.
          </p>
        </div>
      )}

      <div className="floating-buttons-stack">
        <a
          href={SITE_INFO.contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn--ig"
          aria-label="Ver perfil de Instagram @soles.nailshigueralareal"
          title="Ver Instagram"
        >
          <Instagram size={20} />
        </a>

        <button
          onClick={() => whatsappService.openDirectChat()}
          className="floating-btn floating-btn--wa anim-pulse"
          aria-label="Chat directo por WhatsApp al 690 618 009"
          title="Abrir WhatsApp"
        >
          <MessageCircle size={26} />
          <span className="floating-btn__pulse" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
};
