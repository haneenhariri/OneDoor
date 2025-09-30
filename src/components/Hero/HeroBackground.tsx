import { motion, easeInOut } from "framer-motion";
import { shapes } from "../../data/shapes";

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

export default function HeroBackground() {
  return (
    <>
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
    </>
  );
}

