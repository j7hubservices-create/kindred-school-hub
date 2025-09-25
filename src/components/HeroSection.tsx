import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import heroFlyer from "@/assets/hero-flyer.jpg";
import schoolLogo from "@/assets/school-logo-new.jpeg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-diagonal opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <Badge className="bg-secondary text-secondary-foreground px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg font-bold inline-flex">
              🚀 ADMISSION IN PROGRESS - JSS & SSS CLASSES
            </Badge>
            
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Our God Reigns<br />
                <span className="text-secondary">Crystal School</span>
              </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-secondary">
                Light to the World
              </div>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                ...a place for academic and moral excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-secondary mx-auto mb-2" />
                <div className="text-secondary font-bold text-xs md:text-sm">QUALITY</div>
                <div className="text-primary-foreground text-xs">Education</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-secondary mx-auto mb-2" />
                <div className="text-secondary font-bold text-xs md:text-sm">CARING</div>
                <div className="text-primary-foreground text-xs">Teachers</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-secondary mx-auto mb-2" />
                <div className="text-secondary font-bold text-xs md:text-sm">MODERN</div>
                <div className="text-primary-foreground text-xs">Curriculum</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg md:rounded-xl p-3 md:p-4 text-center">
                <Award className="h-6 w-6 md:h-8 md:w-8 text-secondary mx-auto mb-2" />
                <div className="text-secondary font-bold text-xs md:text-sm">PROVEN</div>
                <div className="text-primary-foreground text-xs">Results</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 md:pt-8">
              <Button 
                asChild 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 touch-manipulation"
              >
                <Link to="/admissions">🎓 Apply for Admission</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-base md:text-lg px-6 md:px-8 py-3 md:py-4 touch-manipulation"
              >
                <Link to="/about">📚 Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md lg:max-w-lg relative order-first lg:order-last">
            <div className="relative">
              <img 
                src={heroFlyer} 
                alt="Our God Reigns Crystal School - Admission in Progress"
                className="w-full h-auto rounded-xl md:rounded-2xl shadow-school hover-scale"
              />
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-secondary text-secondary-foreground rounded-full p-2 md:p-4 shadow-school">
                <img 
                  src={schoolLogo} 
                  alt="School Logo" 
                  className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;