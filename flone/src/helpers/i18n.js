import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation JSON files
import enTranslation from "../translations/english.json";
import frTranslation from "../translations/french.json";
import swTranslation from "../translations/kiswahili.json";

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      sw: { translation: swTranslation },
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language when the translation is not available
    interpolation: {
      escapeValue: false, // react already escapes values
    },
  });

export default i18n;
