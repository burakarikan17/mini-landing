export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Başlangıç',
    price: '₺0',
    period: '/ay',
    description: 'Bireysel kullanıcılar ve küçük projeler için.',
    features: ['1 proje', '1 GB depolama', 'Topluluk desteği', 'Temel analitik', 'API erişimi'],
    cta: 'Ücretsiz Başla',
  },
  {
    id: 'pro',
    name: 'Profesyonel',
    price: '₺149',
    period: '/ay',
    description: 'Büyüyen ekipler ve profesyonel projeler için.',
    features: [
      'Sınırsız proje',
      '50 GB depolama',
      'Öncelikli destek',
      'Gelişmiş analitik',
      'API erişimi',
      'Özel entegrasyonlar',
    ],
    cta: "Pro'ya Geç",
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Kurumsal',
    price: '₺499',
    period: '/ay',
    description: 'Büyük organizasyonlar ve kurumsal ihtiyaçlar için.',
    features: [
      'Sınırsız her şey',
      '500 GB depolama',
      '7/24 Özel destek',
      'Gelişmiş güvenlik',
      'SLA garantisi',
      'Özel eğitim',
    ],
    cta: 'İletişime Geç',
  },
];
