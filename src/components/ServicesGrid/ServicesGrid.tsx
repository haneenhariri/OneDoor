import ServiceCard from '../ui/Cards/ServiceCard';
import { 
  WebDesignIcon, 
  ECommerceIcon, 
  VisualIdentityIcon, 
  MobileAppIcon, 
  ProjectManagementIcon 
} from '../ui/Icons/ServiceIcons';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
    icon: <WebDesignIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    variant: 'blue' as const
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
    icon: <VisualIdentityIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    variant: 'dark' as const
  },
  {
    id: 3,
    title: 'Visual Identity',
    description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
    icon: <VisualIdentityIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    variant: 'black' as const
  },
  {
    id: 4,
    title: 'E-Commerce',
    description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
    icon: <ECommerceIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    variant: 'purple' as const
  },
  {
    id: 5,
    title: 'Mobile Applications',
    description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
    icon: <MobileAppIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    variant: 'blue' as const
  },
  {
    id: 6,
    title: 'Digital Project Management',
    description: 'help you to build website company that is modern, user friendly, good CEO, and Clean design',
    icon: <ProjectManagementIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />,
    variant: 'dark' as const
  }
];

export default function ServicesGrid() {
  return (
    <section className="mt-12 relative">
      {/* Decorative Hexagon Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Hexagons */}
        <div className="absolute top-10 right-10 opacity-10">
          <svg width="80" height="80" viewBox="0 0 100 100" className="text-purple-500">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute top-20 right-32 opacity-15">
          <svg width="60" height="60" viewBox="0 0 100 100" className="text-pink-500">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Bottom Left Hexagons */}
        <div className="absolute bottom-10 left-10 opacity-10">
          <svg width="70" height="70" viewBox="0 0 100 100" className="text-purple-600">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-24 opacity-15">
          <svg width="50" height="50" viewBox="0 0 100 100" className="text-pink-400">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Services Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto relative z-10">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            variant={service.variant}
            className="min-h-[300px] lg:min-h-[340px] transform hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
}
