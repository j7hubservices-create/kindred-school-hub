import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, GraduationCap, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import graduands from "@/assets/graduands.jpg";
import schoolFlyer from "@/assets/school-flyer.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: graduands,
      title: "Our God Reigns Crystal School",
      subtitle: "Light to the World",
      description: "Where academic excellence meets Christian values. Nurturing tomorrow's leaders with integrity, knowledge, and divine purpose.",
      badge: "Admission Open for 2025/2026 Session",
      primaryAction: "Apply for Admission",
      secondaryAction: "Learn More"
    },
    {
      image: gallery1,
      title: "Academic Excellence",
      subtitle: "Building Future Leaders",
      description: "Comprehensive education from JSS 1 to SSS 3 with outstanding WAEC and NECO examination results.",
      badge: "Academic Achievement",
      primaryAction: "View Programs",
      secondaryAction: "Our Results"
    },
    {
      image: gallery2,
      title: "Modern Facilities",
      subtitle: "State-of-the-Art Learning Environment",
      description: "Well-equipped classrooms, science laboratories, computer lab, library, and recreational facilities.",
      badge: "World-Class Infrastructure",
      primaryAction: "Tour Campus",
      secondaryAction: "View Facilities"
    },
    {
      image: gallery3,
      title: "Holistic Development",
      subtitle: "Character & Academic Growth",
      description: "We develop well-rounded students through academics, sports, arts, and spiritual growth programs.",
      badge: "Complete Education",
      primaryAction: "Join Us Today",
      secondaryAction: "Our Approach"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-[700px] overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full min-h-[700px] flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Content */}
                <div className="text-white py-12">
                  <Badge className="bg-secondary text-secondary-foreground mb-6 px-4 py-2 font-semibold animate-fade-in">
                    {slide.badge}
                  </Badge>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight animate-fade-in">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl mb-4 font-semibold text-secondary animate-fade-in">
                    {slide.subtitle}
                  </p>
                  
                  <p className="text-lg mb-8 leading-relaxed max-w-lg opacity-95 animate-fade-in">
                    {slide.description}
                  </p>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-scale-in">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="h-5 w-5 text-secondary" />
                        <span className="font-semibold">JSS & SSS</span>
                      </div>
                      <p className="text-sm opacity-90">Available Classes</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-scale-in">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="h-5 w-5 text-secondary" />
                        <span className="font-semibold">Excellence</span>
                      </div>
                      <p className="text-sm opacity-90">Academic Record</p>
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                    <Link to="/admissions">
                      <Button 
                        size="lg" 
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 shadow-lg hover-scale"
                      >
                        {slide.primaryAction} →
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 hover-scale"
                      >
                        {slide.secondaryAction}
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {/* Right Content - Featured Image (shown on first slide) */}
                {index === 0 && (
                  <div className="hidden lg:flex justify-center lg:justify-end">
                    <div className="relative animate-scale-in">
                      <img 
                        src={schoolFlyer} 
                        alt="Our God Reigns Crystal School - Admission in Progress" 
                        className="rounded-2xl shadow-school w-full max-w-md lg:w-[420px] h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-20 hover-scale"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 z-20 hover-scale"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-secondary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
    </section>
  );
};

export default HeroSlider;