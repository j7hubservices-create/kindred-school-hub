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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import admissionFlyer from "@/assets/admission-flyer-new.jpg";

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

      {/* 5. Admissions Section */}
      <section className="py-12 bg-gradient-accent relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">🎓 Admissions Open</h2>
              <p className="text-lg mb-6 opacity-90">2025/2026 Academic Session</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>JSS & SSS Classes Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Affordable Quality Education</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Easy Application Process</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img 
                src={admissionFlyer} 
                alt="Admission Flyer" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Gallery / Media */}
      <GallerySliderSection />

      {/* 7. Latest News & Announcements */}
      <NewsSection />

      {/* 8. School Facilities */}
      <FacilitiesSection />

      {/* 9. Contact Information */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;