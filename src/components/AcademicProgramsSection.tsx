import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Award, ArrowRight } from "lucide-react";

const AcademicProgramsSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Academic Programs 2025/2026
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Excellence in Junior & Senior Secondary Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Junior Secondary Card */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-primary/10 p-8 h-full">
                <div className="text-center mb-6">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Junior Secondary (JSS 1-3)
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive foundation in core subjects with emphasis on character development, 
                  critical thinking, and practical learning approaches that prepare students for advanced studies.
                </p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div>• Mathematics, English Language & Sciences</div>
                  <div>• Social Studies & Basic Technology</div>
                  <div>• Computer Studies & Vocational Skills</div>
                </div>
                
                <Link to="/admissions">
                  <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                    Apply for JSS
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Senior Secondary Card */}
          <Card className="border-none shadow-card hover:shadow-school transition-all duration-300 group overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-secondary/20 p-8 h-full">
                <div className="text-center mb-6">
                  <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Senior Secondary (SSS 1-3)
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Specialized education with focus on WAEC & NECO preparation, career guidance, 
                  and leadership development to prepare students for tertiary education and future success.
                </p>
                
                <div className="space-y-2 mb-6 text-sm">
                  <div>• Science, Commercial & Arts Streams</div>
                  <div>• WAEC & NECO Preparation</div>
                  <div>• Career Guidance & Counseling</div>
                </div>
                
                <Link to="/admissions">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Apply for SSS
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;