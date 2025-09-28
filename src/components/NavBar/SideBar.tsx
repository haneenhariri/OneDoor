import { NavLink } from "react-router";
import { navlink } from "../../data/data";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ThemSelect from "../ThemSelect/ThemSelect";
import Logo from "../ui/Logo/Logo";
import close from '../../assets/close.svg';
import { useTranslation } from "react-i18next";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function SideBar({ isOpen, setIsOpen }: SidebarProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // تحديد الاتجاه

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 z-50 h-full bg-white dark:bg-black shadow-lg transform transition-transform duration-300 lg:hidden
          ${isRTL ? 'left-0' : 'right-0'} 
          w-10/12 sm:w-8/12 md:w-1/2
          ${isOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Logo />
          <button onClick={() => setIsOpen(false)} className="p-2">
            <img src={close} alt="close" className="w-8 h-8" />
          </button>
        </div>

        <ul className="flex flex-col items-center p-4 gap-4">
          {navlink.map((link, i) => (
            <li key={i} className="w-full text-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-[#A43CA6] text-base font-semibold font-sans"
                    : "text-base font-semibold font-sans text-gray-700 dark:text-gray-300"
                }
                to={link.to}
                onClick={() => setIsOpen(false)}
              >
                {t(link.label)}
              </NavLink>
            </li>
          ))}
          <div className="w-full flex justify-center gap-2 mt-4">
            <LanguageSelector />
            <ThemSelect />
          </div>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
