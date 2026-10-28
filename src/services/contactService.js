// ==========================================
// SOLES NAILS - CONTACT FORM SERVICE
// Principio de Inversión de Dependencias y Responsabilidad Única
// ==========================================

export const contactService = {
  /**
   * Procesa el envío del formulario de contacto
   * @param {Object} formData
   * @returns {Promise<{success: boolean, message: string}>}
   */
  async submitContactForm(formData) {
    // Simulamos latencia de red controlada para feedback visual accesible
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Validación básica de seguridad en capa de servicio
    if (!formData.name || !formData.phone) {
      throw new Error('El nombre y el teléfono son campos obligatorios.');
    }

    // Almacenamos temporalmente en localStorage para persistencia del usuario
    try {
      const existingHistory = JSON.parse(localStorage.getItem('soles_nails_inquiries') || '[]');
      existingHistory.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('soles_nails_inquiries', JSON.stringify(existingHistory));
    } catch {
      // Ignorar fallo de storage en modo privado
    }

    return {
      success: true,
      message: '¡Tu solicitud ha sido registrada correctamente! Te responderemos enseguida.'
    };
  }
};
