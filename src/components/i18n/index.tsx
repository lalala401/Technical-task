import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    fallbackLng: "ru",
    supportedLngs: ["kk", "ru"],
    defaultNS: "translation",
    interpolation: { escapeValue: false },
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend(
          (language: string) => import(`./locales/${language}.json`),
        ),
      ],
      backendOptions: [
        {
          loadPath: "http://localhost:5173/locales/{{lng}}.json",
        },
      ],
    },
  });

export const toggleLanguage = () => {
  const newLang = i18n.language === "kk" ? "ru" : "kk";
  i18n.changeLanguage(newLang);
};

export default i18n;
