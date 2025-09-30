import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next'

interface PartnerCard
{
    className : string;
    img: string;
    img2: string;
    img3: string;
    title : string;
    p : string;
    link : string;
    show : string;
}
export default function PartnerCard({className , title , p ,img , link , img2 , img3 , show } : PartnerCard) {
  const { t } = useTranslation()

  return (
    <div className={`${className} min-h-[280px] md:h-[351px] rounded-2xl p-3 md:p-4 flex flex-col md:flex-row justify-between gap-4 md:gap-2`}>
      <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-4 justify-center items-start">
         <h2 className="text-lg md:text-xl font-bold text-[#722973] dark:text-[#F07EF2]">{title}</h2>
         <p className="w-full md:w-11/12 text-xs md:text-sm text-start text-gray-700 dark:text-gray-300">{p}</p>
         <NavLink to={link} className='text-sm md:text-base font-semibold underline text-[#722973] dark:text-[#F07EF2] hover:text-[#a43ca6] dark:hover:text-[#a43ca6] transition-colors'>{t('Show Post')}</NavLink>
      </div>
      <div className="relative w-full md:w-1/2 min-h-[200px] md:min-h-0">
        <img src={img} alt={title} className="w-full object-cover h-full rounded-xl"/>
        <img src={img2} alt={title} className={`${show} h-[150px] md:h-[194px] absolute bg-white dark:bg-gray-800 p-1 rounded-xl w-2/3 ltr:-left-4 rtl:-right-4 rtl:md:-right-7  ltr:md:-left-7 bottom-0`}/>
        <img src={img3} alt={title} className={`${show} h-[110px] md:h-[145px] absolute bg-white dark:bg-gray-800 p-1 rounded-xl w-2/4 ltr:right-0 rtl:left-0 bottom-0`}/>
      </div>
    </div>
  )
}
