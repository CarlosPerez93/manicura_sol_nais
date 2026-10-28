import type { ClientReview } from '../types/domain';

// ==========================================
// SOLES NAILS - CLIENT STORIES & TESTIMONIALS
// Inspirado en la sección de destacados "Clientas"
// ==========================================

export const CLIENT_REVIEWS: readonly ClientReview[] = [
  {
    id: 'rev-1',
    name: 'Elena M.',
    location: 'Higuera la Real',
    comment: 'Llevo 4 semanas con el esmaltado intacto, ni una sola esquina levantada. La delicadeza con la que trabaja la cutícula es increíble, cero molestias.',
    service: 'Esmaltado Semipermanente',
    rating: 5,
    highlight: 'Durabilidad impecable'
  },
  {
    id: 'rev-2',
    name: 'Carmen R.',
    location: 'Fregenal de la Sierra',
    comment: 'Sol tiene un talento impresionante para el nail art a mano alzada. Le mostré una idea que vi en internet y la mejoró por completo. ¡Ya tengo mi próxima cita!',
    service: 'Nail Art Personalizado',
    rating: 5,
    highlight: 'Diseño a mano alzada único'
  },
  {
    id: 'rev-3',
    name: 'Lucía G.',
    location: 'Higuera la Real',
    comment: 'Mis uñas eran súper quebradizas y con la nivelación y refuerzo han crecido más fuertes que nunca. El trato es tan cercano y profesional que es mi momento de relax favorito.',
    service: 'Nivelación & Refuerzo',
    rating: 5,
    highlight: 'Cuidado real de la uña natural'
  },
  {
    id: 'rev-4',
    name: 'Sara B.',
    location: 'Bodonal de la Sierra',
    comment: 'La higiene, la precisión y la amabilidad son un 10. Siempre salgo encantada con mis uñas. ¡Totalmente recomendada en toda la comarca!',
    service: 'Manicura Completa',
    rating: 5,
    highlight: 'Higiene y trato de 10'
  }
];

export const FAQS = [
  {
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Puedes agendar directamente haciendo clic en el botón de WhatsApp (690 618 009) o completando el formulario de contacto aquí en la web. Te responderé a la brevedad para coordinar día y hora.'
  },
  {
    question: '¿Cuánto tiempo dura el esmaltado semipermanente?',
    answer: 'La duración media es de 3 a 4 semanas en perfectas condiciones, dependiendo del crecimiento natural de tu uña y las actividades diarias. Realizamos una preparación exhaustiva para garantizar la máxima adherencia.'
  },
  {
    question: '¿Haces diseños personalizados a partir de fotos de referencia?',
    answer: '¡Por supuesto! Puedes enviarme por WhatsApp la idea o fotografía que tengas en mente. Te asesoraré sobre cómo adaptarla a la forma y longitud de tus uñas para que quede espectacular.'
  },
  {
    question: '¿El procedimiento daña la uña natural?',
    answer: 'No. En Soles Nails priorizamos la salud de tu uña natural. Utilizamos productos de alta calidad y técnicas de preparación y retirada seguras que no debilitan la queratina ungueal.'
  },
  {
    question: '¿Dónde está ubicado el estudio?',
    answer: 'En Higuera la Real (Badajoz, España). Al confirmar tu cita por WhatsApp te facilitamos la ubicación exacta y recomendaciones de acceso.'
  }
];
