import up from '../../../assets/up.png'
interface ServCardType 
{
    className : string;
    icon : string;
    img: string;
    color : string;
}
export default function ServCard({className , color, icon ,img} : ServCardType) {
  return (
    <div className={`relative mt-10   z-50 flex  rounded-2xl p-6 lg:p-10 overflow-hidden ${className}  rounded-2xl `}>
        <div className='w-full lg:w-2/5 text-white'>
              <div className={`mb-6 w-15 h-15 rounded-full ${color} border-l-2 flex justify-center items-center border-white`}>
                <img src={icon} alt="" />
              </div>
              <h3 className='text-xl font-medium mb-4'>Website Dev</h3>
              <p className='mb-4 text-sm lg:text-base'>help you to build website company that is modern, user friendly, good CEO, and Clean design</p>
              <div className=" flex items-center gap-1">
                <p className='font-semibold text-lg underline cursor-pointer hover:text-gray-300 transition-colors'>Start with us</p>
                <img src={up} alt="" />
              </div>
            </div>
            <div className="hidden lg:block">
              <img src={img} alt="" className='absolute -bottom-5 -right-5' />
            </div>
    </div>
  )
}
