import { useState } from 'react';
import { isValidName, isValidPhone, isValidEmail } from '../utils/validators';
import { contactService } from '../services/contactService';
import { whatsappService } from '../services/whatsappService';

export const useContactForm = (initialService = '') => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService,
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!isValidName(formData.name)) {
      newErrors.name = 'Por favor, introduce tu nombre (mínimo 2 letras).';
    }

    if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Introduce un teléfono de contacto válido (ej: 690 123 456).';
    }

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = 'El formato del correo electrónico no es válido.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const setService = (serviceTitle) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceTitle
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (!validate()) {
      return { success: false, errors };
    }

    setIsSubmitting(true);
    try {
      const response = await contactService.submitContactForm(formData);
      setIsSuccess(true);
      return response;
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        submit: error.message || 'Error al procesar la solicitud.'
      }));
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendToWhatsApp = () => {
    if (!validate()) return;

    whatsappService.openDirectChat({
      name: formData.name,
      service: formData.service,
      preferredDate: formData.preferredDate,
      customMessage: formData.message
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      preferredDate: '',
      message: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

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
