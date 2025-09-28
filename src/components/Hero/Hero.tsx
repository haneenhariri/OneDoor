import GetStart from '../ui/Buttons/GetStart'
import mause from '../../assets/down.svg'
import { useTranslation } from 'react-i18next'
import { easeInOut, motion } from "framer-motion"
import { shapes } from '../../data/shapes'

const variants = {
  hexagon: {
    animate: {
      y: [0, -15, 0],
      rotate: [-5, 5, -5],
      transition: { duration: 8, repeat: Infinity, ease: easeInOut }
    }
  },
  circle: {
    animate: {
      y: [0, -10, 0],
      scale: [1, 1.15, 1],
      transition: { duration: 6, repeat: Infinity, ease: easeInOut }
    }
  }
}


const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 }
  })
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="z-0 relative h-screen lg:px-17 md:px-10 px-6 lg:py-8 md:py-6 py-5 flex justify-center items-center overflow-hidden">
      {/* background shapes with animation */}
      {shapes.map((shape, idx) => (
        <motion.img
          key={idx}
          src={shape.src}
          alt=""
          className={shape.className}
          variants={variants[shape.type as keyof typeof variants]}
          animate="animate"
        />
      ))}

      {/* text content */}
      <div className="flex flex-col items-center text-center w-full">
        {/* title */}
        <motion.h2
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-copperplateBold lg:text-7xl md:text-6xl text-5xl font-extrabold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent"
        >
          One Door
        </motion.h2>

        {/* slogan */}
        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-lg font-semibold font-copperplate"
        >
          {t('slogan')}
        </motion.p>

        {/* description */}
        <motion.p
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mb-10 lg:w-1/3 w-10/12 mt-5 md:text-lg text-base font-bold text-[#8B358C]"
        >
          {t('description')}
        </motion.p>

        {/* button */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <GetStart />
        </motion.div>

        {/* animated mouse */}
        <motion.img
          src={mause}
          alt="scroll down"
          className="w-12 absolute bottom-5"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </div>
    </section>
  )
}
