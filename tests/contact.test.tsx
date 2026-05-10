import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Contact from '../src/sections/Contact';

describe('Contact Form', () => {
  it('renders all form fields', () => {
    const { container } = render(<Contact />);
    const form = container.querySelector('form')!;
    expect(within(form).getByLabelText(/ad soyad/i)).toBeInTheDocument();
    expect(within(form).getByLabelText(/e-posta/i)).toBeInTheDocument();
    expect(within(form).getByLabelText(/konu/i)).toBeInTheDocument();
    expect(within(form).getByLabelText(/mesaj/i)).toBeInTheDocument();
  });

  it('shows errors on empty submit', async () => {
    const user = userEvent.setup();
    const { container } = render(<Contact />);
    const form = container.querySelector('form')!;
    await user.click(within(form).getByRole('button', { name: /gönder/i }));
    expect(within(form).getByText(/ad soyad alanı zorunludur/i)).toBeInTheDocument();
    expect(within(form).getByText(/e-posta alanı zorunludur/i)).toBeInTheDocument();
  });

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup();
    const { container } = render(<Contact />);
    const form = container.querySelector('form')!;
    await user.type(within(form).getByLabelText(/e-posta/i), 'gecersiz-email');
    await user.tab();
    expect(within(form).getByText(/geçerli bir e-posta/i)).toBeInTheDocument();
  });

  it('does not show errors for valid input', async () => {
    const user = userEvent.setup();
    const { container } = render(<Contact />);
    const form = container.querySelector('form')!;
    await user.type(within(form).getByLabelText(/ad soyad/i), 'Burak Arikan');
    await user.type(within(form).getByLabelText(/e-posta/i), 'burak@example.com');
    await user.tab();
    expect(within(form).queryByText(/zorunludur/i)).not.toBeInTheDocument();
  });
});