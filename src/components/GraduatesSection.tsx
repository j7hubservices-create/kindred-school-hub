import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users } from "lucide-react";
import graduateStudent from "@/assets/graduate-student.jpg";

const GraduatesSection = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: "Outstanding WAEC & NECO Performance",
      description: "Consistent excellent results in national examinations"
    },
    {
      icon: Award,
      title: "Comprehensive Academic Foundation", 
      description: "Strong preparation for higher education and careers"
    },
    {
      icon: Users,
      title: "Strong Christian Values & Character",
      description: "Graduates equipped with moral integrity and leadership skills"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Graduate Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img 
                src={graduateStudent} 
                alt="Our God Reigns Crystal School Graduate" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-school">
              <div className="text-center">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm">Graduate</div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Academic Excellence
            </Badge>
            
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Celebrating Our Graduates
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our graduates represent the pinnacle of academic excellence and moral integrity. 
              Each year, we celebrate their achievements as they transition to the next phase 
              of their educational journey, equipped with knowledge, character, and the light 
              to illuminate the world.
            </p>
            
            {/* Achievement Cards */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-none shadow-none bg-muted/30">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
            >
              View More Achievements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduatesSection;