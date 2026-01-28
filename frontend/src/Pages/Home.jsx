import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import AboutTherapist from "../components/landing/AboutTherapist";
import ServicesSection from "../components/landing/ServicesSection";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <AboutTherapist />
      <ServicesSection />
      <Footer />
    </>
  );
}
export default Home;
