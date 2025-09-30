import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroSloganProps {
  custom: number;
  variants: any;
}

export default function HeroSlogan({ custom, variants }: HeroSloganProps) {
  const { t } = useTranslation();

  return (
    <motion.p
      custom={custom}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="text-lg font-semibold font-copperplate"
    >
      {t('slogan')}
    </motion.p>
  );
}

