import GetStart from '../ui/Buttons/GetStart'
import { motion } from "framer-motion"
import HeroBackground from './HeroBackground'
import HeroTitle from './HeroTitle'
import HeroSlogan from './HeroSlogan'
import HeroDescription from './HeroDescription'
import HeroFlags from './HeroFlags'
import ScrollIndicator from './ScrollIndicator'

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3 }
  })
}

export default function Hero() {
  return (
    <section className="z-0 relative h-screen lg:px-17 md:px-10 px-6 lg:py-8 md:py-6 py-5 flex justify-center items-center overflow-hidden">
      {/* background shapes with animation */}
      <HeroBackground />

      {/* text content */}
      <div className="flex flex-col items-center text-center w-full">
        {/* title */}
        <HeroTitle custom={0} variants={textVariants} />

        {/* slogan */}
        <HeroSlogan custom={1} variants={textVariants} />

        {/* description */}
        <HeroDescription custom={2} variants={textVariants} />

        {/* flags */}
        <HeroFlags />

        {/* button */}
        <motion.div
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <GetStart path='/contact' text='Get Started'/>
        </motion.div>

        {/* animated mouse */}
        <ScrollIndicator />
      </div>
    </section>
  )
}
