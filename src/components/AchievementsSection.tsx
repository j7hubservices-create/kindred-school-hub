import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Trophy, Medal, Award, Star, ArrowRight } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Outstanding WAEC and NECO results with 100% pass rates",
      year: "2024"
    },
    {
      icon: Medal,
      title: "Inter-School Competition",
      description: "First place in regional quiz competition",
      year: "2024"
    },
    {
      icon: Award,
      title: "Sports Championship",
      description: "Winners of local schools football tournament",
      year: "2023"
    },
    {
      icon: Star,
      title: "Community Recognition",
      description: "Best Private School Award - Local Government Area",
      year: "2023"
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Achievements & Recognition
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Excellence is not just our goal - it's our proven track record
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/20 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <Badge variant="secondary" className="mb-2">
                    {achievement.year}
                  </Badge>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/achievements">
              View All Achievements & Results
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;