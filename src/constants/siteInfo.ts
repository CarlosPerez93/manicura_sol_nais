import type { SiteInfo } from '../types/domain';

// ==========================================
// SOLES NAILS - SITE & BUSINESS DATA
// Basado fielmente en el perfil oficial de Instagram
// ==========================================

export const SITE_INFO: SiteInfo = {
  name: 'Soles Nails',
  handle: '@soles.nailshigueralareal',
  tagline: 'Uñas que hablan por ti ✨',
  description: 'Estudio de manicura y nail art en Higuera la Real (España). Diseños a mano alzada, esmaltados semipermanentes y cuidado profesional de uñas naturales.',
  location: {
    city: 'Higuera la Real',
    province: 'Badajoz',
    region: 'Extremadura',
    country: 'España',
    flag: '🇪🇦',
    fullAddress: 'Higuera la Real, Badajoz, España',
    googleMapsUrl: 'https://maps.google.com/?q=Higuera+la+Real,+Badajoz,+España'
  },
  contact: {
    phone: '690 618 009',
    phoneFormatted: '+34 690 618 009',
    phoneClean: '34690618009',
    whatsappUrl: 'https://wa.me/34690618009',
    instagramUrl: 'https://www.instagram.com/soles.nailshigueralareal',
    email: 'solesnails.higuera@gmail.com'
  },
  hours: [
    { days: 'Lunes a Viernes', time: '09:30 - 13:30 / 16:30 - 20:00' },
    { days: 'Sábados', time: '10:00 - 14:00 (Citas previas)' },
    { days: 'Domingos', time: 'Cerrado' }
  ],
  stats: [
    { label: 'Clientas satisfechas', value: '100%+', suffix: 'Cuidado' },
    { label: 'Ubicación local', value: 'Higuera', suffix: 'la Real' },
    { label: 'Especialidad', value: 'Semipermanente', suffix: '& Nail Art' },
    { label: 'Atención', value: 'Personalizada', suffix: 'Cita previa' }
  ]
};
