import Logo from "../ui/Logo/Logo";
import wa from '../../assets/footer/wa.svg'
import linkedIn from '../../assets/footer/linkedin.svg'
import insta from '../../assets/footer/instagram (1).svg'
import face from '../../assets/footer/facebook.svg'
import email from '../../assets/footer/email.svg'
import website from '../../assets/footer/website.svg'
import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className=" px-17 relative overflow-hidden  border-t pt-20">
      <div className=" flex justify-between ">
        <div className=" w-4/12 flex flex-col justify-start items-start">
          <Logo/>
          <p className=" w-3/4 text-base  mt-6">With us, every road leads you to your digital success!</p>
        </div>
        <div className=" flex w-1/2 justify-between">
          <div className=" w-4/12 flex flex-col justify-start items-start">
            <h2 className=" text-lg mb-6 font-medium">Services</h2>
            <ul>
              <li className=" text-base mb-4 ">Web Design</li>
              <li className=" text-base mb-4 ">E-Commerce</li>
              <li className=" text-base mb-4 ">Visual Identity</li>
              <li className=" text-base mb-4 ">Mobile Applications</li>
              <li className=" text-base mb-4 ">Digital Project Management</li>
            </ul>
          </div>
          <div className=" w-4/12 flex flex-col justify-start items-start">
            <h2 className=" text-lg mb-6 font-medium">Contact Us</h2>
            <ul>
              <li className=" flex gap-2 font-medium items-center text-base mb-4 "> <img src={email} className=" w-5 h-5" alt="" /> 
              <Link to={'mailto:onedoorr.info@gmail.com'}>onedoorr.info@gmail.com</Link></li>
              <li className="flex gap-2 font-medium items-center text-base mb-4 "><Link to={'telto:+963-XXX-XXX '}></Link>+963-XXX-XXX</li>
              <li className=" flex gap-2 font-medium items-center text-base mb-4 "><img src={website} className=" w-5 h-5" alt="" /> <Link to={'http://www.onedoorit.com/'}>www.onedoorit.com</Link></li>
            </ul>
          </div>
        </div>

      </div>
      <div className="mt-20 mb-7 flex justify-between  items-center">
        <p className=" text-sm">© 2025 OneDoor Company. All Rights Reserved.</p>
        <div className=" flex gap-3 items-center">
          <img className=" w-5" src={wa} alt="" />
          <img className=" w-5" src={linkedIn} alt="" />
          <img className=" w-5" src={insta} alt="" />
          <img className=" w-5" src={face} alt="" />
        </div>
      </div>
    </footer>
  )
}
