import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import GraduatesSection from "@/components/GraduatesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AboutSection from "@/components/AboutSection";
import ProprietressSection from "@/components/ProprietressSection";
import AcademicProgramsSection from "@/components/AcademicProgramsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CampusLifeSection from "@/components/CampusLifeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSlider />
      <GraduatesSection />
      <VisionMissionSection />
      <AboutSection />
      <ProprietressSection />
      <AcademicProgramsSection />
      <WhyChooseUsSection />
      <CampusLifeSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
