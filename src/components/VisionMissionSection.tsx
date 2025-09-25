import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Target, CheckCircle } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-secondary text-secondary-foreground mb-4 px-6 py-2 text-lg">
            🎯 Our Purpose
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Vision & Mission Statement
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that shape our educational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card className="shadow-school hover-scale transition-all duration-300 group overflow-hidden border-none">
            <CardContent className="p-0">
              <div className="bg-primary/10 p-8 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Eye className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground text-lg leading-relaxed">
                      To provide <span className="font-semibold text-primary">qualitative and affordable education</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground text-lg leading-relaxed">
                      To raise <span className="font-semibold text-primary">God fearing leaders</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="shadow-school hover-scale transition-all duration-300 group overflow-hidden border-none">
            <CardContent className="p-0">
              <div className="bg-secondary/10 p-8 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-accent text-accent-foreground p-3 rounded-full">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground text-lg leading-relaxed">
                      To maintain <span className="font-semibold text-primary">high standard at all times</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground text-lg leading-relaxed">
                      To always ensure that our <span className="font-semibold text-primary">services are not overpriced</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground text-lg leading-relaxed">
                      To nurture our students <span className="font-semibold text-primary">in the way of the Lord</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground text-lg leading-relaxed">
                      To mentor our students to <span className="font-semibold text-primary">occupy leadership positions</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;