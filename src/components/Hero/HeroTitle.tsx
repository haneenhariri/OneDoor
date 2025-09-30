import { motion } from "framer-motion";

interface HeroTitleProps {
  custom: number;
  variants: any;
}

export default function HeroTitle({ custom, variants }: HeroTitleProps) {
  return (
    <motion.h2
      custom={custom}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="font-copperplateBold lg:text-7xl md:text-6xl text-5xl font-extrabold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent"
    >
      One Door
    </motion.h2>
  );
}

