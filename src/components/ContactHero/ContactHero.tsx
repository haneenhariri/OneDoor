import Form from "./Form"
import SocialLinks from "../ui/SocialLinks/SocialLinks"
import SubHero from "../SubHero/SubHero"
import { useTranslation } from 'react-i18next'

export default function ContactHero() {
  const { t } = useTranslation()

  return (
    <>
      <SubHero title={t('contactUsTitle')} p={t('contactUsSubtitle')}/>

      {/* Form and Info Section */}
      <div className="px-6 md:px-10 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Left Side - Form */}
            <div className="order-2 lg:order-1">
              <div className="p-0.5 bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] rounded-2xl h-full">
                <Form/>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="order-1 lg:order-2 flex flex-col gap-6">

              {/* Operating Days Card */}
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#722973] to-[#a43ca6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-copperplateBold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent text-center sm:text-left">
                    {t('Operating Days')}
                  </h3>
                </div>
                <div className="bg-gradient-to-r from-[#722973] to-[#a43ca6] text-white rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-center">
                  <p className="font-semibold text-sm sm:text-base md:text-lg">
                    {t('Sunday to Thursday')}
                  </p>
                </div>
              </div>

              {/* Stay Connected Card */}
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#722973] to-[#a43ca6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-copperplateBold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent text-center sm:text-left">
                    {t('Stay Connected')}
                  </h3>
                </div>
                <div className="flex justify-center">
                  <SocialLinks iconSize="lg" showBackground={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}
