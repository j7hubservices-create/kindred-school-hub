import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Users, Trophy, BookOpen, Palette, Heart } from "lucide-react";

const StudentLifeSection = () => {
  const activities = [
    {
      icon: Music,
      title: "Cultural Activities",
      description: "Choir, drama, traditional dance, and cultural celebrations"
    },
    {
      icon: Trophy,
      title: "Sports & Games",
      description: "Football, athletics, basketball, and inter-house competitions"
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Drawing, painting, handicrafts, and creative workshops"
    },
    {
      icon: BookOpen,
      title: "Academic Clubs",
      description: "Debate society, quiz competitions, and subject-specific clubs"
    },
    {
      icon: Users,
      title: "Leadership Programs",
      description: "Student council, prefect system, and leadership training"
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Social impact projects and community outreach programs"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Student Life & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond academics, we provide a rich environment for holistic development through diverse extracurricular activities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Badge variant="outline" className="text-lg px-6 py-3">
            Building Character • Developing Talents • Creating Leaders
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;