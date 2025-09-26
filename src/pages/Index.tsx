import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import HeroSection from "@/components/HeroSection";
import ProprietressWelcomeSection from "@/components/ProprietressWelcomeSection";
import AboutSection from "@/components/AboutSection";
import AcademicProgramsSection from "@/components/AcademicProgramsSection";
import GallerySliderSection from "@/components/GallerySliderSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ContactSection from "@/components/ContactSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* 1. Hero Banner / Welcome Section */}
      <HeroSection />

      {/* 2. Message from the Proprietor / Head Teacher */}
      <ProprietressWelcomeSection />

      {/* 3. About the School */}
      <AboutSection />

      {/* 4. Academics / Programs Offered */}
      <AcademicProgramsSection />

      {/* 5. Gallery / Media */}
      <GallerySliderSection />

      {/* 6. Latest News & Announcements */}
      <NewsSection />

      {/* 7. School Facilities */}
      <FacilitiesSection />

      {/* 8. Contact Information */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;