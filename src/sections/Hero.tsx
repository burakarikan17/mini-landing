import { useState, lazy, Suspense } from 'react';
import Button from '../components/Button/Button';
import './Hero.scss';

const Modal = lazy(() => import('../components/Modal/Modal'));

/**
 * Renders the hero section with a demo request modal.
 * @returns Hero section markup.
 */
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-section__backdrop" aria-hidden="true">
        <div className="hero-section__glow hero-section__glow--1" />
        <div className="hero-section__glow hero-section__glow--2" />
      </div>
      <div className="hero-section__container">
        <span className="hero-section__badge">🚀 Yeni nesil platform</span>
        <h1 className="hero-section__title">
          Projelerinizi <span className="hero-section__highlight">hızlandırın</span>,
          geleceği şekillendirin.
        </h1>
        <p className="hero-section__subtitle">
          Modern araçlar ve güçlü altyapıyla fikirlerinizi gerçeğe dönüştürün.
          Ekibinizle birlikte daha verimli çalışın, daha hızlı büyüyün.
        </p>
        <div className="hero-section__actions">
          <Button variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
            Ücretsiz Başla
          </Button>
          <Button variant="secondary" size="lg">
            Daha Fazla Bilgi
          </Button>
        </div>
        <div className="hero-section__stats">
          <div className="hero-section__stat">
            <span className="hero-section__stat-value">10K+</span>
            <span className="hero-section__stat-label">Aktif Kullanıcı</span>
          </div>
          <div className="hero-section__stat">
            <span className="hero-section__stat-value">99.9%</span>
            <span className="hero-section__stat-label">Uptime</span>
          </div>
          <div className="hero-section__stat">
            <span className="hero-section__stat-value">50+</span>
            <span className="hero-section__stat-label">Entegrasyon</span>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Demo Talebi"
          footer={
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Tamam
            </Button>
          }
        >
          <p>Demo talebiniz alındı! En kısa sürede sizinle iletişime geçeceğiz.</p>
          <p style={{ marginTop: '0.75rem', color: 'var(--color-text-secondary)' }}>
            Ortalama yanıt süremiz 24 saattir.
          </p>
        </Modal>
      </Suspense>
    </section>
  );
};

export default Hero;