import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import heroFlyer from "@/assets/hero-flyer.jpg";
import schoolLogo from "@/assets/school-logo-new.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 text-left">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-primary-foreground">
                Welcome to
              </h2>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-accent">
                Our God Reigns<br />
                Crystal School
              </h1>
              
              <div className="text-xl md:text-2xl lg:text-3xl font-bold italic text-accent">
                "...a place for academic and moral excellence"
              </div>
              
              <div className="text-lg md:text-xl lg:text-2xl font-semibold text-primary-foreground">
                Light to the World
              </div>
              
              <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
                Providing qualitative and affordable education while raising God-fearing leaders for tomorrow.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 md:pt-8">
              <Button 
                asChild 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 touch-manipulation"
              >
                <Link to="/admissions">Apply for Admission</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 touch-manipulation"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md lg:max-w-lg relative">
            <div className="relative">
              <img 
                src={heroFlyer} 
                alt="Our God Reigns Crystal School - Admission in Progress" 
                className="w-full h-auto rounded-xl md:rounded-2xl shadow-school hover-scale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;