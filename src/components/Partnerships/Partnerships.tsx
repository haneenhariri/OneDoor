import {  motion } from "framer-motion"
import PartnerCard from "../ui/Cards/PartnerCard"
import img from '../../assets/nca.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img7.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/partnership6.png'
import img8 from '../../assets/partnership2.jpg'
import img9 from '../../assets/partnership3.jpg'
import img10 from '../../assets/partnership4.jpg'
import image from '../../assets/aboutHero.png'
import { useTranslation } from 'react-i18next'

export default function Partnerships() {
    const { t } = useTranslation()
    const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.3 }
    })
    }
  return (
    <div className="lg:px-17 overflow-hidden relative text-center md:px-10 px-6 lg:py-8 md:py-6 py-5">
        <img src={image} alt="" className='absolute top-36 rotate-180 rtl:-left-40  ltr:-right-40 w-2/5 hidden lg:block'/>
        <img src={image} alt="" className='absolute bottom-0 ltr:-left-40 rtl:-right-40 w-2/5 hidden lg:block'/>
        <motion.h2
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-copperplateBold lg:text-4xl md:text-3xl text-2xl font-extrabold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent"
        >
          {t('partnershipsTitle')}
        </motion.h2>
        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg mt-2 font-medium font-copperplate text-gray-700 dark:text-gray-300"
        >
          {t('partnershipsDesc')}
        </motion.p>
        <div className="mt-10">
          <PartnerCard
            link="https://www.facebook.com/share/p/17KRLej8a1/"
            img2={img2} img3={img3} img={img} title={t('partnershipEvent1Title')} show="block"
            p={t('partnershipEvent1Desc')} className="w-full lg:w-2/3 shadow-lg shadow-[#a53fa79f]"/>
          <div className="flex flex-col lg:flex-row gap-5 mt-10 lg:mt-16">
            <PartnerCard
              link="https://www.facebook.com/share/p/17KRLej8a1/"
              img2={img5} show="hidden" img3={img4} img={img6} title={t('partnershipEvent2Title')}
              p={t('partnershipEvent2Desc')} className="w-full lg:w-1/2 shadow-lg shadow-[#a53fa79f]"/>
            <PartnerCard
              link="https://www.facebook.com/share/p/17KRLej8a1/"
              img2={img2} show="hidden" img3={img3} img={img7} title={t('partnershipEvent3Title')}
              p={t('partnershipEvent3Desc')} className="w-full lg:w-1/2 shadow-lg shadow-[#a53fa79f]"/>
          </div>
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-16">
            <PartnerCard
              show="block"
              link="https://www.facebook.com/share/p/17KRLej8a1/"
              img2={img8} img3={img9} img={img10} title={t('partnershipEvent4Title')}
              p={t('partnershipEvent4Desc')} className="w-full lg:w-2/3 shadow-lg shadow-[#a53fa79f]"/>
          </div>
        </div>
    </div>
  )
}
