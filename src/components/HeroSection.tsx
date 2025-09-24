import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Trophy } from "lucide-react";
import admissionFlyer from "@/assets/admission-flyer.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] bg-gradient-hero overflow-hidden">
      {/* Diagonal Background Pattern */}
      <div className="absolute inset-0 bg-gradient-diagonal opacity-20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <div className="text-primary-foreground py-12 lg:py-20">
            <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2">
              Admission Open for 2025/2026 Session
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our God Reigns
              <br />
              <span className="text-secondary">Crystal School</span>
            </h1>
            
            <p className="text-xl mb-4 font-semibold">Light to the World</p>
            
            <p className="text-lg mb-8 leading-relaxed max-w-md">
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
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
              >
                Apply for Admission →
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right Content - Admission Flyer */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={admissionFlyer} 
                alt="Our God Reigns Crystal School - Admission in Progress" 
                className="rounded-lg shadow-school w-full max-w-md lg:w-[400px] h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;