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
import AwardCelebrationModal from "@/components/AwardCelebrationModal";

const Index = () => {
  const handleCelebrate = () => {
    // Navigate to blog post or news section
    const newsSection = document.getElementById('news-section');
    if (newsSection) {
      newsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/15">
      <AwardCelebrationModal onCelebrate={handleCelebrate} />
      <Header />
      <Navigation />
      
      {/* Main Container */}
      <div className="container mx-auto px-4 max-w-7xl">
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
        <NewsSection id="news-section" />

        {/* 7. School Facilities */}
        <FacilitiesSection />

        {/* 8. Contact Information */}
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Index;