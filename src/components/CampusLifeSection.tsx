import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight } from "lucide-react";
import galleryImage from "@/assets/gallery-image.jpg";

const CampusLifeSection = () => {
  const features = [
    {
      title: "Academic Excellence",
      description: "Consistent outstanding performance in WAEC, NECO, and other examinations with national recognition."
    },
    {
      title: "Character Development", 
      description: "Strong emphasis on moral values, discipline, and Christian character formation in all students."
    },
    {
      title: "Qualified Teachers",
      description: "Experienced and dedicated teaching staff committed to nurturing each student's potential."
    },
    {
      title: "Affordable Fees",
      description: "Quality education at affordable rates, making excellent education accessible to all families."
    },
    {
      title: "Safe Environment",
      description: "Secure and nurturing environment where students can learn and grow without fear."
    },
    {
      title: "Holistic Development", 
      description: "Comprehensive approach to education covering academics, sports, arts, and spiritual growth."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Why Choose Our God Reigns Crystal School
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Excellence in education with Christian values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-card hover:shadow-school transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Campus Life & Gallery */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Badge className="bg-secondary text-secondary-foreground mb-4">
              Campus Life & Gallery
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Discover life at Our God Reigns Crystal School
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img 
                src={galleryImage} 
                alt="Campus Life at Our God Reigns Crystal School" 
                className="w-full rounded-2xl shadow-school"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Image 1 of 18</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Experience the vibrant campus life at Our God Reigns Crystal School where learning 
                goes beyond the classroom. Our students engage in various activities that develop 
                their talents, build character, and create lasting memories.
              </p>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
              >
                View Full Gallery
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;