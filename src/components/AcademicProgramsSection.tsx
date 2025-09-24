import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calculator, 
  Globe, 
  Computer, 
  Award,
  Target
} from "lucide-react";

const AcademicProgramsSection = () => {
  const jssSubjects = [
    "Mathematics, English Language & Sciences",
    "Social Studies & Basic Technology", 
    "Computer Studies & Vocational Skills",
    "Moral & Religious Education"
  ];

  const sssSubjects = [
    "Science, Commercial & Arts Streams",
    "WAEC & NECO Preparation",
    "Career Guidance & Counseling", 
    "Leadership & Character Formation"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Academic Programs 2025/2026
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Excellence in Junior & Senior Secondary Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* JSS Programs */}
          <Card className="border-primary/20 shadow-school">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Junior Secondary (JSS 1-3)</h3>
                  <Badge className="bg-secondary text-secondary-foreground mt-1">Foundation Level</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Comprehensive foundation in core subjects with emphasis on character development, 
                critical thinking, and practical learning approaches that prepare students for advanced studies.
              </p>
              
              <div className="space-y-3">
                {jssSubjects.map((subject, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 text-primary p-1 rounded">
                      <Calculator className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-muted-foreground">{subject}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* SSS Programs */}
          <Card className="border-secondary/20 shadow-school">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Senior Secondary (SSS 1-3)</h3>
                  <Badge className="bg-primary text-primary-foreground mt-1">Advanced Level</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Specialized education with focus on WAEC & NECO preparation, career guidance, 
                and leadership development to prepare students for tertiary education and future success.
              </p>
              
              <div className="space-y-3">
                {sssSubjects.map((subject, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-secondary/10 text-secondary p-1 rounded">
                      <Target className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-muted-foreground">{subject}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;