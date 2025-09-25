import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import principalImage from "@/assets/principal.jpg";
import chairmanImage from "@/assets/chairman.jpg";
import vicePrincipalImage from "@/assets/vice-principal.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Students", value: "500+" },
    { icon: GraduationCap, label: "Graduates", value: "1000+" },
    { icon: BookOpen, label: "Programs", value: "15+" },
    { icon: Globe, label: "Years of Excellence", value: "10+" }
  ];

  const leadership = [
    {
      name: "Principal",
      image: principalImage,
      title: "Academic Leadership"
    },
    {
      name: "Chairman",
      image: chairmanImage,
      title: "Board Leadership"
    },
    {
      name: "Vice Principal",
      image: vicePrincipalImage,
      title: "Administrative Leadership"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-2 text-lg">
            🏫 About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Excellence in Education
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            For over a decade, Our God Reigns Crystal School has been committed to providing 
            quality education that combines academic excellence with strong moral foundations.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 shadow-card hover-scale border-none bg-muted/30">
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Why Choose Our God Reigns Crystal School?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-semibold text-primary">Quality Education:</span> We provide comprehensive academic programs for both JSS and SSS levels.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-semibold text-primary">Moral Foundation:</span> Our Christian values guide every aspect of student development.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-semibold text-primary">Experienced Faculty:</span> Our dedicated teachers are committed to student success.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                <p className="text-lg">
                  <span className="font-semibold text-primary">Modern Facilities:</span> State-of-the-art learning environment with E-Note & AI integration.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link to="/admissions">
                Join Our School Family
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {leadership.map((leader, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover-scale">
                <CardContent className="p-0">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-3 text-center">
                    <h4 className="font-semibold text-primary text-sm">{leader.name}</h4>
                    <p className="text-xs text-muted-foreground">{leader.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground p-8 text-center shadow-school">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our School Family?</h3>
          <p className="text-lg mb-6 opacity-90">
            Discover how we can help your child achieve academic excellence and moral growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;