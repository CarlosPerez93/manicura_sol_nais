import React from 'react';
import { MapPin, Clock, Navigation, Calendar, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../common/Icons/Icons';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { Button } from '../../common/Button/Button';
import { SITE_INFO } from '../../../constants/siteInfo';
import './Location.scss';

export const Location = () => {
  return (
    <section id="ubicacion" className="section location-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="gold" icon={MapPin}>Estudio & Ubicación</Badge>}
          title="Tu espacio de manicura en Higuera la Real"
          subtitle="Un rincón íntimo, tranquilo y preparado con todas las medidas de higiene para que disfrutes de tu momento de cuidado."
        />

        <div className="location-grid">
          {/* Info Card */}
          <div className="location-info-card">
            <div className="location-header">
              <span className="location-city-flag">{SITE_INFO.location.flag}</span>
              <div>
                <h3 className="location-city-name font-display">{SITE_INFO.location.city}</h3>
                <span className="location-province">{SITE_INFO.location.province}, {SITE_INFO.location.region}</span>
              </div>
            </div>

            <p className="location-text">
              Atención exclusiva con cita previa para garantizar la máxima dedicación y tiempo a cada clienta sin prisas ni esperas.
            </p>

            <div className="location-details-list">
              <div className="detail-item">
                <Clock className="detail-icon text-gold" size={18} />
                <div className="detail-content">
                  <strong className="detail-title">Horarios de Atención</strong>
                  <ul className="hours-sublist">
                    {SITE_INFO.hours.map((h, i) => (
                      <li key={i}>
                        <span className="days-col">{h.days}:</span>
                        <span className="time-col">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="detail-item">
                <Calendar className="detail-icon text-terracotta" size={18} />
                <div className="detail-content">
                  <strong className="detail-title">Modalidad de Reserva</strong>
                  <p className="detail-desc">
                    Recomendamos agendar con 2 a 4 días de antelación para asegurar tu hueco preferido.
                  </p>
                </div>
              </div>

              <div className="detail-item">
                <Phone className="detail-icon text-gold" size={18} />
                <div className="detail-content">
                  <strong className="detail-title">Contacto Rápido</strong>
                  <p className="detail-desc">
                    WhatsApp directo: <a href={SITE_INFO.contact.whatsappUrl} target="_blank" rel="noopener noreferrer"><strong>{SITE_INFO.contact.phoneFormatted}</strong></a>
                  </p>
                </div>
              </div>
            </div>

            <div className="location-card-footer">
              <Button
                variant="outline"
                size="md"
                href={SITE_INFO.location.googleMapsUrl}
                target="_blank"
                icon={Navigation}
              >
                Abrir en Google Maps
              </Button>
            </div>
          </div>

          {/* Interactive Visual Map Representation */}
          <div className="location-map-visual">
            <div className="map-artistic-frame">
              <div className="map-pin-badge anim-float">
                <div className="pin-symbol">
                  <Sparkles size={16} />
                </div>
                <div className="pin-text">
                  <strong>{SITE_INFO.name}</strong>
                  <span>{SITE_INFO.location.city}</span>
                </div>
              </div>

              {/* Styled Local Map vector */}
              <div className="map-vector-overlay">
                <svg viewBox="0 0 400 300" className="map-svg-art" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="mapBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2A1E20" />
                      <stop offset="100%" stopColor="#3F2B2E" />
                    </linearGradient>
                    <radialGradient id="pinGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  <rect width="400" height="300" rx="16" fill="url(#mapBgGrad)" />
                  
                  {/* Stylized streets / paths */}
                  <path d="M-20,100 Q150,120 200,160 T420,180" stroke="rgba(255,255,255,0.12)" strokeWidth="8" fill="none" />
                  <path d="M100,-20 Q120,100 200,160 T320,320" stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
                  <path d="M300,-10 Q260,110 200,160 T80,320" stroke="rgba(255,255,255,0.09)" strokeWidth="7" fill="none" />
                  <path d="M20,260 Q180,220 200,160 T380,80" stroke="rgba(194,125,107,0.22)" strokeWidth="4" fill="none" />
                  
                  {/* Central Glow Circle */}
                  <circle cx="200" cy="160" r="60" fill="url(#pinGlow)" />
                  <circle cx="200" cy="160" r="14" fill="#C27D6B" stroke="#FFE6A7" strokeWidth="3" />
                  <circle cx="200" cy="160" r="5" fill="#FFFFFF" />
                  
                  {/* Surrounding landmarks labels */}
                  <text x="200" y="195" fill="#FFE6A7" fontSize="12" fontWeight="bold" textAnchor="middle" letterSpacing="1">
                    HIGUERA LA REAL
                  </text>
                  <text x="200" y="210" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">
                    Badajoz, Extremadura
                  </text>
                </svg>
              </div>

              <div className="map-bottom-note">
                <span>📍 Al confirmar tu cita por WhatsApp te enviamos la ubicación exacta y recomendaciones de aparcamiento.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
