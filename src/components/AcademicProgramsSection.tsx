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
    <section className="py-20 bg-background">
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
            <Card key={index} className="shadow-school hover-scale transition-all duration-300 border-none">
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

        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Special Programs & Activities</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond academics, we offer diverse programs to nurture every aspect of student development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrograms.map((program, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover-scale transition-all duration-200 border-none">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <program.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-primary mb-2">{program.title}</h4>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-hero text-white p-12 shadow-school relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/95"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Enroll Your Child?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Give your child the foundation for academic success and character development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8">
                  <Link to="/admissions">Apply for Admission</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8">
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;