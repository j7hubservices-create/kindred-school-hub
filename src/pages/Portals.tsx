import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, GraduationCap, User } from "lucide-react";

interface Portal {
  title: string;
  description: string;
  icon: any;
  link: string;
  isInternal: boolean;
}

const Portals = () => {
  const portals = [
    {
      title: "Admin Portal",
      description: "School administration and management access",
      icon: Shield,
      link: "/admin-cms/dashboard",
      isInternal: true
    },
    {
      title: "Staff Portal", 
      description: "Teachers and staff resources",
      icon: Users,
      link: "https://ogrcs.edutams.net/",
      isInternal: false
    },
    {
      title: "Parent Portal",
      description: "Track your child's progress", 
      icon: User,
      link: "https://ogrcs.edutams.net/",
      isInternal: false
    },
    {
      title: "Student Portal",
      description: "Access learning materials and grades",
      icon: GraduationCap,
      link: "https://ogrcs.edutams.net/",
      isInternal: false
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-yellow-500 text-yellow-900 mb-6 px-4 py-2">
            School Portals
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Access School Portals</h1>
          <p className="text-xl mb-8">Quick access to our digital learning and management systems</p>
        </div>
      </section>

      {/* Portals Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portals.map((portal) => {
              const IconComponent = portal.icon;
              return (
                <Card key={portal.title} className="text-center border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <IconComponent className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-emerald-600 mb-2">{portal.title}</h3>
                    <p className="text-gray-700 mb-4">{portal.description}</p>
                    {portal.isInternal ? (
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                        onClick={() => window.location.href = portal.link}
                      >
                        Access Portal
                      </Button>
                    ) : (
                      <Button 
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full"
                        onClick={() => window.open(portal.link, '_blank')}
                      >
                        Access Portal
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portals;