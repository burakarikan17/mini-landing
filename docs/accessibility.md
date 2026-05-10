# ♿ Erişilebilirlik (Accessibility) Raporu

Bu proje, W3C Web Erişilebilirlik Girişimi (WAI) standartları ve WCAG 2.1 ilkeleri doğrultusunda "A ve AA" seviyesinde erişilebilirlik hedefiyle geliştirilmiştir.

---

## 🏗 Semantic HTML Kullanımı

Sayfa yapısı, ekran okuyucuların ve arama motorlarının içeriği doğru anlamlandırması için en güncel HTML5 semantik öğeleriyle kurgulanmıştır:

- **Bölümleme:** Sayfa bölümleri `<section>` etiketleriyle ayrılmış, her bölüme benzersiz `id` atanmıştır.
- **Başlık Hiyerarşisi:** Sayfada tek bir `<h1>` (Hero bölümünde) kullanılmış ve alt başlıklar hiyerarşik olarak `<h2>`, `<h3>` şeklinde sıralanmıştır.
- **Navigasyon:** Etkileşimli öğeler `<button>` veya `<a>` etiketleriyle tanımlanmış, buton işlevi gören div yapılarından kaçınılmıştır.
- **Formlar:** Her `<input>` ve `<textarea>` öğesi bir `<label>` ile eşleştirilmiştir.

---

## 🏷 ARIA (Accessible Rich Internet Applications)

Dinamik içerikler ve karmaşık UI bileşenleri için ARIA nitelikleri aktif olarak kullanılmıştır:

- **Modal:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby` ve `aria-describedby` kullanılarak modal pencerenin kapsamı belirtilmiştir.
- **Accordion:** `aria-expanded` ile panelin açık/kapalı durumu, `aria-controls` ile ilgili içerik alanı eşleştirilmiştir. İçerik alanları `role="region"` ile tanımlanmıştır.
- **Form Validasyonu:** Hatalı alanlarda `aria-invalid="true"` ve hata mesajlarını bağlamak için `aria-describedby` kullanılmıştır.
- **Durum Bilgisi:** Yükleniyor durumları için `aria-busy="true"` ve ekran okuyucu bildirimleri için `role="alert"` (Input hataları) tercih edilmiştir.

---

## ⌨ Klavye Navigasyonu ve Odak Yönetimi

- **Tab Sırası:** Tüm etkileşimli öğeler doğal bir tab sırasına sahiptir.
- **Odak Belirginliği:** `:focus-visible` ile klavye kullanıcıları için belirgin, fare kullanıcıları için ise minimal bir odak çerçevesi sağlanmıştır.
- **Klavye Kısayolları:** Modal pencereler `Esc` tuşu ile kapatılabilir. Accordion başlıkları `Enter` ve `Space` tuşlarıyla tetiklenebilir.
- **Focus Trap:** Modal açıldığında odak modal içerisine hapsedilir ve modal kapatıldığında odak tetikleyici butona geri döndürülür.

---

## 🎨 Görsel ve Hareket Optimizasyonu

- **Kontrast:** Metin ve arka plan renkleri WCAG AA standartlarına uygun kontrast oranlarına sahiptir.
- **Reduced Motion:** `prefers-reduced-motion: reduce` ayarı olan kullanıcılar için tüm CSS geçişleri ve animasyonlar otomatik olarak devre dışı bırakılır veya minimize edilir.
- **İkonlar:** Tüm SVG ikonlar `aria-hidden="true"` ile işaretlenerek ekran okuyucuların gereksiz seslendirmesi önlenmiş, anlamlı ikonlar için `aria-label` kullanılmıştır.
