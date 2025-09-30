import wa from '../../../assets/footer/wa.svg'
import linkedIn from '../../../assets/footer/linkedin.svg'
import insta from '../../../assets/footer/instagram (1).svg'
import face from '../../../assets/footer/facebook.svg'

interface SocialLinksProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg';
  showBackground?: boolean;
}

export default function SocialLinks({ 
  className = '', 
  iconSize = 'md',
  showBackground = false 
}: SocialLinksProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const socialLinks = [
    { href: 'https://wa.me/963995550310', icon: wa, alt: 'WhatsApp' },
    { href: 'https://www.instagram.com/onedoor_company', icon: linkedIn, alt: 'LinkedIn' },
    { href: 'https://www.instagram.com/onedoor_company', icon: insta, alt: 'Instagram' },
    { href: 'https://www.facebook.com/profile.php?id=61572301930088&mibextid=wwXIfr&rdid=GSP0YYgJnrfvqvbP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16xgHADrDs%2F%3Fmibextid%3DwwXIfr#', icon: face, alt: 'Facebook' }
  ];

  return (
    <div className={`flex gap-3 items-center ${className}`}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`${sizeClasses[iconSize]} ${
            showBackground 
              ? 'bg-gradient-to-r from-[#722973] to-[#a43ca6] p-2.5' 
              : ''
          } rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}
          aria-label={link.alt}
        >
          <img 
            src={link.icon} 
            alt={link.alt} 
            className={`${iconSizeClasses[iconSize]} ${showBackground ? 'brightness-0 invert' : ''}`}
          />
        </a>
      ))}
    </div>
  );
}

