import { Outlet } from "react-router";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <NavBar/>
      <main>
          <Outlet/>
      </main>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}
