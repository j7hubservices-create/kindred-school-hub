import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GraduatesSection from "@/components/GraduatesSection";
import AboutSection from "@/components/AboutSection";
import ProprietressSection from "@/components/ProprietressSection";
import AcademicProgramsSection from "@/components/AcademicProgramsSection";
import PortalsSection from "@/components/PortalsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <GraduatesSection />
      <AboutSection />
      <ProprietressSection />
      <AcademicProgramsSection />
      <PortalsSection />
      <CampusLifeSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
