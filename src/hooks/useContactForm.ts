import { useCallback, useState, type ChangeEvent, type FormEvent } from 'react';
import { isValidName, isValidPhone, isValidEmail } from '../utils/validators';
import { contactService, type ContactRepository } from '../services/contactService';
import { whatsappService, type MessagingService } from '../services/whatsappService';
import type { ContactFormData, ContactFormErrors, ContactSubmitOutcome } from '../types/domain';
import type { UseContactFormResult } from '../types/ui';

const emptyForm = (service = ''): ContactFormData => ({
  name: '',
  phone: '',
  email: '',
  service,
  preferredDate: '',
  message: ''
});

interface ContactFormDependencies {
  readonly repository?: ContactRepository;
  readonly messaging?: MessagingService;
}

/**
 * Estado y validación del formulario de contacto.
 * Las dependencias se inyectan (DIP): el hook no instancia servicios concretos.
 */
export const useContactForm = (
  initialService = '',
  { repository = contactService, messaging = whatsappService }: ContactFormDependencies = {}
): UseContactFormResult => {
  const [formData, setFormData] = useState<ContactFormData>(() => emptyForm(initialService));
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = useCallback((): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!isValidName(formData.name)) {
      nextErrors.name = 'Por favor, introduce tu nombre (mínimo 2 letras).';
    }
    if (!isValidPhone(formData.phone)) {
      nextErrors.phone = 'Introduce un teléfono de contacto válido (ej: 690 123 456).';
    }
    if (formData.email && !isValidEmail(formData.email)) {
      nextErrors.email = 'El formato del correo electrónico no es válido.';
    }

    return nextErrors;
  }, [formData]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = event.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => (prev[name as keyof ContactFormData] ? { ...prev, [name]: undefined } : prev));
    },
    []
  );

  const setService = useCallback((serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
  }, []);

  const handleSubmit = useCallback(
    async (event?: FormEvent<HTMLFormElement>): Promise<ContactSubmitOutcome> => {
      event?.preventDefault();

      const validationErrors = validate();
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length > 0) {
        return { success: false, errors: validationErrors };
      }

      setIsSubmitting(true);
      try {
        const response = await repository.submitContactForm(formData);
        setIsSuccess(true);
        return response;
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Error al procesar la solicitud.';
        setErrors((prev) => ({ ...prev, submit: message }));
        return { success: false, error: message };
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, repository, validate]
  );

  const sendToWhatsApp = useCallback(() => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    messaging.openDirectChat({
      name: formData.name,
      service: formData.service,
      preferredDate: formData.preferredDate,
      customMessage: formData.message
    });
  }, [formData, messaging, validate]);

  const resetForm = useCallback(() => {
    setFormData(emptyForm(initialService));
    setErrors({});
    setIsSuccess(false);
  }, [initialService]);

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleChange,
    setService,
    handleSubmit,
    sendToWhatsApp,
    resetForm
  };
};
