import { use } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import uk from "./locales/uk/translation.json";

const i18n = use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uk",
    debug: false,
    resources: {
      en: {
        translation: en,
      },
      uk: {
        translation: uk,
      },
    },
    detection: {
      order: ["localStorage"],
    },
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18n;
