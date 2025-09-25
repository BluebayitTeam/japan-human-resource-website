// i18n.js (i18next configuration)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          welcome: 'Welcome to our website!',
          page1: 'Page 1',
          page2: 'Page 2',
        },
      },
      tr: {
        translation: {
          welcome: 'Hoş geldiniz!',
          page1: 'Sayfa 1',
          page2: 'Sayfa 2',
        },
      },
      ar: {
        translation: {
          welcome: 'أهلاً وسهلاً في موقعنا!',
          page1: 'الصفحة 1',
          page2: 'الصفحة 2',
        },
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
