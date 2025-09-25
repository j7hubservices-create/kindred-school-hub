import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award } from "lucide-react";

// Import leadership images
import proprietressImage from "@/assets/proprietress.jpg";
import principalImage from "@/assets/principal.jpg";
import vicePrincipalImage from "@/assets/vice-principal.jpg";
import chairmanImage from "@/assets/chairman.jpg";

const Leadership = () => {
  const leadershipTeam = [
    {
      name: "Pastor (Mrs) Kehinde Adetuberu",
      position: "Proprietress",
      image: proprietressImage,
      bio: "Visionary leader dedicated to providing quality Christian education and nurturing young minds for excellence.",
      qualifications: ["M.Ed in Educational Management", "B.A in English Language", "Ordained Minister"],
      contact: { email: "proprietress@ogrc.edu.ng", phone: "08027625129" }
    },
    {
      name: "Dr. Adebayo Johnson",
      position: "Principal",
      image: principalImage,
      bio: "Experienced educator with over 20 years in academic leadership, committed to academic excellence and character development.",
      qualifications: ["Ph.D in Educational Leadership", "M.Sc in Mathematics", "B.Ed in Mathematics"],
      contact: { email: "principal@ogrc.edu.ng", phone: "08033089735" }
    },
    {
      name: "Mrs. Folake Adeyemi",
      position: "Vice Principal (Academics)",
      image: vicePrincipalImage,
      bio: "Passionate about curriculum development and academic innovation, ensuring students receive world-class education.",
      qualifications: ["M.Ed in Curriculum Studies", "B.Sc in Chemistry", "PGDE"],
      contact: { email: "vp.academics@ogrc.edu.ng", phone: "08045123456" }
    },
    {
      name: "Chief Samuel Okoye",
      position: "Chairman, Board of Trustees",
      image: chairmanImage,
      bio: "Distinguished businessman and philanthropist with a heart for education and youth development.",
      qualifications: ["MBA in Business Administration", "B.Sc in Economics", "Fellow, Nigerian Institute of Management"],
      contact: { email: "chairman@ogrc.edu.ng", phone: "08067891234" }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-secondary text-secondary-foreground mb-6 px-6 py-3 text-lg font-bold">
            👥 Leadership Team
          </Badge>
          <h1 className="text-5xl font-bold mb-4">Meet Our Leaders</h1>
          <p className="text-xl mb-4">Dedicated professionals committed to excellence in education</p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {leadershipTeam.map((leader, index) => (
              <Card key={index} className="shadow-card hover-scale border-primary/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-5 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`lg:col-span-2 bg-primary/5 p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="text-center">
                        <div className="relative inline-block">
                          <img 
                            src={leader.image} 
                            alt={leader.name} 
                            className="w-48 h-48 rounded-full shadow-school mx-auto object-cover"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-secondary text-secondary-foreground rounded-full p-3">
                            <Award className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="mt-6">
                          <h3 className="text-2xl font-bold text-primary mb-2">
                            {leader.name}
                          </h3>
                          <Badge className="bg-accent text-accent-foreground font-bold mb-4">
                            {leader.position}
                          </Badge>
                          
                          <div className="space-y-2 mt-4">
                            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                              <Mail className="h-4 w-4" />
                              <span>{leader.contact.email}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span>{leader.contact.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`lg:col-span-3 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-bold text-primary mb-3">About</h4>
                          <p className="text-card-foreground leading-relaxed">
                            {leader.bio}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-primary mb-3">Qualifications</h4>
                          <div className="space-y-2">
                            {leader.qualifications.map((qual, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                                <p className="text-card-foreground">{qual}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Leadership;