import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GetStart from "../ui/Buttons/GetStart";
import heroimg from '../../assets/hero.jpg';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 }
  })
}

export default function CompanyHelp() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-5 items-center w-full'>
      <motion.div 
        className='bg-gradient-to-r from-[#722973] w-full lg:w-[60%] to-[#cd5fcf] bg-clip-text text-transparent'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          custom={0}
          variants={textVariants}
          className='text-3xl md:text-4xl lg:text-5xl font-bold'
        >
          {t('companyHelp')}
        </motion.h2>
        <motion.p 
          custom={1}
          variants={textVariants}
          className='my-6 md:my-8 w-full lg:w-3/4 font-medium text-gray-700 dark:text-gray-300 text-sm md:text-base'
        >
          {t('companyHelpDesc')}
        </motion.p>
        <motion.div 
          custom={2}
          variants={textVariants}
          className='w-max mt-6 md:mt-10'
        >
          <GetStart path='/about' text='Know More' />
        </motion.div>
      </motion.div>
      <motion.img 
        src={heroimg} 
        className='w-full lg:w-[40%] rounded-2xl' 
        alt="Company Services"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}

