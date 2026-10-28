import React, { useState } from 'react';
import { Sparkles, Clock, Check, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { Button } from '../../common/Button/Button';
import { SERVICES, SERVICE_CATEGORIES } from '../../../constants/servicesData';
import { whatsappService } from '../../../services/whatsappService';
import './Services.scss';

export const Services = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredServices = selectedCategory === 'Todos'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const handleBookService = (service) => {
    if (onSelectService) {
      onSelectService(service.title);
    } else {
      whatsappService.openDirectChat({ service: service.title });
    }
  };

  return (
    <section id="servicios" className="section services-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="rose" icon={Sparkles}>Especialidades</Badge>}
          title="Servicios pensados para el cuidado y brillo de tus manos"
          subtitle="Cada tratamiento incluye preparación higiénica de la cutícula, productos de calidad profesional y asesoramiento de estilo personalizado."
        />

        {/* Category Filter Pills */}
        <div className="services-filter" role="tablist" aria-label="Filtrar servicios por categoría">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-btn ${selectedCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`service-card ${service.popular ? 'service-card--popular' : ''}`}
            >
              {service.popular && (
                <div className="popular-badge">
                  <Star size={12} fill="#D4AF37" color="#D4AF37" />
                  <span>Más Solicitado</span>
                </div>
              )}

              <div className="service-card__header">
                <span className="service-category">{service.category}</span>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-meta">
                <div className="meta-item">
                  <Clock size={15} className="text-gold" />
                  <span>{service.duration}</span>
                </div>
                <div className="meta-item meta-item--durability">
                  <Sparkles size={15} className="text-terracotta" />
                  <span>{service.durability}</span>
                </div>
              </div>

              <div className="service-highlights">
                <h4 className="highlights-title">Incluye:</h4>
                <ul className="highlights-list">
                  {service.highlights.map((h, i) => (
                    <li key={i}>
                      <Check size={14} className="text-gold" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-card__footer">
                <Button
                  variant={service.popular ? 'whatsapp' : 'secondary'}
                  size="sm"
                  fullWidth
                  icon={MessageCircle}
                  onClick={() => handleBookService(service)}
                >
                  Pedir Cita para este servicio
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
