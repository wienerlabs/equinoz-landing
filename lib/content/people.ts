import type { StaticImageData } from 'next/image'
import type { L } from '@/lib/i18n'
import ramazan from '@/assets/media/ramazan-manzak.jpg'

export type Member = {
  name: string
  title: string
  bio?: L
  photo?: StaticImageData
  linkedin?: string
  published: boolean
}

export const team: Member[] = [
  {
    name: 'Ramazan Manzak',
    title: 'Founder & Managing Director',
    bio: {
      tr: 'Equinoz’un kurucusu olarak şirketin stratejik yönünü ve uluslararası büyümesini yönetir. Özel müşteri ilişkileri, uluslararası iş geliştirme ve ticari ortaklıklar odağında, farklı uzmanlık alanlarını ortak bir vizyon etrafında birleştirir.',
      en: 'Founded Equinoz and leads the company’s strategic direction and international growth. Brings different areas of expertise together around a shared vision, focusing on private client relationships, international business development and commercial partnerships.',
    },
    photo: ramazan,
    linkedin: 'https://www.linkedin.com/in/ramazan-manzak-71851b183/',
    published: true,
  },
  {
    name: 'Merih Deligöz',
    title: 'President & Chief Operating Officer',
    bio: {
      tr: 'Gayrimenkul ve satış yönetimindeki 25 yılı aşkın deneyimiyle Equinoz’un operasyonlarını, ekip koordinasyonunu ve büyüme stratejisinin uygulanmasını yönetir.',
      en: 'Leads Equinoz’s operations, team coordination and the execution of its growth strategy, drawing on more than 25 years of experience in real estate and sales management.',
    },
    linkedin: 'https://www.linkedin.com/in/merih-deligoz-680b9888/',
    published: true,
  },
  {
    name: 'Meltem Nurkan',
    title: 'Türkiye Country Director',
    bio: {
      tr: 'Uluslararası yatırım ve oturum süreçlerindeki deneyimiyle Türkiye’deki müşteri ilişkilerini, iş ortaklıklarını ve Türkiye ile BAE arasındaki iş geliştirme çalışmalarını yönetir.',
      en: 'Leads client relationships and partnerships in Türkiye, along with business development between Türkiye and the UAE, drawing on experience in international investment and residency processes.',
    },
    linkedin: 'https://www.linkedin.com/in/meltemuygunn/',
    published: true,
  },
  {
    name: 'Mahmut Ertus',
    title: 'Head of Education',
    bio: {
      tr: 'Suffolk University’deki işletme yüksek lisansı ve Datadog’daki iş analizi deneyimiyle Equinoz Education’ın stratejisini, uluslararası eğitim iş birliklerini ve operasyonlarını yönetir.',
      en: 'Leads the strategy, international education partnerships and operations of Equinoz Education, drawing on a master’s degree in business from Suffolk University and business analysis experience at Datadog.',
    },
    linkedin: 'https://www.linkedin.com/in/mahmut-ertus-166143195/',
    published: true,
  },
  {
    name: 'Yusuf İslam Manzak',
    title: 'Director of Digital Media & Communications',
    bio: {
      tr: 'Equinoz’un dijital medya ve kurumsal iletişim stratejisini yönetir. Markanın dijital görünürlüğünü, içerik çalışmalarını ve iletişim bütünlüğünü geliştirerek uluslararası konumlandırmasını destekler.',
      en: 'Leads Equinoz’s digital media and corporate communications strategy. Supports the brand’s international positioning by developing its digital visibility, content and the consistency of its communication.',
    },
    linkedin: 'https://www.linkedin.com/in/yusuf-manzak-1253511b6/',
    published: true,
  },
  {
    name: 'Özge Baştürk',
    title: 'Head of Client Operations',
    bio: {
      tr: 'Equinoz’un müşteri operasyonlarını ve başvuru süreçlerini yönetir. İlk değerlendirmeden işlemlerin tamamlanmasına kadar dokümantasyonu, süreç takibini ve ekip koordinasyonunu sağlayarak müşterilere düzenli ve şeffaf bir hizmet deneyimi sunar.',
      en: 'Leads Equinoz’s client operations and application processes. Handles documentation, process tracking and team coordination from the first assessment until the work is complete, giving clients an orderly and transparent service experience.',
    },
    linkedin: 'https://www.linkedin.com/in/ozge-basturk-5b548355/',
    published: true,
  },
  {
    name: 'Shamik',
    title: 'Head of Accounting & Tax Advisory',
    bio: {
      tr: 'Muhasebe, finansal raporlama ve vergi uyumu süreçlerini yöneterek müşterilerin mali işleyişinin düzenli ve şeffaf biçimde yürütülmesini sağlar.',
      en: 'Leads accounting, financial reporting and tax compliance, keeping clients’ financial affairs orderly and transparent.',
    },
    published: true,
  },
  {
    name: 'Sabri Sabrioğlu',
    title: 'Head of Finance & Mortgage Advisory',
    bio: {
      tr: 'BAE mortgage piyasasındaki yöneticilik deneyimiyle Equinoz müşterilerinin finansman ihtiyaçlarına odaklanır. Banka ve kredi seçeneklerinin değerlendirilmesini, başvuru koordinasyonunu ve gayrimenkul finansmanı süreçlerini yönetir.',
      en: 'Focuses on the financing needs of Equinoz clients, drawing on management experience in the UAE mortgage market. Leads the review of bank and loan options, application coordination and real estate financing processes.',
    },
    linkedin: 'https://www.linkedin.com/in/sabri-sabrioglu-3985ab3b2/',
    published: true,
  },
  {
    name: 'Parvina Narzullaeva',
    title: 'Social Media Specialist',
    bio: {
      tr: 'Grafik tasarım deneyimiyle Equinoz’un sosyal medya içeriklerini ve görsel iletişimini geliştirir; markanın tutarlı ve dikkat çekici biçimde temsil edilmesine odaklanır.',
      en: 'Develops Equinoz’s social media content and visual communication, drawing on a background in graphic design, with a focus on presenting the brand in a consistent and striking way.',
    },
    linkedin: 'https://www.linkedin.com/in/parvinanarzullaeva/',
    published: true,
  },
]

export const publishedTeam = team.filter((member) => member.published)

export type Partner = {
  name: string
  url?: string
  logo?: StaticImageData
  description?: L
  published: boolean
}

export const partners: Partner[] = [
  { name: 'HAS Law', published: false },
  { name: 'Galle Consulting', url: 'https://galleconsulting.com', published: false },
]

export const publishedPartners = partners.filter((partner) => partner.published)
