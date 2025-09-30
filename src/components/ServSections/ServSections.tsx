import { motion, AnimatePresence } from "framer-motion"
import SubCard from "./SubCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ServSections
{
    title : string;
    p : string;
    include : string;
    data : SubCard[]
}
interface SubCard {
  titleKey: string;
  dataCard: DataCard[];
}

interface DataCard {
  icone: string;
  pKey: string;
}

export default function ServSections({title , p , include , data} : ServSections) {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  // عرض أول قسم فقط أو جميع الأقسام
  const displayedData = showAll ? data : data.slice(0, 1);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: i * 0.3 }
    })
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  }

  return (
    <div className="lg:px-17 text-black dark:text-white md:px-10 px-6 lg:py-8 md:py-6 py-5">
        <motion.h2
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-copperplateBold lg:text-5xl md:text-4xl text-2xl font-extrabold"
        >
         {title}
        </motion.h2>
        <motion.p
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 w-full md:w-10/12 text-sm md:text-base text-gray-700 dark:text-gray-300"
        >
        {p}
        </motion.p>
        <div className="mt-4 bg-gradient-to-r from-[#722973] to-[#a43ca6] w-max px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-white">
            <p className="font-medium text-sm md:text-base">{include}</p>
        </div>

        <div className="w-full">
            <AnimatePresence mode="wait">
              {displayedData.map((e) => (
                <motion.div
                  key={e.titleKey}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <SubCard titleKey={e.titleKey} dataCard={e.dataCard}/>
                </motion.div>
              ))}
            </AnimatePresence>
        </div>

        {/* زر عرض المزيد/أقل */}
        {data.length > 1 && (
          <div className="flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-gradient-to-r from-[#722973] to-[#F07EF2] via-[#a43ca6] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>{showAll ? t('Show Less') : t('Show More')}</span>
              <motion.svg
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.button>
          </div>
        )}
    </div>
  )
}
