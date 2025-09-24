import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Award, 
  Shield, 
  DollarSign,
  Target
} from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Consistent outstanding performance in WAEC, NECO, and other examinations with national recognition."
    },
    {
      icon: Award,
      title: "Character Development",
      description: "Strong emphasis on moral values, discipline, and Christian character formation in all students."
    },
    {
      icon: Users,
      title: "Qualified Teachers",
      description: "Experienced and dedicated teaching staff committed to nurturing each student's potential."
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description: "Quality education at affordable rates."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure and nurturing environment."
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Comprehensive approach to education."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose Our God Reigns Crystal School
          </h2>
          <p className="text-xl text-muted-foreground">
            Excellence in education with Christian values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card hover:shadow-school transition-all duration-300 group text-center"
            >
              <CardContent className="p-8">
                <div className={`
                  ${index === 0 ? 'bg-primary/10' : ''}
                  ${index === 1 ? 'bg-secondary/10' : ''}
                  ${index === 2 ? 'bg-primary/10' : ''}
                  ${index === 3 ? 'bg-secondary/10' : ''}
                  ${index === 4 ? 'bg-primary/10' : ''}
                  ${index === 5 ? 'bg-secondary/10' : ''}
                  w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300
                `}>
                  <feature.icon className={`h-8 w-8 ${
                    index % 2 === 0 ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;