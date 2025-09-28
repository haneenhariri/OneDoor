import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant: 'blue' | 'dark' | 'purple' | 'black';
  className?: string;
}

export default function ServiceCard({ title, description, icon, variant, className = '' }: ServiceCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'blue':
        return 'bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#5B5FFF] text-white shadow-lg shadow-blue-500/25';
      case 'dark':
        return 'bg-gradient-to-br from-[#434343] via-[#2D2D2D] to-[#1A1A1A] text-white shadow-lg shadow-gray-900/25';
      case 'purple':
        return 'bg-gradient-to-br from-[#EE05F2] via-[#A43CA6] to-[#722973] text-white shadow-lg shadow-purple-500/25';
      case 'black':
        return 'bg-gradient-to-br from-[#2C2C2C] via-[#1A1A1A] to-[#000000] text-white shadow-lg shadow-black/25';
      default:
        return 'bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#5B5FFF] text-white shadow-lg shadow-blue-500/25';
    }
  };

  return (
    <div className={`
      ${getVariantStyles()}
      rounded-3xl p-6 lg:p-8
      relative overflow-hidden
      transition-all duration-500
      hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
      group cursor-pointer
      border border-white/10
      backdrop-blur-sm
      ${className}
    `}>
      {/* Hexagonal Background decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-15 transform translate-x-4 -translate-y-4">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      <div className="absolute top-8 right-8 w-12 h-12 opacity-20 transform translate-x-2 -translate-y-2">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="3"/>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16 opacity-15 transform -translate-x-2 translate-y-2">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hexagonal Icon Container */}
        <div className="mb-6 relative w-14 h-14 lg:w-18 lg:h-18 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-white/30">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" stroke="white" strokeWidth="2"/>
          </svg>
          <div className="relative z-10 flex items-center justify-center">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm lg:text-base opacity-90 mb-8 flex-grow leading-relaxed text-white/80">
          {description}
        </p>

        {/* Call to action with hexagonal accent */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm lg:text-base font-semibold group-hover:translate-x-2 transition-all duration-300">
            <span className="underline decoration-2 underline-offset-4">Start with us</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Small decorative hexagon */}
          <div className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white">
              <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
