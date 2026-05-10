# ADR-01: React + TypeScript + SCSS Teknoloji Seçimi

| Alan | Değer |
|------|-------|
| **Durum** | Kabul Edildi |
| **Tarih** | 2026-05-09 |
| **Karar Vericiler** | Proje Ekibi |

---

## Bağlam

Staj projesi kapsamında modern, sürdürülebilir ve profesyonel bir landing page oluşturulması hedeflenmiştir. Teknoloji seçiminde şu kriterler belirleyici olmuştur:

1. **PDF gereksinimleri:** SCSS zorunlu, CSS Variables ile tema yönetimi, BEM metodolojisi.
2. **Tip güvenliği:** Büyüyen bir projede hata oranını en aza indirmek.
3. **Bileşen tabanlı mimari:** Yeniden kullanılabilir, test edilebilir ve izole bileşenler.
4. **Sıfır harici UI bağımlılığı:** Tüm bileşenler sıfırdan inşa edilmeli.

---

## Karar

### UI Katmanı → React 19

| Alternatif | Değerlendirme |
|-----------|--------------|
| **Vanilla JS** | Bileşen yönetimi ve durum takibi karmaşıklaşır; büyük projelerde sürdürülebilirlik düşer. |
| **Vue 3** | Güçlü bir alternatif, ancak ekibin React deneyimi daha güçlü. |
| **React 19** ✅ | Geniş ekosistem, güçlü topluluk, hooks + concurrent features ile modern geliştirme deneyimi. |

**Gerekçe:**
- Bileşen tabanlı mimari, `props ile yapılandırılabilir` kriterine doğal olarak uyar.
- `useRef`, `useEffect`, `useCallback` gibi hook'lar klavye navigasyonu ve tema yönetimi için ideal.
- React 19'un otomatik batching ve concurrent rendering özelikleri performansı artırır.

---

### Tip Sistemi → TypeScript

| Alternatif | Değerlendirme |
|-----------|--------------|
| **JavaScript** | Hızlı prototipleme, ancak büyük projelerde tip hataları kaçınılmaz. |
| **TypeScript** ✅ | Derleme zamanı tip kontrolü, IDE desteği, refactoring güvenliği. |

**Gerekçe:**
- Props arayüzleri (`interface ButtonProps`, `interface ModalProps`) bileşen kontratlarını belgeliyor.
- `FormErrors`, `Theme` gibi tip tanımları kodun okunabilirliğini artırıyor.
- Strict mode ile çalışma zamanı hatalarının büyük kısmı derleme sırasında yakalanıyor.

---

### Stil Katmanı → SCSS + CSS Custom Properties

| Alternatif | Değerlendirme |
|-----------|--------------|
| **Vanilla CSS** | Yeterli, ancak mixin, nesting ve partial desteği yok. |
| **Tailwind CSS** | Utility-first felsefesi BEM gereksinimiyle çelişir. |
| **CSS Modules** | İzolasyon sağlar, ama SCSS güçlerini (mixin, extend, loop) kullanamaz. |
| **SCSS + CSS Variables** ✅ | BEM uyumlu, mixin/partial ile DRY, CSS Variables ile runtime tema geçişi. |

**Gerekçe:**
- **SCSS Partials (`@use`):** `_variables.scss` ve `_mixins.scss` ile global tekrardan kaçınılır.
- **CSS Custom Properties:** `:root` / `[data-theme='dark']` ile runtime tema geçişi mümkün — JavaScript'e gerek kalmadan renk paleti değişir.
- **BEM Metodolojisi:** SCSS nesting (`&__element`, `&--modifier`) BEM yazmayı doğal ve okunabilir hale getirir.
- **Mixin Kütüphanesi:** `@include flex-center`, `@include mobile { }` gibi yardımcılar kod tekrarını ortadan kaldırır.

---

### Build Aracı → Vite

| Alternatif | Değerlendirme |
|-----------|--------------|
| **Create React App** | Webpack tabanlı, yavaş HMR, bakımı durduruldu. |
| **Next.js** | SSR/SSG güçlü, ancak SPA landing page için fazla karmaşık. |
| **Vite** ✅ | Hızlı HMR, ESBuild + Rollup, minimal konfigürasyon, SCSS dahili desteği. |

**Gerekçe:**
- Sass desteği `sass` paketi yüklü olduğu sürece sıfır konfigürasyonla çalışır.
- Geliştirme sunucusu milisaniyeler içinde ayağa kalkar.
- Production build'de otomatik code-splitting ve tree-shaking uygulanır.

---

## Sonuçlar

Bu seçimler şu avantajları sağlamaktadır:

1. **PDF uyumluluğu:** SCSS zorunlu, CSS Variables, BEM — tüm kriterler karşılanıyor.
2. **Geliştirici deneyimi:** TypeScript + Vite HMR ile hızlı ve güvenli geliştirme döngüsü.
3. **Sürdürülebilirlik:** Bileşen izolasyonu ve tip güvenliği ile büyüyen projede kod kalitesi korunur.
4. **Performans:** Vite + React 19 + optimize edilmiş CSS ile yüksek Lighthouse skorları hedeflenir.

---

## Referanslar

- [React 19 Dokümantasyonu](https://react.dev)
- [Sass / SCSS Rehberi](https://sass-lang.com/guide)
- [BEM Metodolojisi](https://getbem.com)
- [Vite Resmi Dokümantasyon](https://vitejs.dev)
