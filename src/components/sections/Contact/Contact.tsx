import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Send,
  Calendar,
  CheckCircle,
  Sparkles,
  ChevronDown,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import confetti from 'canvas-confetti';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { Button } from '../../common/Button/Button';
import { SITE_INFO } from '../../../constants/siteInfo';
import { SERVICES } from '../../../constants/servicesData';
import { FAQS } from '../../../constants/reviewsData';
import { useContactForm } from '../../../hooks/useContactForm';
import { useToast } from '../../../context/ToastContext';
import './Contact.scss';

export const Contact = ({ preselectedService = '' }) => {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    setService,
    handleSubmit,
    sendToWhatsApp,
    resetForm
  } = useContactForm(preselectedService);

  const { addToast } = useToast();
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const result = await handleSubmit(e);
    if (result && result.success) {
      addToast(result.message, 'success');
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#E8B4A2', '#D4AF37', '#C27D6B']
        });
      } catch {
        // Fallback si canvas no disponible
      }
    } else if (result && result.error) {
      addToast(result.error, 'error');
    }
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="whatsapp" icon={MessageCircle}>Contacto & Reservas</Badge>}
          title="Pide tu cita o resuelve cualquier consulta"
          subtitle="Estamos a tu disposición para coordinar tu próxima sesión de manicura en Higuera la Real. Elige el canal que te resulte más cómodo."
        />

        <div className="contact-grid">
          {/* Left Column: Direct Channels & Highlights */}
          <div className="contact-info-panel">
            {/* WhatsApp Direct Highlight Card */}
            <div className="wa-direct-card">
              <div className="wa-direct-card__header">
                <div className="wa-icon-box">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <span className="wa-tag">Canal Más Rápido</span>
                  <h3 className="wa-title">WhatsApp Directo</h3>
                </div>
              </div>

              <p className="wa-desc">
                Si prefieres una respuesta instantánea, escríbenos directamente a nuestro número oficial de WhatsApp.
              </p>

              <div className="wa-phone-number">
                <Phone size={18} />
                <span>{SITE_INFO.contact.phoneFormatted}</span>
              </div>

              <Button
                variant="whatsapp"
                fullWidth
                size="lg"
                icon={MessageCircle}
                onClick={() => sendToWhatsApp()}
              >
                Abrir Chat de WhatsApp
              </Button>
            </div>

            {/* Social & Location details */}
            <div className="quick-social-card">
              <h4 className="card-heading">Otros Canales Oficiales</h4>
              <ul className="social-list">
                <li>
                  <a
                    href={SITE_INFO.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-row"
                  >
                    <div className="social-row__icon social-row__icon--ig">
                      <Instagram size={20} />
                    </div>
                    <div className="social-row__text">
                      <strong>Instagram Oficial</strong>
                      <span>{SITE_INFO.handle}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQs Accordion */}
            <div className="faq-widget">
              <div className="faq-widget__header">
                <HelpCircle size={18} className="text-gold" />
                <h4 className="faq-title">Preguntas Frecuentes</h4>
              </div>

              <div className="faq-list">
                {FAQS.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div key={idx} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className="faq-arrow" size={16} />
                      </button>
                      {isOpen && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Form */}
          <div className="contact-form-panel">
            <div className="form-card">
              <div className="form-card__header">
                <h3 className="form-title">Formulario de Contacto</h3>
                <p className="form-subtitle">
                  Rellena tus datos y te responderemos a la brevedad con la disponibilidad de agenda.
                </p>
              </div>

              {isSuccess ? (
                <div className="form-success-state anim-scale-in">
                  <div className="success-icon-wrap">
                    <CheckCircle size={48} className="text-success" />
                  </div>
                  <h4 className="success-title">¡Mensaje Enviado con Éxito!</h4>
                  <p className="success-desc">
                    Gracias por ponerte en contacto con Soles Nails. Nos pondremos en contacto contigo vía WhatsApp o teléfono muy pronto.
                  </p>

                  <div className="success-actions">
                    <Button
                      variant="whatsapp"
                      size="md"
                      icon={MessageCircle}
                      onClick={() => sendToWhatsApp()}
                    >
                      Enviar también por WhatsApp
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={resetForm}
                    >
                      Enviar otro mensaje
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={onFormSubmit} className="contact-form" noValidate>
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nombre completo <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: María Gómez"
                      className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error">
                        <AlertCircle size={13} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Teléfono / WhatsApp <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej: 690 123 456"
                      className={`form-input ${errors.phone ? 'form-input--error' : ''}`}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error">
                        <AlertCircle size={13} /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Service selection */}
                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="">Selecciona un servicio (opcional)</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.duration})
                        </option>
                      ))}
                      <option value="Consulta General">Otro / Asesoramiento personalizado</option>
                    </select>
                  </div>

                  {/* Preferred Date/Time */}
                  <div className="form-group">
                    <label htmlFor="preferredDate" className="form-label">
                      Preferencia de fecha / turno
                    </label>
                    <input
                      type="text"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      placeholder="Ej: Próximo martes por la tarde"
                      className="form-input"
                    />
                  </div>

                  {/* Message field */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Mensaje o detalles del diseño (opcional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Cuéntanos si tienes alguna idea en mente, estado de tus uñas, o si requieres retirada de producto anterior..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Action buttons */}
                  <div className="form-actions">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      icon={Send}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando solicitud...' : 'Enviar Solicitud'}
                    </Button>

                    <Button
                      type="button"
                      variant="whatsapp"
                      size="md"
                      fullWidth
                      icon={MessageCircle}
                      onClick={() => sendToWhatsApp()}
                    >
                      O enviar directamente a WhatsApp
                    </Button>
                  </div>

                  <p className="privacy-note">
                    🔒 Tus datos de contacto se utilizarán exclusivamente para coordinar tu cita en Soles Nails.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
