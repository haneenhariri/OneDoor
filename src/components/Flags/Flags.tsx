import black from '../../assets/black.png'
import one from '../../assets/onedoor.png'
import sy from '../../assets/Flag-Syria.webp'
import tur from '../../assets/Flag_of_Turkey.svg.webp'
import syLogo from '../../assets/Syrian Arab republic.png'
export default function Flags() {
  return (
    <div className='mt-20 relative flex items-center justify-center gap-5'>
      <img src={black} alt="" className=' opacity-20' />
       <div className=' flex items-center z-10 absolute'>
        <img src={sy} alt="" className=' w-36 h-20 rounded-lg' />
        <img src={syLogo} alt="" className=' w-48'/>
        <img src={tur} alt="" className=' w-36 h-20 rounded-lg'/>
      </div>
      <img src={one} alt=""  className=' z-0  absolute top-0'/>
     
    </div>
  )
}
