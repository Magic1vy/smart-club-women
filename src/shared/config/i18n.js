import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";
import enTranslation from '../locales/en/translation.json'
import ruTranslation from '../locales/ru/translation.json'

i18n
    // .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: {
            en: { translation: enTranslation },
            ru: { translation: ruTranslation },
        },
        interpolation: {
            escapeValue: false,
        }
    })

export default i18n;