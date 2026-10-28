import React, { useState } from 'react';
import { Sparkles, Eye, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { Button } from '../../common/Button/Button';
import { Modal } from '../../common/Modal/Modal';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../../../constants/portfolioData';
import { SITE_INFO } from '../../../constants/siteInfo';
import { whatsappService } from '../../../services/whatsappService';
import { useModal } from '../../../hooks/useModal';
import './Portfolio.scss';

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const { isOpen, modalData, openModal, closeModal } = useModal();

  const filteredItems = activeCategory === 'Todos'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleConsultDesign = (item) => {
    closeModal();
    whatsappService.openDirectChat({
      service: item.title,
      finish: item.finish,
      customMessage: `¡Hola Sol! He visto en tu galería el diseño "${item.title}" (${item.category}) y me encantaría hacerme algo similar. ¿Tendrías cita disponible?`
    });
  };

  return (
    <section id="trabajos" className="section portfolio-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="gold" icon={Sparkles}>Galería & Destacados</Badge>}
          title="Nuestros Trabajos en Esmaltados & Diseños"
          subtitle="Inspirado en los destacados oficiales de Instagram. Cada manicura combina estética, durabilidad y precisión."
        />

        {/* Categories Bar */}
        <div className="portfolio-filter" role="tablist" aria-label="Filtrar trabajos por categoría">
          {PORTFOLIO_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filter-chip ${activeCategory === cat ? 'filter-chip--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-card"
              onClick={() => openModal(item)}
            >
              {/* Visual Canvas Display */}
              <div className="portfolio-card__canvas" style={{ background: item.gradient }}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-real-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="canvas-nail-model">
                    <div className="model-tip" />
                    <div className="model-sparkle">✨</div>
                  </div>
                )}
                <div className="canvas-gloss-refraction" aria-hidden="true" />

                <div className="canvas-overlay">
                  <span className="view-btn">
                    <Eye size={18} /> Ver Detalles
                  </span>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="portfolio-card__info">
                <div className="info-top">
                  <span className="item-tag">{item.tag}</span>
                  <span className="item-finish">{item.finish}</span>
                </div>
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.description}</p>

                <div className="info-footer">
                  <div className="palette-preview">
                    {item.colors.map((c, i) => (
                      <span key={i} className="color-circle" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                  <span className="consult-link">
                    Consultar <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Profile Callout */}
        <div className="portfolio-instagram-callout">
          <div className="callout-content">
            <Instagram size={28} className="ig-icon" />
            <div className="callout-text">
              <h4 className="callout-title">¿Quieres ver más trabajos y vídeos en directo?</h4>
              <p className="callout-sub">
                Síguenos en Instagram <strong>{SITE_INFO.handle}</strong> para ver nuestras historias diarias y clientas satisfechas.
              </p>
            </div>
          </div>
          <Button
            variant="instagram"
            size="md"
            href={SITE_INFO.contact.instagramUrl}
            target="_blank"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            Visitar Instagram Oficial
          </Button>
        </div>
      </div>

      {/* Modal Detail */}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={modalData?.title}
        subtitle={`${modalData?.category} • Acabado: ${modalData?.finish}`}
      >
        {modalData && (
          <div className="portfolio-modal-content">
            <div
              className="modal-canvas-display"
              style={{ background: modalData.gradient }}
            >
              {modalData.image ? (
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className="modal-real-image"
                />
              ) : (
                <div className="modal-nail-art">
                  <span className="nail-emoji">💅</span>
                </div>
              )}
              <div className="canvas-gloss-refraction" />
              <div className="modal-badge-overlay">
                <span className="nail-badge-pill">{modalData.tag}</span>
              </div>
            </div>

            <div className="modal-details">
              <p className="modal-description">{modalData.description}</p>

              <div className="modal-specs-list">
                <div className="spec-item">
                  <span className="spec-label">Tiempo aproximado:</span>
                  <span className="spec-val">{modalData.duration}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Paleta de tonalidades:</span>
                  <div className="spec-palette">
                    {modalData.colors.map((c, i) => (
                      <span
                        key={i}
                        className="palette-swatch"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <Button
                  variant="whatsapp"
                  fullWidth
                  size="md"
                  icon={MessageCircle}
                  onClick={() => handleConsultDesign(modalData)}
                >
                  Pedir cita para este diseño
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
