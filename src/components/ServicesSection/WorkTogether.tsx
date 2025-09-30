import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import GetStart from "../ui/Buttons/GetStart";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 }
  })
}

export default function WorkTogether() {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="my-10 lg:my-22"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p 
        custom={0}
        variants={textVariants}
        className="text-2xl md:text-4xl rtl:text-center lg:text-6xl leading-tight lg:leading-24 font-bold bg-gradient-to-r from-[#722973] to-[#cd5fcf] bg-clip-text text-transparent"
      >
        {t('letsWorkTogether')}
      </motion.p>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0 mt-6 md:mt-10'>
        <motion.p 
          custom={1}
          variants={textVariants}
          className='w-full lg:w-2/5 font-medium text-gray-700 dark:text-gray-300 text-sm md:text-base'
        >
          {t('letsWorkDesc')}
        </motion.p>
        <motion.div
          custom={2}
          variants={textVariants}
        >
          <GetStart path='/services' text='Get Started'/>
        </motion.div>
      </div>
    </motion.div>
  );
}

