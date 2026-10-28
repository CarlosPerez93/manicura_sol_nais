// ==========================================
// SOLES NAILS - CONTACT FORM SERVICE
// SRP: persiste solicitudes. DIP: la UI depende de `ContactRepository`.
// ==========================================
import type { ContactFormData, ContactSubmissionResult } from '../types/domain';

export interface ContactRepository {
  submitContactForm(formData: ContactFormData): Promise<ContactSubmissionResult>;
}

const STORAGE_KEY = 'soles_nails_inquiries';
const SIMULATED_LATENCY_MS = 800;

interface StoredInquiry extends ContactFormData {
  readonly timestamp: string;
}

const persistLocally = (formData: ContactFormData): void => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const history: StoredInquiry[] = raw ? (JSON.parse(raw) as StoredInquiry[]) : [];
    history.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // Modo privado o almacenamiento bloqueado: la solicitud sigue siendo válida.
  }
};

export const contactService: ContactRepository = {
  async submitContactForm(formData: ContactFormData): Promise<ContactSubmissionResult> {
    // Latencia simulada para ofrecer feedback accesible de envío.
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_LATENCY_MS));

    if (!formData.name || !formData.phone) {
      throw new Error('El nombre y el teléfono son campos obligatorios.');
    }

    persistLocally(formData);

    return {
      success: true,
      message: '¡Tu solicitud ha sido registrada correctamente! Te responderemos enseguida.'
    };
  }
};
