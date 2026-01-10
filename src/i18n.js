import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  pt: {
    translation: {
      "bem_vindo": "Bem-vindo!",
      "logo_url": "/logo/zilor-logo-pt.png",
      "logo_alt": "Zilor - Português"
    }
  },
  en: {
    translation: {
      "bem_vindo": "Welcome!",
      "logo_url": "/logo/zilor-logo-en.png",
      "logo_alt": "Zilor - English"
    }
  },
  es: {
    translation: {
      "bem_vindo": "¡Bienvenido!",
      "logo_url": "/logo/zilor-logo-es.png",
      "logo_alt": "Zilor - Español"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;