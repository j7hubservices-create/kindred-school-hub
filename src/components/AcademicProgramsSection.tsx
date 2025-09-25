import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react";

const AcademicProgramsSection = () => {
  const programs = [
    {
      level: "Junior Secondary School (JSS 1-3)",
      description: "Strong foundation in core subjects with emphasis on critical thinking and character development",
      subjects: ["Mathematics", "English Language", "Sciences", "Social Studies", "Creative Arts"],
      icon: BookOpen,
    },
    {
      level: "Senior Secondary School (SSS 1-3)", 
      description: "Comprehensive preparation for WAEC, NECO, and university entrance examinations",
      subjects: ["Science Track", "Commercial Track", "Arts Track"],
      icon: GraduationCap,
    }
  ];

  const features = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Maximum 25 students per class for personalized attention"
    },
    {
      icon: Award,
      title: "Qualified Teachers",
      description: "Experienced educators committed to excellence"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academics & Admissions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed to prepare students for success in academics and life
          </p>
        </div>

        {/* Academic Programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{program.level}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Key Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Admission Highlight */}
        <div className="text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
              🚀 ADMISSION NOW OPEN
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Join Us?</h3>
            <p className="text-muted-foreground mb-6">
              Secure your child's future with quality education. Admission is now open for JSS & SSS classes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/admissions">
                  🎓 Apply Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;