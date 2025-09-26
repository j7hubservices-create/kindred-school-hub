import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";
import schoolFlyer from "@/assets/school-flyer-main.jpg";
import schoolLogo from "@/assets/school-logo-new.jpeg";
import studentsBackground from "@/assets/students-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${studentsBackground})` }}
      ></div>
      {/* Green Transparent Overlay */}
      <div className="absolute inset-0 bg-primary/60"></div>
      <div className="absolute inset-0 bg-gradient-diagonal opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 text-primary-foreground">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Left Content - More Compact */}
          <div className="lg:col-span-3 space-y-4 md:space-y-6 text-center lg:text-left">
            <Badge className="bg-secondary text-secondary-foreground px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-bold inline-flex">
              🚀 ADMISSION OPEN 2025/2026
            </Badge>
            
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Our God Reigns<br />
                <span className="text-secondary">Crystal School</span>
              </h1>
              
              <div className="text-base sm:text-lg md:text-xl font-bold text-secondary">
                Light to the World
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 max-w-xl leading-relaxed mx-auto lg:mx-0">
                ...a place for academic and moral excellence
              </p>
            </div>
            
            {/* Compact Feature Cards */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 pt-3 md:pt-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-2 md:p-3 text-center">
                <GraduationCap className="h-4 w-4 md:h-5 md:w-5 text-secondary mx-auto mb-1" />
                <div className="text-secondary font-bold text-xs">QUALITY</div>
                <div className="text-primary-foreground text-xs opacity-80">Education</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-2 md:p-3 text-center">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-secondary mx-auto mb-1" />
                <div className="text-secondary font-bold text-xs">CARING</div>
                <div className="text-primary-foreground text-xs opacity-80">Teachers</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-4 md:pt-6">
              <Button 
                asChild 
                size="sm"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                <Link to="/admissions">🎓 Apply Now</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="sm"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
              >
                <Link to="/about">📚 Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Right Image - Creative Layout */}
          <div className="lg:col-span-2 relative order-first lg:order-last">
            <div className="relative max-w-sm mx-auto lg:max-w-full">
              {/* Creative floating background shapes */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-pulse delay-75"></div>
              
              <div className="relative group">
                <img 
                  src={schoolFlyer} 
                  alt="Our God Reigns Crystal School - Green Flyer"
                  className="w-full h-auto rounded-xl md:rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Floating logo badge */}
                <div className="absolute -top-3 -right-3 bg-white text-primary rounded-full p-2 md:p-3 shadow-xl ring-4 ring-secondary/30">
                  <img 
                    src={schoolLogo} 
                    alt="School Logo" 
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full"
                  />
                </div>
                
                {/* Admission badge */}
                <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  2025/2026 Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;