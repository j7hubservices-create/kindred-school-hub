import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Target, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcademicProgramsSection = () => {
  const programs = [
    {
      level: "Junior Secondary School (JSS 1-3)",
      description: "Foundation years building strong academic fundamentals and character development",
      subjects: ["Mathematics", "English Language", "Basic Science", "Social Studies", "Christian Religious Studies", "Computer Studies"],
      icon: BookOpen,
      color: "bg-primary",
      features: ["E-Note & AI Integration", "Interactive Learning", "Character Building", "Skill Development"]
    },
    {
      level: "Senior Secondary School (SSS 1-3)",
      description: "Advanced studies preparing students for higher education and career success",
      subjects: ["Core Subjects", "Science Track", "Arts Track", "Commercial Track", "Technical Studies"],
      icon: Award,
      color: "bg-secondary",
      features: ["WAEC/NECO Preparation", "University Readiness", "Career Guidance", "Leadership Training"]
    }
  ];

  const specialFeatures = [
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal teacher-to-student ratios"
    },
    {
      icon: Target,
      title: "Exam Excellence",
      description: "Proven track record in WAEC, NECO, and JAMB examinations"
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Updated syllabus aligned with national education standards"
    },
    {
      icon: Award,
      title: "Holistic Development",
      description: "Academic, moral, and social growth for well-rounded students"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary text-primary-foreground mb-4 px-6 py-2 text-lg">
            📚 Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational programs designed to nurture academic excellence, 
            character development, and prepare students for future success.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="shadow-school hover-scale transition-all duration-300 border-none overflow-hidden">
              <CardHeader className={`${program.color} text-primary-foreground p-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-foreground/20 p-3 rounded-full">
                    <program.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{program.level}</CardTitle>
                </div>
                <p className="text-primary-foreground/90 text-lg">{program.description}</p>
              </CardHeader>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 text-lg">Key Subject Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-primary mb-3 text-lg">Special Features:</h4>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-secondary" />
                        <span className="text-card-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
                  <Link to="/admissions">Apply for {program.level.split('(')[0].trim()}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">
            What Makes Us Special
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 shadow-card hover-scale border-none bg-muted/30">
                <div className="bg-primary text-primary-foreground p-3 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero text-primary-foreground p-8 text-center shadow-school">
          <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Academic Journey?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful students who have built their future at Our God Reigns Crystal School. 
            Experience quality education with strong moral foundations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
              <Link to="/admissions">🎓 Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold">
              <Link to="/school-fees">💰 View School Fees</Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;