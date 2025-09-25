import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutIntroSection from "@/components/AboutIntroSection";
import ProprietressWelcomeSection from "@/components/ProprietressWelcomeSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import AcademicProgramsSection from "@/components/AcademicProgramsSection";
import StudentLifeSection from "@/components/StudentLifeSection";
import AchievementsSection from "@/components/AchievementsSection";
import GallerySliderSection from "@/components/GallerySliderSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About School - Short Intro */}
      <AboutIntroSection />
      
      {/* Proprietress Welcome Address */}
      <ProprietressWelcomeSection />
      
      {/* Announcements / News */}
      <BlogPreviewSection />
      
      {/* Academics & Admissions Combined */}
      <AcademicProgramsSection />
      
      {/* Student Life / Activities */}
      <StudentLifeSection />
      
      {/* Achievements / Highlights */}
      <AchievementsSection />
      
      {/* Gallery / Campus Tour */}
      <GallerySliderSection />
      
      {/* Contact Information */}
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;