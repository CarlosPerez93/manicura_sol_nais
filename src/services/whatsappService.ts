// ==========================================
// SOLES NAILS - WHATSAPP INTEGRATION SERVICE
// SRP: solo serializa mensajes de cita. DIP: los consumidores dependen de
// la interfaz `MessagingService`, no de esta implementación concreta.
// ==========================================
import { SITE_INFO } from '../constants/siteInfo';
import type { BookingParams } from '../types/domain';

export interface MessagingService {
  createBookingUrl(params?: BookingParams): string;
  openDirectChat(params?: BookingParams): void;
}

const buildMessage = ({ name, service, finish, customMessage, preferredDate }: BookingParams = {}): string => {
  const lines: string[] = ['¡Hola Sol! ✨ Vengo desde tu página web de Soles Nails.'];

  if (name) lines.push(`👤 *Mi nombre:* ${name.trim()}`);
  if (service) lines.push(`💅 *Servicio de interés:* ${service}`);
  if (finish) lines.push(`✨ *Acabado deseado:* ${finish}`);
  if (preferredDate) lines.push(`📅 *Preferencia de fecha/horario:* ${preferredDate}`);
  if (customMessage) lines.push(`💬 *Mensaje:* ${customMessage.trim()}`);

  if (!customMessage) {
    lines.push('', 'Me gustaría consultar disponibilidad para agendar una cita. ¡Muchas gracias!');
  }

  return lines.join('\n');
};

export const whatsappService: MessagingService = {
  /** Genera el enlace directo a WhatsApp con el mensaje pre-configurado. */
  createBookingUrl(params?: BookingParams): string {
    const text = encodeURIComponent(buildMessage(params));
    return `https://wa.me/${SITE_INFO.contact.phoneClean}?text=${text}`;
  },

  /** Abre WhatsApp en una pestaña nueva. */
  openDirectChat(params?: BookingParams): void {
    const url = this.createBookingUrl(params);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
