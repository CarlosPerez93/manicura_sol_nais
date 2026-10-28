import { Sparkles, Heart, Award, Shield } from 'lucide-react';
import { SectionHeading } from '../../common/SectionHeading/SectionHeading';
import { Badge } from '../../common/Badge/Badge';
import { Button } from '../../common/Button/Button';
import { SITE_INFO } from '../../../constants/siteInfo';
import { whatsappService } from '../../../services/whatsappService';
import './About.scss';

export const About = () => {
  const pillars = [
    {
      icon: Award,
      title: 'Técnica & Precisión',
      desc: 'Perfeccionamiento continuo en manicura rusa/combinada y esmaltado de alta durabilidad para un crecimiento limpio.'
    },
    {
      icon: Heart,
      title: 'Cuidado de la Uña Natural',
      desc: 'Sin limados agresivos ni productos que dañen tu lámina ungueal. Priorizamos la salud de tus manos.'
    },
    {
      icon: Sparkles,
      title: 'Nail Art Personalizado',
      desc: 'Diseños únicos a mano alzada adaptados a tu gusto, estilo de vida o eventos especiales.'
    },
    {
      icon: Shield,
      title: 'Máxima Higiene y Esterilización',
      desc: 'Herramientas esterilizadas y protocolos rigurosos de desinfección en cada servicio.'
    }
  ];

  return (
    <section id="sobre-soles" className="section section--subtle about-section">
      <div className="container">
        <SectionHeading
          badge={<Badge variant="gold" icon={Sparkles}>Nuestra Filosofía</Badge>}
          title="Uñas que reflejan tu estilo y cuidan de ti"
          subtitle="En Soles Nails convertimos cada sesión en una experiencia de bienestar, precisión artística y atención cercana en Higuera la Real."
        />

        <div className="about-grid">
          {/* Left Column: Visual Story & Highlights */}
          <div className="about-visual">
            <div className="about-card-hero">
              <div className="about-card-hero__badge">
                <span className="sparkle-anim">✨</span>
                <span>Higuera la Real, España</span>
              </div>
              <h3 className="about-card-hero__title font-display">
                "Cada mano cuenta una historia, cada diseño es una firma única."
              </h3>
              <p className="about-card-hero__text">
                En nuestro estudio creemos que una buena manicura no solo embellece tus manos, sino que te brinda seguridad y confianza en tu día a día.
              </p>

              <div className="about-stats-grid">
                {SITE_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="about-stat-box">
                    <span className="about-stat-box__val font-display">{stat.value}</span>
                    <span className="about-stat-box__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Values & Pillars */}
          <div className="about-pillars">
            <div className="pillars-list">
              {pillars.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="pillar-item">
                    <div className="pillar-item__icon-box">
                      <IconComponent size={22} className="text-terracotta" />
                    </div>
                    <div className="pillar-item__content">
                      <h4 className="pillar-item__title">{item.title}</h4>
                      <p className="pillar-item__desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="about-cta-box">
              <p className="about-cta-box__prompt">
                ¿Tienes una idea de diseño o quieres una valoración para tus uñas?
              </p>
              <Button
                variant="whatsapp"
                size="md"
                onClick={() => whatsappService.openDirectChat({ customMessage: '¡Hola Sol! Me gustaría hacerte una consulta sobre el cuidado de mis uñas.' })}
              >
                Consultar con Sol por WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
