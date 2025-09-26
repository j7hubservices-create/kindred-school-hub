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
import facilitiesImage from "@/assets/school-facilities.jpg";

const FacilitiesSection = () => {
  const facilities = [
    { icon: BookOpen, title: "Well-Stocked Library", description: "Over 5,000 books and digital resources" },
    { icon: Monitor, title: "ICT Laboratory", description: "30+ computers with high-speed internet" },
    { icon: Beaker, title: "Science Laboratories", description: "Physics, Chemistry & Biology labs" },
    { icon: Trophy, title: "Sports Facilities", description: "Football field, basketball court & athletics track" },
    { icon: Shield, title: "24/7 Security System", description: "CCTV monitoring and trained security personnel" },
    { icon: Wifi, title: "Digital Learning", description: "Campus-wide Wi-Fi and E-Note system" },
    { icon: Users, title: "Modern Classrooms", description: "30+ spacious, well-ventilated classrooms" },
    { icon: Home, title: "Administrative Block", description: "Organized offices for efficient management" }
  ];

  return (
    <section className="py-12 bg-gradient-to-bl from-secondary/15 via-primary/10 to-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-diagonal opacity-25"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <Badge className="bg-primary text-primary-foreground mb-3 px-4 py-2 shadow-glow">
            🏫 Our Campus
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            School Facilities
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Facilities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                  <facility.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-sm">{facility.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Single Facilities Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={facilitiesImage} 
                alt="School Facilities"
                className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-8">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link to="/contact">Schedule Campus Tour</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;