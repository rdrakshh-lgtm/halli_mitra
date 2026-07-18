import "../styles/Landing.css";
import LandingNavbar from "../components/LandingNavbar";
import Hero from "../components/Hero";
import DashboardPreview from "../components/DashboardPreview";
import Footer from "../components/Footer";
import TrustedSection from "../components/TrustedSection";
import AIPreview from "../components/AIPreview";
import HowItWorks from "../components/HowItWorks";


const Home = () => {
  return (
<>
    <LandingNavbar />

    <Hero />

    <DashboardPreview />

    <TrustedSection />

    

    <HowItWorks />

    <Footer />
</>
  );
};

export default Home;