import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Award, 
  Heart,
  Target,
  Globe
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed for academic success"
    },
    {
      icon: Heart,
      title: "Christian Values",
      description: "Character development rooted in Christian principles"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention for every student"
    },
    {
      icon: Award,
      title: "Qualified Teachers",
      description: "Experienced educators committed to student success"
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Nurturing academic, spiritual, and social growth"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for a connected world"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            About Us
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Our God Reigns Crystal School
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A place for academic and moral excellence - Light to the World
          </p>
        </div>
        
        {/* Admission Info */}
        <div className="text-center mb-12">
          <div className="bg-gradient-accent text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-school">
            <h3 className="text-2xl font-bold mb-2">Admission in Progress</h3>
            <p className="text-lg mb-2">into JSS & SSS Classes</p>
            <p className="text-sm opacity-90">Academic Session 2025/2026</p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-card hover:shadow-school transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mission Statement */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed">
            To provide quality education that combines academic excellence with Christian values, 
            developing well-rounded individuals who will serve as lights in their communities and 
            contribute positively to society while maintaining strong moral principles and integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;