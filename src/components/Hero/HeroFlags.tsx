import syriaFlag from "../../assets/flags/images (1).png";
import SyLogo from "../../assets/flags/syLogo.png";
import turkeyFlag from "../../assets/flags/Flag_of_Turkey.svg.webp";

export default function HeroFlags() {
  return (
    <div className='flex gap-2 md:gap-3 items-center mb-4'>
      <img src={syriaFlag} alt="Syria Flag" className='rounded-sm w-12 md:w-15 h-auto'/>
      <img src={SyLogo} alt="Syria Logo" className='w-24 md:w-30 h-auto'/>
      <img src={turkeyFlag} alt="Turkey Flag" className='rounded-sm w-12 md:w-15 h-auto' />
    </div>
  );
}

