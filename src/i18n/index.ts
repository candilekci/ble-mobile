import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/i18n/locales/en.json';
import tr from '@/i18n/locales/tr.json';

const supportedLanguages = ['en', 'tr'] as const;
const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';
const initialLanguage = supportedLanguages.includes(
  deviceLanguage as (typeof supportedLanguages)[number],
)
  ? deviceLanguage
  : 'en';

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v4',
});

export default i18n;

export const changeLanguage = (language: 'en' | 'tr') =>
  i18n.changeLanguage(language);
