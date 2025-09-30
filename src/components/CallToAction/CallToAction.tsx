import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="relative  bg-gradient-to-b from-transparent via-gray-50/30 dark:via-gray-900/30 to-transparent">
      {/* Top Gradient Border */}
      <motion.div
        className="h-[2px] w-full bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] mb-12 md:mb-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="max-w-7xl px-6 md:px-10 lg:px-20 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">

          {/* Left Content */}
          <motion.div
            className="flex-1 rtl:text-right text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-copperplateBold mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent">
                {t("Let's work")}
              </span>
              {' '}
              <span className="text-gray-800 dark:text-white">
                {t('with Us')}
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
              {t('ctaDescription')}
            </p>
          </motion.div>

          {/* Right Button */}
          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#722973] to-[#a43ca6] text-white rounded-full font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#a43ca6]/40 hover:scale-105"
            >
              {/* Animated Background */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#a43ca6] to-[#F07EF2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

              {/* Content */}
              <span className="relative z-10">{t('Know More')}</span>

              {/* Arrow Icon */}
              <svg
                className="relative z-10 w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Border */}
      <motion.div
        className="h-[2px] w-full bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] mt-12 md:mt-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      ></motion.div>
    </section>
  );
}

