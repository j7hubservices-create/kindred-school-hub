import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  GraduationCap,
  Trophy,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const UpcomingEventsSection = () => {
  const events = [
    {
      icon: GraduationCap,
      title: "Parent-Teacher Conference",
      date: "March 25, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "School Hall",
      description: "Meet with teachers to discuss your child's academic progress and development.",
      category: "Academic",
      priority: "high" as const
    },
    {
      icon: Trophy,
      title: "Inter-House Sports Competition",
      date: "April 2, 2025",
      time: "8:00 AM - 4:00 PM",
      location: "School Field",
      description: "Annual sports competition between all house groups featuring various athletic events.",
      category: "Sports",
      priority: "medium" as const
    },
    {
      icon: BookOpen,
      title: "Science Exhibition",
      date: "April 10, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Science Laboratory",
      description: "Students showcase innovative science projects and experiments to parents and visitors.",
      category: "Academic",
      priority: "medium" as const
    },
    {
      icon: Users,
      title: "Cultural Day Celebration",
      date: "April 18, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "School Auditorium",
      description: "Celebration of Nigerian cultural heritage with traditional dances, music, and attire.",
      category: "Cultural",
      priority: "high" as const
    },
    {
      icon: Calendar,
      title: "Mid-Term Break",
      date: "April 25 - May 5, 2025",
      time: "All Day",
      location: "Home",
      description: "Mid-term break for rest and family time. Classes resume on May 6th, 2025.",
      category: "Holiday",
      priority: "low" as const
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-primary text-primary-foreground';
      case 'medium': return 'bg-accent text-accent-foreground';
      case 'low': return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-2 text-lg">
            📅 Important Dates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Upcoming Events & Calendar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mark your calendar for these important school events and activities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={index} className="shadow-school hover-scale transition-all duration-300 border-none overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary">{event.title}</h3>
                      <Badge className={getPriorityColor(event.priority)}>
                        {event.category}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span className="text-sm font-medium">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-secondary" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Calendar Overview */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Quick Calendar Overview</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Upcoming Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2</div>
                <div className="text-sm text-muted-foreground">High Priority</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Days to Next Event</div>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="font-semibold">
            <Link to="/contact">
              Subscribe to Calendar Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;