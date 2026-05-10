import { type FormEvent, useState, type ChangeEvent } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import { validateContactForm, isFormValid, type FormErrors } from '../utils/validation';
import './Contact.scss';

interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialFields: ContactFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

/**
 * Renders the contact section with client-side validation and fake submit flow.
 * @returns Contact section markup.
 */
const Contact = () => {
  const [fields, setFields] = useState<ContactFields>(initialFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const messageErrorId = 'contact-message-error';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));

    if (touched.has(name)) {
      const updated = validateContactForm({ ...fields, [name]: value });
      setErrors((prev) => {
        const next = { ...prev };
        if (updated[name]) {
          next[name] = updated[name];
        } else {
          delete next[name];
        }
        return next;
      });
    }
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => new Set(prev).add(name));

    const updated = validateContactForm(fields);
    if (updated[name]) {
      setErrors((prev) => ({ ...prev, [name]: updated[name] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched(new Set(['name', 'email', 'subject', 'message']));

    const validationErrors = validateContactForm(fields);
    setErrors(validationErrors);

    if (!isFormValid(validationErrors)) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFields(initialFields);
    setErrors({});
    setTouched(new Set());
    setSubmitted(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__info">
          <span className="contact__label">İletişim</span>
          <h2 className="contact__title">Bizimle iletişime geçin</h2>
          <p className="contact__subtitle">
            Sorularınız, önerileriniz veya iş birliği talepleriniz için formu doldurun.
            En kısa sürede size dönüş yapacağız.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-icon">📧</span>
              <div>
                <strong>E-posta</strong>
                <span>info@platform.com</span>
              </div>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon">📍</span>
              <div>
                <strong>Adres</strong>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-icon">📞</span>
              <div>
                <strong>Telefon</strong>
                <span>+90 (212) 555 0199</span>
              </div>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {submitted ? (
            <div className="contact__success">
              <span className="contact__success-icon">✅</span>
              <h3>Mesajınız başarıyla gönderildi!</h3>
              <p>En kısa sürede size dönüş yapacağız.</p>
              <Button variant="secondary" size="md" onClick={handleReset} type="button">
                Yeni Mesaj Gönder
              </Button>
            </div>
          ) : (
            <>
              <div className="contact__form-row">
                <Input
                  label="Ad Soyad"
                  placeholder="Adınızı girin"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.has('name') ? errors.name : undefined}
                  fullWidth
                />
                <Input
                  label="E-posta"
                  placeholder="ornek@mail.com"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.has('email') ? errors.email : undefined}
                  fullWidth
                />
              </div>

              <Input
                label="Konu"
                placeholder="Mesajınızın konusu"
                name="subject"
                value={fields.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.has('subject') ? errors.subject : undefined}
                fullWidth
              />

              <div className="contact__textarea-wrap">
                <label className="input__label" htmlFor="contact-message">
                  Mesaj
                </label>
                <textarea
                  id="contact-message"
                  className={`contact__textarea ${touched.has('message') && errors.message ? 'contact__textarea--error' : ''}`}
                  placeholder="Mesajınızı yazın..."
                  name="message"
                  aria-invalid={Boolean(touched.has('message') && errors.message)}
                  aria-describedby={touched.has('message') && errors.message ? messageErrorId : undefined}
                  rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.has('message') && errors.message && (
                  <span id={messageErrorId} className="input__error" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>

              <Button variant="primary" size="lg" fullWidth loading={loading} type="submit">
                Gönder
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
