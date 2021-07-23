import { initReactI18next } from 'react-i18next'
import i18n from 'i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


/**
 * Example
 * - @see https://github.com/i18next/react-i18next/blob/7cfab9746b3ccc6f833cd9c892e7c3c804944a5e/example/react-typescript4.1/namespaces/src/i18n/config.ts#L13
 */
i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  lng: 'en',
  fallbackLng: 'en',
  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  // resources: {
  //   en: {
  //     'common': {
  //       "home": "Home GERMAN",
  //       "home_EN": "Home English"
  //     }
  //   },
  //   de: {
  //     'common': {
  //       "home": "Home DEUTSCH",
  //       "home_EN": "Home ENGLISCH"
  //     }
  //   }
  // },
})

export default i18n