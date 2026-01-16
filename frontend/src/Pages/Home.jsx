import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import WhyUsSection from "../components/landing/WhyUsSection";
import AboutTherapist from "../components/landing/AboutTherapist";
import ServicesSection from "../components/landing/ServicesSection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <AboutTherapist />
      <ServicesSection />
      <Footer />
    </>
  );
}
export default Home;
