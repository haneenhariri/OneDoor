
export default function Logo() {
  return (
      <div className="rtl:flex-row-reverse flex justify-center gap-2 md:gap-2.5 items-center">
        <img src="/logo.png" alt="one door company" className="w-8 md:w-10 h-8 md:h-10" />
        <h1 className="font-copperplateBold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent font-extrabold mt-1 md:mt-2 leading-4 md:leading-5 uppercase text-sm md:text-base">
          One door company
        </h1>
      </div>
  )
}
