import { NavLink } from "react-router";
import { navlink } from "../../data/data";
import Logo from "../ui/Logo/Logo";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import ThemSelect from "../ThemSelect/ThemSelect";
import menu from '../../assets/menu.svg'
import { useState } from "react";
import SideBar from "./SideBar";
import { useTranslation } from "react-i18next";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation()
  return (
    <nav className=" rtl:flex-row-reverse  lg:px-17 md:px-10 px-6 lg:py-8 md:py-6 py-5 flex justify-between z-10 fixed w-full items-center">
        {/* logo side */}
      <Logo/>
      <button
        className="lg:hidden p-2 "
        onClick={() => setIsOpen(true)}
      >
        <img src={menu} alt="" className=" w-10 h-10"/>
      </button>
      <ul className=" lg:flex hidden justify-center items-center gap-5">
        {navlink.map((link,i)=>
        (
        <li key={i}>
            <NavLink className={  ({isActive}) => isActive ? "text-[#A43CA6] text-base font-semibold font-sans" : "text-base font-semibold  font-sans" }  to={link.to}>
                {t(link.label)}
            </NavLink>
        </li>
        ))}
        
        <LanguageSelector/>
        <ThemSelect/>
      </ul>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </nav>
  )
}
