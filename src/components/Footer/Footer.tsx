import Logo from "../ui/Logo/Logo";
import SocialLinks from "../ui/SocialLinks/SocialLinks";
import email from '../../assets/footer/email.svg'
import website from '../../assets/footer/website.svg'
import { Link } from "react-router";
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const navLinks = [
    { label: t('Home'), href: '/' },
    { label: t('Services'), href: '/services' },
    { label: t('About'), href: '/about' },
    { label: t('Contact Us'), href: '/contact' }
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">

      <div className="px-6 md:px-10 lg:px-20 py-12">
        {/* Top Section - Logo, Nav, Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo/>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-[#a43ca6] dark:hover:text-[#F07EF2] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex-shrink-0">
            <SocialLinks iconSize="sm" showBackground={true} />
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-[#722973] via-[#a43ca6] to-[#F07EF2] mb-8"></div>
        <div className=" flex lg:justify-between flex-col md:flex-row justify-center items-center">
        {/* Bottom Section - Contact Info */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 ">

          {/* Email */}
          <Link
            to={'mailto:onedoorr.info@gmail.com'}
            className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-[#a43ca6] dark:hover:text-[#F07EF2] transition-colors"
          >
            <img src={email} className="w-5 h-5" alt="Email" />
            <span>onedoorr.info@gmail.com</span>
          </Link>

          {/* Phone */}
          <Link
            to={'tel:0995550310'}
            className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-[#a43ca6] dark:hover:text-[#F07EF2] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span>0995 550 310</span>
          </Link>

          {/* Website */}
          <Link
            to={'http://www.onedoorit.com/'}
            className="flex items-center gap-2 text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-[#a43ca6] dark:hover:text-[#F07EF2] transition-colors"
          >
            <img src={website} className="w-5 h-5" alt="Website" />
            <span>www.onedoorit.com</span>
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
            {t('footerRights')}
          </p>
        </div>
        </div>

      </div>
    </footer>
  )
}
