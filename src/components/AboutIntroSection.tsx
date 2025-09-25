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
                <strong className="text-foreground">Our Mission:</strong> To provide quality education that nurtures academic excellence, character development, and spiritual growth in a safe, supportive environment where every child can discover and develop their unique God-given potential.
              </p>
              
              <p>
                <strong className="text-foreground">Our Vision:</strong> To be a beacon of educational excellence that produces well-rounded individuals who are academically sound, morally upright, and spiritually grounded to become positive change agents in society.
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