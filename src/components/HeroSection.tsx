import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import schoolFlyer from "@/assets/school-flyer.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-diagonal opacity-20"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-primary-foreground py-12 lg:py-20">
            <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2 font-semibold">
              Admission Open for 2025/2026 Session
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our God Reigns
              <br />
              <span className="text-secondary">Crystal School</span>
            </h1>
            
            <p className="text-xl mb-4 font-semibold">Light to the World</p>
            
            <p className="text-lg mb-8 leading-relaxed max-w-lg opacity-95">
              Where academic excellence meets Christian values. Nurturing tomorrow's leaders with 
              integrity, knowledge, and divine purpose.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">JSS & SSS</span>
                </div>
                <p className="text-sm opacity-90">Available Classes</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-secondary" />
                  <span className="font-semibold">Excellence</span>
                </div>
                <p className="text-sm opacity-90">Academic Record</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 shadow-lg"
                >
                  Apply for Admission →
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Content - School Flyer */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={schoolFlyer} 
                alt="Our God Reigns Crystal School - Admission in Progress" 
                className="rounded-2xl shadow-school w-full max-w-md lg:w-[420px] h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;