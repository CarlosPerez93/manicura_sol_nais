// ==========================================
// SOLES NAILS - WHATSAPP INTEGRATION SERVICE
// Principio de Responsabilidad Única (SRP)
// ==========================================
import { SITE_INFO } from '../constants/siteInfo';

export const whatsappService = {
  /**
   * Genera el enlace directo a WhatsApp con mensaje pre-configurado
   * @param {Object} params
   * @param {string} [params.name]
   * @param {string} [params.service]
   * @param {string} [params.finish]
   * @param {string} [params.customMessage]
   * @param {string} [params.preferredDate]
   * @returns {string} URL formateada para WhatsApp
   */
  createBookingUrl({ name, service, finish, customMessage, preferredDate } = {}) {
    let text = `¡Hola Sol! ✨ Vengo desde tu página web de Soles Nails.`;

    if (name) {
      text += `\n\n👤 *Mi nombre:* ${name.trim()}`;
    }

    if (service) {
      text += `\n💅 *Servicio de interés:* ${service}`;
    }

    if (finish) {
      text += `\n✨ *Acabado deseado:* ${finish}`;
    }

    if (preferredDate) {
      text += `\n📅 *Preferencia de fecha/horario:* ${preferredDate}`;
    }

    if (customMessage) {
      text += `\n💬 *Mensaje:* ${customMessage.trim()}`;
    } else {
      text += `\n\nMe gustaría consultar disponibilidad para agendar una cita. ¡Muchas gracias!`;
    }

    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${SITE_INFO.contact.phoneClean}?text=${encodedText}`;
  },

  /**
   * Abre directamente WhatsApp en una nueva pestaña
   */
  openDirectChat(params = {}) {
    const url = this.createBookingUrl(params);
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};
