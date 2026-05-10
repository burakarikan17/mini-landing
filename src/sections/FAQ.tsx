import { useMemo, useState } from 'react';
import Accordion from '../components/Accordion/Accordion';
import { faqItems } from '../data/faq';
import './FAQ.scss';

/**
 * Renders the FAQ section with client-side search filtering.
 * @returns FAQ section markup.
 */
const FAQ = () => {
  const [query, setQuery] = useState('');

  const filteredFaqItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return faqItems;

    return faqItems.filter(
      (item) =>
        item.title.toLowerCase().includes(normalized) ||
        item.content.toLowerCase().includes(normalized)
    );
  }, [query]);

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <div className="faq__header">
          <span className="faq__label">SSS</span>
          <h2 className="faq__title">Sıkça Sorulan Sorular</h2>
          <p className="faq__subtitle">
            Merak ettiğiniz her şeyin cevabı burada. Bulamazsanız bize ulaşın.
          </p>
        </div>

        <div className="faq__content">
          <label className="faq__search-label" htmlFor="faq-search">
            Sorularda ara
          </label>
          <input
            id="faq-search"
            type="search"
            className="faq__search-input"
            placeholder="Örn: API, plan, güvenlik..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {filteredFaqItems.length > 0 ? (
            <Accordion items={filteredFaqItems} single />
          ) : (
            <p className="faq__empty" role="status">
              Aramanıza uygun bir soru bulunamadı.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
