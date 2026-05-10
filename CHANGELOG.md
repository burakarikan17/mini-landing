# Changelog

Tüm önemli değişiklikler bu dosyada belgelenir.
Format [Conventional Commits](https://www.conventionalcommits.org/tr/) spesifikasyonuna uygundur.

---

## [0.3.0] — 2026-05-09

### feat: Tema ve form mantıkları

- **feat(hooks):** `useTheme` — localStorage, data-theme, prefers-color-scheme
- **feat(components):** `ThemeToggle` — animasyonlu toggle switch, ARIA etiketli
- **feat(utils):** `validation.ts` — isEmpty, isValidEmail, validateContactForm
- **refactor(sections):** `Contact` — controlled form, blur-on-touch validasyon, fake submit + reset
- **style(sections):** Contact textarea hata durumu eklendi

---

## [0.2.0] — 2026-05-09

### feat: Sayfa bölümleri

- **feat(sections):** `Hero` — glow efektler, stagger fade-in, CTA, istatistikler
- **feat(sections):** `Features` — 6 kart, 3→2→1 responsive grid
- **feat(sections):** `Pricing` — 3 plan, popular badge, checklist
- **feat(sections):** `FAQ` — 5 soru-cevap, Accordion single mode
- **feat(sections):** `Contact` — form + iletişim bilgileri
- **refactor(app):** App.tsx yeniden yapılandırıldı

---

## [0.1.0] — 2026-05-09

### feat: Temel altyapı ve UI bileşenleri

- **feat(styles):** _variables.scss — Light/Dark CSS custom properties
- **feat(styles):** _mixins.scss — Flexbox, Grid, Breakpoint mixin'leri
- **feat(styles):** main.scss — Modern reset, Inter font, reduced-motion
- **feat(components):** Button — variant, size, loading, icon
- **feat(components):** Input — label, error, helperText, ARIA
- **feat(components):** Card — image, title, hoverable, onClick
- **feat(components):** Modal — Esc kapatma, focus trap, aria-modal
- **feat(components):** Accordion — smooth geçiş, aria-expanded
- **chore:** main.tsx → styles/main.scss import

---

## [0.0.0] — 2026-05-09

### chore: Proje başlangıcı

- Vite + React + TypeScript şablonu
- ESLint, Prettier, Sass bağımlılıkları
