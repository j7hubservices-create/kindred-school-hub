import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import admissionFlyer from "@/assets/admission-flyer-new.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-semibold">
              Admission Open for 2025/2026 Session
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Our God Reigns<br />
              <span className="text-yellow-400">Crystal School</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-semibold text-yellow-100">
              Light to the World
            </div>
            
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl">
              Where academic excellence meets Christian values. Nurturing tomorrow's leaders with 
              integrity, knowledge, and divine purpose.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex-1">
                <div className="text-yellow-400 font-semibold text-sm mb-1">JSS & SSS</div>
                <div className="text-white">Available Classes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 flex-1">
                <div className="text-yellow-400 font-semibold text-sm mb-1">Excellence</div>
                <div className="text-white">Academic Record</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link to="/admissions">Apply for Admission</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-800">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 max-w-md">
            <img 
              src={admissionFlyer} 
              alt="Our God Reigns Crystal School - Admission in Progress"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;