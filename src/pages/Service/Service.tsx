import ServSections from "../../components/ServSections/ServSections";
import SubHero from "../../components/SubHero/SubHero";
import { useTranslation } from 'react-i18next'
import { dpmData, ecomData, servData, softwareData } from "../../data/serv";

export default function Service() {
  const { t } = useTranslation()

  return (
    <section className=" py-28">
      <SubHero title={t('ourServicesTitle')} p={t('ourServicesSubtitle')}/>
      <ServSections data={servData} include={t('designInclude')}  title={t('designTitle')} p={t('designDesc')}/>
      <ServSections data={ecomData}  include={t('Our e-commerce services include:')}  title={t('E-Commerce')} p={t('Our team specializes in creating comprehensive e-commerce experiences that combine outstanding performance with appealing design to meet user needs and boost conversion rates. We believe that a successful online store goes beyond aesthetics—it encompasses ease of use, fast performance, and a smooth, enjoyable user experience.')}/>
      <ServSections data={softwareData}  include={t('Our software development services include:')}  title={t('Software Development')} p={t('Our team specializes in developing innovative and efficient software solutions tailored to your business needs. We believe that successful software goes beyond coding—it includes smart solutions, high performance, and scalability to ensure the sustainability of your digital projects.')}/>
      <ServSections data={dpmData}  include={t('Our digital project management services include:')}  title={t('Digital Project Management')} p={t('We manage your digital projects efficiently from planning to execution, ensuring timely delivery and strategic goal achievement. We believe successful project management requires precise organization, continuous monitoring, and effective coordination across all teams.')}/>
    </section>
  )
}
