// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import enTranslation from '@translations/en.json';
import frTranslation from '@translations/fr.json';
import esTranslation from '@translations/sp.json';
import itTranslation from '@translations/it.json';
import arTranslation from '@translations/ar.json';
import ruTranslation from '@translations/ru.json';
import deTranslation from '@translations/de.json';
import prTranslation from '@translations/pr.json';
import zhTranslation from '@translations/zh.json';
import i18next from 'i18next';

const resources = {
  en: { translation: enTranslation }, // English translations
  fr: { translation: frTranslation }, // French translations
  es: { translation: esTranslation }, // Spanish translations
  it: { translation: itTranslation }, // for italian
  ar: { translation: arTranslation },
  ru: { translation: ruTranslation },
  de: { translation: deTranslation },
  pr: { translation: prTranslation },
  zh: { translation: zhTranslation },
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18next
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources,
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18next;
