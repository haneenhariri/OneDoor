import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import en from '../locales/en.json'
import ar from '../locales/ar.json'
const storedLanguage = localStorage.getItem('language') || 'en'; 

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources:{
        en:{
            translation: en
        },
        ar:{
            translation: ar
        },
    },
    lng: storedLanguage,// if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    detection: {
        order: ['localStorage', 'navigator'],  
        caches: ['localStorage'],  
      },
  });

