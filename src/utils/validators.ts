// ==========================================
// SOLES NAILS - VALIDATION UTILITIES
// Funciones puras sin estado ni dependencias externas.
// ==========================================

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PHONE_DIGITS = 9;
const MAX_PHONE_DIGITS = 15;
const MIN_NAME_LENGTH = 2;

/** El email es opcional: si está vacío se considera válido. */
export const isValidEmail = (email: string): boolean => {
  if (!email) return true;
  return EMAIL_PATTERN.test(email.trim());
};

/** Admite teléfonos con o sin prefijo, espacios o guiones. */
export const isValidPhone = (phone: string): boolean => {
  if (!phone) return false;
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= MIN_PHONE_DIGITS && digitsOnly.length <= MAX_PHONE_DIGITS;
};

export const isValidName = (name: string): boolean => {
  return typeof name === 'string' && name.trim().length >= MIN_NAME_LENGTH;
};
