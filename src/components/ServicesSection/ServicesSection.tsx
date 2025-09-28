import icon from '../../assets/up.png'
import line from '../../assets/Vector 2.svg'
import icone from '../../assets/uil_arrow-up.png'
import ServicesGrid from '../ServicesGrid/ServicesGrid'

export default function ServicesSection() {
  return (
    <>
      <section className="relative px-6 md:px-10 overflow-hidden lg:px-17 py-16 lg:py-30">
        <img src={line} alt="" className='hidden lg:block left-9 top-42 z-auto absolute w-auto' />

        {/* Main heading section */}
        <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center mb-8">
          <p className="text-3xl md:text-5xl lg:text-[69px] leading-tight lg:leading-24 font-bold bg-gradient-to-r from-[#722973] to-[#cd5fcf] bg-clip-text text-transparent">
            Company that can help you in
          </p>
          <div className="bg-black absolute z-20 w-[200px]  right-20 dark:bg-white mt-2 flex items-center justify-center rounded-full h-[50px] lg:flex-1 px-6 lg:px-0 text-white dark:text-black">
            <button className="text-base font-medium flex items-center justify-center gap-2.5">
              Know More
              <img src={icon} alt="" className='w-5 h-5 dark:invert' />
            </button>
          </div>
        </div>

        <p className="text-3xl md:text-5xl lg:text-[64px] leading-tight lg:leading-20 font-bold bg-gradient-to-r to-[#722973] from-[#cd5fcf] bg-clip-text text-transparent mb-8">
          developing your company for the future
        </p>

        <p className='my-8 w-full lg:w-2/5 font-medium text-gray-700 dark:text-gray-300'>
          Work in the IT field includes Web Design, E-commerce, Branding, Mobile Applications, and Digital Project Management.
        </p>
        {/* Let's work together section */}
        <div className="mt-16 lg:mt-32">
          <p className="text-3xl md:text-5xl lg:text-[69px] leading-tight lg:leading-24 font-bold bg-gradient-to-r from-[#722973] to-[#cd5fcf] bg-clip-text text-transparent">
            Let's work together
          </p>
          <p className="text-3xl md:text-5xl lg:text-[69px] leading-tight lg:leading-24 font-bold bg-gradient-to-r from-[#722973] to-[#cd5fcf] bg-clip-text text-transparent">
            with us
          </p>

          <div className='flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-6 lg:gap-0 mt-8'>
            <p className='w-full lg:w-[40%] font-medium text-gray-700 dark:text-gray-300'>
              help you to build website company that is modern, user friendly, good CEO, and Clean design
            </p>
            <div className='bg-gradient-to-r from-[#722973] to-[#a43ca6] text-white rounded-full py-3.5 px-6 flex items-center justify-center gap-2.5 hover:shadow-lg transition-shadow'>
              <button className='text-base font-medium'>Get Started</button>
              <img src={icone} alt="" />
            </div>
          </div>

          <ServicesGrid/>
        </div>
      </section>

    </>
  )
}
