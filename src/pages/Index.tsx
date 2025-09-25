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
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroSection />
      </section>
      
      {/* Main Content Sections */}
      <main className="space-y-0">
        {/* Achievement Highlight */}
        <section className="py-16 bg-muted/50">
          <GraduatesSection />
        </section>
        
        {/* Vision & Mission */}
        <section className="py-20 bg-background">
          <VisionMissionSection />
        </section>
        
        {/* About Section */}
        <section className="py-20 bg-muted/30">
          <AboutSection />
        </section>
        
        {/* Leadership Message */}
        <section className="py-20 bg-background">
          <ProprietressSection />
        </section>
        
        {/* Academic Programs */}
        <section className="py-20 bg-primary/5">
          <AcademicProgramsSection />
        </section>
        
        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <WhyChooseUsSection />
        </section>
        
        {/* Gallery Preview */}
        <section className="py-20 bg-muted/40">
          <GallerySliderSection />
        </section>
        
        {/* Blog/News Preview */}
        <section className="py-20 bg-background">
          <BlogPreviewSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;