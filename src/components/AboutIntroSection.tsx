import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutIntroSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <Card className="p-8 md:p-12 border-0 shadow-lg">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Our God Reigns Crystal School
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Our Vision:</strong> To provide qualitative and affordable education. To raise God fearing leaders.
              </p>
              
              <p>
                <strong className="text-foreground">Our Mission:</strong> To maintain high standard at all times. To always ensure that our services are not overpriced. To nurture our students in the way of the Lord. To mentor our students to occupy leadership positions.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutIntroSection;