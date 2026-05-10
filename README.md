# Staj Landing Page

PDF gereksinimlerine uygun olarak geliştirilmiş tek sayfalık ürün tanıtım uygulaması.
Proje React + TypeScript + SCSS ile yazılmıştır; harici UI component kütüphanesi kullanılmamıştır.

## Gereksinim Kapsamı

- Tek sayfa landing bölümleri: Hero, Özellikler, Fiyat Kartları, SSS (Accordion), İletişim Formu
- Yeniden kullanılabilir UI bileşenleri: Button, Input, Card, Modal, Accordion
- Mobil öncelikli responsive tasarım (3 breakpoint): `<=640`, `641-1024`, `>=1025`
- Light/Dark tema geçişi (CSS variables + toggle)
- Form doğrulama: boş alan kontrolü + e-posta format kontrolü (yalın TS/JS)
- Temel erişilebilirlik: semantic HTML, klavye erişimi, ARIA bağlantıları

## Teknoloji Yığını

- React + TypeScript
- Vite
- SCSS (Sass)
- ESLint + Prettier
- Vitest + React Testing Library

## Proje Yapısı

## Kurulum

```bash
npm install
npm run dev
```

## Scriptler

- `npm run dev`: geliştirme sunucusu
- `npm run lint`: lint kontrolü
- `npm run test`: birim/component testleri
- `npm run build`: production build
- `npm run preview`: build önizleme

## CI (GitHub Actions)

`.github/workflows/ci.yml` dosyası her push ve PR için şu adımları çalıştırır:

1. `npm install`
2. `npm run lint`
3. `npm run test`
4. `npm run build`

## Erişilebilirlik ve Performans Notları

- Accordion ve modal bileşenlerinde klavye ile kullanım desteklenir.
- Form alanlarında `label`, `aria-invalid`, `aria-describedby` bağlantıları kullanılır.
- Tema değişimi `data-theme` attribute'u üzerinden CSS seviyesinde uygulanır.
- Kod bölme (lazy loading) ile section bazlı bundle parçası üretilir.

## Teslimat Linkleri (Manuel Doldurulacak)

- Canlı demo: `[https://mini-landing-burakarikan.netlify.app/]`
- Repository: `[https://github.com/burakarikan17/mini-landing]]`
- Lighthouse ekran görüntüsü dosyası: `[<img width="1131" height="625" alt="image" src="https://github.com/user-attachments/assets/98e798b1-518a-4270-a324-965cdf2f820b" />
]`

## Ek Dokümanlar

- `CHANGELOG.md`
- `DAILY_LOG.md`
- `docs/adr-01.md`
- `docs/accessibility.md`
