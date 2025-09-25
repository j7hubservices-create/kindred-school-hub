import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Users, 
  User, 
  GraduationCap,
  ArrowRight
} from "lucide-react";

const PortalsSection = () => {
  const portals = [
    {
      title: "Admin Portal",
      description: "School administration and management access",
      icon: Settings,
      color: "primary",
      link: "https://ogrcs.edutams.net/"
    },
    {
      title: "Staff Portal", 
      description: "Teachers and staff resources",
      icon: Users,
      color: "secondary",
      link: "https://ogrcs.edutams.net/"
    },
    {
      title: "Parent Portal",
      description: "Track your child's progress", 
      icon: User,
      color: "accent",
      link: "https://ogrcs.edutams.net/"
    },
    {
      title: "Student Portal",
      description: "Access learning materials and grades",
      icon: GraduationCap,
      color: "primary",
      link: "https://ogrcs.edutams.net/"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Access School Portals
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Quick access to our digital learning and management systems
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portals.map((portal, index) => (
            <a key={index} href={portal.link} target="_blank" rel="noopener noreferrer">
              <Card 
                className="border-none shadow-card hover:shadow-school transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className={`
                    ${portal.color === 'primary' ? 'bg-primary text-primary-foreground' : ''}
                    ${portal.color === 'secondary' ? 'bg-secondary text-secondary-foreground' : ''}
                    ${portal.color === 'accent' ? 'bg-accent text-accent-foreground' : ''}
                    w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300
                  `}>
                    <portal.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {portal.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Access your portal
                  </p>
                  
                  <p className="text-xs text-muted-foreground mb-6">
                    {portal.description}
                  </p>
                  
                  <Button 
                    className={`
                      w-full group-hover:translate-x-1 transition-transform duration-300
                      ${portal.color === 'primary' ? 'bg-primary hover:bg-primary-dark text-primary-foreground' : ''}
                      ${portal.color === 'secondary' ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' : ''}
                      ${portal.color === 'accent' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}
                    `}
                  >
                    Access Portal
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortalsSection;