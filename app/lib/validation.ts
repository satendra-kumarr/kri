/**
 * Form validation utilities
 */

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  // Remove spaces, dashes, and plus signs for validation
  const cleaned = phone.replace(/[\s\-+]/g, '');
  // Indian phone numbers: 10 digits, optionally with country code 91
  const indianPhoneRegex = /^(\+91)?[6-9]\d{9}$/;
  return indianPhoneRegex.test(cleaned);
}

export function validateRequired(value: string | null | undefined): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}

export function validateName(name: string): boolean {
  return validateRequired(name) && name.trim().length >= 2;
}

export interface ValidationErrors {
  [field: string]: string;
}

export function validateContactForm(data: {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  message?: string | null;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!validateName(data.name || '')) {
    errors.name = 'Please enter a valid name (at least 2 characters)';
  }

  if (!validatePhone(data.phone || '')) {
    errors.phone = 'Please enter a valid Indian phone number (10 digits)';
  }

  if (!validateEmail(data.email || '')) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validateRequired(data.message || '')) {
    errors.message = 'Please enter a message';
  }

  return errors;
}
