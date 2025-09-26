import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Microscope,
  Palette,
  Calculator,
  Globe,
  Music,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const AcademicProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Junior Secondary School",
      subtitle: "JSS 1 - JSS 3",
      description: "Foundation years focusing on comprehensive basic education and character development",
      features: ["Core subjects", "Basic computer literacy", "Character formation", "Study skills development"]
    },
    {
      icon: Calculator,
      title: "Senior Secondary School",
      subtitle: "SSS 1 - SSS 3",
      description: "Advanced education preparing students for WAEC, NECO and university admission",
      features: ["Science streams", "Art streams", "Commercial streams", "WAEC/NECO preparation"]
    }
  ];

  const specialPrograms = [
    { icon: Microscope, title: "STEM Education", description: "Science, Technology, Engineering & Mathematics" },
    { icon: Palette, title: "Creative Arts", description: "Visual arts, drama, and creative expression" },
    { icon: Music, title: "Music & Cultural", description: "Traditional and modern music programs" },
    { icon: Trophy, title: "Sports & Athletics", description: "Physical education and competitive sports" },
    { icon: Globe, title: "Language Studies", description: "English proficiency and local languages" },
    { icon: Users, title: "Leadership Training", description: "Student council and leadership development" }
  ];

  return (
    <section className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-4 px-6 py-2 text-lg">
            🎓 Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Programs Offered
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational programs designed to develop intellectual, moral, and spiritual excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-gold hover-scale transition-all duration-300 border-none bg-card/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <program.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">{program.title}</h3>
                    <p className="text-accent font-medium">{program.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcademicProgramsSection;