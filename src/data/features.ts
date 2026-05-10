export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 'speed',
    icon: '⚡',
    title: 'Yüksek Performans',
    description:
      'Optimize edilmiş altyapımız sayesinde milisaniye düzeyinde yanıt süreleri elde edin.',
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'Güçlü Güvenlik',
    description:
      'Endüstri standardı şifreleme ve sürekli izleme ile verileriniz her zaman güvende.',
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'Kolay Entegrasyon',
    description:
      "50'den fazla popüler araçla hazır entegrasyonlar. API ile sınırsız genişletin.",
  },
  {
    id: 'analytics',
    icon: '📊',
    title: 'Gelişmiş Analitik',
    description:
      'Gerçek zamanlı panolar ve özelleştirilebilir raporlarla veriye dayalı kararlar alın.',
  },
  {
    id: 'support',
    icon: '💬',
    title: '7/24 Destek',
    description:
      'Uzman ekibimiz her an yanınızda. Canlı sohbet, e-posta ve telefon desteği.',
  },
  {
    id: 'scalable',
    icon: '🚀',
    title: 'Ölçeklenebilir Altyapı',
    description:
      'Küçük projelerden kurumsal çözümlere kadar ihtiyacınıza göre büyüyen mimari.',
  },
];
