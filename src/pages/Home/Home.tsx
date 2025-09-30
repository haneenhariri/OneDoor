import Hero from "../../components/Hero/Hero";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FAQ from "../../components/FAQ/FAQ";
import CallToAction from "../../components/CallToAction/CallToAction";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ServicesSection/>
      <FAQ/>
      <CallToAction/>
    </div>
  )
}
