import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
// import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const ns = ['common']
const supportedLngs = ['en', 'de']

/**
 * Inspired by and uses:
 * - @see https://github.com/stevensacks/storybook-react-i18next
 *
 * Other Examples:
 * - @see https://github.com/i18next/react-i18next/blob/c383abdb8d0f874a64bea3147a3dd3b9e1853f5e/example/storybook/src/i18n.js#L6-L24
 */
i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: supportedLngs[0],
    fallbackLng: supportedLngs[0],
    // have a common namespace used around the full app
    ns,
    defaultNS: ns[0],
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    supportedLngs,
    whitelist: supportedLngs,
  })

supportedLngs.forEach(lang => {
  ns.forEach(n => {
    i18n.addResources(lang, n, require(`../public/locales/${lang}/${n}.json`))
  })
})

export default i18n
