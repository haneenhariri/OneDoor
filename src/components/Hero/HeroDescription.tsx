import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroDescriptionProps {
  custom: number;
  variants: any;
}

export default function HeroDescription({ custom, variants }: HeroDescriptionProps) {
  const { t } = useTranslation();

  return (
    <motion.p
      custom={custom}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="mb-5 lg:w-1/3 md:w-2/3 w-11/12 mt-5 md:text-lg text-sm font-bold text-[#8B358C] dark:text-[#F07EF2]"
    >
      {t('description')}
    </motion.p>
  );
}

