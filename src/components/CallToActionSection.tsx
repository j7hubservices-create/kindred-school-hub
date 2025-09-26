import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Phone, 
  Calendar,
  ArrowRight,
  Star,
  Users,
  Trophy,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import schoolFlyer from "@/assets/school-flyer-main.jpg";

const CallToActionSection = () => {
  const features = [
    { 
      icon: BookOpen, 
      title: "JSS & SSS", 
      subtitle: "Available Classes",
      color: "bg-white/20"
    },
    { 
      icon: Trophy, 
      title: "Excellence", 
      subtitle: "Academic Record",
      color: "bg-emerald-500/20"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-white/20 rotate-12 animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/20 rotate-45 animate-pulse delay-150"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Admission Badge */}
            <Badge className="bg-amber-500 hover:bg-amber-600 text-amber-900 px-6 py-2 text-sm font-bold inline-flex items-center gap-2 animate-fade-in">
              <GraduationCap className="h-4 w-4" />
              Admission Open for 2025/2026 Session
            </Badge>
            
            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in">
                Our God Reigns<br />
                <span className="text-amber-400">Crystal School</span>
              </h2>
              <p className="text-lg md:text-xl font-semibold text-emerald-200 animate-fade-in">
                Light to the World
              </p>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-xl animate-fade-in">
              Where academic excellence meets Christian values. Nurturing tomorrow's leaders with integrity, knowledge, and divine purpose.
            </p>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
              {features.map((feature, index) => (
                <Card key={index} className={`${feature.color} backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-300`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-8 w-8 text-amber-400 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-sm md:text-base">{feature.title}</h3>
                        <p className="text-xs md:text-sm text-white/80">{feature.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-amber-900 font-bold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/admissions" className="flex items-center gap-2">
                  Apply for Admission
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold px-6 py-3">
                <Link to="/contact" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Visit
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right Flyer Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative max-w-md mx-auto lg:max-w-full">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/30 rounded-full animate-pulse delay-75"></div>
              
              <div className="relative group">
                <img 
                  src={schoolFlyer} 
                  alt="Our God Reigns Crystal School - Admission Flyer 2025/2026"
                  className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 animate-fade-in"
                />
                
                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-fade-in">
                  2025/2026
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Contact Cards - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 animate-fade-in">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-300">
            <CardContent className="p-4 text-center">
              <Phone className="h-5 w-5 mx-auto mb-2 text-amber-400" />
              <h3 className="font-bold mb-1 text-sm">Call Us</h3>
              <div className="space-y-0.5 text-xs">
                <a href="tel:08027625129" className="block hover:text-amber-300 transition-colors">08027625129</a>
                <a href="tel:08033089735" className="block hover:text-amber-300 transition-colors">08033089735</a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-300">
            <CardContent className="p-4 text-center">
              <Calendar className="h-5 w-5 mx-auto mb-2 text-amber-400" />
              <h3 className="font-bold mb-1 text-sm">Visit Campus</h3>
              <p className="text-xs">23, Bolanle Awosika Street<br />Ojuore Ota</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover-scale transition-all duration-300">
            <CardContent className="p-4 text-center">
              <GraduationCap className="h-5 w-5 mx-auto mb-2 text-amber-400" />
              <h3 className="font-bold mb-1 text-sm">Quick Apply</h3>
              <Button asChild size="sm" className="bg-amber-500 hover:bg-amber-600 text-amber-900 text-xs px-3 py-1 mt-1">
                <Link to="/admissions">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;