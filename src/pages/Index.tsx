import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GraduatesSection from "@/components/GraduatesSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import AboutSection from "@/components/AboutSection";
import ProprietressSection from "@/components/ProprietressSection";
import AcademicProgramsSection from "@/components/AcademicProgramsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import GallerySliderSection from "@/components/GallerySliderSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <HeroSection />
      <GraduatesSection />
      <VisionMissionSection />
      <AboutSection />
      <ProprietressSection />
      <AcademicProgramsSection />
      <WhyChooseUsSection />
      <GallerySliderSection />
      <BlogPreviewSection />
      <Footer />
    </div>
  );
};

export default Index;
