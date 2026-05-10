import { lazy, Suspense, useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import Hero from './sections/Hero';

const Features = lazy(() => import('./sections/Features'));
const Pricing = lazy(() => import('./sections/Pricing'));
const FAQ = lazy(() => import('./sections/FAQ'));
const Contact = lazy(() => import('./sections/Contact'));

const sectionLinks = [
  { id: 'hero', label: 'Hero' },
  { id: 'features', label: 'Özellikler' },
  { id: 'pricing', label: 'Fiyat' },
  { id: 'faq', label: 'SSS' },
  { id: 'contact', label: 'İletişim' },
];

/**
 * Renders the single-page landing layout and section navigation state.
 * @returns Application shell.
 */
const App = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = sectionLinks[0].id;

      for (const section of sectionLinks) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.offsetTop <= marker) {
          current = section.id;
        }
      }

      setActiveSection(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const sectionNodes = Array.from(document.querySelectorAll('main section'));
    sectionNodes.forEach((node) => node.classList.add('reveal-section'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-section--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    sectionNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <a className="skip-link" href="#hero">
        İçeriğe geç
      </a>

      <nav className="quick-nav" aria-label="Bölüm gezintisi">
        {sectionLinks.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`quick-nav__link ${activeSection === item.id ? 'quick-nav__link--active' : ''}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <ThemeToggle />
      <Hero />

      <Suspense fallback={null}>
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </Suspense>
    </main>
  );
};

export default App;