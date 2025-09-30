import ContactHero from "../../components/ContactHero/ContactHero";
import Map from "../../components/ContactHero/Map";
import FAQ from "../../components/FAQ/FAQ";

export default function Contact() {
  return (
    <section className="pt-28">
      <ContactHero/>
      <FAQ/>
      
      {/* Map Section - Full Width */}
      <div className="w-full">
        <Map/>
      </div>
    </section>
  )
}
