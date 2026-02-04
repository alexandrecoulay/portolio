import HomePage from '@/views';
import { notFound } from 'next/navigation';

const SUPPORTED_LOCALES = ['en', 'fr'];

export async function generateStaticParams() {
  return SUPPORTED_LOCALES.map((lang) => ({
    lang,
  }));
}

export default async function LocalizedHome({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params;

  // Validate language parameter
  if (!SUPPORTED_LOCALES.includes(lang)) {
    notFound();
  }

  return <HomePage />;
}
