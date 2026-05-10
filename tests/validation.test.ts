import { describe, expect, it } from 'vitest';
import { isEmpty, isFormValid, isValidEmail, validateContactForm } from '../src/utils/validation';

describe('validation utils', () => {
  it('validates email format', () => {
    expect(isValidEmail('dev@example.com')).toBe(true);
    expect(isValidEmail('invalid-email')).toBe(false);
  });

  it('returns errors for empty contact form', () => {
    const errors = validateContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    expect(isFormValid(errors)).toBe(false);
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.subject).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it('detects empty values with spaces', () => {
    expect(isEmpty('   ')).toBe(true);
    expect(isEmpty('hello')).toBe(false);
  });
});
