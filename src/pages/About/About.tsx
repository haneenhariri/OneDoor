import AboutUs from "../../components/About/AboutUs";
import Partnerships from "../../components/Partnerships/Partnerships";
import SubHero from "../../components/SubHero/SubHero";
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section  className="py-28">
      <SubHero title={t('aboutUsTitle')} p={t('aboutUsSubtitle')}/>
      <AboutUs/>
      <Partnerships/>
    </section>
  )
}
