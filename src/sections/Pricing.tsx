import Button from '../components/Button/Button';
import { plans } from '../data/pricing';
import './Pricing.scss';

/**
 * Renders the pricing plans section.
 * @returns Pricing section markup.
 */
const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing__container">
        <div className="pricing__header">
          <span className="pricing__label">Fiyatlandırma</span>
          <h2 className="pricing__title">
            Her bütçeye uygun planlar
          </h2>
          <p className="pricing__subtitle">
            İhtiyacınıza en uygun planı seçin. İstediğiniz zaman yükseltin veya iptal edin.
          </p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
            >
              {plan.popular && (
                <span className="pricing__badge">En Popüler</span>
              )}

              <div className="pricing__card-header">
                <h3 className="pricing__plan-name">{plan.name}</h3>
                <p className="pricing__plan-desc">{plan.description}</p>
              </div>

              <div className="pricing__price-block">
                <span className="pricing__price">{plan.price}</span>
                <span className="pricing__period">{plan.period}</span>
              </div>

              <ul className="pricing__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing__feature">
                    <svg className="pricing__check" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                fullWidth
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
