import { NavLink } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import shapWhite from '../../assets/white.svg';

interface ServiceCardProps {
  icone: string;
  titleKey: string;
  descKey: string;
  show: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 }
  })
}

export default function ServiceCard({ icone, titleKey, descKey, show, index }: ServiceCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className='relative shadow-md rounded-xl overflow-hidden bg-gradient-to-t from-[#F07EF2] to-[#722973] text-white shadow-[#cd5fcf] p-6'
    >
      <div className='flex items-center gap-3 md:gap-5 mb-5'>
        <div className="w-10 md:w-12 bg-white h-10 md:h-12 rounded-lg shadow-xs shadow-[#a43ca6] flex justify-center items-center flex-shrink-0">
          <img src={icone} alt={t(titleKey)} className='w-6 md:w-7 h-6 md:h-7' />
        </div>
        <h2 className='text-lg md:text-xl font-bold'>{t(titleKey)}</h2>
      </div>

      {/* Background decorations */}
      <img src={shapWhite} alt="" className='absolute bottom-0 w-20 rtl:left-0 ltr:right-0'/>
      <img src={shapWhite} alt="" className='absolute bottom-0 w-15 rtl:left-7 ltr:right-7'/>
      <img src={shapWhite} alt="" className='opacity-20 absolute -top-0 w-12 rtl:right-0 ltr:-left-0'/>
      <img src={shapWhite} alt="" className='opacity-10 absolute -bottom-10 w-1/2 rtl:-left-10 ltr:-right-10'/>

      <p className='mb-5 text-sm md:text-base'>
        {t(descKey)}
      </p>
      <NavLink
        to={show}
        className='uppercase underline font-bold text-sm md:text-base hover:text-gray-200 transition-colors'
      >
        {t('Start Now')}
      </NavLink>
    </motion.div>
  );
}

