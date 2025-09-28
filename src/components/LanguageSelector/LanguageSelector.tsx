import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import lang from "../../assets/language.svg";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];

  const [language, setLanguage] = useState<string>(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(language);
      localStorage.setItem("language", language);

      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
      document.body.style.textAlign = language === "ar" ? "right" : "left";
    }
  }, [language, i18n]);

  return (
    <div className="bg-gradient-to-r from-[#722973] to-[#F07EF2] via-[#a43ca6] p-[2px] rounded-full inline-block">
      <div className="relative">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="
            appearance-none
            bg-white dark:bg-black 
            !rounded-full
            px-5 py-2 
            pr-10
            text-sm font-medium 
            cursor-pointer
            focus:outline-none
            
          "
        >
          {languages.map((lng) => (
            <option className=" rounded-2xl text-[#722973]  font-medium" key={lng.code} value={lng.code}>
              {lng.label}
            </option>
          ))}
        </select>
        <img
          src={lang}
          alt="language"
          className="w-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
        />
      </div>
    </div>
  );
}
