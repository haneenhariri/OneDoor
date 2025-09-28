import { useTranslation } from 'react-i18next'
import icone from '../../../assets/uil_arrow-up.png'

export default function GetStart() {
  const {t} = useTranslation()
  return (
    <div className='  bg-gradient-to-r from-[#722973] to-[#a43ca6] text-white rounded-full py-3.5 px-6 flex items-center justify-center gap-2.5'>
        <button className=' text-base font-medium'>{t("Get Started")}</button>
        <img src={icone} alt="" />
    </div>
  )
}
