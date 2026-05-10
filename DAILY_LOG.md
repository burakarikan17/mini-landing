# 📅 Günlük İlerleme Notları (Daily Progress Log)

Bu dosya, PDF gereksinimleri uyarınca projenin geliştirme sürecini belgelemektedir.

---

### **GÜN 1: Altyapı ve Atomik Bileşenler**
- **Mimari:** Vite + React + TypeScript projesi başlatıldı. SCSS modüler yapısı (`_variables`, `_mixins`, `main`) kuruldu.
- **Tasarım Sistemi:** Light/Dark mode için CSS Variables altyapısı hazırlandı. BEM metodolojisi tüm projeye entegre edildi.
- **Bileşenler:** `Button` (variant/size destekli) ve `Input` (validasyon destekli) bileşenleri geliştirildi.
- **Git:** İlk commit'ler Conventional Commits kurallarına uygun olarak atıldı.

### **GÜN 2: Bölüm Geliştirme ve Etkileşim**
- **Section'lar:** Hero (Glow efektli), Features (Grid), ve Pricing bölümleri tamamlandı.
- **Bileşenler:** `Card`, `Modal` (Focus trap ve Esc desteği) ve `Accordion` (Smooth transition) bileşenleri eklendi.
- **Tema Yönetimi:** `useTheme` hook'u ile localStorage entegrasyonu yapıldı. Sistem teması algılama özelliği eklendi.
- **Erişilebilirlik:** Tüm bileşenlere ARIA etiketleri (`aria-expanded`, `role="dialog"`) eklendi.

### **GÜN 3: Optimizasyon, Performans ve Teslimat**
- **Performans:** `React.lazy` ve `Suspense` ile Code Splitting yapıldı. Fontlar `preload` ve `display=swap` ile optimize edildi.
- **Responsive:** Form sıkışma hataları ve tema butonu pozisyonlaması 3 breakpoint (640px / 1024px) kuralına göre finalize edildi.
- **SEO/Dokümantasyon:** `README.md`, `CHANGELOG.md` ve `adr-01.md` (ADR) dosyaları tamamlandı. Lighthouse testleri yapıldı.
- **Final:** Kod kalitesi ve erişilebilirlik (contrast fix) kontrolleri yapılarak mülakat teslimine hazır hale getirildi.
