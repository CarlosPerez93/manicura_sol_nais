// ==========================================
// SOLES NAILS - DOMAIN TYPES
// Modelos del negocio, independientes de la capa de presentación.
// ==========================================

/** Servicio ofrecido en el estudio. */
export interface Service {
  readonly id: string;
  readonly category: ServiceCategory;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly duration: string;
  readonly durability: string;
  readonly highlights: readonly string[];
  readonly popular: boolean;
}

export type ServiceCategory = 'Esmaltados' | 'Diseño' | 'Cuidado' | 'Especial';

/** Filtro de la galería de servicios (incluye el agregado "Todos"). */
export type ServiceFilter = 'Todos' | ServiceCategory;

/** Trabajo de manicura publicado en la galería. */
export interface PortfolioWork {
  readonly id: string;
  readonly title: string;
  readonly category: PortfolioCategory;
  readonly tag: string;
  readonly description: string;
  readonly finish: string;
  readonly duration: string;
  readonly image: string;
  readonly colors: readonly string[];
  readonly gradient: string;
  readonly featured: boolean;
}

export type PortfolioCategory =
  | 'Nail Art'
  | 'Semipermanente'
  | 'Minimalista'
  | 'Cuidado & Color'
  | 'Especial Eventos';

export type PortfolioFilter = 'Todos' | PortfolioCategory;

/** Testimonio de una clienta. */
export interface ClientReview {
  readonly id: string;
  readonly name: string;
  readonly location: string;
  readonly comment: string;
  readonly service: string;
  readonly rating: number;
  readonly highlight: string;
}

/** Cifra o dato destacado del estudio. */
export interface SiteStat {
  readonly label: string;
  readonly value: string;
  readonly suffix: string;
}

/** Horario de atención. */
export interface OpeningHours {
  readonly days: string;
  readonly time: string;
}

/** Datos de marca y contacto del estudio. */
export interface SiteLocation {
  readonly city: string;
  readonly province: string;
  readonly region: string;
  readonly country: string;
  readonly flag: string;
  readonly fullAddress: string;
  readonly googleMapsUrl: string;
}

export interface SiteContact {
  readonly phone: string;
  readonly phoneFormatted: string;
  readonly phoneClean: string;
  readonly whatsappUrl: string;
  readonly instagramUrl: string;
  readonly email: string;
}

export interface SiteInfo {
  readonly name: string;
  readonly handle: string;
  readonly tagline: string;
  readonly description: string;
  readonly location: SiteLocation;
  readonly contact: SiteContact;
  readonly hours: readonly OpeningHours[];
  readonly stats: readonly SiteStat[];
}

/** Enlace de la navegación principal. */
export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

// ------------------------------------------
// Personalizador de manicura
// ------------------------------------------

export type NailShapeId = 'almendra' | 'cuadrada' | 'ovalada' | 'coffin';
export type NailLengthId = 'corta' | 'media' | 'larga';
export type NailFinishId = 'gloss' | 'matte' | 'glazed' | 'glitter';

export interface NailShape {
  readonly id: NailShapeId;
  readonly label: string;
  readonly icon: string;
  readonly desc: string;
}

export interface NailLength {
  readonly id: NailLengthId;
  readonly label: string;
  readonly desc: string;
}

export interface NailFinish {
  readonly id: NailFinishId;
  readonly label: string;
  readonly desc: string;
  readonly sampleColor: string;
}

/** Selección completa del personalizador. */
export interface QuoteSelection {
  readonly shape: NailShape;
  readonly length: NailLength;
  readonly finish: NailFinish;
  readonly hasNailArt: boolean;
}

// ------------------------------------------
// Formulario de contacto y mensajería
// ------------------------------------------

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  message: string;
}

/** Errores por campo; `submit` recoge el fallo global del envío. */
export type ContactFormErrors = Partial<Record<keyof ContactFormData | 'submit', string>>;

export interface ContactSubmissionResult {
  readonly success: boolean;
  readonly message: string;
}

export interface ContactSubmissionFailure {
  readonly success: false;
  readonly error: string;
}

export type ContactSubmitOutcome =
  | ContactSubmissionResult
  | ContactSubmissionFailure
  | { readonly success: false; readonly errors: ContactFormErrors };

/** Parámetros para componer un mensaje de WhatsApp. */
export interface BookingParams {
  readonly name?: string;
  readonly service?: string;
  readonly finish?: string;
  readonly preferredDate?: string;
  readonly customMessage?: string;
}
