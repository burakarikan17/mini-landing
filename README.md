# Staj Landing Page

PDF gereksinimlerine uygun olarak geliştirilmiş tek sayfalık ürün tanıtım uygulaması.
React + TypeScript + SCSS ile yazılmıştır; harici UI bileşen kütüphanesi kullanılmamıştır.

🔗 **[Canlı Demo](https://mini-landing-burakarikan.netlify.app/)** · **[GitHub Repo](https://github.com/burakarikan17/mini-landing)**

---

## Gereksinim Kapsamı

- Tek sayfa landing bölümleri: Hero, Özellikler, Fiyat Kartları, SSS (Accordion), İletişim Formu
- Yeniden kullanılabilir UI bileşenleri: Button, Input, Card, Modal, Accordion
- Mobil öncelikli responsive tasarım (3 breakpoint): `≤640px`, `641–1024px`, `≥1025px`
- Light/Dark tema geçişi (CSS custom properties + toggle)
- Form doğrulama: boş alan kontrolü + e-posta format kontrolü (yalın TS/JS)
- Temel erişilebilirlik: semantic HTML, klavye erişimi, ARIA bağlantıları

---

## Teknoloji Yığını

| Araç                           | Kullanım                                |
| ------------------------------ | --------------------------------------- |
| React 19 + TypeScript          | UI katmanı ve tip güvenliği             |
| Vite                           | Build ve geliştirme sunucusu            |
| SCSS (Sass)                    | BEM metodolojisi, mixins, CSS variables |
| ESLint + Prettier              | Kod kalitesi ve format                  |
| Vitest + React Testing Library | Birim ve bileşen testleri               |

---

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir UI bileşenleri
│   ├── Accordion/
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── Modal/
│   └── ThemeToggle/
├── sections/            # Sayfa bölümleri
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── hooks/               # useTheme
├── utils/               # Form validasyon fonksiyonları
├── data/                # Statik içerik (faq, features, pricing)
└── styles/              # Global SCSS (_variables, _mixins, main)
tests/                   # Vitest test dosyaları
docs/
├── adr-01.md            # Teknoloji seçim kararı
└── accessibility.md     # Erişilebilirlik notları
```

---

## Kurulum

```bash
npm install
npm run dev
```

## Scriptler

```bash
npm run dev       # Geliştirme sunucusu
npm run build     # Production build
npm run preview   # Build önizleme
npm run lint      # ESLint kontrolü
npm run test      # Vitest testleri
```

---

## CI (GitHub Actions)

Her push ve PR'da otomatik olarak çalışır:

1. `npm install`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

---

## Erişilebilirlik ve Performans

- Modal ve Accordion bileşenlerinde tam klavye navigasyonu ve focus trap desteği
- Form alanlarında `label`, `aria-invalid`, `aria-describedby` bağlantıları
- Tema değişimi `data-theme` attribute üzerinden CSS seviyesinde uygulanır
- `React.lazy` + `Suspense` ile section bazlı code splitting
- `prefers-reduced-motion` media query desteği

### Lighthouse

![Lighthouse raporu](https://github.com/user-attachments/assets/98e798b1-518a-4270-a324-965cdf2f820b)

---

## Ek Dokümanlar

- [`CHANGELOG.md`](./CHANGELOG.md) — Sürüm geçmişi
- [`DAILY_LOG.md`](./DAILY_LOG.md) — Günlük ilerleme notları
- [`docs/adr-01.md`](./docs/adr-01.md) — Teknoloji seçim kararı (ADR)
- [`docs/accessibility.md`](./docs/accessibility.md) — Erişilebilirlik notları
