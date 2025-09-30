import img from '../../assets/about.jpg'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
}

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 }
  }
}

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <div className="gap-6 md:gap-8 flex flex-col lg:flex-row lg:px-17 md:px-10 px-6 lg:py-8 md:py-6 py-5 justify-between items-center">
      <motion.div
        className="w-full lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <p className='text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200'>
          {t('aboutIntro')} <span className='font-bold text-xl md:text-2xl text-[#722973] dark:text-[#F07EF2] font-copperplateBold'>OneDoor</span> {t('aboutIntro2')}
        </p>
        <p className='w-full lg:w-11/12 text-base md:text-lg font-medium text-[#722973] dark:text-[#a43ca6] mt-6'>
          {t('aboutDescription')}
        </p>
      </motion.div>
      <motion.div
        className='w-full lg:w-1/2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <img src={img} alt="About OneDoor" className='rounded-2xl w-full' />
      </motion.div>
    </div>
  )
}
