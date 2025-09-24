import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, Heart } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Our Foundation
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Vision, Mission & Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on Christian principles and academic excellence, we are committed to developing well-rounded individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                To be a leading educational institution that produces academically excellent, 
                morally upright, and spiritually grounded individuals who will be light to the world.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              
              <p className="text-muted-foreground leading-relaxed">
                To provide quality education in a conducive Christian environment, 
                nurturing students to achieve academic excellence and develop strong moral character.
              </p>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Core Values</h3>
              
              <div className="text-muted-foreground leading-relaxed">
                <div className="mb-2"><strong>Faith:</strong> Christian principles guide our education</div>
                <div className="mb-2"><strong>Excellence:</strong> Pursuing the highest standards</div>
                <div className="mb-2"><strong>Integrity:</strong> Honesty and moral uprightness</div>
                <div><strong>Service:</strong> Contributing positively to society</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;