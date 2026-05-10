export interface FormErrors {
  [field: string]: string;
}

/**
 * Validates whether a value matches a basic email format.
 * @param email Candidate email string.
 * @returns True when the value is a valid email.
 */
export const isValidEmail = (email: string): boolean => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.trim());
};

/**
 * Checks whether a string is empty after trimming.
 * @param value Input value.
 * @returns True when the value has no non-whitespace characters.
 */
export const isEmpty = (value: string): boolean => {
  return value.trim().length === 0;
};

/**
 * Validates contact form fields and returns field-level errors.
 * @param fields Contact form values.
 * @returns Error map keyed by field name.
 */
export const validateContactForm = (fields: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): FormErrors => {
  const errors: FormErrors = {};

  if (isEmpty(fields.name)) {
    errors.name = 'Ad Soyad alanı zorunludur.';
  }

  if (isEmpty(fields.email)) {
    errors.email = 'E-posta alanı zorunludur.';
  } else if (!isValidEmail(fields.email)) {
    errors.email = 'Geçerli bir e-posta adresi girin.';
  }

  if (isEmpty(fields.subject)) {
    errors.subject = 'Konu alanı zorunludur.';
  }

  if (isEmpty(fields.message)) {
    errors.message = 'Mesaj alanı zorunludur.';
  }

  return errors;
};

/**
 * Determines whether the error map is empty.
 * @param errors Form errors keyed by field.
 * @returns True when no validation errors exist.
 */
export const isFormValid = (errors: FormErrors): boolean => {
  return Object.keys(errors).length === 0;
};
