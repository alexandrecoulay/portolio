import HomePage from '@/views';
import { notFound } from 'next/navigation';

const SUPPORTED_LOCALES = ['en', 'fr'];

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({
    lang,
  }));
}

export default function LocalizedHome({ params }: { params: { lang: string } }) {
  // Validate language parameter
  if (!SUPPORTED_LOCALES.includes(params.lang)) {
    notFound();
  }

  return <HomePage />;
}
