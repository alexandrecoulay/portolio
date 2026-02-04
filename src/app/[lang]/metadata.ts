import { meta_url, meta_description, meta_title, keywords, meta_image, meta_app_title } from '@/services/constante';
import { Metadata } from 'next';

interface GenerateMetadataProps {
  params: { lang: string };
}

const translations = {
  en: {
    title: "Alexandre Coulay - Fullstack AI/ML Engineer | Node.js, TypeScript, React Native, PyTorch, RAG | 8 years experience",
    description: "Fullstack AI/ML Engineer with 8 years of experience. Node.js, TypeScript, React Native, PyTorch. Large-scale management: 30k+ golf courses, 400k+ greens. Multi-LLM, RAG, Computer Vision.",
  },
  fr: {
    title: "Alexandre Coulay - Ingénieur Fullstack IA/ML | Node.js, TypeScript, React Native, PyTorch, RAG | 8 ans d'expérience",
    description: "Ingénieur Fullstack IA/ML avec 8 ans d'expérience. Node.js, TypeScript, React Native, PyTorch. Gestion à grande échelle: 30k+ golfs, 400k+ greens. Multi-LLM, RAG, Computer Vision.",
  },
};

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const lang = params.lang as 'en' | 'fr';
  const t = translations[lang] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en': '/en',
        'fr': '/fr',
        'x-default': '/',
      },
    },
    openGraph: {
      type: "website",
      url: `${meta_url}/${lang}`,
      description: t.description,
      images: [{
        url: meta_image
      }],
      siteName: meta_app_title,
      title: t.title,
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      alternateLocale: lang === 'fr' ? 'en_US' : 'fr_FR',
    },
    twitter: {
      card: "summary_large_image",
      creator: meta_app_title,
      description: t.description,
      images: [{
        url: meta_image
      }],
      site: meta_url,
      title: t.title
    },
  };
}
