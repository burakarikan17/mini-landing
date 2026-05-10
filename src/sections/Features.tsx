import Card from '../components/Card/Card';
import { features } from '../data/features';
import './Features.scss';

/**
 * Renders the feature list section.
 * @returns Features section markup.
 */
const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__container">
        <div className="features__header">
          <span className="features__label">Özellikler</span>
          <h2 className="features__title">
            Başarınız için ihtiyacınız olan her şey
          </h2>
          <p className="features__subtitle">
            Güçlü araçlar ve akıllı özelliklerle iş süreçlerinizi kolaylaştırın.
          </p>
        </div>

        <div className="features__grid">
          {features.map((feature) => (
            <Card key={feature.id} hoverable className="features__card">
              <div className="features__icon">{feature.icon}</div>
              <h3 className="features__card-title">{feature.title}</h3>
              <p className="features__card-desc">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
