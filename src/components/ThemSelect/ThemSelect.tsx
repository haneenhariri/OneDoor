import { useEffect, useState } from "react";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

export default function ThemSelect() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // تطبيق الثيم عند تحميل الصفحة
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      // إذا لم يكن هناك ثيم محفوظ، استخدم الثيم الفاتح كافتراضي
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer bg-gradient-to-r from-[#722973] to-[#F07EF2] via-[#a43ca6] p-[2px] rounded-full inline-flex items-center justify-center w-10 h-10"
    >
      <div className="bg-white   rounded-full w-9 h-9 flex items-center justify-center transition">
        <img
          src={darkMode ? moonIcon : sunIcon}
          alt="theme-icon"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
}
