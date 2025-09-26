import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star, GraduationCap, Users } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      category: "Academic Excellence",
      title: "Outstanding WAEC Results 2024",
      description: "100% pass rate with 85% of students scoring credits in 5 subjects including English and Mathematics",
      year: "2024",
      type: "Academic"
    },
    {
      icon: Medal,
      category: "Competition Success",
      title: "Regional Quiz Competition Champions",
      description: "First place in the Ekiti State Secondary Schools Quiz Competition",
      year: "2024",
      type: "Competition"
    },
    {
      icon: GraduationCap,
      category: "NECO Excellence",
      title: "Perfect NECO Performance",
      description: "100% pass rate in NECO examinations with distinction grades",
      year: "2024",
      type: "Academic"
    },
    {
      icon: Award,
      category: "Sports Achievement",
      title: "Football Tournament Winners",
      description: "Champions of the Local Government Area Inter-School Football Competition",
      year: "2023",
      type: "Sports"
    },
    {
      icon: Star,
      category: "Community Recognition",
      title: "Best Private School Award",
      description: "Awarded Best Private School by the Local Government Education Board",
      year: "2023",
      type: "Recognition"
    },
    {
      icon: Users,
      category: "Student Leadership",
      title: "Model UN Participation",
      description: "Outstanding performance at the State Model United Nations Conference",
      year: "2023",
      type: "Leadership"
    }
  ];

  const statistics = [
    { value: "100%", label: "WAEC Pass Rate", sublabel: "2024 Results" },
    { value: "85%", label: "Credit Passes", sublabel: "5+ Subjects" },
    { value: "15+", label: "Awards Won", sublabel: "Last 3 Years" },
    { value: "98%", label: "University Admission", sublabel: "Graduate Success" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Achievements & Results
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A proven track record of excellence in academics, sports, and character development
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground font-semibold text-sm">
                    {stat.label}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {stat.sublabel}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Notable Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence recognized across academics, sports, and community service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/20 rounded-full">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <Badge variant="outline">{achievement.year}</Badge>
                        <div className="text-xs text-muted-foreground mt-1">
                          {achievement.type}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {achievement.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Results Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recent Examination Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Outstanding performance in national examinations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">WAEC Results 2024</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Overall Pass Rate:</span>
                  <span className="text-2xl font-bold text-green-600">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Credit Passes (5+ subjects):</span>
                  <span className="text-xl font-semibold text-blue-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Distinction Grades:</span>
                  <span className="text-xl font-semibold text-purple-600">45%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">NECO Results 2024</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Overall Pass Rate:</span>
                  <span className="text-2xl font-bold text-green-600">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">A & B Grades:</span>
                  <span className="text-xl font-semibold text-blue-600">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Excellence Awards:</span>
                  <span className="text-xl font-semibold text-purple-600">12</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;