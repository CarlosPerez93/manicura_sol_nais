// ==========================================
// SOLES NAILS - VALIDATION UTILITIES
// ==========================================

export const isValidEmail = (email) => {
  if (!email) return true; // Email opcional si hay teléfono
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const isValidPhone = (phone) => {
  if (!phone) return false;
  // Admite teléfonos españoles con o sin prefijo +34, espacios o guiones (mínimo 9 dígitos)
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 9 && digitsOnly.length <= 15;
};

export const isValidName = (name) => {
  return typeof name === 'string' && name.trim().length >= 2;
};
