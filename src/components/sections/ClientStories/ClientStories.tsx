import { Sparkles, Star, Quote, MessageCircle, Heart } from 'lucide-react';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { CLIENT_REVIEWS } from '../../../constants/reviewsData';
import { SITE_INFO } from '../../../constants/siteInfo';
import './ClientStories.scss';

export const ClientStories = () => {
  return (
    <section id="opiniones" className="section section--subtle client-stories-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="gold" icon={Sparkles}>Destacados • Clientas</Badge>}
          title="Historias reales de manos cuidadas y felices"
          subtitle="Lo que opinan nuestras clientas tras sus sesiones en Higuera la Real. Calidad, durabilidad y cercanía."
        />

        <div className="reviews-grid">
          {CLIENT_REVIEWS.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-card__header">
                <div className="rating-stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <span className="review-highlight-tag">
                  {review.highlight}
                </span>
              </div>

              <div className="review-quote-body">
                <Quote size={20} className="quote-icon" />
                <p className="review-text">"{review.comment}"</p>
              </div>

              <div className="review-card__footer">
                <div className="author-avatar">
                  <span>{review.name.charAt(0)}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{review.name}</h4>
                  <span className="author-service">
                    {review.service} • {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience banner */}
        <div className="experience-banner">
          <div className="banner-left">
            <Heart size={26} className="text-terracotta" />
            <div>
              <h4 className="banner-title">¿Primera vez en Soles Nails?</h4>
              <p className="banner-desc">
                Te asesoramos desde el primer minuto según el estado de tu uña natural y tus preferencias de estilo.
              </p>
            </div>
          </div>
          <a
            href={SITE_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-cta-link"
          >
            <span>Preguntar dudas por WhatsApp</span>
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
