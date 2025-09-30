import { motion } from "framer-motion"
import image from '../../assets/aboutHero.png'

interface SubHero
{
    title : string;
    p : string;
}
export default function SubHero({title , p} : SubHero) {
    const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.3 }
    })}
  return (
    <div className="lg:mx-17 relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#F07EF2] to-[#F07EF2] via-[#722973] md:mx-10 mx-6 lg:py-12 md:py-10 py-8 flex flex-col justify-center items-center">
        <img src={image} alt="" className='absolute top-0 opacity-40 right-0 w-40 md:w-60 hidden sm:block'/>
        <img src={image} alt="" className='absolute bottom-5 opacity-35 -left-20 md:-left-28 w-1/3 md:w-1/4 hidden sm:block'/>
        <motion.h2
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-copperplateBold lg:text-7xl md:text-6xl text-4xl font-extrabold text-white text-center px-4"
        >
         {title}
        </motion.h2>
        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 text-white font-copperplate text-center px-4 text-sm md:text-base max-w-3xl"
        >
        {p}
        </motion.p>
    </div>
  )
}
