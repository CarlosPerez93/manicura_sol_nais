import { Sparkles, MessageCircle, Clock } from 'lucide-react';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { Button } from '../../common/Button/Button';
import { useInteractiveQuote } from '../../../hooks/useInteractiveQuote';
import { whatsappService } from '../../../services/whatsappService';
import './InteractiveQuote.scss';

export const InteractiveQuote = () => {
  const {
    shapes,
    lengths,
    finishes,
    selectedShape,
    setSelectedShape,
    selectedLength,
    setSelectedLength,
    selectedFinish,
    setSelectedFinish,
    hasNailArt,
    setHasNailArt,
    estimatedDuration,
    customSummary
  } = useInteractiveQuote();

  const handleConsultStyle = () => {
    whatsappService.openDirectChat({
      service: 'Manicura Personalizada',
      finish: `${selectedShape.label} (${selectedLength.label}) - ${selectedFinish.label} - ${hasNailArt ? 'Con Nail Art' : 'Color Liso'}`,
      customMessage: `¡Hola Sol! He personalizado mi estilo en tu web:\n- Forma: ${selectedShape.label}\n- Largo: ${selectedLength.label}\n- Acabado: ${selectedFinish.label}\n- Estilo: ${hasNailArt ? 'Nail art personalizado' : 'Color liso'}\n\n¿Tendrías disponibilidad para agendar esta sesión?`
    });
  };

  return (
    <section id="estilos" className="section section--subtle interactive-quote-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="gold" icon={Sparkles}>Simulador Interactivo</Badge>}
          title="Diseña tu combinación ideal de manicura"
          subtitle="Explora diferentes formas, longitudes y acabados para visualizar tu próxima manicura y enviar tu consulta directa a Soles Nails."
        />

        <div className="quote-grid">
          {/* Controls Panel */}
          <div className="quote-controls">
            {/* Step 1: Shape */}
            <div className="control-group">
              <label className="control-label">
                <span className="step-num">1</span>
                <span>Forma de la uña:</span>
                <strong className="selection-preview">{selectedShape.label}</strong>
              </label>
              <div className="options-grid options-grid--shapes">
                {shapes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`option-card ${selectedShape.id === s.id ? 'option-card--active' : ''}`}
                    onClick={() => setSelectedShape(s)}
                  >
                    <span className="option-icon" aria-hidden="true">{s.icon}</span>
                    <span className="option-title">{s.label}</span>
                    <span className="option-desc">{s.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Length */}
            <div className="control-group">
              <label className="control-label">
                <span className="step-num">2</span>
                <span>Longitud preferida:</span>
                <strong className="selection-preview">{selectedLength.label}</strong>
              </label>
              <div className="options-grid options-grid--lengths">
                {lengths.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    className={`option-card ${selectedLength.id === l.id ? 'option-card--active' : ''}`}
                    onClick={() => setSelectedLength(l)}
                  >
                    <span className="option-title">{l.label}</span>
                    <span className="option-desc">{l.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Finish */}
            <div className="control-group">
              <label className="control-label">
                <span className="step-num">3</span>
                <span>Efecto & Acabado:</span>
                <strong className="selection-preview">{selectedFinish.label}</strong>
              </label>
              <div className="options-grid options-grid--finishes">
                {finishes.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`option-card ${selectedFinish.id === f.id ? 'option-card--active' : ''}`}
                    onClick={() => setSelectedFinish(f)}
                  >
                    <div className="color-dot" style={{ backgroundColor: f.sampleColor }} />
                    <span className="option-title">{f.label}</span>
                    <span className="option-desc">{f.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Nail Art Toggle */}
            <div className="control-group control-group--toggle">
              <label className="toggle-wrapper" onClick={() => setHasNailArt(!hasNailArt)}>
                <input
                  type="checkbox"
                  checked={hasNailArt}
                  onChange={() => {}} // Controlled by label
                  className="sr-only"
                />
                <div className={`custom-switch ${hasNailArt ? 'custom-switch--on' : ''}`}>
                  <div className="switch-thumb" />
                </div>
                <div className="toggle-text">
                  <span className="toggle-title">Incluir Nail Art / Diseño a mano alzada</span>
                  <span className="toggle-subtitle">Trazos personalizados, pan de oro, detalles o degradados</span>
                </div>
              </label>
            </div>
          </div>

          {/* Interactive Live Preview Card */}
          <div className="quote-preview-box">
            <div className="live-preview-card">
              <div className="live-preview-card__header">
                <span className="badge-tag">Vista Previa de tu Estilo</span>
                <Sparkles size={16} className="text-gold anim-sparkle" />
              </div>

              {/* Dynamic Simulated Nail Silhouette */}
              <div className="nail-silhouette-stage">
                <div className={`nail-silhouette nail-silhouette--${selectedShape.id} nail-silhouette--${selectedLength.id} finish--${selectedFinish.id}`}>
                  <div className="nail-glow-sheen" />
                  {hasNailArt && (
                    <div className="nail-art-overlay">
                      <svg viewBox="0 0 100 150" className="art-lines">
                        <path d="M20,120 Q50,40 80,10" stroke="#FFE6A7" strokeWidth="3" fill="none" opacity="0.85" />
                        <circle cx="50" cy="55" r="4" fill="#D4AF37" />
                        <circle cx="68" cy="30" r="2.5" fill="#FFFFFF" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="silhouette-tags">
                  <span className="tag-pill">{selectedShape.label}</span>
                  <span className="tag-pill">{selectedLength.label}</span>
                  <span className="tag-pill">{selectedFinish.label}</span>
                </div>
              </div>

              {/* Summary Details */}
              <div className="summary-block">
                <div className="summary-row">
                  <span className="summary-label">
                    <Clock size={14} className="text-gold" /> Tiempo estimado en cabina:
                  </span>
                  <span className="summary-value">{estimatedDuration}</span>
                </div>

                <div className="summary-spec">
                  <p className="spec-text">"{customSummary}"</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="preview-action">
                <Button
                  variant="whatsapp"
                  fullWidth
                  size="md"
                  icon={MessageCircle}
                  onClick={handleConsultStyle}
                >
                  Consultar disponibilidad con este estilo
                </Button>
                <p className="action-hint">
                  Se abrirá WhatsApp con los detalles de tu selección listos para enviar a Soles Nails.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
