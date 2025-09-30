import image from '../../assets/aboutHero.png'
import { homeServ } from '../../data/homeServ'
import CompanyHelp from './CompanyHelp'
import WorkTogether from './WorkTogether'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <section className="relative px-6 md:px-10 overflow-hidden lg:px-17 py-16 lg:py-30">
      <img src={image} alt="" className='absolute top-130 rotate-180 -right-20 hidden lg:block'/>

      {/* Company Help Section */}
      <CompanyHelp />

      {/* Let's work together section */}
      <WorkTogether />

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {homeServ.map((e, index) => (
          <ServiceCard
            key={index}
            icone={e.icone}
            titleKey={e.titleKey}
            descKey={e.descKey}
            show={e.show}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
