import { motion } from "framer-motion";
import mause from '../../assets/down.svg';

export default function ScrollIndicator() {
  return (
    <motion.img
      src={mause}
      alt="scroll down"
      className="w-12 absolute bottom-5"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
  );
}

