import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Vision Card */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/10 p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  To provide qualitative and affordable education. To raise God fearing leaders.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-secondary/20 p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  To maintain high standard at all times. To always ensure that our services are not overpriced. To nurture our students in the way of the Lord. To mentor our students to occupy leadership positions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;