import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Monitor, 
  Beaker, 
  Trophy,
  Wifi,
  Shield,
  Users,
  Camera,
  Bus,
  Home,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

// Import facility images
import libraryImage from "@/assets/gallery-1.jpg";
import ictLabImage from "@/assets/gallery-2.jpg";
import scienceLabImage from "@/assets/gallery-3.jpg";
import sportsImage from "@/assets/gallery-4.jpg";
import securityImage from "@/assets/gallery-5.jpg";
import digitalLearningImage from "@/assets/gallery-6.jpg";
import classroomImage from "@/assets/gallery-students-1.jpg";
import adminImage from "@/assets/school-flyer-main.jpg";

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Well-Stocked Library",
      description: "Comprehensive collection of textbooks, reference materials, and digital resources for all subjects",
      features: ["Over 5,000 books", "Study areas", "Research materials", "Digital resources"],
      image: libraryImage
    },
    {
      icon: Monitor,
      title: "ICT Laboratory",
      description: "Modern computer lab with high-speed internet for digital literacy and technology education",
      features: ["30+ computers", "High-speed internet", "Software training", "E-learning tools"],
      image: ictLabImage
    },
    {
      icon: Beaker,
      title: "Science Laboratories",
      description: "Fully equipped physics, chemistry, and biology labs for practical experiments and research",
      features: ["Modern equipment", "Safety protocols", "Practical sessions", "Research projects"],
      image: scienceLabImage
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Spacious field and courts for various sports activities and physical education programs",
      features: ["Football field", "Basketball court", "Athletics track", "Sports equipment"],
      image: sportsImage
    },
    {
      icon: Shield,
      title: "Security System",
      description: "24/7 security with CCTV surveillance and trained security personnel ensuring student safety",
      features: ["CCTV monitoring", "Security guards", "Controlled access", "Emergency protocols"],
      image: securityImage
    },
    {
      icon: Wifi,
      title: "Digital Learning",
      description: "Wi-Fi enabled campus supporting digital learning and E-Note educational system",
      features: ["Campus-wide Wi-Fi", "E-Note system", "Digital curriculum", "Online resources"],
      image: digitalLearningImage
    },
    {
      icon: Users,
      title: "Modern Classrooms",
      description: "Spacious, well-ventilated classrooms equipped with modern teaching aids and furniture",
      features: ["Interactive boards", "Comfortable seating", "Good ventilation", "Natural lighting"],
      image: classroomImage
    },
    {
      icon: Home,
      title: "Administrative Block",
      description: "Well-organized administrative offices for efficient school management and student services",
      features: ["Principal's office", "Staff room", "Records office", "Reception area"],
      image: adminImage
    }
  ];

  const highlights = [
    { number: "30+", label: "Modern Classrooms", icon: Users },
    { number: "3", label: "Science Labs", icon: Beaker },
    { number: "24/7", label: "Security Coverage", icon: Shield },
    { number: "5000+", label: "Library Books", icon: BookOpen }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-4 px-6 py-2 text-lg">
            🏫 Our Campus
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            School Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art facilities designed to create an optimal learning environment for our students
          </p>
        </div>

        {/* Facility Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center p-6 shadow-card hover-scale transition-all duration-200 border-none">
              <highlight.icon className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">{highlight.number}</div>
              <div className="text-sm text-muted-foreground">{highlight.label}</div>
            </Card>
          ))}
        </div>

        {/* Detailed Facilities List */}
        <div className="space-y-12 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-2xl shadow-school">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <facility.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary">{facility.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {facility.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                      <ArrowRight className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Tour CTA */}
        <Card className="bg-gradient-hero text-white p-12 shadow-school relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/95"></div>
          <div className="relative z-10 text-center">
            <Camera className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h3 className="text-3xl font-bold mb-4">Experience Our Campus</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a visit to see our world-class facilities and meet our dedicated teaching staff
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
                <Link to="/contact">Schedule Campus Tour</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8">
                <Link to="/gallery">View Photo Gallery</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FacilitiesSection;