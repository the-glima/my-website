import i18n from 'i18next'
import detector from 'i18next-browser-languagedetector'
import backend from 'i18next-xhr-backend'
import {initReactI18next} from 'react-i18next'

import translationEN from './locales/en/translation.json'
import translationES from './locales/es/translation.json'
import translationPT from './locales/pt/translation.json'

const resources = {
  en: {translation: translationEN},
  es: {translation: translationES},
  pt: {translation: translationPT}
}

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      prefix: 'GL'
    }
  })

export default i18n
