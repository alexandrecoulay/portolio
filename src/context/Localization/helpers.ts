import { EN, FR } from './config/languages'
import { Language } from './types'

const publicUrl = process.env.PUBLIC_URL || ''

export const LS_KEY = 'alexandrecoulay_language';

export const fetchLocale = async (locale: string) => {
  const response = await fetch(`${publicUrl}/locales/${locale}.json`)
  if (response.ok) {
    const data = await response.json()
    return data
  }

  console.error(`API: Failed to fetch locale ${locale}`, response.statusText)
  return null
}

export const getLanguageCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || EN.locale
  } catch {
    return EN.locale
  }
}

// Map short language codes (en, fr) to full locales (en-US, fr-FR)
export const getLanguageFromCode = (code?: string): Language => {
  if (!code) return EN;

  const lowerCode = code.toLowerCase();

  switch (lowerCode) {
    case 'fr':
      return FR;
    case 'en':
    default:
      return EN;
  }
}

// Get locale from short code
export const getLocaleFromCode = (code?: string): string => {
  return getLanguageFromCode(code).locale;
}
