import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, GraduationCap, User } from "lucide-react";
import portalsHero from "@/assets/portals-hero.jpg";

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
      link: "/admin-cms",
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
      
      <PageHero
        title="Access School Portals"
        subtitle="Quick access to our digital learning and management systems"
        description="Secure portals for administrators, staff, parents, and students"
        badge="🔐 School Portals"
        backgroundImage={portalsHero}
      />

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