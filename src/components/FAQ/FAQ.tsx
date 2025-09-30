import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { faqEn, faqAr } from '../../data/faq';
import image from '../../assets/aboutHero.png';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 md:py-5 px-4 md:px-6 flex items-start justify-between gap-3 md:gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors duration-200"
      >
        <div className="flex items-start gap-3 md:gap-4 flex-1">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#722973] to-[#a43ca6] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-base md:text-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Question */}
          <div className="flex-1 pt-1 md:pt-2">
            <h3 className="text-base rtl:text-right md:text-lg font-semibold text-gray-900 dark:text-white">
              {question}
            </h3>
          </div>
        </div>

        {/* Toggle Icon */}
        <div className="flex-shrink-0 pt-1 md:pt-2">
          <div
            className={`w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#722973] to-[#F07EF2] via-[#a43ca6] flex items-center justify-center transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-white"
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
            </svg>
          </div>
        </div>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 md:px-6 pb-4 md:pb-5 ltr:pl-[60px] ltr:md:pl-[88px] rtl:pr-[60px] rtl:md:pr-[88px]">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { i18n, t } = useTranslation();
  const faqData = i18n.language === 'ar' ? faqAr : faqEn;

  // آخر سؤال يكون مفتوحاً بشكل افتراضي
  const [openIndex, setOpenIndex] = useState<number | null>(faqData.length - 1);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // تقسيم الأسئلة إلى قسمين
  const midPoint = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, midPoint);
  const rightFaqs = faqData.slice(midPoint);

  return (
    <section className="relative pb-16 lg:pb-24 px-6 lg:px-20 overflow-hidden bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/50 to-transparent">
      {/* Background Decorative Images */}
      <img
        src={image}
        alt=""
        className='absolute top-20 lg:top-10 rotate-180 -right-20 lg:-right-40 w-1/3 lg:w-1/4 opacity-30 dark:opacity-20 hidden md:block'
      />
      <img
        src={image}
        alt=""
        className='absolute bottom-20 lg:bottom-10 -left-20 lg:-left-40 w-1/3 lg:w-1/4 opacity-30 dark:opacity-20 hidden md:block'
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-copperplateBold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent mb-4">
            {t('Frequently Asked Questions')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            {t('faqSubtitle')}
          </p>
          {/* Decorative Line */}
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] rounded-full"></div>
          </div>
        </div>

        {/* FAQ Grid - Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column */}
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            {leftFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
            {rightFaqs.map((faq, index) => (
              <FAQItem
                key={index + midPoint}
                question={faq.q}
                answer={faq.a}
                index={index + midPoint}
                isOpen={openIndex === index + midPoint}
                onToggle={() => handleToggle(index + midPoint)}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

