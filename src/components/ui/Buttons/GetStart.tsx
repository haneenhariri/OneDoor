import { useTranslation } from 'react-i18next'
import icone from '../../../assets/uil_arrow-up.png'
import { NavLink } from 'react-router'

export default function GetStart({text , path} : { text : string ; path : string;}) {
  const {t} = useTranslation()
  return (
    <div className='bg-gradient-to-r from-[#722973] to-[#a43ca6] text-white rounded-full py-2.5 md:py-3.5 px-4 md:px-6 flex items-center justify-center gap-2 md:gap-2.5 hover:shadow-lg hover:shadow-[#a43ca6]/50 transition-all duration-300 cursor-pointer'>
        <NavLink to={path} className='text-sm md:text-base font-medium'>{t(text)}</NavLink>
        <img src={icone} alt="Arrow" className="w-4 h-4 md:w-5 md:h-5" />
    </div>
  )
}
