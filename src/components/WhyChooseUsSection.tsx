import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Shield, 
  Zap,
  Clock,
  MapPin
} from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Outstanding WAEC and NECO results with consistent high performance in national examinations."
    },
    {
      icon: Users,
      title: "Qualified Teachers",
      description: "Experienced and dedicated educators committed to student success and personal development."
    },
    {
      icon: Award,
      title: "Character Building",
      description: "Christian values-based education that develops moral integrity and leadership qualities."
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Up-to-date academic programs that prepare students for higher education and career success."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure and nurturing campus where students can learn and grow without fear or distraction."
    },
    {
      icon: Zap,
      title: "Technology Integration",
      description: "Modern learning tools and digital resources to enhance educational experience."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Comprehensive programs from JSS 1 to SSS 3 with additional support for slow learners."
    },
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Easily accessible location in Ota, Ogun State with good transportation links."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Why Choose OGRCS
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the unique advantages that make Our God Reigns Crystal School 
            the preferred choice for quality education in Ogun State.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card hover:shadow-school transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Track Record</h3>
            <p className="text-lg opacity-90">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">15+</div>
              <p className="text-lg">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">500+</div>
              <p className="text-lg">Graduated Students</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-lg">WAEC Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary mb-2">30+</div>
              <p className="text-lg">Qualified Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;