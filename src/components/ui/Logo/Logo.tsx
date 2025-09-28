
export default function Logo() {
  return (
      <div className=" rtl:flex-row-reverse flex justify-center gap-2.5 items-center">
        <img src="/logo.png" alt="one door company" className=" w-10 h-10" />
        <h1 className="font-copperplateBold bg-gradient-to-r from-[#722973] to-[#a43ca6] bg-clip-text text-transparent font-extrabold mt-2 leading-5 uppercase">
          One door company
        </h1>
      </div>
  )
}
