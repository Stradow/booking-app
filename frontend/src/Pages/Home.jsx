import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import WhyUsSection from "../components/landing/WhyUsSection";
import ServicesSection from "../components/landing/ServicesSection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
export default Home;
