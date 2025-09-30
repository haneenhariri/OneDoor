import { useTranslation } from 'react-i18next'

interface SubCard {
  titleKey: string;
  dataCard: DataCard[];
}

interface DataCard {
  icone: string;
  pKey: string;
}

export default function SubCard({ titleKey, dataCard }: SubCard) {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <h2 className="my-8 md:my-12 text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-300">
        {t(titleKey)}
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-2">
        {dataCard.map((item, index) => (
          <div key={index} className="shadow-sm shadow-[#a43ca6] rounded-xl min-h-[180px] md:min-h-[200px] flex flex-col p-6 md:p-10">
            <div className="w-10 md:w-12 bg-gradient-to-b from-[#a43ca6]/20 to-[#fff] dark:from-[#a43ca6]/20 dark:to-[#000] h-10 md:h-12 rounded-lg shadow-xs shadow-[#a43ca6] flex justify-center items-center flex-shrink-0">
              <img src={item.icone} alt={t(item.pKey)} className="w-6 md:w-7 h-6 md:h-7" />
            </div>
            <p className="mt-4 md:mt-5 dark:text-white text-gray-800 text-xs md:text-sm">{t(item.pKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
