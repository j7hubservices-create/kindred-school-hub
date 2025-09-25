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
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
      <section className="py-20 bg-gradient-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Admissions Open</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our school family and experience quality education in a conducive learning environment
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">JSS & SSS Classes</h3>
              <p className="text-sm opacity-90">All levels available</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Affordable Fees</h3>
              <p className="text-sm opacity-90">Quality education at reasonable cost</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2">Easy Application</h3>
              <p className="text-sm opacity-90">Simple admission process</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold">
            <Link to="/admissions">Apply for Admission</Link>
          </Button>
        </div>
      </section>

      {/* 6. Gallery / Media */}
      <GallerySliderSection />

      {/* 7. School Facilities */}
      <FacilitiesSection />

      {/* 8. Contact Information */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Index;