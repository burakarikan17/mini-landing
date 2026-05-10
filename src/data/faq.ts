export interface FaqItem {
  id: string;
  title: string;
  content: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'q1',
    title: 'Ücretsiz plan ile neler yapabilirim?',
    content:
      'Ücretsiz plan ile 1 proje oluşturabilir, 1 GB depolama alanı kullanabilir ve topluluk desteğinden yararlanabilirsiniz. Temel analitik paneline de erişiminiz olacak.',
  },
  {
    id: 'q2',
    title: 'Planımı istediğim zaman değiştirebilir miyim?',
    content:
      'Evet! Planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz. Yükseltme anında geçerli olur, düşürme ise mevcut fatura döneminin sonunda uygulanır.',
  },
  {
    id: 'q3',
    title: 'Verilerim ne kadar güvende?',
    content:
      'Verileriniz AES-256 şifreleme ile korunur. Tüm iletişimler SSL/TLS üzerinden gerçekleşir. KVKK ve GDPR uyumlu altyapımız, düzenli güvenlik denetimleriyle desteklenmektedir.',
  },
  {
    id: 'q4',
    title: 'API entegrasyonu nasıl çalışıyor?',
    content:
      "RESTful API ile tüm özelliklerimize programatik erişim sağlarsınız. Kapsamlı dökümantasyon, SDK'lar ve örnek kodlarla hızlıca entegre olabilirsiniz.",
  },
  {
    id: 'q5',
    title: 'İptal etmek istersem ne olur?',
    content:
      'İstediğiniz zaman sözleşmesiz olarak iptal edebilirsiniz. İptal sonrası verileriniz 30 gün boyunca korunur ve bu süre içinde dışa aktarabilirsiniz.',
  },
];
